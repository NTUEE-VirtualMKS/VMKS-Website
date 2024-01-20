import { prisma } from "../../prisma/client.ts";
import { pubsub } from "../PubSub/pubsub.ts";
import {
  AnnouncementInput,
  ToolInput,
  ToolUsageUpdateInput,
  DisposableMaterialInput,
  DisposableMaterialUsageUpdateInput,
  MachineInput,
  MaterialInput,
  MaterialUsageUpdateInput,
  UserMaterialInput,
  UserMaterialEditInput,
  ThreeDPInput,
  UserInput,
  UserEditInput,
  UserMachineUpdateInput,
  ArticleInput,
} from "../types/types.ts";

const Mutation = {
  AddAnnouncement: async (
    _parents,
    args: { announcementInput: AnnouncementInput },
    context,
  ) => {
    const { title, content } = args.announcementInput;
    const date = new Date().toUTCString();
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

  DeleteAnnouncement: async (_parents, args: { id: number }, context) => {
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
    context,
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

  AddTool: async (_parents, args: { toolInput: ToolInput }, context) => {
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
      },
    });
    pubsub.publish("TOOL_CREATED", { ToolCreated: newTool });
    return newTool;
  },

  DeleteTool: async (_parents, args: { id: number }, context) => {
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
    context,
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
    context,
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
    context,
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

  DeleteDisposableMaterial: async (parent, args: { id: number }, context) => {
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
    parents,
    args: { id: number; disposableMaterialInput: DisposableMaterialInput },
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
    parent,
    args: {
      id: number;
      disposableMaterialUsageUpdateInput: DisposableMaterialUsageUpdateInput;
    },
    content,
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
    content,
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

  DeleteMachine: async (_parents, args: { id: number }, context) => {
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
    context,
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
    context,
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

  DeleteMaterial: async (_parents, args: { id: number }, context) => {
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
    context,
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
    context,
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
    context,
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

  DeleteThreeDP: async (_parents, args: { id: number }, context) => {
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
    context,
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

  AddUserMaterial: async (
    _parents,
    args: { userMaterialInput: UserMaterialInput },
    context,
  ) => {
    const { name, partName, borrowerId, borrowNum, status } =
      args.userMaterialInput;
    const findBorrower = await prisma.user.findFirst({
      where: {
        id: borrowerId,
      },
    });
    if (!findBorrower) {
      throw new Error("Borrower not found!");
    }

    const borrowDate = new Date().toUTCString();
    const newUserMaterial = await prisma.userMaterial.create({
      data: {
        name: name,
        partName: partName,
        borrowerId: borrowerId,
        borrowNum: borrowNum,
        borrowDate: borrowDate,
        returnDate: null,
        status: status,
      },
    });

    const updateBorrowHistory = await prisma.user.update({
      where: {
        id: borrowerId,
      },
      data: {
        borrowHistoryId: { push: newUserMaterial.id },
      },
    });
    pubsub.publish("USERMATERIAL_CREATED", {
      UserMaterialCreated: newUserMaterial,
    });
    return newUserMaterial;
  },

  // maybe useless
  DeleteUserMaterial: async (_parents, args: { id: number }, context) => {
    const id = args.id;
    const findUserMaterial = await prisma.userMaterial.findFirst({
      where: {
        id: id,
      },
    });
    if (!findUserMaterial) {
      throw new Error("User Material Not Found");
    }

    // delete UserMaterial in User.borrowHistoryId
    const userId = findUserMaterial.borrowerId;
    const borrower = await prisma.user.findFirst({
      where: {
        id: userId,
      },
    });
    const borrowHistoryID = borrower.borrowHistoryId;
    const index = borrowHistoryID.indexOf(id);
    borrowHistoryID.splice(index, 1);
    const updateBorrower = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        borrowHistoryId: borrowHistoryID,
      },
    });

    const DeleteUserMaterial = await prisma.userMaterial.delete({
      where: {
        id: id,
      },
    });
    pubsub.publish("USERMATERIAL_DELETED", {
      UserMaterialDeleted: DeleteUserMaterial,
    });
    return DeleteUserMaterial;
  },

  EditUserMaterial: async (
    _parents,
    args: { id: number; userMaterialEditInput: UserMaterialEditInput },
    context,
  ) => {
    const id = args.id;
    const {
      name,
      partName,
      borrowerId,
      borrowNum,
      borrowDate,
      returnDate,
      status,
    } = args.userMaterialEditInput;
    const findUserMaterial = await prisma.userMaterial.findFirst({
      where: {
        id: id,
      },
    });
    if (!findUserMaterial) {
      throw new Error("userMaterial not found!");
    }

    const oldBorrowerId = findUserMaterial.borrowerId;
    if (!borrowerId || !oldBorrowerId) {
      throw new Error("id not found!");
    }
    if (borrowerId !== oldBorrowerId) {
      const oldUser = await prisma.user.findFirst({
        where: {
          id: oldBorrowerId,
        },
      });
      if (!oldUser) {
        throw new Error("old user not found!");
      }
      const borrowHistoryID = oldUser.borrowHistoryId;
      const index = borrowHistoryID.indexOf(id);
      borrowHistoryID.splice(index, 1);
      const updateOldUser = await prisma.user.update({
        where: {
          id: oldBorrowerId,
        },
        data: {
          borrowHistoryId: borrowHistoryID,
        },
      });
      if (!updateOldUser) {
        throw new Error("update old user failed!");
      }

      const newUser = await prisma.user.findFirst({
        where: {
          id: borrowerId,
        },
      });
      if (!newUser) {
        throw new Error("new user not found!");
      }
      const newBorrowHistoryID = newUser.borrowHistoryId;
      newBorrowHistoryID.push(id);
      const updateNewUser = await prisma.user.update({
        where: {
          id: borrowerId,
        },
        data: {
          borrowHistoryId: newBorrowHistoryID,
        },
      });
      if (!updateNewUser) {
        throw new Error("update new user failed!");
      }
    }

    const updateUserMaterial = await prisma.userMaterial.update({
      where: {
        id: id,
      },
      data: {
        name: name,
        partName: partName,
        borrowerId: borrowerId,
        borrowNum: borrowNum,
        borrowDate: borrowDate,
        returnDate: returnDate,
        status: status,
      },
    });
    pubsub.publish("USERMATERIAL_UPDATED", {
      UserMaterialUpdated: updateUserMaterial,
    });
    return updateUserMaterial;
  },

  AddUser: async (_parents, args: { userInput: UserInput }, context) => {
    const {
      name,
      studentID,
      password,
      photoLink,
      threeDPId,
      laserCutAvailable,
      isAdmin,
    } = args.userInput;
    if (threeDPId) {
      const findThreeDP = await prisma.threeDP.findFirst({
        where: {
          id: threeDPId,
        },
      });

      if (!findThreeDP) {
        throw new Error("threeDP ID not found!");
      }
    }

    const newUser = await prisma.user.create({
      data: {
        name: name,
        studentID: studentID,
        password: password,
        photoLink: photoLink,
        threeDPId: threeDPId,
        laserCutAvailable: laserCutAvailable,
        borrowHistoryId: [],
        isAdmin: isAdmin,
      },
    });

    if (threeDPId) {
      const updateWaiting = await prisma.threeDP.update({
        where: {
          id: threeDPId,
        },
        data: {
          waitingId: { push: newUser.id },
        },
      });
    }
    pubsub.publish("USER_CREATED", { UserCreated: newUser });
    return newUser;
  },

  DeleteUser: async (_parents, args: { id: number }, context) => {
    const id = args.id;
    const findUser = await prisma.user.findFirst({
      where: {
        id: id,
      },
    });
    if (!findUser) {
      throw new Error(`User With id: ${id} Not Found`);
    }

    // checks if any userMaterial is linked to this user instead of checking if the
    // borrowHistory is empty is to minimize and simplify input variables
    const findNotReturnedMaterials = await prisma.userMaterial.findMany({
      where: {
        borrowerId: id,
      },
    });
    if (findNotReturnedMaterials.length !== 0) {
      throw new Error("There are materials lent by this user");
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
    context,
  ) => {
    const id = args.id;
    const { name, studentID, password, photoLink, isAdmin } =
      args.userEditInput;
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
        isAdmin: isAdmin,
      },
    });
    pubsub.publish("USER_UPDATED", { UserUpdated: updateUser });
    return updateUser;
  },

  UserMachineUsageUpdate: async (
    _parents,
    args: { id: number; userMachineUpdateInput: UserMachineUpdateInput },
    context,
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
    _parents: any,
    args: { articleInput: ArticleInput },
    context: any,
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

    const date = new Date().toUTCString();
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
};

export { Mutation };
