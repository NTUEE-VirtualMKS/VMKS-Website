import { DisposableMaterial, User } from "@prisma/client";
import { prisma } from "../../prisma/client.ts";
import type { LogInInput } from "../types/types.ts";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { env } from "../../utils/env.ts";
import { pubsub } from "../PubSub/pubsub.ts";
const Query = {
  AllAnnouncements: async (_parents, _args, _context) => {
    const announcements = await prisma.announcement.findMany({
      orderBy: {
        id: "desc",
      },
    });
    return announcements;
  },

  AllTools: async (_parents, _args, _context) => {
    const tools = await prisma.tool.findMany({
      orderBy: {
        usage: "desc",
      },
    });
    return tools;
  },

  GetToolById: async (_parents, args: { id: number }, _context) => {
    const id = args.id;
    const tool = await prisma.tool.findUnique({
      where: {
        id: id,
      },
    });
    return tool;
  },

  SearchToolsByCategory: async (
    _parents,
    args: { category: string },
    _context,
  ) => {
    const category = args.category;
    const searchToolsByCategory = await prisma.tool.findMany({
      where: {
        category: {
          startsWith: category,
        },
      },
      orderBy: {
        usage: "desc",
      },
    });

    return searchToolsByCategory;
  },

  SearchToolsByPosition: async (
    _parents,
    args: { position: string },
    _context,
  ) => {
    const position = args.position;
    const searchToolsByPosition = await prisma.tool.findMany({
      where: {
        position: position,
      },
      orderBy: {
        usage: "desc",
      },
    });

    return searchToolsByPosition;
  },

  SearchToolsByName: async (_parents, args: { name: string }, _context) => {
    if (args.name === "") {
      const allTools = await prisma.tool.findMany({
        orderBy: {
          usage: "desc",
        },
      });
      return allTools;
    }

    const input = args.name;
    // const inputLen = input.length;
    const searchToolByName = await prisma.tool.findMany({
      where: {
        name: {
          contains: input,
          mode: 'insensitive',
        },
      },
    });

    // const len = searchToolByName.length;
    // let position = [];
    // let counter = [];
    // for (var i = 0; i < 30; i++) {
    //   counter.push(0);
    // }
    // let max = 0;

    // for (var i = 0; i < len; i++) {
    //   for (var j = 0; j < searchToolByName[i].name.length - inputLen + 1; j++) {
    //     if (input === searchToolByName[i].name.substring(j, j + inputLen)) {
    //       position[i] = j;
    //       counter[j] += 1;
    //       if (j > max) {
    //         max = j;
    //       }
    //     }
    //   }
    // }

    // let orderedTool = [];
    // for (var i = 1; i <= max; i++) {
    //   counter[i] = counter[i] + counter[i - 1];
    // }
    // for (var i = 0; i < len; i++) {
    //   orderedTool[counter[position[i]] - 1] = searchToolByName[i];
    //   counter[position[i]]--;
    // }
    return searchToolByName;
  },

  AllDisposableMaterials: async (_parents, _args, _context) => {
    const materials = await prisma.disposableMaterial.findMany({
      orderBy: {
        usage: "desc",
      },
    });
    return materials;
  },

  SearchDisposableMaterialsByCategory: async (
    _parent,
    args: { category: string },
    _context,
  ) => {
    const category = args.category;
    const searchDisposableMaterialsByCategory =
      await prisma.disposableMaterial.findMany({
        where: {
          category: {
            startsWith: category,
          },
        },
        orderBy: {
          usage: "desc",
        },
      });
    return searchDisposableMaterialsByCategory;
  },

  SearchDisposableMaterialsByPosition: async (
    _parent,
    args: { position: string },
    _context,
  ) => {
    const position = args.position;
    const searchDisposableMaterialsByPosition =
      await prisma.disposableMaterial.findMany({
        where: {
          position: {
            startsWith: position,
          },
        },
        orderBy: {
          usage: "desc",
        },
      });
    return searchDisposableMaterialsByPosition;
  },

  SearchDisposableMaterialsByName: async (
    _parent,
    args: { name: string },
    _context,
  ) => {
    const _name = args.name;
    const searchDisposableMaterialsByName =
      await prisma.disposableMaterial.findMany({
        where: {
          name: {
            contains: _name,
          },
        },
        orderBy: {
          usage: "desc",
        },
      });
    if (searchDisposableMaterialsByName.length === 0)
      return searchDisposableMaterialsByName;
    let pos: number[] = []; // pos is used to store the position of the _name in each string
    let pi: number[] = []; // KMP
    let posCount: number[] = []; // used in counting sort
    let maxPos = -1; // used in counting sort
    pi[0] = 0;
    let k = 0;
    for (let i = 1; i < _name.length; i++) {
      while (k > 0 && _name[k] !== _name[i]) {
        k = pi[k - 1];
      }
      if (_name[k] == _name[i]) {
        k += 1;
      }
      pi[i] = k;
    }
    for (let i = 0; i < searchDisposableMaterialsByName.length; i++) {
      const disposableMaterialName = searchDisposableMaterialsByName[i].name;
      k = 0;
      for (let j = 0; j < disposableMaterialName.length; j++) {
        while (k > 0 && _name[k] !== disposableMaterialName[j]) {
          k = pi[k - 1];
        }
        if (_name[k] === disposableMaterialName[j]) {
          k += 1;
        }
        if (k === _name.length) {
          pos[i] = j - k + 1;
          if (pos[i] > maxPos) {
            for (let l = maxPos + 1; l <= pos[i]; l++) {
              posCount[l] = 0;
            }
            maxPos = pos[i];
          }
          posCount[pos[i]] += 1;
          break;
        }
      }
    }
    //Counting sort
    for (let i = 1; i <= maxPos; i++) {
      posCount[i] += posCount[i - 1];
    }
    let orderedSearchDisposableMaterialsByName: DisposableMaterial[] = [];
    for (let i = 0; i < searchDisposableMaterialsByName.length; i++) {
      posCount[pos[i]] -= 1;
      orderedSearchDisposableMaterialsByName[posCount[pos[i]]] =
        searchDisposableMaterialsByName[i];
    }
    return orderedSearchDisposableMaterialsByName;
  },

  AllMachines: async (_parents, _args, _context) => {
    const machines = await prisma.machine.findMany({
      orderBy: {
        usage: "desc",
      },
    });
    return machines;
  },

  SearchMachinesByCategory: async (
    _parents,
    args: { category: string },
    _context,
  ) => {
    const category = args.category;
    const searchMachinesByCategory = await prisma.machine.findMany({
      where: {
        category: {
          startsWith: category,
        },
      },
      orderBy: {
        usage: "desc",
      },
    });
    return searchMachinesByCategory;
  },

  SearchMachinesByPosition: async (
    _parents,
    args: { position: string },
    _context,
  ) => {
    const position = args.position;
    const searchMachinesByPosition = await prisma.machine.findMany({
      where: {
        position: position,
      },
      orderBy: {
        usage: "desc",
      },
    });
    return searchMachinesByPosition;
  },

  AllMaterials: async (_parents, _args, _context) => {
    const materials = await prisma.material.findMany({
      orderBy: {
        usage: "desc",
      },
    });
    return materials;
  },

  GetMaterialById: async (_parents, args: { id: number }, _context) => {
    const id = args.id;
    const material = await prisma.material.findUnique({
      where: {
        id: id,
      },
    });
    return material;
  },

  SearchMaterialsByCategory: async (
    _parents,
    args: { category: string },
    _context,
  ) => {
    const category = args.category;
    const searchMaterialsByCategory = await prisma.material.findMany({
      where: {
        category: {
          startsWith: category,
        },
      },
      orderBy: {
        usage: "desc",
      },
    });

    return searchMaterialsByCategory;
  },

  SearchMaterialsByPosition: async (
    _parents,
    args: { position: string },
    _context,
  ) => {
    const position = args.position;
    const searchMaterialsByPosition = await prisma.material.findMany({
      where: {
        position: position,
      },
      orderBy: {
        usage: "desc",
      },
    });

    return searchMaterialsByPosition;
  },

  SearchMaterialByName: async (_parents, args: { name: string }, _context) => {
    const input = args.name;
    // const inputLen = input.length;
    const searchMaterialByName = await prisma.material.findMany({
      where: {
        name: {
          contains: input,
          mode: 'insensitive',
        },
      },
      orderBy: {
        usage: "desc",
      },
    });

    // const len = searchMaterialByName.length;
    // let position = [];
    // let counter = [];
    // for (var i = 0; i < 30; i++) {
    //   counter.push(0);
    // }
    // let max = 0;

    // for (var i = 0; i < len; i++) {
    //   for (
    //     var j = 0;
    //     j < searchMaterialByName[i].name.length - inputLen + 1;
    //     j++
    //   ) {
    //     if (input === searchMaterialByName[i].name.substring(j, j + inputLen)) {
    //       position[i] = j;
    //       counter[j] += 1;
    //       if (j > max) {
    //         max = j;
    //       }
    //     }
    //   }
    // }

    // let orderedMaterial = [];
    // for (var i = 1; i <= max; i++) {
    //   counter[i] = counter[i] + counter[i - 1];
    // }
    // for (var i = 0; i < len; i++) {
    //   orderedMaterial[counter[position[i]] - 1] = searchMaterialByName[i];
    //   counter[position[i]]--;
    // }
    return searchMaterialByName;
  },

  AllThreeDP: async () => {
    const threeDP = await prisma.threeDP.findMany({
      orderBy: {
        usage: "desc",
      },
    });
    return threeDP;
  },

  SearchThreeDPByCategory: async (
    _parents,
    args: { category: string },
    _context,
  ) => {
    const category = args.category;
    const FindThreeDPByCategory = await prisma.threeDP.findMany({
      where: {
        category: {
          startsWith: category,
        },
      },
      orderBy: {
        usage: "desc",
      },
    });
    return FindThreeDPByCategory;
  },

  SearchThreeDPByPosition: async (
    _parents,
    args: { position: string },
    _context,
  ) => {
    const position = args.position;
    const searchThreeDPByPosition = await prisma.threeDP.findMany({
      where: {
        position: position,
      },
      orderBy: {
        usage: "desc",
      },
    });

    return searchThreeDPByPosition;
  },

  AllUser: async () => {
    const users = await prisma.user.findMany();
    return users;
  },

  SearchUserByName: async (_parent, args: { name: string }, _context) => {
    const _name = args.name;
    const searchUserByName = await prisma.user.findMany({
      where: {
        name: {
          contains: _name,
        },
      },
      orderBy: {
        id: "desc",
      },
    });
    if (searchUserByName.length === 0) return searchUserByName;
    let pos: number[] = []; // pos is used to store the position of the _name in each string
    let pi: number[] = []; // KMP
    let posCount: number[] = []; // used in counting sort
    let maxPos = -1; // used in counting sort
    pi[0] = 0;
    let k = 0;
    for (let i = 1; i < _name.length; i++) {
      while (k > 0 && _name[k] !== _name[i]) {
        k = pi[k - 1];
      }
      if (_name[k] == _name[i]) {
        k += 1;
      }
      pi[i] = k;
    }
    for (let i = 0; i < searchUserByName.length; i++) {
      const userName = searchUserByName[i].name;
      k = 0;
      for (let j = 0; j < userName.length; j++) {
        while (k > 0 && _name[k] !== userName[j]) {
          k = pi[k - 1];
        }
        if (_name[k] === userName[j]) {
          k += 1;
        }
        if (k === _name.length) {
          pos[i] = j - k + 1;
          if (pos[i] > maxPos) {
            for (let l = maxPos + 1; l <= pos[i]; l++) {
              posCount[l] = 0;
            }
            maxPos = pos[i];
          }
          posCount[pos[i]] += 1;
          break;
        }
      }
    }
    //Counting sort
    for (let i = 1; i <= maxPos; i++) {
      posCount[i] += posCount[i - 1];
    }
    let orderedSearchUserByName: User[] = [];
    for (let i = 0; i < searchUserByName.length; i++) {
      posCount[pos[i]] -= 1;
      orderedSearchUserByName[posCount[pos[i]]] = searchUserByName[i];
    }
    return orderedSearchUserByName;
  },

  GetUserByStudentID: async (
    _parents,
    args: { studentID: string },
    _context,
  ) => {
    const studentID = args.studentID;
    const user = await prisma.user.findUnique({
      where: {
        studentID: studentID,
      },
    });
    return user;
  },

  AllUserMaterials: async () => {
    const UserMaterials = await prisma.userMaterial.findMany({
      orderBy: [
        {
          borrowerId: "asc",
        },
        {
          borrowNum: "desc",
        },
      ],
    });
    return UserMaterials;
  },

  AllArticles: async () => {
    const articles = await prisma.article.findMany({
      orderBy: {
        id: "desc",
      },
    });
    return articles;
  },

  SearchMachineByName: async (_parents, args: { input: string }, _context) => {
    const input = args.input;
    const inputLength = args.input.length;

    const ordered = Array(20);
    for (let i = 0; i < ordered.length; i++) {
      ordered[i] = [];
    }

    const machine = await prisma.machine.findMany({
      where: {
        name: {
          contains: input,
        },
      },
    });

    for (let obj of machine) {
      for (let i = 0; i < obj.name.length - inputLength + 1; i++) {
        if (obj.name.substring(i, i + inputLength) === input) {
          ordered[i].push(obj);
        }
      }
    }

    // console.log(ordered.filter((args) => {return args.length !== 0}).flat());
    return ordered
      .filter((args) => {
        return args.length !== 0;
      })
      .flat(); //making the returning array an array of machines without any empty arrays
  },

  CurrentIntroduction: async () => {
    const introductions = await prisma.introduction.findMany({
      orderBy: {
        updatedAt: "desc",
      },
    });
    if (!introductions[0]) throw new Error("No introduction found");
    return introductions[0];
  },

  GetAuthorizedCode: async () => {
    const authorizedCode = await prisma.authorizedCode.findFirst({});
    if (!authorizedCode) throw new Error("No introduction found");
    else return authorizedCode;
  },

  LogIn: async (_parents, args: { logInInput: LogInInput }, _context) => {
    const { studentID, password } = args.logInInput;
    const user = await prisma.user.findUnique({
      where: {
        studentID: studentID,
      },
    });
    if (!user) throw new Error("StudentID not found");

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) throw new Error("Invalid password");
    else {
      const token = jwt.sign(
        {
          id: user.id,
          name: user.name,
          studentID: user.studentID,
          photoLink: user.photoLink,
          threeDPId: user.threeDPId,
          laserCutAvailable: user.laserCutAvailable,
          borrowHistoryId: user.borrowHistoryId,
          isAdmin: user.isAdmin,
          isMinister: user.isMinister,
        },
        env.JWT_SECRET,
        {
          expiresIn: env.JWT_EXPIRES_IN,
        },
      );
      pubsub.publish("USER_LOGGEDIN", { UserLoggedIn: user });
      return { user: user, token: token };
    }
  },

  GetToolLikes: async () => {
    const toolLikes = await prisma.toolLike.findMany({
      orderBy: {
        id: "desc",
      },
    });
    return toolLikes;
  },

  GetToolLikeById: async (_parents, args: { id: number }, _context) => {
    const id = args.id;
    const toolLike = await prisma.toolLike.findUnique({
      where: {
        id: id,
      },
    });
    return toolLike;
  },

  GetLikedToolsByUserId: async (
    _parents,
    args: { userId: number },
    _context,
  ) => {
    const userId = args.userId;

    // Find the user by ID
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      // Include tool likes if it's a relation field
      include: {
        toolLikes: true,
      },
    });

    // Throw an error if the user is not found
    if (!user) throw new Error("User not found");

    const toolLikes = user.toolLikes;

    const likedTools = toolLikes.map(async (toolLike) => {
      return await prisma.tool.findUnique({
        where: {
          id: toolLike.toolId,
        },
      });
    });

    return likedTools;
  },
};

export { Query };
