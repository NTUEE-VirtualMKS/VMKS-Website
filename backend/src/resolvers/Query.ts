import { prisma } from "../../prisma/client.ts";
import type { LogInInput } from "../types/types.ts";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { env } from "../../utils/env.ts";
import { pubsub } from "../PubSub/pubsub.ts";
import nodemailer from "nodemailer";

const Query = {
  // Announcement
  GetAllAnnouncements: async (
    _parents,
    args: { cursor?: string; limit?: number },
    _contexts,
  ) => {
    const { cursor, limit = 12 } = args;
    const allAnnouncements = await prisma.announcement.findMany({
      orderBy: {
        id: "desc",
      },
      take: limit,
      cursor: cursor ? { id: cursor } : undefined,
      skip: cursor ? 1 : 0, // Skip the cursor itself if provided
    });

    return {
      announcements: allAnnouncements,
      cursor:
        allAnnouncements.length === limit
          ? allAnnouncements[allAnnouncements.length - 1].id
          : null,
    };
  },

  GetAnnouncementById: async (_parents, args: { id: string }, _contexts) => {
    const id = args.id;
    const announcement = await prisma.announcement.findUnique({
      where: {
        id: id,
      },
    });
    if (!announcement) throw new Error("Announcement not found!");
    return announcement;
  },

  SearchAnnouncementByTitle: async (
    _parents,
    args: {
      title: string;
    },
    _contexts,
  ) => {
    const { title } = args;
    const searchAnnouncementByTitle = await prisma.announcement.findMany({
      where: {
        title: {
          contains: title,
          mode: "insensitive",
        },
      },
      orderBy: {
        id: "desc",
      },
    });

    return searchAnnouncementByTitle;
  },

  // Tool
  GetAllTools: async (
    _parents,
    args: { cursor?: string; limit?: number },
    _contexts,
  ) => {
    const { cursor, limit = 12 } = args;
    const allTools = await prisma.tool.findMany({
      orderBy: [
        {
          usage: "desc",
        },
        {
          id: "desc",
        },
      ],
      take: limit,
      cursor: cursor ? { id: cursor } : undefined,
      skip: cursor ? 1 : 0, // Skip the cursor itself if provided
    });
    return {
      tools: allTools,
      cursor:
        allTools.length === limit ? allTools[allTools.length - 1].id : null,
    };
  },

  GetToolById: async (_parents, args: { id: string }, _contexts) => {
    const id = args.id;
    const tool = await prisma.tool.findUnique({
      where: {
        id: id,
      },
    });
    if (!tool) throw new Error("Tool not found!");
    return tool;
  },

  SearchToolByCategory: async (
    _parents,
    args: {
      category: string;
    },
    _contexts,
  ) => {
    const { category } = args;
    const searchToolByCategory = await prisma.tool.findMany({
      where: {
        category: {
          startsWith: category,
        },
      },
      orderBy: [
        {
          usage: "desc",
        },
        {
          id: "desc",
        },
      ],
    });

    return searchToolByCategory;
  },

  SearchToolByPosition: async (
    _parents,
    args: {
      position: string;
    },
    _contexts,
  ) => {
    const { position } = args;
    const searchToolByPosition = await prisma.tool.findMany({
      where: {
        position: position,
      },
      orderBy: [
        {
          usage: "desc",
        },
        {
          id: "desc",
        },
      ],
    });

    return searchToolByPosition;
  },

  SearchToolByName: async (
    _parents,
    args: {
      name: string;
    },
    _contexts,
  ) => {
    const { name } = args;

    if (name === "") {
      const allTools = await prisma.tool.findMany({
        orderBy: [
          {
            usage: "desc",
          },
          {
            id: "desc",
          },
        ],
      });
      return allTools;
    }

    const searchToolByName = await prisma.tool.findMany({
      where: {
        name: {
          contains: name,
          mode: "insensitive",
        },
      },
      orderBy: [
        {
          usage: "desc",
        },
        {
          id: "desc",
        },
      ],
    });

    return searchToolByName;
  },

  // DisposableMaterial
  GetAllDisposableMaterials: async (
    _parents,
    args: { cursor?: string; limit?: number },
    _contexts,
  ) => {
    const { cursor, limit = 12 } = args;
    const allMaterials = await prisma.disposableMaterial.findMany({
      orderBy: [
        {
          usage: "desc",
        },
        {
          id: "desc",
        },
      ],
      take: limit,
      cursor: cursor ? { id: cursor } : undefined,
      skip: cursor ? 1 : 0, // Skip the cursor itself if provided
    });

    return {
      disposableMaterials: allMaterials,
      cursor:
        allMaterials.length === limit
          ? allMaterials[allMaterials.length - 1].id
          : null,
    };
  },

  SearchDisposableMaterialByCategory: async (
    _parents,
    args: {
      category: string;
    },
    _contexts,
  ) => {
    const { category } = args;
    const searchDisposableMaterialByCategory =
      await prisma.disposableMaterial.findMany({
        where: {
          category: {
            contains: category,
            mode: "insensitive",
          },
        },
        orderBy: [
          {
            usage: "desc",
          },
          {
            id: "desc",
          },
        ],
      });

    return searchDisposableMaterialByCategory;
  },

  SearchDisposableMaterialByPosition: async (
    _parents,
    args: {
      position: string;
    },
    _contexts,
  ) => {
    const { position } = args;
    const searchDisposableMaterialByPosition =
      await prisma.disposableMaterial.findMany({
        where: {
          position: {
            contains: position,
            mode: "insensitive",
          },
        },
        orderBy: [
          {
            usage: "desc",
          },
          {
            id: "desc",
          },
        ],
      });

    return searchDisposableMaterialByPosition;
  },

  SearchDisposableMaterialByName: async (
    _parents,
    args: {
      name: string;
    },
    _contexts,
  ) => {
    const { name } = args;
    const searchDisposableMaterialByName =
      await prisma.disposableMaterial.findMany({
        where: {
          name: {
            contains: name,
            mode: "insensitive",
          },
        },
        orderBy: [
          {
            usage: "desc",
          },
          {
            id: "desc",
          },
        ],
      });

    return searchDisposableMaterialByName;
  },

  // Machine
  GetAllMachines: async (
    _parents,
    args: { cursor?: string; limit?: number },
    _contexts,
  ) => {
    const { cursor, limit = 12 } = args;
    const allMachines = await prisma.machine.findMany({
      orderBy: [
        {
          usage: "desc",
        },
        {
          id: "desc",
        },
      ],
      take: limit,
      cursor: cursor ? { id: cursor } : undefined,
      skip: cursor ? 1 : 0, // Skip the cursor itself if provided
    });
    return {
      machines: allMachines,
      cursor:
        allMachines.length === limit
          ? allMachines[allMachines.length - 1].id
          : null,
    };
  },

  GetMachineById: async (_parents, args: { id: string }, _contexts) => {
    const id = args.id;
    const machine = await prisma.machine.findUnique({
      where: {
        id: id,
      },
    });
    if (!machine) throw new Error("Machine not found!");
    return machine;
  },

  SearchMachineByCategory: async (
    _parents,
    args: {
      category: string;
    },
    _contexts,
  ) => {
    const { category } = args;
    const searchMachineByCategory = await prisma.machine.findMany({
      where: {
        category: {
          contains: category,
          mode: "insensitive",
        },
      },
      orderBy: [
        {
          usage: "desc",
        },
        {
          id: "desc",
        },
      ],
    });

    return searchMachineByCategory;
  },

  SearchMachineByPosition: async (
    _parents,
    args: {
      position: string;
    },
    _contexts,
  ) => {
    const { position } = args;
    const searchMachineByPosition = await prisma.machine.findMany({
      where: {
        position: {
          contains: position,
          mode: "insensitive",
        },
      },
      orderBy: [
        {
          usage: "desc",
        },
        {
          id: "desc",
        },
      ],
    });

    return searchMachineByPosition;
  },

  SearchMachineByName: async (
    _parents,
    args: {
      input: string;
    },
    _contexts,
  ) => {
    const { input } = args;
    const searchMachineByName = await prisma.machine.findMany({
      where: {
        name: {
          contains: input,
          mode: "insensitive",
        },
      },
      orderBy: {
        id: "desc",
      },
    });

    return searchMachineByName;
  },

  // Material
  GetAllMaterials: async (
    _parents,
    args: { cursor?: string; limit?: number },
    _contexts,
  ) => {
    const { cursor, limit = 12 } = args;
    const allMaterials = await prisma.material.findMany({
      orderBy: [
        {
          usage: "desc",
        },
        {
          id: "desc",
        },
      ],
      take: limit,
      cursor: cursor ? { id: cursor } : undefined,
      skip: cursor ? 1 : 0, // Skip the cursor itself if provided
    });
    return {
      materials: allMaterials,
      cursor:
        allMaterials.length === limit
          ? allMaterials[allMaterials.length - 1].id
          : null,
    };
  },

  GetMaterialById: async (_parents, args: { id: string }, _contexts) => {
    const id = args.id;
    const material = await prisma.material.findUnique({
      where: {
        id: id,
      },
    });
    if (!material) throw new Error("Material not found!");
    return material;
  },

  SearchMaterialByCategory: async (
    _parents,
    args: {
      category: string;
    },
    _contexts,
  ) => {
    const { category } = args;
    const searchMaterialByCategory = await prisma.material.findMany({
      where: {
        category: {
          contains: category,
          mode: "insensitive",
        },
      },
      orderBy: [
        {
          usage: "desc",
        },
        {
          id: "desc",
        },
      ],
    });

    return searchMaterialByCategory;
  },

  SearchMaterialByPosition: async (
    _parents,
    args: {
      position: string;
    },
    _contexts,
  ) => {
    const { position } = args;
    const searchMaterialByPosition = await prisma.material.findMany({
      where: {
        position: {
          contains: position,
          mode: "insensitive",
        },
      },
      orderBy: [
        {
          usage: "desc",
        },
        {
          id: "desc",
        },
      ],
    });

    return searchMaterialByPosition;
  },

  SearchMaterialByName: async (
    _parents,
    args: {
      name: string;
    },
    _contexts,
  ) => {
    const { name } = args;
    const searchMaterialByName = await prisma.material.findMany({
      where: {
        name: {
          contains: name,
          mode: "insensitive",
        },
      },
      orderBy: [
        {
          usage: "desc",
        },
        {
          id: "desc",
        },
      ],
    });

    return searchMaterialByName;
  },

  // ThreeDP
  GetAllThreeDPs: async (
    _parents,
    args: { cursor?: string; limit?: number },
    _contexts,
  ) => {
    const { cursor, limit = 12 } = args;
    const allThreeDPs = await prisma.threeDP.findMany({
      orderBy: [
        {
          id: "desc",
        },
      ],
      take: limit,
      cursor: cursor ? { id: cursor } : undefined,
      skip: cursor ? 1 : 0, // Skip the cursor itself if provided
    });

    return {
      threeDPs: allThreeDPs,
      cursor:
        allThreeDPs.length === limit
          ? allThreeDPs[allThreeDPs.length - 1].id
          : null,
    };
  },

  GetThreeDPById: async (_parents, args: { id: string }, _contexts) => {
    const id = args.id;
    const threeDP = await prisma.threeDP.findUnique({
      where: {
        id: id,
      },
    });
    if (!threeDP) throw new Error("Material not found!");
    return threeDP;
  },

  // SearchThreeDPByCategory: async (
  //   _parents,
  //   args: {
  //     category: string;
  //   },
  //   _contexts,
  // ) => {
  //   const { category } = args;
  //   const searchThreeDPByCategory = await prisma.threeDP.findMany({
  //     where: {
  //       category: {
  //         contains: category,
  //         mode: "insensitive",
  //       },
  //     },
  //     orderBy: [
  //       {
  //         usage: "desc",
  //       },
  //       {
  //         id: "desc",
  //       },
  //     ],
  //   });

  //   return searchThreeDPByCategory;
  // },

  SearchThreeDPByPosition: async (
    _parents,
    args: {
      position: string;
    },
    _contexts,
  ) => {
    const { position } = args;
    const searchThreeDPByPosition = await prisma.threeDP.findMany({
      where: {
        position: {
          contains: position,
          mode: "insensitive",
        },
      },
      orderBy: [
        {
          id: "desc",
        },
      ],
    });

    return searchThreeDPByPosition;
  },
  //ThreeDPRequest
  GetAllThreeDPRequests: async () => {
    const allThreeDPRequests = await prisma.threeDPRequest.findMany({
      orderBy: {
        id: "desc",
      },
    });

    return allThreeDPRequests;
  },

  GetThreeDPRequestsByThreeDPId: async (
    _parents,
    args: { threeDPId: string },
    _contexts,
  ) => {
    const threeDPId = args.threeDPId;
    const threeDP = await prisma.threeDP.findUnique({
      where: {
        id: threeDPId,
      },
    });

    if (!threeDP) throw new Error("User not found");

    const threeDPRequest = await prisma.threeDPRequest.findMany({
      where: {
        threeDPId: threeDPId,
      },
    });
    if (!threeDPRequest) throw new Error("threeDP request not found!");
    return threeDPRequest;
  },

  GetThreeDPRequestsByUserId: async (
    _parents,
    args: { userId: string },
    _contexts,
  ) => {
    const userId = args.userId;
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) throw new Error("User not found");

    const threeDPRequests = await prisma.threeDPRequest.findMany({
      where: {
        userId: userId,
      },
      orderBy: {
        id: "desc",
      },
    });

    return threeDPRequests;
  },
  // User
  GetAllUsers: async (
    _parents,
    args: { cursor?: string; limit?: number },
    _contexts,
  ) => {
    const { cursor, limit = 12 } = args;
    const allUsers = await prisma.user.findMany({
      orderBy: {
        id: "desc",
      },
      omit: {
        password: true,
        threeDPId: true,
        language: true,
        toolLikeIds: true,
        materialLikeIds: true,
        userBorrowToolIds: true,
        userBorrowMaterialIds: true,
        articlesId: true,
      },
      take: limit,
      cursor: cursor ? { id: cursor } : undefined,
      skip: cursor ? 1 : 0, // Skip the cursor itself if provided
    });

    return {
      users: allUsers,
      cursor:
        allUsers.length === limit ? allUsers[allUsers.length - 1].id : null,
    };
  },

  SearchUserByName: async (
    _parents,
    args: {
      name: string;
    },
    _contexts,
  ) => {
    const { name } = args;
    const searchUserByName = await prisma.user.findMany({
      where: {
        name: {
          contains: name,
          mode: "insensitive",
        },
      },
      orderBy: {
        id: "desc",
      },
      omit: {
        password: true,
        threeDPId: true,
        language: true,
        toolLikeIds: true,
        materialLikeIds: true,
        userBorrowToolIds: true,
        userBorrowMaterialIds: true,
        articlesId: true,
      },
    });

    return searchUserByName;
  },

  GetUserByStudentID: async (
    _parents,
    args: { studentID: string },
    _contexts,
  ) => {
    const { studentID } = args;
    const user = await prisma.user.findUnique({
      where: {
        studentID: studentID,
      },
    });
    return user;
  },

  // Article
  GetAllArticles: async (
    _parents,
    args: { cursor?: string; limit?: number },
    _contexts,
  ) => {
    const { cursor, limit = 12 } = args;
    const allArticles = await prisma.article.findMany({
      orderBy: {
        id: "desc",
      },
      take: limit,
      cursor: cursor ? { id: cursor } : undefined,
      skip: cursor ? 1 : 0, // Skip the cursor itself if provided
    });

    return {
      articles: allArticles,
      cursor:
        allArticles.length === limit
          ? allArticles[allArticles.length - 1].id
          : null,
    };
  },

  GetArticleById: async (_parents, args: { id: string }, _contexts) => {
    const id = args.id;
    const article = await prisma.article.findUnique({
      where: {
        id: id,
      },
    });
    if (!article) throw new Error("Article not found!");
    return article;
  },

  // AuthorizedCode
  GetAuthorizedCode: async () => {
    const authorizedCode = await prisma.authorizedCode.findFirst({});
    if (!authorizedCode) throw new Error("Authorized code not found!");
    else return authorizedCode;
  },

  // LogIn
  LogIn: async (_parents, args: { logInInput: LogInInput }, _contexts) => {
    const { studentID, password, browser, os, time, timeZone, date, redirect } =
      args.logInInput;

    const user = await prisma.user.findUnique({
      where: {
        studentID: studentID,
      },
    });
    if (!user) throw new Error("Student ID or password is incorrect!");

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid)
      throw new Error("Student ID or password is incorrect!");
    else {
      const token = jwt.sign(
        {
          id: user.id,
          name: user.name,
          studentID: user.studentID,
          photoLink: user.photoLink,
          language: user.language,
          threeDPId: user.threeDPId,
          laserCutAvailable: user.laserCutAvailable,
          articlesId: user.articlesId,
          isAdmin: user.isAdmin,
          isMinister: user.isMinister,
          toolLikeIds: user.toolLikeIds,
          materialLikeIds: user.materialLikeIds,
          userBorrowToolIds: user.userBorrowToolIds,
          userBorrowMaterialIds: user.userBorrowMaterialIds,
        },
        env.JWT_SECRET,
        {
          expiresIn: env.JWT_EXPIRES_IN,
        },
      );

      if (redirect) {
        const email = `${studentID.toLowerCase()}@ntu.edu.tw`;
        const accountName = env.EMAIL_ACCOUNT_NAME;
        const emailUser = env.EMAIL_USER;
        const pass = env.EMAIL_PASS;
        const transporter = nodemailer.createTransport({
          service: "Gmail",
          auth: {
            user: emailUser,
            pass: pass,
          },
        });

        const mailOptions = {
          from: `${accountName} <${emailUser}>`,
          to: email,
          subject: "Security Alert: New Login Detected",
          html: `
          <!DOCTYPE html>
          <html lang="en">
            <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>New Login Notification</title>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  background-color: #f4f4f4;
                  margin: 0;
                  padding: 0;
                  color: #333333;
                }
                .container {
                  max-width: 600px;
                  margin: 20px auto;
                  background-color: #ffffff;
                  padding: 20px;
                  border: 1px solid #e1e1e1;
                  border-radius: 5px;
                }
                .header {
                  text-align: center;
                  margin-bottom: 20px;
                }
                .header img {
                  width: 50px;
                }
                .header h1 {
                  font-size: 24px;
                  margin: 10px 0;
                  color: #333333;
                }
                .content {
                  text-align: center;
                }
                .device-info {
                  font-size: 18px;
                  margin: 20px 0;
                }
                .notice {
                  font-size: 14px;
                  color: #888;
                  margin-top: 30px;
                  text-align: left;
                  line-height: 1.5;
                }
                .footer {
                  text-align: center;
                  font-size: 12px;
                  color: #888888;
                  margin-top: 30px;
                }
                .footer p {
                  margin: 5px 0;
                }
                .footer a {
                  color: #007bff;
                  text-decoration: none;
                }
                </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <img src="https://avatars.githubusercontent.com/u/138299847?s=200&v=4" alt="logo">
                  <h1>
                    <b>New Login Detected</b>
                  </h1>
                </div>
                <div class="content">
                  <p>We noticed a new login, <strong>${user.name}</strong>.</p>
                  <p>If this was you, you can safely ignore this email.</p>
                  <div class="device-info">
                    <p><strong>${os}</strong> &bull; <strong>${browser}</strong>
                    <p>${date} at ${time} (${timeZone})</p>
                  </div>
                </div>
                <div class="footer">
                  <p>If this wasn't you, you can <a href="{{security_url}}">secure your account</a> from a device you've logged in with in the past.</p>
                  <p><a href="{{learn_more_url}}">Learn more</a></p>
                  <p>- VMKS Team</p>
                </div>
              </div>
            </body>
          </html>
        `,
        };

        try {
          await transporter.sendMail(mailOptions);
        } catch (error) {
          console.error("Error sending email:", error);
          throw new Error("Signup successful, but failed to send email.");
        }
      }

      pubsub.publish("USER_LOGGEDIN", { UserLoggedIn: user });
      return { user: user, token: token };
    }
  },

  // ToolLike
  GetToolLikes: async () => {
    const toolLikes = await prisma.toolLike.findMany({
      orderBy: {
        id: "desc",
      },
    });
    return toolLikes;
  },

  GetToolLikeById: async (_parents, args: { id: string }, _contexts) => {
    const id = args.id;
    const toolLike = await prisma.toolLike.findUnique({
      where: {
        id: id,
      },
    });
    if (!toolLike) throw new Error("Tool like not found!");
    return toolLike;
  },

  GetLikedToolsByUserId: async (
    _parents,
    args: { userId: string },
    _contexts,
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

  // UserBorrowTool
  GetAllUserBorrowTools: async () => {
    const allUserBorrowTools = await prisma.userBorrowTool.findMany({
      orderBy: {
        id: "desc",
      },
    });

    return allUserBorrowTools;
  },

  GetAllUserBorrowToolsByStatus: async (
    _parents,
    args: { status: string[] },
    _contexts,
  ) => {
    const { status } = args;
    const allUserBorrowTools = await prisma.userBorrowTool.findMany({
      where: {
        status: {
          in: status,
        },
      },
      orderBy: {
        id: "desc",
      },
    });

    return allUserBorrowTools;
  },

  GetUserBorrowToolById: async (_parents, args: { id: string }, _contexts) => {
    const id = args.id;
    const userBorrowTool = await prisma.userBorrowTool.findUnique({
      where: {
        id: id,
      },
    });
    if (!userBorrowTool) throw new Error("User borrow tool not found!");
    return userBorrowTool;
  },

  GetUserBorrowToolsByUserId: async (
    _parents,
    args: { userId: string },
    _contexts,
  ) => {
    const userId = args.userId;
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) throw new Error("User not found");

    const userBorrowTools = await prisma.userBorrowTool.findMany({
      where: {
        userId: userId,
      },
      orderBy: {
        id: "desc",
      },
    });

    return userBorrowTools;
  },

  GetUserBorrowToolsByStatusAndUserId: async (
    _parents,
    args: {
      userId: string;
      status: string[];
    },
    _contexts,
  ) => {
    const { userId, status } = args;
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) throw new Error("User not found");

    const userBorrowTools = await prisma.userBorrowTool.findMany({
      where: {
        userId: userId,
        status: {
          in: status,
        },
      },
      orderBy: {
        id: "desc",
      },
    });

    return userBorrowTools;
  },

  // Material Like
  GetMaterialLikes: async () => {
    const materialLikes = await prisma.materialLike.findMany({
      orderBy: {
        id: "desc",
      },
    });
    return materialLikes;
  },

  GetMaterialLikeById: async (_parents, args: { id: string }, _contexts) => {
    const id = args.id;
    const materialLike = await prisma.materialLike.findUnique({
      where: {
        id: id,
      },
    });
    if (!materialLike) throw new Error("Material like not found!");
    return materialLike;
  },

  GetLikedMaterialsByUserId: async (
    _parents,
    args: { userId: string },
    _contexts,
  ) => {
    const userId = args.userId;

    // Find the user by ID
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      // Include material likes if it's a relation field
      include: {
        materialLikes: true,
      },
    });

    // Throw an error if the user is not found
    if (!user) throw new Error("User not found");

    const materialLikes = user.materialLikes;

    const likedMaterials = materialLikes.map(async (materialLike) => {
      return await prisma.material.findUnique({
        where: {
          id: materialLike.materialId,
        },
      });
    });

    return likedMaterials;
  },

  // UserBorrowMaterial
  GetAllUserBorrowMaterials: async () => {
    const allUserBorrowMaterials = await prisma.userBorrowMaterial.findMany({
      orderBy: {
        id: "desc",
      },
    });

    return allUserBorrowMaterials;
  },

  GetAllUserBorrowMaterialsByStatus: async (
    _parents,
    args: { status: string[] },
    _contexts,
  ) => {
    const { status } = args;
    const allUserBorrowMaterials = await prisma.userBorrowMaterial.findMany({
      where: {
        status: {
          in: status,
        },
      },
      orderBy: {
        id: "desc",
      },
    });

    return allUserBorrowMaterials;
  },

  GetUserBorrowMaterialById: async (
    _parents,
    args: { id: string },
    _contexts,
  ) => {
    const id = args.id;
    const userBorrowMaterial = await prisma.userBorrowMaterial.findUnique({
      where: {
        id: id,
      },
    });
    if (!userBorrowMaterial) throw new Error("User borrow material not found!");
    return userBorrowMaterial;
  },

  GetUserBorrowMaterialsByUserId: async (
    _parents,
    args: { userId: string },
    _contexts,
  ) => {
    const userId = args.userId;
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) throw new Error("User not found");

    const userBorrowMaterials = await prisma.userBorrowMaterial.findMany({
      where: {
        userId: userId,
      },
      orderBy: {
        id: "desc",
      },
    });

    return userBorrowMaterials;
  },

  GetUserBorrowMaterialsByStatusAndUserId: async (
    _parents,
    args: {
      userId: string;
      status: string[];
    },
    _contexts,
  ) => {
    const { userId, status } = args;
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) throw new Error("User not found");

    const userBorrowMaterials = await prisma.userBorrowMaterial.findMany({
      where: {
        userId: userId,
        status: {
          in: status,
        },
      },
      orderBy: {
        id: "desc",
      },
    });

    return userBorrowMaterials;
  },

  // AdminSchedule
  GetAllAdminSchedules: async () => {
    const week = [
      "sunday",
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
    ];
    const firstPeriodAdminSchedules = (
      await prisma.adminSchedule.findMany({
        where: {
          period: "09:00-12:00",
        },
      })
    ).sort(
      (a, b) =>
        week.indexOf(a.day.toLowerCase()) - week.indexOf(b.day.toLowerCase()),
    );
    const secondPeriodAdminSchedules = (
      await prisma.adminSchedule.findMany({
        where: {
          period: "13:00-16:00 (A)",
        },
      })
    ).sort(
      (a, b) =>
        week.indexOf(a.day.toLowerCase()) - week.indexOf(b.day.toLowerCase()),
    );
    const thirdPeriodAdminSchedules = (
      await prisma.adminSchedule.findMany({
        where: {
          period: "13:00-16:00 (B)",
        },
      })
    ).sort(
      (a, b) =>
        week.indexOf(a.day.toLowerCase()) - week.indexOf(b.day.toLowerCase()),
    );
    const lastPeriodAdminSchedules = (
      await prisma.adminSchedule.findMany({
        where: {
          period: "18:00-21:00",
        },
      })
    ).sort(
      (a, b) =>
        week.indexOf(a.day.toLowerCase()) - week.indexOf(b.day.toLowerCase()),
    );
    return [
      firstPeriodAdminSchedules,
      secondPeriodAdminSchedules,
      thirdPeriodAdminSchedules,
      lastPeriodAdminSchedules,
    ];
  },

  GetAdminScheduleByDay: async (_parents, args: { day: string }, _contexts) => {
    const day = args.day;
    const adminSchedule = await prisma.adminSchedule.findMany({
      where: {
        day: day,
      },
    });

    return adminSchedule.sort((a, b) => {
      if (a.period < b.period) return -1;
      if (a.period > b.period) return 1;
      return 0;
    });
  },

  GetAdminScheduleByPeriod: async (
    _parents,
    args: { period: string },
    _contexts,
  ) => {
    const period = args.period;
    const adminSchedule = await prisma.adminSchedule.findMany({
      where: {
        period: period,
      },
    });

    // Define the order of the days of the week
    const week = [
      "sunday",
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
    ];

    // Sort the adminSchedule by the day of the week
    return adminSchedule.sort((a, b) => {
      return (
        week.indexOf(a.day.toLowerCase()) - week.indexOf(b.day.toLowerCase())
      );
    });
  },

  // SignupAuthCode
  GetAllSignupAuthCodes: async () => {
    const signupAuthCodes = await prisma.signupAuthCode.findMany({
      orderBy: {
        id: "desc",
      },
    });
    return signupAuthCodes;
  },

  GetSignupAuthCodeByStudentID: async (
    _parents,
    args: { studentID: string },
    _contexts,
  ) => {
    const studentID = args.studentID;
    const signupAuthCode = await prisma.signupAuthCode.findFirst({
      where: {
        studentID: studentID,
      },
    });

    return signupAuthCode;
  },

  CheckSignupAuthCode: async (
    _parents,
    args: { studentID: string; code: string },
    _contexts,
  ) => {
    const { studentID, code } = args;
    const signupAuthCode = await prisma.signupAuthCode.findFirst({
      where: {
        studentID: studentID,
        code: code,
      },
    });

    if (!signupAuthCode) throw new Error("Invalid auth code");
    return true;
  },
};

export { Query };
