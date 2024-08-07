// TODO: some id's type: number to string
import { GraphQLScalarType, Kind } from "graphql";

const DateTime = new GraphQLScalarType({
  name: "DateTime",
  description: "DateTime custom scalar type",
  async serialize(value) {
    if (value instanceof Date) {
      return value.getTime(); // Convert outgoing Date to integer for JSON
    }
    throw Error("GraphQL Date Scalar serializer expected a Date object");
  },
  async parseValue(value) {
    if (typeof value === "number") {
      return new Date(value); // Convert incoming integer to Date
    }
    throw new Error("GraphQL Date Scalar parser expected a number");
  },
  async parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      // Convert hard-coded AST string to integer and then to Date
      return new Date(parseInt(ast.value, 10));
    }
    // Invalid hard-coded value (not an integer)
    return null;
  },
});

const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  ### Define Data Structure ###

  scalar DateTime

  input AnnouncementInput {
    title: String!
    content: String!
  }

  input ToolInput {
    name: String!
    partName: String
    category: String!
    position: String!
    description: String!
    photoLink: String!
    usage: Int!
    tutorialLink: String!
    remain: Int!
  }

  input ToolUsageUpdateInput {
    usage: Int!
    remain: Int!
  }

  input MachineInput {
    name: String!
    partName: String
    category: String!
    position: String!
    description: String!
    photoLink: String!
    usage: Int!
    tutorialLink: String!
  }

  input MaterialInput {
    name: String!
    partName: String
    category: String!
    valuable: Boolean!
    position: String!
    description: String!
    photoLink: String!
    usage: Int!
    tutorialLink: String
    fee: Int!
    remain: Int!
  }

  input MaterialUsageUpdateInput {
    usage: Int!
    remain: Int!
  }

  input ThreeDPInput{
    name:         String!
    category:     String!
    position:     String!
    description:  String!
    photoLink:    String!
    usage:        Int!
    tutorialLink: String!
    broken:       Boolean!
  }

  input UserInput {
    name: String!
    studentID: String!
    password: String!
    photoLink: String!
    language: String!
    threeDPId: Int
    laserCutAvailable: Boolean!
    isAdmin: Boolean!
    isMinister: Boolean!
  }

  input UserEditInput {
    name: String!
    studentID: String!
    photoLink: String!
    language: String!
    password: String!
  }

  input UserPasswordEditInput {
    originalPassword: String!
    newPassword: String!
  }

  input UserMachineUpdateInput {
    threeDPId: Int
    laserCutAvailable: Boolean!
  }

  type Announcement {
    id: Int!
    title: String!
    date: String!
    content: String!
  }

  input DisposableMaterialInput {
    name: String!
    partName: String
    category: String!
    position: String!
    description: String!
    photoLink: String!
    usage: Int!
    tutorialLink: String!
    fee: Int
    remain: Boolean!
  }

  type DisposableMaterial {
    id: Int!
    name: String!
    partName: String
    category: String!
    position: String!
    description: String!
    photoLink: String!
    usage: Int!
    tutorialLink: String!
    fee: Int
    remain: Boolean!
  }

  input DisposableMaterialUsageUpdateInput {
    usage: Int!
    remain: Boolean!
  }

  input ArticleInput {
    writerId: Int!,
    description: String!,
    imageURL: String,
    title: String!,
    headline: Boolean!,
    content: String!,
    userpic: String,
  }

  type Material {
    id: Int!
    name: String!
    partName: String
    category: String!
    valuable: Boolean!
    position: String!
    description: String!
    photoLink: String!
    usage: Int!
    tutorialLink: String
    fee: Int!
    remain: Int!
    materialLikeIds: [Int]
    userBorrowMaterialIds: [Int]
  }

  type Tool {
    id: Int!
    name: String!
    partName: String
    category: String!
    position: String!
    description: String!
    photoLink: String!
    usage: Int!
    tutorialLink: String!
    remain: Int!
    toolLikeIds: [Int]
    userBorrowToolIds: [Int]
  }

  type Machine {
    id: Int!
    name: String!
    partName: String
    category: String!
    position: String!
    description: String!
    photoLink: String!
    usage: Int!
    tutorialLink: String!
  }

  type ThreeDP {
    id:           Int!
    name:         String!
    category:     String!
    position:     String!
    description:  String!
    photoLink:    String!
    usage:        Int!
    tutorialLink: String!
    waitingId:    [Int]
    broken:       Boolean!
  }

  type User {
    id: Int!
    name: String!
    studentID: String!
    password: String!
    photoLink: String
    language: String!
    threeDPId: Int
    laserCutAvailable: Boolean!
    articlesId: [Int]
    isAdmin: Boolean!
    isMinister: Boolean!
    toolLikeIds: [Int]
    userBorrowToolIds: [Int]
    materialLikeIds: [Int]
    userBorrowMaterialIds: [Int]
  }

  type signUpRet {
    user: User!
    token: String!
  }

  input signUpInput {
    name: String!
    studentID: String!
    password: String!
    photoLink: String!
    language: String!
    threeDPId: Int
    laserCutAvailable: Boolean!
    isAdmin: Boolean!
    isMinister: Boolean!
  }
  
  type logInRet {
    user: User!
    token: String!
  }

  input logInInput {
    studentID: String!
    password: String!
  }

  type Article {
    id: Int!
    writerId: Int!,
    description: String!,
    imageURL: String,
    time: String!,
    title: String!,
    headline: Boolean!,
    content: String!,
    userpic: String,
  }

  type Introduction {
    id: Int!,
    content: String!,
  }

  input IntroductionInput {
    content: String!,
  }

  type AuthorizedCode {
    id: Int!,
    codeList: [String],
    updatedAt: String!
  }

  input AuthorizedCodeInput {
    codeList: [String],
  }

  type ToolLike {
    id: Int!,
    userId: Int!,
    toolId: Int!,
  }

  input toolLikeInput {
    userId: Int!,
    toolId: Int!,
  }

  type UserBorrowTool {
    id: Int!,
    userId: Int!,
    toolId: Int!,
    borrower: String!,
    studentId: String!,
    figure: String!,
    name: String!,
    partName: String,
    category: String!,
    remain: Int!,
    position: String!,
    quantity: Int!,
    status: String!,
    borrowDate: String!,
    returnDate: String!,
  }

  input userBorrowToolInput {
    userId: Int!,
    toolId: Int!,
    quantity: Int!,
  }

  type MaterialLike {
    id: Int!,
    userId: Int!,
    materialId: Int!,
  }

  input materialLikeInput {
    userId: Int!,
    materialId: Int!,
  }

  type UserBorrowMaterial {
    id: Int!,
    userId: Int!,
    materialId: Int!,
    borrower: String!,
    studentId: String!,
    figure: String!,
    name: String!,
    partName: String,
    category: String!,
    remain: Int!,
    position: String!,
    quantity: Int!,
    status: String!,
    borrowDate: String!,
    returnDate: String!,
  }

  input userBorrowMaterialInput {
    userId: Int!,
    materialId: Int!,
    quantity: Int!,
  }

  ### Define Resolvers ###

  type Query {
    AllAnnouncements: [Announcement]
    AllDisposableMaterials: [DisposableMaterial]
    SearchDisposableMaterialsByCategory(category: String!): [DisposableMaterial]
    SearchDisposableMaterialsByPosition(position: String!): [DisposableMaterial]
    SearchDisposableMaterialsByName(name: String!): [DisposableMaterial]
    AllMaterials: [Material]
    GetMaterialById(id: Int!): Material
    SearchMaterialsByCategory(category: String!): [Material]
    SearchMaterialsByPosition(position: String!): [Material]
    SearchMaterialByName(name: String!): [Material]
    AllTools: [Tool]
    GetToolById(id: Int!): Tool
    SearchToolsByCategory(category: String!): [Tool]
    SearchToolsByPosition(position: String!): [Tool]
    SearchToolsByName(name: String!): [Tool]
    AllMachines: [Machine]
    SearchMachinesByCategory(category: String!): [Machine]
    SearchMachinesByPosition(position: String!): [Machine]
    AllUser: [User]
    SearchUserByName(name: String!): [User]
    GetUserByStudentID(studentID: String!): User
    AllThreeDP: [ThreeDP]
    SearchThreeDPByCategory(category: String!): [ThreeDP]
    SearchThreeDPByPosition(position: String!): [ThreeDP]
    AllArticles: [Article]
    SearchMachineByName(input: String!): [Machine]
    CurrentIntroduction: Introduction
    GetAuthorizedCode: AuthorizedCode
    LogIn(logInInput: logInInput!): logInRet
    GetToolLikes: [ToolLike]
    GetToolLikeById(id: Int!): ToolLike
    GetLikedToolsByUserId(userId: Int!): [Tool]
    GetAllUserBorrowTools: [UserBorrowTool]
    GetAllUserBorrowToolsByStatus(status: [String]!): [UserBorrowTool]
    GetUserBorrowToolById(id: Int!): UserBorrowTool
    GetUserBorrowToolsByUserId(userId: Int!): [UserBorrowTool]
    GetUserBorrowToolsByStatusAndUserId(userId: Int!, status: [String]!): [UserBorrowTool]
    GetMaterialLikes: [MaterialLike]
    GetMaterialLikeById(id: Int!): MaterialLike
    GetLikedMaterialsByUserId(userId: Int!): [Material]
    GetAllUserBorrowMaterials: [UserBorrowMaterial]
    GetAllUserBorrowMaterialsByStatus(status: [String]!): [UserBorrowMaterial]
    GetUserBorrowMaterialById(id: Int!): UserBorrowMaterial
    GetUserBorrowMaterialsByUserId(userId: Int!): [UserBorrowMaterial]
    GetUserBorrowMaterialsByStatusAndUserId(userId: Int!, status: [String]!): [UserBorrowMaterial]
  }

  type Mutation {
    AddAnnouncement(announcementInput: AnnouncementInput!): Announcement
    DeleteAnnouncement(id: Int!): Announcement
    EditAnnouncement(id: Int!, announcementInput: AnnouncementInput!): Announcement
    AddTool(toolInput: ToolInput!): Tool
    DeleteTool(id: Int!): Tool
    EditTool(id: Int!, toolInput: ToolInput!): Tool
    ToolUsageUpdate(id: Int!, toolUsageUpdateInput: ToolUsageUpdateInput!): Tool # update usage & remain
    AddDisposableMaterial(disposableMaterialInput: DisposableMaterialInput!): DisposableMaterial
    DeleteDisposableMaterial(id: Int!): DisposableMaterial
    EditDisposableMaterial(id: Int!, disposableMaterialInput: DisposableMaterialInput!): DisposableMaterial
    DisposableMaterialUsageUpdate(id: Int!, disposableMaterialUsageUpdateInput: DisposableMaterialUsageUpdateInput!): DisposableMaterial
    AddMachine(machineInput: MachineInput!): Machine
    DeleteMachine(id: Int!): Machine
    EditMachine(id: Int!, machineInput: MachineInput!): Machine
    AddMaterial(materialInput: MaterialInput!): Material
    DeleteMaterial(id: Int!): Material
    EditMaterial(id: Int!, materialInput: MaterialInput!): Material
    MaterialUsageUpdate(id: Int!, materialUsageUpdateInput: MaterialUsageUpdateInput!): Material
    AddThreeDP(threeDPInput: ThreeDPInput!): ThreeDP
    DeleteThreeDP(id: Int!): ThreeDP
    EditThreeDP(id: Int!, threeDPInput: ThreeDPInput!): ThreeDP
    AddUser(userInput: UserInput!) : User
    DeleteUser(id: Int!): User
    EditUser(id: Int!, userEditInput: UserEditInput!): User
    EditUserPassword(id: Int!, userPasswordEditInput: UserPasswordEditInput!): User
    EditUserRole(id: Int!, authorizedCode: String!, password: String!): User
    UserMachineUsageUpdate(id: Int!, userMachineUpdateInput: UserMachineUpdateInput!): User
    AddArticle(articleInput: ArticleInput!): Article
    UpdateIntroduction(introductionInput: IntroductionInput!): Introduction
    UpdateAuthorizedCode(authorizedCodeInput: AuthorizedCodeInput!): AuthorizedCode
    SignUp(signUpInput: signUpInput!): signUpRet
    AddToolLike(toolLikeInput: toolLikeInput!): ToolLike
    DeleteToolLike(toolLikeInput: toolLikeInput!): ToolLike
    EditUserLanguage(id: Int!, language: String!): User
    AddUserBorrowTool(userBorrowToolInput: userBorrowToolInput!): UserBorrowTool
    DeleteUserBorrowTool(id: Int!): UserBorrowTool
    EditUserBorrowToolQuantity(id: Int!, userBorrowToolInput: userBorrowToolInput!): UserBorrowTool
    EditUserBorrowToolStatus(id: Int!, status: String!): UserBorrowTool
    AddMaterialLike(materialLikeInput: materialLikeInput!): MaterialLike
    DeleteMaterialLike(materialLikeInput: materialLikeInput!): MaterialLike
    AddUserBorrowMaterial(userBorrowMaterialInput: userBorrowMaterialInput!): UserBorrowMaterial
    DeleteUserBorrowMaterial(id: Int!): UserBorrowMaterial
    EditUserBorrowMaterialQuantity(id: Int!, userBorrowMaterialInput: userBorrowMaterialInput!): UserBorrowMaterial
    EditUserBorrowMaterialStatus(id: Int!, status: String!): UserBorrowMaterial
  }

  type Subscription {
    AnnouncementCreated: Announcement
    AnnouncementDeleted: Announcement
    AnnouncementUpdated: Announcement
    ToolCreated: Tool
    ToolDeleted: Tool
    ToolUpdated: Tool
    DisposableMaterialCreated: DisposableMaterial
    DisposableMaterialDeleted: DisposableMaterial
    DisposableMaterialUpdated: DisposableMaterial
    MachineCreated: Machine
    MachineDeleted: Machine
    MachineUpdated: Machine
    MaterialCreated: Material
    MaterialDeleted: Material
    MaterialUpdated: Material
    ThreeDPCreated: ThreeDP
    ThreeDPDeleted: ThreeDP
    ThreeDPUpdated: ThreeDP
    UserCreated: User
    UserDeleted: User
    UserUpdated: User
    UserMachineUpdate: User
    ArticleCreated: Article
    IntroductionCreated: Introduction
    IntroductionUpdated: Introduction
    UserSignedUp: User
    UserLoggedIn: User
  }
`;

export { typeDefs, DateTime };
