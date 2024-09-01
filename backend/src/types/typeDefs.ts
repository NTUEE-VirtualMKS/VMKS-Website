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
    position:     String!
    description:  String!
    photoLink:    String!
    tutorialLink: String!
    broken:       Boolean!
  }

  input ThreeDPRequestInput{
    name: String!
    studentID: String!
    userId: String!
    threeDPId: String!
  }

  input UserInput {
    name: String!
    studentID: String!
    password: String!
    photoLink: String!
    language: String!
    threeDPId: String
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
    threeDPId: String
    laserCutAvailable: Boolean!
  }

  type Announcement {
    id: String!
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
    id: String!
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
    writerId: String!,
    description: String!,
    imageURL: String,
    title: String!,
    headline: Boolean!,
    content: String!,
    userpic: String,
  }

  type Material {
    id: String!
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
    materialLikeIds: [String]
    userBorrowMaterialIds: [String]
  }

  type Tool {
    id: String!
    name: String!
    partName: String
    category: String!
    position: String!
    description: String!
    photoLink: String!
    usage: Int!
    tutorialLink: String!
    remain: Int!
    toolLikeIds: [String]
    userBorrowToolIds: [String]
  }

  type Machine {
    id: String!
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
    id: String!
    name: String!
    position: String!
    description: String!
    photoLink: String!
    tutorialLink: String!
    threeDPRequestIds: [String]
    broken: Boolean!
  }

  type ThreeDPRequest {
    id: String!
    name: String!
    studentID: String!
    userId: String!
    threeDPId: String!
    status: String!
  }

  type User {
    id: String!
    name: String!
    studentID: String!
    password: String!
    photoLink: String
    language: String!
    threeDPId: String
    laserCutAvailable: Boolean!
    articlesId: [String]
    isAdmin: Boolean!
    isMinister: Boolean!
    toolLikeIds: [String]
    userBorrowToolIds: [String]
    materialLikeIds: [String]
    userBorrowMaterialIds: [String]
  }

  type SimpleUser {
    id: String!
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
    threeDPId: String
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
    id: String!
    writerId: String!,
    description: String!,
    imageURL: String,
    time: String!,
    title: String!,
    headline: Boolean!,
    content: String!,
    userpic: String,
  }

  type AuthorizedCode {
    id: String!,
    codeList: [String],
    updatedAt: String!
  }

  input AuthorizedCodeInput {
    codeList: [String],
  }

  type ToolLike {
    id: String!,
    userId: String!,
    toolId: String!,
  }

  input ToolLikeInput {
    userId: String!,
    toolId: String!,
  }

  type UserBorrowTool {
    id: String!,
    userId: String!,
    toolId: String!,
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
    userId: String!,
    toolId: String!,
    quantity: Int!,
  }

  type MaterialLike {
    id: String!,
    userId: String!,
    materialId: String!,
  }

  input MaterialLikeInput {
    userId: String!,
    materialId: String!,
  }

  type UserBorrowMaterial {
    id: String!,
    userId: String!,
    materialId: String!,
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
    userId: String!,
    materialId: String!,
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
    id: String!,
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
    cursor: String
  }

  type GetAllTools {
    tools: [Tool]
    cursor: String
  }

  type GetAllDisposableMaterials {
    disposableMaterials: [DisposableMaterial]
    cursor: String
  }

  type GetAllMaterials {
    materials: [Material]
    cursor: String
  }

  type GetAllMachines {
    machines: [Machine]
    cursor: String
  }

  type GetAllThreeDPs {
    threeDPs: [ThreeDP]
    cursor: String
  }

  type GetAllUsers {
    users: [SimpleUser]
    cursor: String
  }

  type GetAllArticles {
    articles: [Article]
    cursor: String
  }

  ### Define Resolvers ###

  type Query {
    # Announcement
    GetAllAnnouncements(cursor: String, limit: Int): GetAllAnnouncements
    GetAnnouncementById(id: String!): Announcement
    SearchAnnouncementByTitle(title: String!): [Announcement]
    # Tool
    GetAllTools(cursor: String, limit: Int): GetAllTools
    GetToolById(id: String!): Tool
    SearchToolByCategory(category: String!): [Tool]
    SearchToolByPosition(position: String!): [Tool]
    SearchToolByName(name: String!): [Tool]
    # DisposableMaterial
    GetAllDisposableMaterials(cursor: String, limit: Int): GetAllDisposableMaterials
    SearchDisposableMaterialByCategory(category: String!): [DisposableMaterial]
    SearchDisposableMaterialByPosition(position: String!): [DisposableMaterial]
    SearchDisposableMaterialByName(name: String!): [DisposableMaterial]
    # Material
    GetAllMaterials(cursor: String, limit: Int): GetAllMaterials
    GetMaterialById(id: String!): Material
    SearchMaterialByCategory(category: String!): [Material]
    SearchMaterialByPosition(position: String!): [Material]
    SearchMaterialByName(name: String!): [Material]
    # Machine
    GetAllMachines(cursor: String, limit: Int): GetAllMachines
    GetMachineById(id: String!): Machine
    SearchMachineByCategory(category: String!): [Machine]
    SearchMachineByPosition(position: String!): [Machine]
    SearchMachineByName(input: String!): [Machine]
    # User
    GetAllUsers(cursor: String, limit: Int): GetAllUsers
    SearchUserByName(name: String!): [SimpleUser]
    GetUserByStudentID(studentID: String!): User
    # ThreeDP
    GetAllThreeDPs(cursor: String, limit: Int): GetAllThreeDPs
    GetThreeDPById(id: String!): ThreeDP
    SearchThreeDPByCategory(category: String!): [ThreeDP]
    SearchThreeDPByPosition(position: String!): [ThreeDP]
    # ThreeDPRequest
    GetAllThreeDPRequests: [ThreeDPRequest]
    GetThreeDPRequestsByThreeDPId(threeDPId: String!): [ThreeDPRequest]
    GetThreeDPRequestsByUserId(userId: String!): [ThreeDPRequest]
    # Article
    GetAllArticles(cursor: String, limit: Int): GetAllArticles
    GetArticleById(id: String!): Article
    # AuthorizedCode
    GetAuthorizedCode: AuthorizedCode
    # LogIn
    LogIn(logInInput: LogInInput!): LogInRet
    # ToolLike
    GetToolLikes: [ToolLike]
    GetToolLikeById(id: String!): ToolLike
    GetLikedToolsByUserId(userId: String!): [Tool]
    # UserBorrowTool
    GetAllUserBorrowTools: [UserBorrowTool]
    GetAllUserBorrowToolsByStatus(status: [String]!): [UserBorrowTool]
    GetUserBorrowToolById(id: String!): UserBorrowTool
    GetUserBorrowToolsByUserId(userId: String!): [UserBorrowTool]
    GetUserBorrowToolsByStatusAndUserId(userId: String!, status: [String]!): [UserBorrowTool]
    # MaterialLike
    GetMaterialLikes: [MaterialLike]
    GetMaterialLikeById(id: String!): MaterialLike
    GetLikedMaterialsByUserId(userId: String!): [Material]
    # UserBorrowMaterial
    GetAllUserBorrowMaterials: [UserBorrowMaterial]
    GetAllUserBorrowMaterialsByStatus(status: [String]!): [UserBorrowMaterial]
    GetUserBorrowMaterialById(id: String!): UserBorrowMaterial
    GetUserBorrowMaterialsByUserId(userId: String!): [UserBorrowMaterial]
    GetUserBorrowMaterialsByStatusAndUserId(userId: String!, status: [String]!): [UserBorrowMaterial]
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
    DeleteAnnouncement(id: String!): Announcement
    EditAnnouncement(id: String!, announcementInput: AnnouncementInput!): Announcement
    AddTool(toolInput: ToolInput!): Tool
    DeleteTool(id: String!): Tool
    EditTool(id: String!, toolInput: ToolInput!): Tool
    ToolUsageUpdate(id: String!, toolUsageUpdateInput: ToolUsageUpdateInput!): Tool # update usage & remain
    AddDisposableMaterial(disposableMaterialInput: DisposableMaterialInput!): DisposableMaterial
    DeleteDisposableMaterial(id: String!): DisposableMaterial
    EditDisposableMaterial(id: String!, disposableMaterialInput: DisposableMaterialInput!): DisposableMaterial
    DisposableMaterialUsageUpdate(id: String!, disposableMaterialUsageUpdateInput: DisposableMaterialUsageUpdateInput!): DisposableMaterial
    AddMachine(machineInput: MachineInput!): Machine
    DeleteMachine(id: String!): Machine
    EditMachine(id: String!, machineInput: MachineInput!): Machine
    AddMaterial(materialInput: MaterialInput!): Material
    DeleteMaterial(id: String!): Material
    EditMaterial(id: String!, materialInput: MaterialInput!): Material
    MaterialUsageUpdate(id: String!, materialUsageUpdateInput: MaterialUsageUpdateInput!): Material
    AddThreeDP(threeDPInput: ThreeDPInput!): ThreeDP
    DeleteThreeDP(id: String!): ThreeDP
    EditThreeDP(id: String!, threeDPInput: ThreeDPInput!): ThreeDP
    AddThreeDPRequest(threeDPRequestInput: ThreeDPRequestInput!): ThreeDPRequest
    DeleteThreeDPRequest(id: String!): ThreeDPRequest
    EditThreeDPRequestStatus(id: String!, status: String!): ThreeDPRequest
    AddUser(userInput: UserInput!) : User
    DeleteUser(id: String!): User
    EditUser(id: String!, userEditInput: UserEditInput!): User
    EditUserPassword(id: String!, userPasswordEditInput: UserPasswordEditInput!): User
    PromoteUser(id: String!, promoteUserInput: PromoteUserInput!): User
    DemoteUser(id: String!, demoteUserInput: DemoteUserInput!): User
    UserMachineUsageUpdate(id: String!, userMachineUpdateInput: UserMachineUpdateInput!): User
    AddArticle(articleInput: ArticleInput!): Article
    UpdateArticle(id: String!, articleInput: ArticleInput!): Article
    DeleteArticle(id: String!): Article
    UpdateAuthorizedCode(authorizedCodeInput: AuthorizedCodeInput!): AuthorizedCode
    SignUp(signUpInput: SignUpInput!): SignUpRet
    AddSignupAuthCode(signupAuthCodeInput: SignupAuthCodeInput!): SignupAuthCode
    AddToolLike(toolLikeInput: ToolLikeInput!): ToolLike
    DeleteToolLike(toolLikeInput: ToolLikeInput!): ToolLike
    EditUserLanguage(id: String!, language: String!): User
    AddUserBorrowTool(userBorrowToolInput: UserBorrowToolInput!): UserBorrowTool
    DeleteUserBorrowTool(id: String!): UserBorrowTool
    EditUserBorrowToolQuantity(id: String!, userBorrowToolInput: UserBorrowToolInput!): UserBorrowTool
    EditUserBorrowToolStatus(id: String!, status: String!): UserBorrowTool
    AddMaterialLike(materialLikeInput: MaterialLikeInput!): MaterialLike
    DeleteMaterialLike(materialLikeInput: MaterialLikeInput!): MaterialLike
    AddUserBorrowMaterial(userBorrowMaterialInput: UserBorrowMaterialInput!): UserBorrowMaterial
    DeleteUserBorrowMaterial(id: String!): UserBorrowMaterial
    EditUserBorrowMaterialQuantity(id: String!, userBorrowMaterialInput: UserBorrowMaterialInput!): UserBorrowMaterial
    EditUserBorrowMaterialStatus(id: String!, status: String!): UserBorrowMaterial
    AddAdminSchedule(adminScheduleInput: AdminScheduleInput!): AdminSchedule
    DeleteAdminSchedule(id: String!): AdminSchedule
    EditAdminSchedule(id: String!, name: String!): AdminSchedule
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
    ArticleUpdated: Article
    ArticleDeleted: Article
    UserSignedUp: User
    UserLoggedIn: User
  }
`;

export { typeDefs, DateTime };
