import { prisma } from "../../prisma/client.ts";
import { pubsub } from "../PubSub/pubsub.ts";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { env } from "../../utils/env.ts";
import nodemailer from "nodemailer";

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
  UserPasswordEditInput,
  UserMachineUpdateInput,
  ArticleInput,
  AuthorizedCodeInput,
  SignUpInput,
  ToolLikeInput,
  UserBorrowToolInput,
  MaterialLikeInput,
  UserBorrowMaterialInput,
  PromoteUserInput,
  DemoteUserInput,
  AdminScheduleInput,
  SignupAuthCodeInput,
} from "../types/types.ts";

const Mutation = {
  AddAnnouncement: async (
    _parents,
    args: { announcementInput: AnnouncementInput },
    _contexts,
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

  DeleteAnnouncement: async (_parents, args: { id: string }, _contexts) => {
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
    args: { id: string; announcementInput: AnnouncementInput },
    _contexts,
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

  AddTool: async (_parents, args: { toolInput: ToolInput }, _contexts) => {
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

  DeleteTool: async (_parents, args: { id: string }, _contexts) => {
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
    args: { id: string; toolInput: ToolInput },
    _contexts,
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

    const editedTool = await prisma.tool.update({
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

    // update userBorrowTools
    const userBorrowToolIds = editedTool.userBorrowToolIds;
    await prisma.userBorrowTool.updateMany({
      where: {
        id: {
          in: userBorrowToolIds,
        },
      },
      data: {
        name: editedTool.name,
        partName: editedTool.partName,
        category: editedTool.category,
        position: editedTool.position,
        figure: editedTool.photoLink,
        remain: editedTool.remain,
      },
    });

    pubsub.publish("TOOL_UPDATED", { ToolUpdated: editedTool });
    return editedTool;
  },

  ToolUsageUpdate: async (
    _parents,
    args: { id: string; toolUsageUpdateInput: ToolUsageUpdateInput },
    _contexts,
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
    args: { id: string },
    _contexts,
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
    args: { id: string; disposableMaterialInput: DisposableMaterialInput },
    _contexts,
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
      id: string;
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

  DeleteMachine: async (_parents, args: { id: string }, _contexts) => {
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
    args: { id: string; machineInput: MachineInput },
    _contexts,
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
    _contexts,
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
        materialLikeIds: [],
        userBorrowMaterialIds: [],
      },
    });
    pubsub.publish("MATERIAL_CREATED", { MaterialCreated: newMaterial });
    return newMaterial;
  },

  DeleteMaterial: async (_parents, args: { id: string }, _contexts) => {
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
    args: { id: string; materialInput: MaterialInput },
    _contexts,
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

    // update userBorrowMaterials
    const userBorrowMaterialIds = editMaterial.userBorrowMaterialIds;
    await prisma.userBorrowMaterial.updateMany({
      where: {
        id: {
          in: userBorrowMaterialIds,
        },
      },
      data: {
        name: editMaterial.name,
        partName: editMaterial.partName,
        category: editMaterial.category,
        position: editMaterial.position,
        figure: editMaterial.photoLink,
        remain: editMaterial.remain,
      },
    });

    pubsub.publish("MATERIAL_UPDATED", { MaterialUpdated: editMaterial });
    return editMaterial;
  },

  MaterialUsageUpdate: async (
    _parents,
    args: { id: string; materialUsageUpdateInput: MaterialUsageUpdateInput },
    _contexts,
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
    _contexts,
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

  DeleteThreeDP: async (_parents, args: { id: string }, _contexts) => {
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
    args: { id: string; threeDPInput: ThreeDPInput },
    _contexts,
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

  AddUser: async (_parents, args: { userInput: UserInput }, _contexts) => {
    const {
      name,
      studentID,
      password,
      photoLink,
      language,
      laserCutAvailable,
      isAdmin,
      isMinister,
    } = args.userInput;

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
        threeDPId: null,
        laserCutAvailable: laserCutAvailable,
        isAdmin: isAdmin,
        isMinister: isMinister,
        toolLikeIds: [],
        userBorrowToolIds: [],
        materialLikeIds: [],
        userBorrowMaterialIds: [],
      },
    });

    pubsub.publish("USER_CREATED", { UserCreated: newUser });
    return newUser;
  },

  DeleteUser: async (_parents, args: { id: string }, _contexts) => {
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
      await prisma.threeDP.update({
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
    args: { id: string; userEditInput: UserEditInput },
    _contexts,
  ) => {
    const id = args.id;
    const { name, studentID, photoLink, language, password } =
      args.userEditInput;

    const findUser = await prisma.user.findUnique({
      where: {
        id: id,
      },
    });

    if (!findUser) {
      throw new Error("User not found!");
    }

    const validatePassword = await bcrypt.compare(password, findUser.password);
    if (!validatePassword) {
      throw new Error("Password is incorrect!");
    }

    const updateUser = await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        name: name,
        studentID: studentID,
        photoLink: photoLink,
        language: language,
      },
    });

    const userBorrowToolIds = findUser.userBorrowToolIds;
    // update userBorrowTools
    await prisma.userBorrowTool.updateMany({
      where: {
        id: {
          in: userBorrowToolIds,
        },
      },
      data: {
        borrower: updateUser.name,
        studentId: updateUser.studentID,
      },
    });

    const userBorrowMaterialIds = findUser.userBorrowMaterialIds;
    // update userBorrowMaterials
    await prisma.userBorrowMaterial.updateMany({
      where: {
        id: {
          in: userBorrowMaterialIds,
        },
      },
      data: {
        borrower: updateUser.name,
        studentId: updateUser.studentID,
      },
    });

    pubsub.publish("USER_UPDATED", { UserUpdated: updateUser });
    return updateUser;
  },

  EditUserPassword: async (
    _parents,
    args: { id: string; userPasswordEditInput: UserPasswordEditInput },
    _contexts,
  ) => {
    const costFactor = 12;
    const { id, userPasswordEditInput } = args;
    const { originalPassword, newPassword } = userPasswordEditInput;
    const findUser = await prisma.user.findFirst({
      where: {
        id: id,
      },
    });
    if (!findUser) {
      throw new Error("user not found!");
    }
    const comparePassword = await bcrypt.compare(
      originalPassword,
      findUser.password,
    );
    if (!comparePassword) {
      throw new Error("original password is incorrect!");
    }
    const salt = await bcrypt.genSalt(costFactor);
    const hashedPassword = await bcrypt.hash(newPassword, salt);
    const updateUser = await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        password: hashedPassword,
      },
    });
    pubsub.publish("USER_UPDATED", { UserUpdated: updateUser });
    return updateUser;
  },

  PromoteUser: async (
    _parents,
    args: { id: string; promoteUserInput: PromoteUserInput },
    _contexts,
  ) => {
    const { id, promoteUserInput } = args;
    const { authorizedCode, password, isAdmin } = promoteUserInput;
    // check authorized code existence
    const existence = await prisma.authorizedCode.findFirst();
    if (!existence) {
      throw new Error("Authorized code not found!");
    }
    const codeList = existence.codeList;
    if (!codeList.includes(authorizedCode)) {
      throw new Error("Authorized code does not exist!");
    }

    // check user existence
    const findUser = await prisma.user.findFirst({
      where: {
        id: id,
      },
    });
    if (!findUser) {
      throw new Error("User not found!");
    }

    // check password correctness
    const comparedPassword = await bcrypt.compare(password, findUser.password);
    if (!comparedPassword) {
      throw new Error("Password is incorrect!");
    }

    if (isAdmin) {
      const promotedUser = await prisma.user.update({
        where: {
          id: id,
        },
        data: {
          isMinister: true,
        },
      });
      pubsub.publish("USER_UPDATED", { UserUpdated: promotedUser });
      return promotedUser;
    } else {
      const promotedUser = await prisma.user.update({
        where: {
          id: id,
        },
        data: {
          isAdmin: true,
        },
      });
      pubsub.publish("USER_UPDATED", { UserUpdated: promotedUser });
      return promotedUser;
    }
  },

  DemoteUser: async (
    _parents,
    args: { id: string; demoteUserInput: DemoteUserInput },
    _contexts,
  ) => {
    const { id, demoteUserInput } = args;
    const { studentID, password, isMinister } = demoteUserInput;

    // check my existence
    const user = await prisma.user.findFirst({
      where: {
        id: id,
      },
    });

    if (!user) {
      throw new Error("User not found!");
    }

    // check my password
    const comparedPassword = await bcrypt.compare(password, user.password);
    if (!comparedPassword) {
      throw new Error("Password is incorrect!");
    }

    // check target existence
    const target = await prisma.user.findFirst({
      where: {
        studentID: studentID,
      },
    });

    if (!target) {
      throw new Error("Target not found!");
    }

    if (isMinister) {
      const demotedUser = await prisma.user.update({
        where: {
          studentID: studentID,
        },
        data: {
          isMinister: false,
        },
      });
      pubsub.publish("USER_UPDATED", { UserUpdated: demotedUser });
      return demotedUser;
    } else {
      const demotedUser = await prisma.user.update({
        where: {
          studentID: studentID,
        },
        data: {
          isAdmin: false,
        },
      });
      pubsub.publish("USER_UPDATED", { UserUpdated: demotedUser });
      return demotedUser;
    }
  },

  UserMachineUsageUpdate: async (
    _parents,
    args: { id: string; userMachineUpdateInput: UserMachineUpdateInput },
    _contexts,
  ) => {
    const id = args.id;
    const { threeDPId, laserCutAvailable } = args.userMachineUpdateInput;
    const findUser = await prisma.user.findFirst({
      where: {
        id: id,
      },
    });
    if (!findUser) {
      throw new Error("User not found!");
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
          throw new Error("Old threeDP not found!");
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
          throw new Error("Update old threeDP failed!");
        }
      }

      if (threeDPId !== null) {
        const newThreeDP = await prisma.threeDP.findFirst({
          where: {
            id: threeDPId,
          },
        });
        if (!newThreeDP) {
          throw new Error("New threeDP not found!");
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
          throw new Error("Update new threeDP failed!");
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
    _contexts,
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

    await prisma.user.update({
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

  UpdateAuthorizedCode: async (
    _parents,
    args: { authorizedCodeInput: AuthorizedCodeInput },
    _contexts,
  ) => {
    const existence = await prisma.authorizedCode.findFirst();
    const { codeList } = args.authorizedCodeInput;

    let updateAuthorizedCode = {};

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

  SignUp: async (_parents, args: { signUpInput: SignUpInput }, _contexts) => {
    const costFactor = 12;
    const {
      name,
      studentID,
      password,
      photoLink,
      language,
      laserCutAvailable,
      isAdmin,
      isMinister,
    } = args.signUpInput;

    const studentIDExisted = await prisma.user.findFirst({
      where: {
        studentID: studentID,
      },
    });

    if (studentIDExisted !== null) {
      throw new Error("This student id is already registered!");
    } else {
      const salt = await bcrypt.genSalt(costFactor);
      const hashedpassword = await bcrypt.hash(password, salt);
      const newUser = await prisma.user.create({
        data: {
          name: name,
          studentID: studentID,
          password: hashedpassword,
          photoLink: photoLink,
          language: language,
          threeDPId: null,
          laserCutAvailable: laserCutAvailable,
          isAdmin: isAdmin,
          isMinister: isMinister,
          toolLikeIds: [],
          userBorrowToolIds: [],
          materialLikeIds: [],
          userBorrowMaterialIds: [],
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
          userBorrowToolIds: newUser.userBorrowToolIds,
          materialLikeIds: newUser.materialLikeIds,
          userBorrowMaterialIds: newUser.userBorrowMaterialIds,
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

  // SignupAuthCode
  AddSignupAuthCode: async (
    _parents,
    args: { signupAuthCodeInput: SignupAuthCodeInput },
    _contexts,
  ) => {
    const { studentID, browser, os, time, timeZone, date } =
      args.signupAuthCodeInput;

    const authCode = Math.floor(100000 + Math.random() * 900000).toString();
    const email = `${studentID.toLowerCase()}@ntu.edu.tw`;
    const accountName = env.EMAIL_ACCOUNT_NAME;
    const user = env.EMAIL_USER;
    const pass = env.EMAIL_PASS;
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: user,
        pass: pass,
      },
    });

    const mailOptions = {
      from: `${accountName} <${user}>`,
      to: email,
      subject: "Your Authentication Code of VMKS for Signup",
      html: `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Signup Code</title>
            <style>
              body {
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
                margin: 0;
                padding: 0;
                color: #333333;
              }
              .email-container {
                max-width: 600px;
                margin: 0 auto;
                background-color: #ffffff;
                padding: 20px;
                border-radius: 8px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
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
              .code-container {
                text-align: center;
                margin: 30px 0;
                font-size: 36px;
                font-weight: bold;
                color: #333333;
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
            </style>
          </head>
          <body>
            <div class="email-container">
              <div class="header">
                <img src="https://avatars.githubusercontent.com/u/138299847?s=200&v=4" alt="logo">
                <h1>
                  <b>Signup Auth Code</b>
                </h1>
              </div>
              <div class="code-container">
                ${authCode}
              </div>
              <div class="footer">
                <p>This signup was requested using <strong>${browser}, ${os}</strong> at <strong>${time} ${timeZone} on ${date}</strong>.</p>
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

    const findSignupAuthCode = await prisma.signupAuthCode.findFirst({
      where: {
        studentID: studentID,
      },
    });
    if (findSignupAuthCode) {
      const updatedSignupAuthCode = await prisma.signupAuthCode.update({
        where: {
          id: findSignupAuthCode.id,
        },
        data: {
          code: authCode,
        },
      });
      return updatedSignupAuthCode;
    } else {
      const newSignupAuthCode = await prisma.signupAuthCode.create({
        data: {
          studentID: studentID,
          code: authCode,
        },
      });
      return newSignupAuthCode;
    }
  },

  // ToolLike
  AddToolLike: async (
    _parents,
    args: { toolLikeInput: ToolLikeInput },
    _contexts,
  ) => {
    const { userId, toolId } = args.toolLikeInput;
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
    if (!user) {
      throw new Error("User not found!");
    }

    const tool = await prisma.tool.findUnique({
      where: {
        id: toolId,
      },
    });

    if (!tool) {
      throw new Error("Tool not found!");
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
    _contexts,
  ) => {
    const { userId, toolId } = args.toolLikeInput;
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
    if (!user) {
      throw new Error("User not found!");
    }

    const tool = await prisma.tool.findUnique({
      where: {
        id: toolId,
      },
    });

    if (!tool) {
      throw new Error("Tool not found!");
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
    args: { id: string; language: string },
    _contexts,
  ) => {
    const { id, language } = args;
    const findUser = await prisma.user.findFirst({
      where: {
        id: id,
      },
    });
    if (!findUser) {
      throw new Error("User not found!");
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

  // UserBorrowTool
  AddUserBorrowTool: async (
    _parents,
    args: { userBorrowToolInput: UserBorrowToolInput },
    _contexts,
  ) => {
    const { userId, toolId, quantity } = args.userBorrowToolInput;
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
    if (!user) {
      throw new Error("User not found!");
    }

    const tool = await prisma.tool.findUnique({
      where: {
        id: toolId,
      },
    });

    if (!tool) {
      throw new Error("Tool not found!");
    }

    // update tool
    const remain = tool.remain - quantity;
    const usage = tool.usage + quantity;
    await prisma.tool.update({
      where: {
        id: toolId,
      },
      data: {
        remain,
        usage,
      },
    });

    const newUserBorrowTool = await prisma.userBorrowTool.create({
      data: {
        userId: userId,
        toolId: toolId,
        borrower: user.name,
        studentId: user.studentID,
        figure: tool.photoLink,
        name: tool.name,
        partName: tool.partName,
        category: tool.category,
        remain: remain,
        position: tool.position,
        quantity,
      },
    });

    await prisma.tool.update({
      where: {
        id: toolId,
      },
      data: {
        userBorrowToolIds: [...tool.userBorrowToolIds, newUserBorrowTool.id],
      },
    });

    await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        userBorrowToolIds: [...user.userBorrowToolIds, newUserBorrowTool.id],
      },
    });

    return newUserBorrowTool;
  },

  DeleteUserBorrowTool: async (_parents, args: { id: string }, _contexts) => {
    const id = args.id;
    const userBorrowTool = await prisma.userBorrowTool.findFirst({
      where: {
        id: id,
      },
    });

    if (!userBorrowTool) {
      throw new Error("User Borrow Tool Not Found");
    }

    const user = await prisma.user.findUnique({
      where: {
        id: userBorrowTool.userId,
      },
    });

    const tool = await prisma.tool.findUnique({
      where: {
        id: userBorrowTool.toolId,
      },
    });

    const remain = tool.remain + userBorrowTool.quantity;
    await prisma.tool.update({
      where: {
        id: userBorrowTool.toolId,
      },
      data: {
        remain,
      },
    });

    const deleteUserBorrowTool = await prisma.userBorrowTool.delete({
      where: {
        id: id,
      },
    });

    await prisma.tool.update({
      where: {
        id: userBorrowTool.toolId,
      },
      data: {
        userBorrowToolIds: {
          set: tool.userBorrowToolIds.filter((id) => id !== userBorrowTool.id),
        },
      },
    });

    await prisma.user.update({
      where: {
        id: userBorrowTool.userId,
      },
      data: {
        userBorrowToolIds: {
          set: user.userBorrowToolIds.filter((id) => id !== userBorrowTool.id),
        },
      },
    });

    return deleteUserBorrowTool;
  },

  EditUserBorrowToolQuantity: async (
    _parents,
    args: { id: string; userBorrowToolInput: UserBorrowToolInput },
    _contexts,
  ) => {
    const { id, userBorrowToolInput } = args;
    const { toolId, quantity } = userBorrowToolInput;
    // new quantity
    const userBorrowTool = await prisma.userBorrowTool.findFirst({
      where: {
        id: id,
      },
    });

    if (!userBorrowTool) {
      throw new Error("User Borrow Tool Not Found");
    }

    const tool = await prisma.tool.findUnique({
      where: {
        id: toolId,
      },
    });

    const remain = tool.remain + userBorrowTool.quantity - quantity;
    const usage = tool.usage + quantity - userBorrowTool.quantity;
    await prisma.tool.update({
      where: {
        id: userBorrowTool.toolId,
      },
      data: {
        remain,
        usage,
      },
    });

    const editUserBorrowTool = await prisma.userBorrowTool.update({
      where: {
        id: id,
      },
      data: {
        quantity: quantity,
        remain: remain,
      },
    });

    return editUserBorrowTool;
  },

  EditUserBorrowToolStatus: async (
    _parents,
    args: { id: string; status: string },
    _contexts,
  ) => {
    const { id, status } = args;
    const userBorrowTool = await prisma.userBorrowTool.findFirst({
      where: {
        id: id,
      },
    });

    if (!userBorrowTool) {
      throw new Error("User Borrow Tool Not Found");
    }

    const editUserBorrowTool = await prisma.userBorrowTool.update({
      where: {
        id: id,
      },
      data: {
        status: status,
      },
    });

    if (status === "Returned") {
      await prisma.tool.update({
        where: {
          id: userBorrowTool.toolId,
        },
        data: {
          remain: userBorrowTool.remain + userBorrowTool.quantity,
        },
      });
      // update userBorrowTool's returnDate
      await prisma.userBorrowTool.update({
        where: {
          id: id,
        },
        data: {
          returnDate: new Date().toLocaleString(),
        },
      });
    } else if (status === "Success") {
      // update userBorrowTool's borrowDate
      await prisma.userBorrowTool.update({
        where: {
          id: id,
        },
        data: {
          borrowDate: new Date().toLocaleString(),
        },
      });
    }

    return editUserBorrowTool;
  },

  // MaterialLike
  AddMaterialLike: async (
    _parents,
    args: { materialLikeInput: MaterialLikeInput },
    _contexts,
  ) => {
    const { userId, materialId } = args.materialLikeInput;
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
    if (!user) {
      throw new Error("User Not Found");
    }

    const material = await prisma.material.findUnique({
      where: {
        id: materialId,
      },
    });

    if (!material) {
      throw new Error("Material Not Found");
    }

    const newMaterialLike = await prisma.materialLike.create({
      data: {
        userId: userId,
        materialId: materialId,
      },
    });

    // update material
    await prisma.material.update({
      where: {
        id: materialId,
      },
      data: {
        materialLikeIds: [...material.materialLikeIds, newMaterialLike.id],
      },
    });

    // update user
    await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        materialLikeIds: [...user.materialLikeIds, newMaterialLike.id],
      },
    });

    return newMaterialLike;
  },

  DeleteMaterialLike: async (
    _parents,
    args: { materialLikeInput: MaterialLikeInput },
    _contexts,
  ) => {
    const { userId, materialId } = args.materialLikeInput;
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
    if (!user) {
      throw new Error("User Not Found");
    }

    const material = await prisma.material.findUnique({
      where: {
        id: materialId,
      },
    });

    if (!material) {
      throw new Error("Material Not Found");
    }

    // Find the intersection of user.materialLikeIds and material.materialLikedIds
    const materialLikeId = user.materialLikeIds.find((id) =>
      material.materialLikeIds.includes(id),
    );

    const deleteMaterialLike = await prisma.materialLike.delete({
      where: { id: materialLikeId },
    });

    // Update user.materialLikeIds and material.materialLikeIds
    await prisma.user.update({
      where: { id: userId },
      data: {
        materialLikeIds: {
          set: user.materialLikeIds.filter((id) => id !== materialLikeId),
        },
      },
    });

    await prisma.material.update({
      where: { id: materialId },
      data: {
        materialLikeIds: {
          set: material.materialLikeIds.filter((id) => id !== materialLikeId),
        },
      },
    });

    return deleteMaterialLike;
  },

  // UserBorrowMaterial
  AddUserBorrowMaterial: async (
    _parents,
    args: { userBorrowMaterialInput: UserBorrowMaterialInput },
    _contexts,
  ) => {
    const { userId, materialId, quantity } = args.userBorrowMaterialInput;
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
    if (!user) {
      throw new Error("User Not Found");
    }

    const material = await prisma.material.findUnique({
      where: {
        id: materialId,
      },
    });

    if (!material) {
      throw new Error("Material Not Found");
    }

    // update material
    const remain = material.remain - quantity;
    const usage = material.usage + quantity;
    await prisma.material.update({
      where: {
        id: materialId,
      },
      data: {
        remain,
        usage,
      },
    });

    const newUserBorrowMaterial = await prisma.userBorrowMaterial.create({
      data: {
        userId: userId,
        materialId: materialId,
        borrower: user.name,
        studentId: user.studentID,
        figure: material.photoLink,
        name: material.name,
        partName: material.partName,
        category: material.category,
        remain: remain,
        position: material.position,
        quantity,
      },
    });

    await prisma.material.update({
      where: {
        id: materialId,
      },
      data: {
        userBorrowMaterialIds: [
          ...material.userBorrowMaterialIds,
          newUserBorrowMaterial.id,
        ],
      },
    });

    await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        userBorrowMaterialIds: [
          ...user.userBorrowMaterialIds,
          newUserBorrowMaterial.id,
        ],
      },
    });

    return newUserBorrowMaterial;
  },

  DeleteUserBorrowMaterial: async (
    _parents,
    args: { id: string },
    _contexts,
  ) => {
    const id = args.id;
    const userBorrowMaterial = await prisma.userBorrowMaterial.findFirst({
      where: {
        id: id,
      },
    });

    if (!userBorrowMaterial) {
      throw new Error("User Borrow Material Not Found");
    }

    const user = await prisma.user.findUnique({
      where: {
        id: userBorrowMaterial.userId,
      },
    });

    const material = await prisma.material.findUnique({
      where: {
        id: userBorrowMaterial.materialId,
      },
    });

    const remain = material.remain + userBorrowMaterial.quantity;
    await prisma.material.update({
      where: {
        id: userBorrowMaterial.materialId,
      },
      data: {
        remain,
      },
    });

    const deleteUserBorrowMaterial = await prisma.userBorrowMaterial.delete({
      where: {
        id: id,
      },
    });

    await prisma.material.update({
      where: {
        id: userBorrowMaterial.materialId,
      },
      data: {
        userBorrowMaterialIds: {
          set: material.userBorrowMaterialIds.filter(
            (id) => id !== userBorrowMaterial.id,
          ),
        },
      },
    });

    await prisma.user.update({
      where: {
        id: userBorrowMaterial.userId,
      },
      data: {
        userBorrowMaterialIds: {
          set: user.userBorrowMaterialIds.filter(
            (id) => id !== userBorrowMaterial.id,
          ),
        },
      },
    });

    return deleteUserBorrowMaterial;
  },

  EditUserBorrowMaterialQuantity: async (
    _parents,
    args: { id: string; userBorrowMaterialInput: UserBorrowMaterialInput },
    _contexts,
  ) => {
    const { id, userBorrowMaterialInput } = args;
    const { materialId, quantity } = userBorrowMaterialInput;
    // new quantity
    const userBorrowMaterial = await prisma.userBorrowMaterial.findFirst({
      where: {
        id: id,
      },
    });

    if (!userBorrowMaterial) {
      throw new Error("User Borrow Material Not Found");
    }

    const material = await prisma.material.findUnique({
      where: {
        id: materialId,
      },
    });

    const remain = material.remain + userBorrowMaterial.quantity - quantity;
    const usage = material.usage + quantity - userBorrowMaterial.quantity;
    await prisma.material.update({
      where: {
        id: userBorrowMaterial.materialId,
      },
      data: {
        remain,
        usage,
      },
    });

    const editUserBorrowMaterial = await prisma.userBorrowMaterial.update({
      where: {
        id: id,
      },
      data: {
        quantity: quantity,
        remain: remain,
      },
    });

    return editUserBorrowMaterial;
  },

  EditUserBorrowMaterialStatus: async (
    _parents,
    args: { id: string; status: string },
    _contexts,
  ) => {
    const { id, status } = args;
    const userBorrowMaterial = await prisma.userBorrowMaterial.findFirst({
      where: {
        id: id,
      },
    });

    if (!userBorrowMaterial) {
      throw new Error("User Borrow Material Not Found");
    }

    const editUserBorrowMaterial = await prisma.userBorrowMaterial.update({
      where: {
        id: id,
      },
      data: {
        status: status,
      },
    });

    if (status === "Returned") {
      await prisma.material.update({
        where: {
          id: userBorrowMaterial.materialId,
        },
        data: {
          remain: userBorrowMaterial.remain + userBorrowMaterial.quantity,
        },
      });
      // update userBorrowMaterial's returnDate
      await prisma.userBorrowMaterial.update({
        where: {
          id: id,
        },
        data: {
          returnDate: new Date().toLocaleString(),
        },
      });
    } else if (status === "Success") {
      // update userBorrowMaterial's borrowDate
      await prisma.userBorrowMaterial.update({
        where: {
          id: id,
        },
        data: {
          borrowDate: new Date().toLocaleString(),
        },
      });
    }

    return editUserBorrowMaterial;
  },

  // AdminSchedule
  AddAdminSchedule: async (
    _parents,
    args: { adminScheduleInput: AdminScheduleInput },
    _contexts,
  ) => {
    const { admin, day, period } = args.adminScheduleInput;
    const newAdminSchedule = await prisma.adminSchedule.create({
      data: {
        admin,
        day,
        period,
      },
    });

    return newAdminSchedule;
  },

  DeleteAdminSchedule: async (_parents, args: { id: string }, _contexts) => {
    const id = args.id;
    const deleteAdminSchedule = await prisma.adminSchedule.delete({
      where: {
        id: id,
      },
    });

    return deleteAdminSchedule;
  },

  EditAdminSchedule: async (
    _parents,
    args: { id: string; name: string },
    _contexts,
  ) => {
    const { id, name } = args;
    const findAdminSchedule = await prisma.adminSchedule.findFirst({
      where: {
        id: id,
      },
    });
    if (!findAdminSchedule) {
      throw new Error("Admin Schedule Not Found");
    }

    const editAdminSchedule = await prisma.adminSchedule.update({
      where: {
        id: id,
      },
      data: {
        admin: name,
      },
    });

    return editAdminSchedule;
  },
};

export { Mutation };
