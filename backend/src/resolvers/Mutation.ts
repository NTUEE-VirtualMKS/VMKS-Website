import { prisma } from "../../prisma/client.ts";
import { pubsub } from "../PubSub/pubsub.ts";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { env } from "../../utils/env.ts";

import {
  AnnouncementInput,
  ToolInput,
  ToolUsageUpdateInput,
  DisposableMaterialInput,
  DisposableMaterialUsageUpdateInput,
  MachineInput,
  MaterialInput,
  MaterialUsageUpdateInput,
  ThreeDPInput,
  UserInput,
  UserEditInput,
  UserMachineUpdateInput,
  ArticleInput,
  IntroductionInput,
  AuthorizedCodeInput,
  SignUpInput,
  ToolLikeInput,
} from "../types/types.ts";

const Mutation = {
  AddAnnouncement: async (
    _parents,
    args: { announcementInput: AnnouncementInput },
    _context,
  ) => {
    const { title, content } = args.announcementInput;
    const date = new Date().toLocaleString();
    const newAnnouncement = await prisma.announcement.create({
      data: {
        title: title,
        date: date,
        content: content,
      },
    });
    pubsub.publish("ANNOUNCEMENT_CREATED", {
      AnnouncementCreated: newAnnouncement,
    });
    return newAnnouncement;
  },

  DeleteAnnouncement: async (_parents, args: { id: number }, _context) => {
    const id = args.id;
    const findAnnouncement = await prisma.announcement.findFirst({
      where: {
        id: id,
      },
    });
    if (!findAnnouncement) {
      throw new Error("announcement not found!");
    }

    const deleteAnnouncement = await prisma.announcement.delete({
      where: {
        id: id,
      },
    });
    pubsub.publish("ANNOUNCEMENT_DELETED", {
      AnnouncementDeleted: deleteAnnouncement,
    });
    return deleteAnnouncement;
  },

  EditAnnouncement: async (
    _parents,
    args: { id: number; announcementInput: AnnouncementInput },
    _context,
  ) => {
    const id = args.id;
    const { title, content } = args.announcementInput;
    const findAnnouncement = await prisma.announcement.findFirst({
      where: {
        id: id,
      },
    });
    if (!findAnnouncement) {
      throw new Error("announcement not found!");
    }

    const editAnnouncement = await prisma.announcement.update({
      where: {
        id: id,
      },
      data: {
        title: title,
        content: content,
      },
    });
    pubsub.publish("ANNOUNCEMENT_UPDATED", {
      AnnouncementUpdated: editAnnouncement,
    });
    return editAnnouncement;
  },

  AddTool: async (_parents, args: { toolInput: ToolInput }, _context) => {
    const {
      name,
      partName,
      category,
      position,
      description,
      photoLink,
      usage,
      tutorialLink,
      remain,
    } = args.toolInput;
    const newTool = await prisma.tool.create({
      data: {
        name: name,
        partName: partName,
        category: category,
        position: position,
        description: description,
        photoLink: photoLink,
        usage: usage,
        tutorialLink: tutorialLink,
        remain: remain,
        toolLikeIds: [],
      },
    });
    pubsub.publish("TOOL_CREATED", { ToolCreated: newTool });
    return newTool;
  },

  DeleteTool: async (_parents, args: { id: number }, _context) => {
    const id = args.id;
    const findTool = await prisma.tool.findFirst({
      where: {
        id: id,
      },
    });
    if (!findTool) {
      throw new Error("tool not found!");
    }

    const deleteTool = await prisma.tool.delete({
      where: {
        id: id,
      },
    });

    pubsub.publish("TOOL_DELETED", { ToolDeleted: deleteTool });
    return deleteTool;
  },

  EditTool: async (
    _parents,
    args: { id: number; toolInput: ToolInput },
    _context,
  ) => {
    const id = args.id;
    const {
      name,
      partName,
      category,
      position,
      description,
      photoLink,
      usage,
      tutorialLink,
      remain,
    } = args.toolInput;
    const findTool = await prisma.tool.findFirst({
      where: {
        id: id,
      },
    });
    if (!findTool) {
      throw new Error("tool not found!");
    }

    const editTool = await prisma.tool.update({
      where: {
        id: id,
      },
      data: {
        name: name,
        partName: partName,
        category: category,
        position: position,
        description: description,
        photoLink: photoLink,
        usage: usage,
        tutorialLink: tutorialLink,
        remain: remain,
      },
    });

    pubsub.publish("TOOL_UPDATED", { ToolUpdated: editTool });
    return editTool;
  },

  ToolUsageUpdate: async (
    _parents,
    args: { id: number; toolUsageUpdateInput: ToolUsageUpdateInput },
    _context,
  ) => {
    const id = args.id;
    const { usage, remain } = args.toolUsageUpdateInput;
    const findTool = await prisma.tool.findFirst({
      where: {
        id: id,
      },
    });
    if (!findTool) {
      throw new Error("tool not found!");
    }

    const toolUsageUpdate = await prisma.tool.update({
      where: {
        id: id,
      },
      data: {
        usage: usage,
        remain: remain,
      },
    });

    pubsub.publish("TOOL_UPDATED", { ToolUpdated: toolUsageUpdate });
    return toolUsageUpdate;
  },

  AddDisposableMaterial: async (
    _parents,
    args: { disposableMaterialInput: DisposableMaterialInput },
    _context,
  ) => {
    const {
      name,
      partName,
      category,
      position,
      description,
      photoLink,
      usage,
      tutorialLink,
      fee,
      remain,
    } = args.disposableMaterialInput;
    const newDisposableMaterial = await prisma.disposableMaterial.create({
      data: {
        name: name,
        partName: partName,
        category: category,
        position: position,
        description: description,
        photoLink: photoLink,
        usage: usage,
        tutorialLink: tutorialLink,
        fee: fee,
        remain: remain,
      },
    });
    pubsub.publish("DISPOSABLEMATERIAL_CREATED", {
      DisposableMaterialCreated: newDisposableMaterial,
    });
    return newDisposableMaterial;
  },

  DeleteDisposableMaterial: async (
    _parents,
    args: { id: number },
    _context,
  ) => {
    const id = args.id;
    const findDisposableMaterial = await prisma.disposableMaterial.findFirst({
      where: {
        id: id,
      },
    });
    if (!findDisposableMaterial) {
      throw new Error("disposableMaterial not found!");
    }
    const deleteDisposableMaterial = await prisma.disposableMaterial.delete({
      where: {
        id: id,
      },
    });
    pubsub.publish("DISPOSABLEMATERIAL_DELETED", {
      DisposableMaterialDeleted: deleteDisposableMaterial,
    });
    return deleteDisposableMaterial;
  },

  EditDisposableMaterial: async (
    _parents,
    args: { id: number; disposableMaterialInput: DisposableMaterialInput },
    _context,
  ) => {
    const id = args.id;
    const {
      name,
      partName,
      category,
      position,
      description,
      photoLink,
      usage,
      tutorialLink,
      fee,
      remain,
    } = args.disposableMaterialInput;
    const findDisposableMaterial = await prisma.disposableMaterial.findFirst({
      where: {
        id: id,
      },
    });
    if (!findDisposableMaterial) {
      throw new Error("disposableMaterial not found!");
    }
    const editDisposableMaterial = await prisma.disposableMaterial.update({
      where: {
        id: id,
      },
      data: {
        name: name,
        partName: partName,
        category: category,
        position: position,
        description: description,
        photoLink: photoLink,
        usage: usage,
        tutorialLink: tutorialLink,
        fee: fee,
        remain: remain,
      },
    });
    pubsub.publish("DISPOSABLEMATERIAL_UPDATED", {
      DisposableMaterialUpdated: editDisposableMaterial,
    });
    return editDisposableMaterial;
  },

  DisposableMaterialUsageUpdate: async (
    _parents,
    args: {
      id: number;
      disposableMaterialUsageUpdateInput: DisposableMaterialUsageUpdateInput;
    },
    _contexts,
  ) => {
    const id = args.id;
    const { usage, remain } = args.disposableMaterialUsageUpdateInput;
    const findDisposableMaterial = await prisma.disposableMaterial.findFirst({
      where: {
        id: id,
      },
    });
    if (!findDisposableMaterial) {
      throw new Error("disposableMaterial not found!");
    }

    const disposableMaterialUsageUpdate =
      await prisma.disposableMaterial.update({
        where: {
          id: id,
        },
        data: {
          usage: usage,
          remain: remain,
        },
      });
    pubsub.publish("DISPOSABLEMATERIAL_UPDATED", {
      DisposableMaterialUpdated: disposableMaterialUsageUpdate,
    });
    return disposableMaterialUsageUpdate;
  },

  AddMachine: async (
    _parents,
    args: { machineInput: MachineInput },
    _contexts,
  ) => {
    const {
      name,
      partName,
      category,
      position,
      description,
      photoLink,
      usage,
      tutorialLink,
    } = args.machineInput;
    const newMachine = await prisma.machine.create({
      data: {
        name: name,
        partName: partName,
        category: category,
        position: position,
        description: description,
        photoLink: photoLink,
        usage: usage,
        tutorialLink: tutorialLink,
      },
    });
    pubsub.publish("MACHINE_CREATED", { MachineCreated: newMachine });
    return newMachine;
  },

  DeleteMachine: async (_parents, args: { id: number }, _context) => {
    const id = args.id;
    const findMachine = await prisma.machine.findFirst({
      where: {
        id: id,
      },
    });
    if (!findMachine) {
      throw new Error("machine not found!");
    }
    const deleteMachine = await prisma.machine.delete({
      where: {
        id: id,
      },
    });
    pubsub.publish("MACHINE_DELETED", { MachineDeleted: deleteMachine });
    return deleteMachine;
  },

  EditMachine: async (
    _parents,
    args: { id: number; machineInput: MachineInput },
    _context,
  ) => {
    const id = args.id;
    const {
      name,
      partName,
      category,
      position,
      description,
      photoLink,
      usage,
      tutorialLink,
    } = args.machineInput;
    const findMachine = await prisma.machine.findFirst({
      where: {
        id: id,
      },
    });
    if (!findMachine) {
      throw new Error("machine not found!");
    }
    const editMachine = await prisma.machine.update({
      where: {
        id: id,
      },
      data: {
        name: name,
        partName: partName,
        category: category,
        position: position,
        description: description,
        photoLink: photoLink,
        usage: usage,
        tutorialLink: tutorialLink,
      },
    });
    pubsub.publish("MACHINE_UPDATED", { MachineUpdated: editMachine });
    return editMachine;
  },

  AddMaterial: async (
    _parents,
    args: { materialInput: MaterialInput },
    _context,
  ) => {
    const {
      name,
      partName,
      category,
      valuable,
      position,
      description,
      photoLink,
      usage,
      tutorialLink,
      fee,
      remain,
    } = args.materialInput;
    const newMaterial = await prisma.material.create({
      data: {
        name: name,
        partName: partName,
        category: category,
        valuable: valuable,
        position: position,
        description: description,
        photoLink: photoLink,
        usage: usage,
        tutorialLink: tutorialLink,
        fee: fee,
        remain: remain,
      },
    });
    pubsub.publish("MATERIAL_CREATED", { MaterialCreated: newMaterial });
    return newMaterial;
  },

  DeleteMaterial: async (_parents, args: { id: number }, _context) => {
    const id = args.id;
    const findMaterial = await prisma.material.findFirst({
      where: {
        id: id,
      },
    });
    if (!findMaterial) {
      throw new Error("material not found!");
    }

    const deleteMaterial = await prisma.material.delete({
      where: {
        id: id,
      },
    });
    pubsub.publish("MATERIAL_DELETED", { MaterialDeleted: deleteMaterial });
    return deleteMaterial;
  },

  EditMaterial: async (
    _parents,
    args: { id: number; materialInput: MaterialInput },
    _context,
  ) => {
    const id = args.id;
    const {
      name,
      partName,
      category,
      valuable,
      position,
      description,
      photoLink,
      usage,
      tutorialLink,
      fee,
      remain,
    } = args.materialInput;
    const findMaterial = await prisma.material.findFirst({
      where: {
        id: id,
      },
    });
    if (!findMaterial) {
      throw new Error("material not found!");
    }

    const editMaterial = await prisma.material.update({
      where: {
        id: id,
      },
      data: {
        name: name,
        partName: partName,
        category: category,
        valuable: valuable,
        position: position,
        description: description,
        photoLink: photoLink,
        usage: usage,
        tutorialLink: tutorialLink,
        fee: fee,
        remain: remain,
      },
    });
    pubsub.publish("MATERIAL_UPDATED", { MaterialUpdated: editMaterial });
    return editMaterial;
  },

  MaterialUsageUpdate: async (
    _parents,
    args: { id: number; materialUsageUpdateInput: MaterialUsageUpdateInput },
    _context,
  ) => {
    const id = args.id;
    const { usage, remain } = args.materialUsageUpdateInput;
    const findMaterial = await prisma.material.findFirst({
      where: {
        id: id,
      },
    });
    if (!findMaterial) {
      throw new Error("material not found!");
    }

    const materialUsageUpdate = await prisma.material.update({
      where: {
        id: id,
      },
      data: {
        usage: usage,
        remain: remain,
      },
    });
    pubsub.publish("MATERIAL_UPDATED", {
      MaterialUpdated: materialUsageUpdate,
    });
    return materialUsageUpdate;
  },

  AddThreeDP: async (
    _parents,
    args: { threeDPInput: ThreeDPInput },
    _context,
  ) => {
    const {
      name,
      category,
      position,
      description,
      photoLink,
      usage,
      tutorialLink,
      broken,
    } = args.threeDPInput;
    const newThreeDP = await prisma.threeDP.create({
      data: {
        name: name,
        category: category,
        position: position,
        description: description,
        photoLink: photoLink,
        usage: usage,
        tutorialLink: tutorialLink,
        waitingId: [],
        broken: broken,
      },
    });
    pubsub.publish("THREEDP_CREATED", { ThreeDPCreated: newThreeDP });
    return newThreeDP;
  },

  DeleteThreeDP: async (_parents, args: { id: number }, _context) => {
    const id = args.id;
    const findThreeDP = await prisma.threeDP.findFirst({
      where: {
        id: id,
      },
    });
    if (!findThreeDP) {
      throw new Error("ThreeDP Not Found");
    }

    // checks if any user is linked to this threeDP instead of checking if the
    // waiting line is empty is to minimize and simplify input variables
    const findAffiliatedUser = await prisma.user.findMany({
      where: {
        threeDPId: id,
      },
    });
    if (findAffiliatedUser.length !== 0) {
      throw new Error("There are still people waiting in line");
    }

    const DeleteThreeDP = await prisma.threeDP.delete({
      where: {
        id: id,
      },
    });
    pubsub.publish("THREEDP_DELETED", { ThreeDPDeleted: DeleteThreeDP });

    return DeleteThreeDP;
  },

  EditThreeDP: async (
    _parents,
    args: { id: number; threeDPInput: ThreeDPInput },
    _context,
  ) => {
    const id = args.id;
    const {
      name,
      category,
      position,
      description,
      photoLink,
      usage,
      tutorialLink,
      broken,
    } = args.threeDPInput;
    const findThreeDP = await prisma.threeDP.findFirst({
      where: {
        id: id,
      },
    });
    if (!findThreeDP) {
      throw new Error("threeDP not found!");
    }

    const updateThreeDP = await prisma.threeDP.update({
      where: {
        id: id,
      },
      data: {
        name: name,
        category: category,
        position: position,
        description: description,
        photoLink: photoLink,
        usage: usage,
        tutorialLink: tutorialLink,
        broken: broken,
      },
    });
    pubsub.publish("THREEDP_UPDATED", { ThreeDPUpdated: updateThreeDP });
    return updateThreeDP;
  },

  AddUser: async (_parents, args: { userInput: UserInput }, _context) => {
    const {
      name,
      studentID,
      password,
      photoLink,
      language,
      threeDPId,
      laserCutAvailable,
      isAdmin,
      isMinister,
    } = args.userInput;
    // if (threeDPId) {
    //   const findThreeDP = await prisma.threeDP.findFirst({
    //     where: {
    //       id: threeDPId,
    //     },
    //   });

    //   if (!findThreeDP) {
    //     throw new Error("threeDP ID not found!");
    //   }
    // }
    const findUser = await prisma.user.findFirst({
      where: {
        studentID: studentID,
      },
    });
    if (findUser) {
      throw new Error("This student id is already registered!");
    }
    const newUser = await prisma.user.create({
      data: {
        name: name,
        studentID: studentID,
        password: password,
        photoLink: photoLink,
        language: language,
        threeDPId: threeDPId,
        laserCutAvailable: laserCutAvailable,
        isAdmin: isAdmin,
        isMinister: isMinister,
        toolLikeIds: [],
      },
    });

    // if (threeDPId) {
    //   const updateWaiting = await prisma.threeDP.update({
    //     where: {
    //       id: threeDPId,
    //     },
    //     data: {
    //       waitingId: { push: newUser.id },
    //     },
    //   });
    // }
    pubsub.publish("USER_CREATED", { UserCreated: newUser });
    return newUser;
  },

  DeleteUser: async (_parents, args: { id: number }, _context) => {
    const id = args.id;
    const findUser = await prisma.user.findFirst({
      where: {
        id: id,
      },
    });
    if (!findUser) {
      throw new Error(`User With id: ${id} Not Found`);
    }

    if (findUser.threeDPId) {
      const threeDPID = findUser.threeDPId;
      const findThreeDP = await prisma.threeDP.findFirst({
        where: {
          id: threeDPID,
        },
      });
      const waitingID = findThreeDP.waitingId;
      const index = waitingID.indexOf(id);
      waitingID.splice(index, 1);
      const updateThreeDP = await prisma.threeDP.update({
        where: {
          id: threeDPID,
        },
        data: {
          waitingId: waitingID,
        },
      });
    }

    const DeleteUser = await prisma.user.delete({
      where: {
        id: id,
      },
    });
    pubsub.publish("USER_DELETED", { UserDeleted: DeleteUser });
    return DeleteUser;
  },

  EditUser: async (
    _parents,
    args: { id: number; userEditInput: UserEditInput },
    _context,
  ) => {
    const id = args.id;
    const {
      name,
      studentID,
      password,
      photoLink,
      language,
      isAdmin,
      isMinister,
    } = args.userEditInput;
    const findUser = await prisma.user.findFirst({
      where: {
        id: id,
      },
    });
    if (!findUser) {
      throw new Error("user not found!");
    }

    const updateUser = await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        name: name,
        studentID: studentID,
        password: password,
        photoLink: photoLink,
        language: language,
        isAdmin: isAdmin,
        isMinister: isMinister,
      },
    });
    pubsub.publish("USER_UPDATED", { UserUpdated: updateUser });
    return updateUser;
  },

  UserMachineUsageUpdate: async (
    _parents,
    args: { id: number; userMachineUpdateInput: UserMachineUpdateInput },
    _context,
  ) => {
    const id = args.id;
    const { threeDPId, laserCutAvailable } = args.userMachineUpdateInput;
    const findUser = await prisma.user.findFirst({
      where: {
        id: id,
      },
    });
    if (!findUser) {
      throw new Error("user not found!");
    }

    const oldThreeDPId = findUser.threeDPId;

    if (threeDPId !== oldThreeDPId) {
      if (oldThreeDPId !== null) {
        const oldThreeDP = await prisma.threeDP.findFirst({
          where: {
            id: oldThreeDPId,
          },
        });
        if (!oldThreeDP) {
          throw new Error("old threeDP not found!");
        }
        const oldWaitingID = oldThreeDP.waitingId;
        const index = oldWaitingID.indexOf(id);
        oldWaitingID.splice(index, 1);
        const updateOldThreeDP = await prisma.threeDP.update({
          where: {
            id: oldThreeDPId,
          },
          data: {
            waitingId: oldWaitingID,
          },
        });
        if (!updateOldThreeDP) {
          throw new Error("update old threeDP failed!");
        }
      }

      if (threeDPId !== null) {
        const newThreeDP = await prisma.threeDP.findFirst({
          where: {
            id: threeDPId,
          },
        });
        if (!newThreeDP) {
          throw new Error("new threeDP not found!");
        }
        const newWaitingID = newThreeDP.waitingId;
        newWaitingID.push(id);
        const updateNewThreeDP = await prisma.threeDP.update({
          where: {
            id: threeDPId,
          },
          data: {
            waitingId: newWaitingID,
          },
        });
        if (!updateNewThreeDP) {
          throw new Error("update new threeDP failed!");
        }
      }
    }

    const editUser = await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        threeDPId: threeDPId,
        laserCutAvailable: laserCutAvailable,
      },
    });
    pubsub.publish("USERMACHINE_UPDATE", { UserMachineUpdate: editUser });
    return editUser;
  },

  AddArticle: async (
    _parents,
    args: { articleInput: ArticleInput },
    _context,
  ) => {
    const {
      writerId,
      description,
      imageURL,
      title,
      headline,
      content,
      userpic,
    } = args.articleInput;
    const findWriter = await prisma.user.findFirst({
      where: {
        id: writerId,
      },
    });
    if (!findWriter) {
      throw new Error("Writer not found!");
    }

    const date = new Date().toLocaleString();
    const newArticle = await prisma.article.create({
      data: {
        writerId: writerId,
        description: description,
        imageURL: imageURL,
        time: date,
        title: title,
        headline: headline,
        content: content,
        userpic: userpic,
      },
    });

    const updateArticles = await prisma.user.update({
      where: {
        id: writerId,
      },
      data: {
        articlesId: { push: newArticle.id },
      },
    });
    pubsub.publish("ARTICLE_CREATED", { ArticleCreated: newArticle });
    return newArticle;
  },

  UpdateIntroduction: async (
    _parents,
    args: { introductionInput: IntroductionInput },
    _context,
  ) => {
    const existence = await prisma.introduction.findMany({
      orderBy: {
        updatedAt: "desc",
      },
      take: 1,
    });
    console.log(args);
    const { content } = args.introductionInput;

    if (existence[0] === null || existence[0] === undefined) {
      const newIntroduction = await prisma.introduction.create({
        data: {
          content: content,
          updatedAt: new Date().toLocaleString(),
        },
      });
      pubsub.publish("INTRODUCTION_CREATED", {
        IntroductionCreated: newIntroduction,
      });
      return newIntroduction;
    } else {
      const id = existence[0].id;
      const updatedIntroduction = await prisma.introduction.update({
        where: {
          id: id,
        },
        data: {
          content: content,
          updatedAt: new Date().toLocaleString(),
        },
      });
      pubsub.publish("INTRODUCTION_UPDATED", {
        IntroductionUpdated: updatedIntroduction,
      });
      return updatedIntroduction;
    }
  },

  UpdateAuthorizedCode: async (
    _parents,
    args: { authorizedCodeInput: AuthorizedCodeInput },
    _context,
  ) => {
    console.log(args.authorizedCodeInput);
    const existence = await prisma.authorizedCode.findFirst({});
    // console.log(args);
    const { codeList } = args.authorizedCodeInput;
    let updateAuthorizedCode;

    if (existence === null || existence === undefined) {
      updateAuthorizedCode = await prisma.authorizedCode.create({
        data: {
          codeList,
          updatedAt: new Date().toLocaleString(),
        },
      });
    } else {
      const id = existence.id;
      updateAuthorizedCode = await prisma.authorizedCode.update({
        where: {
          id: id,
        },
        data: {
          codeList,
          updatedAt: new Date().toLocaleString(),
        },
      });
    }
    pubsub.publish("AUTHORIZED_CODE_UPDATED", {
      AuthorizedCodeUpdated: updateAuthorizedCode,
    });
    return updateAuthorizedCode;
  },

  SignUp: async (_parents, args: { signUpInput: SignUpInput }, _context) => {
    const costFactor = 12;
    const { name, studentID, password } = args.signUpInput;

    const studentIDExisted = await prisma.user.findFirst({
      where: {
        studentID: studentID,
      },
    });

    if (studentIDExisted !== null) {
      throw new Error("This student id is already registered!");
    } else {
      const hashedpassword = await bcrypt.hash(password, costFactor);
      const newUser = await prisma.user.create({
        data: {
          name: name,
          studentID: studentID,
          password: hashedpassword,
        },
      });

      const token = jwt.sign(
        {
          id: newUser.id,
          name: newUser.name,
          studentID: newUser.studentID,
          photoLink: newUser.photoLink,
          language: newUser.language,
          threeDPId: newUser.threeDPId,
          laserCutAvailable: newUser.laserCutAvailable,
          isAdmin: newUser.isAdmin,
          isMinister: newUser.isMinister,
          toolLikeIds: newUser.toolLikeIds,
        },
        env.JWT_SECRET,
        {
          expiresIn: env.JWT_EXPIRES_IN,
        },
      );
      pubsub.publish("USER_SIGNEDUP", { UserSignedUp: newUser });
      return { user: newUser, token: token };
    }
  },

  AddToolLike: async (
    _parents,
    args: { toolLikeInput: ToolLikeInput },
    _context,
  ) => {
    const { userId, toolId } = args.toolLikeInput;
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
    if (!user) {
      throw new Error("User Not Found");
    }

    const tool = await prisma.tool.findUnique({
      where: {
        id: toolId,
      },
    });

    if (!tool) {
      throw new Error("Tool Not Found");
    }

    const newToolLike = await prisma.toolLike.create({
      data: {
        userId: userId,
        toolId: toolId,
      },
    });

    // update tool
    await prisma.tool.update({
      where: {
        id: toolId,
      },
      data: {
        toolLikeIds: [...tool.toolLikeIds, newToolLike.id],
      },
    });

    // update user
    await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        toolLikeIds: [...user.toolLikeIds, newToolLike.id],
      },
    });

    return newToolLike;
  },

  DeleteToolLike: async (
    _parents,
    args: { toolLikeInput: ToolLikeInput },
    _context,
  ) => {
    const { userId, toolId } = args.toolLikeInput;
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
    if (!user) {
      throw new Error("User Not Found");
    }

    const tool = await prisma.tool.findUnique({
      where: {
        id: toolId,
      },
    });

    if (!tool) {
      throw new Error("Tool Not Found");
    }

    // Find the intersection of user.toolLikeIds and tool.toolLikedIds
    const toolLikeId = user.toolLikeIds.find((id) =>
      tool.toolLikeIds.includes(id),
    );

    const deleteToolLike = await prisma.toolLike.delete({
      where: { id: toolLikeId },
    });

    // Update user.toolLikeIds and tool.toolLikeIds
    await prisma.user.update({
      where: { id: userId },
      data: {
        toolLikeIds: {
          set: user.toolLikeIds.filter((id) => id !== toolLikeId),
        },
      },
    });

    await prisma.tool.update({
      where: { id: toolId },
      data: {
        toolLikeIds: {
          set: tool.toolLikeIds.filter((id) => id !== toolLikeId),
        },
      },
    });

    return deleteToolLike;
  },

  EditUserLanguage: async (
    _parents,
    args: { id: number; language: string },
    _context,
  ) => {
    const { id, language } = args;
    const findUser = await prisma.user.findFirst({
      where: {
        id: id,
      },
    });
    if (!findUser) {
      throw new Error("User Not Found");
    }
    const updateUser = await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        language: language,
      },
    });
    return updateUser;
  },
};

export { Mutation };
