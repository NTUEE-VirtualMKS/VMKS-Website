import { pubsub } from "../PubSub/pubsub.ts";

const Subscription = {
  AnnouncementCreated: {
    subscribe: () => pubsub.asyncIterator(["ANNOUNCEMENT_CREATED"]),
  },
  AnnouncementDeleted: {
    subscribe: () => pubsub.asyncIterator(["ANNOUNCEMENT_DELETED"]),
  },
  AnnouncementUpdated: {
    subscribe: () => pubsub.asyncIterator(["ANNOUNCEMENT_UPDATED"]),
  },
  ToolCreated: {
    subscribe: () => pubsub.asyncIterator(["TOOL_CREATED"]),
  },
  ToolDeleted: {
    subscribe: () => pubsub.asyncIterator(["TOOL_DELETED"]),
  },
  ToolUpdated: {
    subscribe: () => pubsub.asyncIterator(["TOOL_UPDATED"]),
  },
  DisposableMaterialCreated: {
    subscribe: () => pubsub.asyncIterator(["DISPOSABLEMATERIAL_CREATED"]),
  },
  DisposableMaterialDeleted: {
    subscribe: () => pubsub.asyncIterator(["DISPOSABLEMATERIAL_DELETED"]),
  },
  DisposableMaterialUpdated: {
    subscribe: () => pubsub.asyncIterator(["DISPOSABLEMATERIAL_UPDATED"]),
  },
  MachineCreated: {
    subscribe: () => pubsub.asyncIterator(["MACHINE_CREATED"]),
  },
  MachineDeleted: {
    subscribe: () => pubsub.asyncIterator(["MACHINE_DELETED"]),
  },
  MachineUpdated: {
    subscribe: () => pubsub.asyncIterator(["MACHINE_UPDATED"]),
  },
  MaterialCreated: {
    subscribe: () => pubsub.asyncIterator(["MATERIAL_CREATED"]),
  },
  MaterialDeleted: {
    subscribe: () => pubsub.asyncIterator(["MATERIAL_DELETED"]),
  },
  MaterialUpdated: {
    subscribe: () => pubsub.asyncIterator(["MATERIAL_UPDATED"]),
  },
  ThreeDPCreated: {
    subscribe: () => pubsub.asyncIterator(["THREEDP_CREATED"]),
  },
  ThreeDPDeleted: {
    subscribe: () => pubsub.asyncIterator(["THREEDP_DELETED"]),
  },
  ThreeDPUpdated: {
    subscribe: () => pubsub.asyncIterator("THREEDP_UPDATED"),
  },
  UserMaterialCreated: {
    subscribe: () => pubsub.asyncIterator(["USERMATERIAL_CREATED"]),
  },
  UserMaterialDeleted: {
    subscribe: () => pubsub.asyncIterator(["USERMATERIAL_DELETED"]),
  },
  UserMaterialUpdated: {
    subscribe: () => pubsub.asyncIterator(["USERMATERIAL_UPDATED"]),
  },
  UserCreated: {
    subscribe: () => pubsub.asyncIterator(["USER_CREATED"]),
  },
  UserDeleted: {
    subscribe: () => pubsub.asyncIterator(["USER_DELETED"]),
  },
  UserUpdated: {
    subscribe: () => pubsub.asyncIterator(["USER_UPDATED"]),
  },
  UserMachineUpdate: {
    subscribe: () => pubsub.asyncIterator(["USERMACHINE_UPDATE"]),
  },
  ArticleCreated: {
    subscribe: () => pubsub.asyncIterator(["ARTICLE_CREATED"]),
  },
  IntroductionCreated: {
    subscribe: () => pubsub.asyncIterator(["INTRODUCTION_CREATED"]),
  },
  IntroductionUpdated: {
    subscribe: () => pubsub.asyncIterator(["INTRODUCTION_UPDATED"]),
  },
};

export { Subscription };
