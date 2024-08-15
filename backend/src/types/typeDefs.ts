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

  type SimpleUser {
    id: Int!
    name: String!
    studentID: String!
    photoLink: String
    laserCutAvailable: Boolean!
    isAdmin: Boolean!
    isMinister: Boolean!
  }

  type SignUpRet {
    user: User!
    token: String!
  }

  input SignUpInput {
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
  
  input SignupAuthCodeInput {
    studentID: String!
    browser: String!
    os: String!
    time: String!
    timeZone: String!
    date: String!
  }

  type LogInRet {
    user: User!
    token: String!
  }

  input LogInInput {
    studentID: String!
    password: String!
    browser: String!
    os: String!
    time: String!
    timeZone: String!
    date: String!
    redirect: Boolean!
  }

  type SignupAuthCode {
    studentID: String!
    code: String!
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

  input ToolLikeInput {
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

  input UserBorrowToolInput {
    userId: Int!,
    toolId: Int!,
    quantity: Int!,
  }

  type MaterialLike {
    id: Int!,
    userId: Int!,
    materialId: Int!,
  }

  input MaterialLikeInput {
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

  input UserBorrowMaterialInput {
    userId: Int!,
    materialId: Int!,
    quantity: Int!,
  }

  input PromoteUserInput {
    authorizedCode: String!,
    password: String!,
    isAdmin: Boolean!,
  }

  input DemoteUserInput {
    studentID: String!,
    password: String!,
    isMinister: Boolean!,
  }

  type AdminSchedule {
    id: Int!,
    admin: String!,
    day: String!,
    period: String!,
  }

  input AdminScheduleInput {
    admin: String!,
    day: String!,
    period: String!,
  }

  type GetAllAnnouncements {
    announcements: [Announcement]
    cursor: Int
  }

  type GetAllTools {
    tools: [Tool]
    cursor: Int
  }

  type GetAllDisposableMaterials {
    disposableMaterials: [DisposableMaterial]
    cursor: Int
  }

  type GetAllMaterials {
    materials: [Material]
    cursor: Int
  }

  type GetAllMachines {
    machines: [Machine]
    cursor: Int
  }

  type GetAllThreeDPs {
    threeDPs: [ThreeDP]
    cursor: Int
  }

  type GetAllUsers {
    users: [SimpleUser]
    cursor: Int
  }

  type GetAllArticles {
    articles: [Article]
    cursor: Int
  }

  ### Define Resolvers ###

  type Query {
    # Announcement
    GetAllAnnouncements(cursor: Int, limit: Int): GetAllAnnouncements
    GetAnnouncementById(id: Int!): Announcement
    SearchAnnouncementByTitle(title: String!): [Announcement]
    # Tool
    GetAllTools(cursor: Int, limit: Int): GetAllTools
    GetToolById(id: Int!): Tool
    SearchToolByCategory(category: String!): [Tool]
    SearchToolByPosition(position: String!): [Tool]
    SearchToolByName(name: String!): [Tool]
    # DisposableMaterial
    GetAllDisposableMaterials(cursor: Int, limit: Int): GetAllDisposableMaterials
    SearchDisposableMaterialByCategory(category: String!): [DisposableMaterial]
    SearchDisposableMaterialByPosition(position: String!): [DisposableMaterial]
    SearchDisposableMaterialByName(name: String!): [DisposableMaterial]
    # Material
    GetAllMaterials(cursor: Int, limit: Int): GetAllMaterials
    GetMaterialById(id: Int!): Material
    SearchMaterialByCategory(category: String!): [Material]
    SearchMaterialByPosition(position: String!): [Material]
    SearchMaterialByName(name: String!): [Material]
    # Machine
    GetAllMachines(cursor: Int, limit: Int): GetAllMachines 
    SearchMachineByCategory(category: String!): [Machine]
    SearchMachineByPosition(position: String!): [Machine]
    SearchMachineByName(input: String!): [Machine]
    # User
    GetAllUsers(cursor: Int, limit: Int): GetAllUsers
    SearchUserByName(name: String!): [SimpleUser]
    GetUserByStudentID(studentID: String!): User
    # ThreeDP
    GetAllThreeDPs(cursor: Int, limit: Int): GetAllThreeDPs
    SearchThreeDPByCategory(category: String!): [ThreeDP]
    SearchThreeDPByPosition(position: String!): [ThreeDP]
    # Article
    GetAllArticles(cursor: Int, limit: Int): GetAllArticles 
    GetArticleById(id: Int!): Article
    # AuthorizedCode
    GetAuthorizedCode: AuthorizedCode
    # LogIn
    LogIn(logInInput: LogInInput!): LogInRet
    # ToolLike
    GetToolLikes: [ToolLike]
    GetToolLikeById(id: Int!): ToolLike
    GetLikedToolsByUserId(userId: Int!): [Tool]
    # UserBorrowTool
    GetAllUserBorrowTools: [UserBorrowTool]
    GetAllUserBorrowToolsByStatus(status: [String]!): [UserBorrowTool]
    GetUserBorrowToolById(id: Int!): UserBorrowTool
    GetUserBorrowToolsByUserId(userId: Int!): [UserBorrowTool]
    GetUserBorrowToolsByStatusAndUserId(userId: Int!, status: [String]!): [UserBorrowTool]
    # MaterialLike
    GetMaterialLikes: [MaterialLike]
    GetMaterialLikeById(id: Int!): MaterialLike
    GetLikedMaterialsByUserId(userId: Int!): [Material]
    # UserBorrowMaterial
    GetAllUserBorrowMaterials: [UserBorrowMaterial]
    GetAllUserBorrowMaterialsByStatus(status: [String]!): [UserBorrowMaterial]
    GetUserBorrowMaterialById(id: Int!): UserBorrowMaterial
    GetUserBorrowMaterialsByUserId(userId: Int!): [UserBorrowMaterial]
    GetUserBorrowMaterialsByStatusAndUserId(userId: Int!, status: [String]!): [UserBorrowMaterial]
    # AdminSchedule
    GetAllAdminSchedules: [[AdminSchedule]]
    GetAdminScheduleByDay(day: String!): [AdminSchedule]
    GetAdminScheduleByPeriod(period: String!): [AdminSchedule]
    # SignupAuthCode
    GetAllSignupAuthCodes: [SignupAuthCode]
    GetSignupAuthCodeByStudentID(studentID: String!): SignupAuthCode
    CheckSignupAuthCode(studentID: String!, code: String!): Boolean
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
    PromoteUser(id: Int!, promoteUserInput: PromoteUserInput!): User
    DemoteUser(id: Int!, demoteUserInput: DemoteUserInput!): User
    UserMachineUsageUpdate(id: Int!, userMachineUpdateInput: UserMachineUpdateInput!): User
    AddArticle(articleInput: ArticleInput!): Article
    UpdateAuthorizedCode(authorizedCodeInput: AuthorizedCodeInput!): AuthorizedCode
    SignUp(signUpInput: SignUpInput!): SignUpRet
    AddSignupAuthCode(signupAuthCodeInput: SignupAuthCodeInput!): SignupAuthCode
    AddToolLike(toolLikeInput: ToolLikeInput!): ToolLike
    DeleteToolLike(toolLikeInput: ToolLikeInput!): ToolLike
    EditUserLanguage(id: Int!, language: String!): User
    AddUserBorrowTool(userBorrowToolInput: UserBorrowToolInput!): UserBorrowTool
    DeleteUserBorrowTool(id: Int!): UserBorrowTool
    EditUserBorrowToolQuantity(id: Int!, userBorrowToolInput: UserBorrowToolInput!): UserBorrowTool
    EditUserBorrowToolStatus(id: Int!, status: String!): UserBorrowTool
    AddMaterialLike(materialLikeInput: MaterialLikeInput!): MaterialLike
    DeleteMaterialLike(materialLikeInput: MaterialLikeInput!): MaterialLike
    AddUserBorrowMaterial(userBorrowMaterialInput: UserBorrowMaterialInput!): UserBorrowMaterial
    DeleteUserBorrowMaterial(id: Int!): UserBorrowMaterial
    EditUserBorrowMaterialQuantity(id: Int!, userBorrowMaterialInput: UserBorrowMaterialInput!): UserBorrowMaterial
    EditUserBorrowMaterialStatus(id: Int!, status: String!): UserBorrowMaterial
    AddAdminSchedule(adminScheduleInput: AdminScheduleInput!): AdminSchedule
    DeleteAdminSchedule(id: Int!): AdminSchedule
    EditAdminSchedule(id: Int!, name: String!): AdminSchedule
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
    UserSignedUp: User
    UserLoggedIn: User
  }
`;

export { typeDefs, DateTime };
