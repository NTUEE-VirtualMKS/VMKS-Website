/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type AdminSchedule = {
  __typename?: 'AdminSchedule';
  admin: Scalars['String']['output'];
  day: Scalars['String']['output'];
  id: Scalars['String']['output'];
  period: Scalars['String']['output'];
};

export type AdminScheduleInput = {
  admin: Scalars['String']['input'];
  day: Scalars['String']['input'];
  period: Scalars['String']['input'];
};

export type Announcement = {
  __typename?: 'Announcement';
  content: Scalars['String']['output'];
  date: Scalars['String']['output'];
  id: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type AnnouncementInput = {
  content: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type Article = {
  __typename?: 'Article';
  content: Scalars['String']['output'];
  description: Scalars['String']['output'];
  headline: Scalars['Boolean']['output'];
  id: Scalars['String']['output'];
  imageURL?: Maybe<Scalars['String']['output']>;
  time: Scalars['String']['output'];
  title: Scalars['String']['output'];
  userpic?: Maybe<Scalars['String']['output']>;
  writerId: Scalars['String']['output'];
};

export type ArticleInput = {
  content: Scalars['String']['input'];
  description: Scalars['String']['input'];
  headline: Scalars['Boolean']['input'];
  imageURL?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  userpic?: InputMaybe<Scalars['String']['input']>;
  writerId: Scalars['String']['input'];
};

export type AuthorizedCode = {
  __typename?: 'AuthorizedCode';
  codeList?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  id: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type AuthorizedCodeInput = {
  codeList?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type DemoteUserInput = {
  isMinister: Scalars['Boolean']['input'];
  password: Scalars['String']['input'];
  studentID: Scalars['String']['input'];
};

export type DisposableMaterial = {
  __typename?: 'DisposableMaterial';
  category: Scalars['String']['output'];
  description: Scalars['String']['output'];
  fee?: Maybe<Scalars['Int']['output']>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  partName?: Maybe<Scalars['String']['output']>;
  photoLink: Scalars['String']['output'];
  position: Scalars['String']['output'];
  remain: Scalars['Boolean']['output'];
  tutorialLink: Scalars['String']['output'];
  usage: Scalars['Int']['output'];
};

export type DisposableMaterialInput = {
  category: Scalars['String']['input'];
  description: Scalars['String']['input'];
  fee?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  partName?: InputMaybe<Scalars['String']['input']>;
  photoLink: Scalars['String']['input'];
  position: Scalars['String']['input'];
  remain: Scalars['Boolean']['input'];
  tutorialLink: Scalars['String']['input'];
  usage: Scalars['Int']['input'];
};

export type DisposableMaterialUsageUpdateInput = {
  remain: Scalars['Boolean']['input'];
  usage: Scalars['Int']['input'];
};

export type GetAllAnnouncements = {
  __typename?: 'GetAllAnnouncements';
  announcements?: Maybe<Array<Maybe<Announcement>>>;
  cursor?: Maybe<Scalars['String']['output']>;
};

export type GetAllArticles = {
  __typename?: 'GetAllArticles';
  articles?: Maybe<Array<Maybe<Article>>>;
  cursor?: Maybe<Scalars['String']['output']>;
};

export type GetAllDisposableMaterials = {
  __typename?: 'GetAllDisposableMaterials';
  cursor?: Maybe<Scalars['String']['output']>;
  disposableMaterials?: Maybe<Array<Maybe<DisposableMaterial>>>;
};

export type GetAllMachines = {
  __typename?: 'GetAllMachines';
  cursor?: Maybe<Scalars['String']['output']>;
  machines?: Maybe<Array<Maybe<Machine>>>;
};

export type GetAllMaterials = {
  __typename?: 'GetAllMaterials';
  cursor?: Maybe<Scalars['String']['output']>;
  materials?: Maybe<Array<Maybe<Material>>>;
};

export type GetAllThreeDPs = {
  __typename?: 'GetAllThreeDPs';
  cursor?: Maybe<Scalars['String']['output']>;
  threeDPs?: Maybe<Array<Maybe<ThreeDp>>>;
};

export type GetAllTools = {
  __typename?: 'GetAllTools';
  cursor?: Maybe<Scalars['String']['output']>;
  tools?: Maybe<Array<Maybe<Tool>>>;
};

export type GetAllUsers = {
  __typename?: 'GetAllUsers';
  cursor?: Maybe<Scalars['String']['output']>;
  users?: Maybe<Array<Maybe<SimpleUser>>>;
};

export type LogInInput = {
  browser: Scalars['String']['input'];
  date: Scalars['String']['input'];
  os: Scalars['String']['input'];
  password: Scalars['String']['input'];
  redirect: Scalars['Boolean']['input'];
  studentID: Scalars['String']['input'];
  time: Scalars['String']['input'];
  timeZone: Scalars['String']['input'];
};

export type LogInRet = {
  __typename?: 'LogInRet';
  token: Scalars['String']['output'];
  user: User;
};

export type Machine = {
  __typename?: 'Machine';
  category: Scalars['String']['output'];
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  partName?: Maybe<Scalars['String']['output']>;
  photoLink: Scalars['String']['output'];
  position: Scalars['String']['output'];
  tutorialLink: Scalars['String']['output'];
  usage: Scalars['Int']['output'];
};

export type MachineInput = {
  category: Scalars['String']['input'];
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
  partName?: InputMaybe<Scalars['String']['input']>;
  photoLink: Scalars['String']['input'];
  position: Scalars['String']['input'];
  tutorialLink: Scalars['String']['input'];
  usage: Scalars['Int']['input'];
};

export type Material = {
  __typename?: 'Material';
  category: Scalars['String']['output'];
  description: Scalars['String']['output'];
  fee: Scalars['Int']['output'];
  id: Scalars['String']['output'];
  materialLikeIds?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  name: Scalars['String']['output'];
  partName?: Maybe<Scalars['String']['output']>;
  photoLink: Scalars['String']['output'];
  position: Scalars['String']['output'];
  remain: Scalars['Int']['output'];
  tutorialLink?: Maybe<Scalars['String']['output']>;
  usage: Scalars['Int']['output'];
  userBorrowMaterialIds?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  valuable: Scalars['Boolean']['output'];
};

export type MaterialInput = {
  category: Scalars['String']['input'];
  description: Scalars['String']['input'];
  fee: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  partName?: InputMaybe<Scalars['String']['input']>;
  photoLink: Scalars['String']['input'];
  position: Scalars['String']['input'];
  remain: Scalars['Int']['input'];
  tutorialLink?: InputMaybe<Scalars['String']['input']>;
  usage: Scalars['Int']['input'];
  valuable: Scalars['Boolean']['input'];
};

export type MaterialLike = {
  __typename?: 'MaterialLike';
  id: Scalars['String']['output'];
  materialId: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type MaterialLikeInput = {
  materialId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type MaterialUsageUpdateInput = {
  remain: Scalars['Int']['input'];
  usage: Scalars['Int']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  AddAdminSchedule?: Maybe<AdminSchedule>;
  AddAnnouncement?: Maybe<Announcement>;
  AddArticle?: Maybe<Article>;
  AddDisposableMaterial?: Maybe<DisposableMaterial>;
  AddMachine?: Maybe<Machine>;
  AddMaterial?: Maybe<Material>;
  AddMaterialLike?: Maybe<MaterialLike>;
  AddSignupAuthCode?: Maybe<SignupAuthCode>;
  AddThreeDP?: Maybe<ThreeDp>;
  AddThreeDPRequest?: Maybe<ThreeDpRequest>;
  AddTool?: Maybe<Tool>;
  AddToolLike?: Maybe<ToolLike>;
  AddUser?: Maybe<User>;
  AddUserBorrowMaterial?: Maybe<UserBorrowMaterial>;
  AddUserBorrowTool?: Maybe<UserBorrowTool>;
  DeleteAdminSchedule?: Maybe<AdminSchedule>;
  DeleteAnnouncement?: Maybe<Announcement>;
  DeleteArticle?: Maybe<Article>;
  DeleteDisposableMaterial?: Maybe<DisposableMaterial>;
  DeleteMachine?: Maybe<Machine>;
  DeleteMaterial?: Maybe<Material>;
  DeleteMaterialLike?: Maybe<MaterialLike>;
  DeleteThreeDP?: Maybe<ThreeDp>;
  DeleteThreeDPRequest?: Maybe<ThreeDpRequest>;
  DeleteTool?: Maybe<Tool>;
  DeleteToolLike?: Maybe<ToolLike>;
  DeleteUser?: Maybe<User>;
  DeleteUserBorrowMaterial?: Maybe<UserBorrowMaterial>;
  DeleteUserBorrowTool?: Maybe<UserBorrowTool>;
  DemoteUser?: Maybe<User>;
  DisposableMaterialUsageUpdate?: Maybe<DisposableMaterial>;
  EditAdminSchedule?: Maybe<AdminSchedule>;
  EditAnnouncement?: Maybe<Announcement>;
  EditDisposableMaterial?: Maybe<DisposableMaterial>;
  EditMachine?: Maybe<Machine>;
  EditMaterial?: Maybe<Material>;
  EditThreeDP?: Maybe<ThreeDp>;
  EditThreeDPRequestStatus?: Maybe<ThreeDpRequest>;
  EditTool?: Maybe<Tool>;
  EditUser?: Maybe<User>;
  EditUserBorrowMaterialQuantity?: Maybe<UserBorrowMaterial>;
  EditUserBorrowMaterialStatus?: Maybe<UserBorrowMaterial>;
  EditUserBorrowToolQuantity?: Maybe<UserBorrowTool>;
  EditUserBorrowToolStatus?: Maybe<UserBorrowTool>;
  EditUserLanguage?: Maybe<User>;
  EditUserPassword?: Maybe<User>;
  MaterialUsageUpdate?: Maybe<Material>;
  PromoteUser?: Maybe<User>;
  SignUp?: Maybe<SignUpRet>;
  ToolUsageUpdate?: Maybe<Tool>;
  UpdateArticle?: Maybe<Article>;
  UpdateAuthorizedCode?: Maybe<AuthorizedCode>;
  UserMachineUsageUpdate?: Maybe<User>;
};


export type MutationAddAdminScheduleArgs = {
  adminScheduleInput: AdminScheduleInput;
};


export type MutationAddAnnouncementArgs = {
  announcementInput: AnnouncementInput;
};


export type MutationAddArticleArgs = {
  articleInput: ArticleInput;
};


export type MutationAddDisposableMaterialArgs = {
  disposableMaterialInput: DisposableMaterialInput;
};


export type MutationAddMachineArgs = {
  machineInput: MachineInput;
};


export type MutationAddMaterialArgs = {
  materialInput: MaterialInput;
};


export type MutationAddMaterialLikeArgs = {
  materialLikeInput: MaterialLikeInput;
};


export type MutationAddSignupAuthCodeArgs = {
  signupAuthCodeInput: SignupAuthCodeInput;
};


export type MutationAddThreeDpArgs = {
  threeDPInput: ThreeDpInput;
};


export type MutationAddThreeDpRequestArgs = {
  threeDPRequestInput: ThreeDpRequestInput;
};


export type MutationAddToolArgs = {
  toolInput: ToolInput;
};


export type MutationAddToolLikeArgs = {
  toolLikeInput: ToolLikeInput;
};


export type MutationAddUserArgs = {
  userInput: UserInput;
};


export type MutationAddUserBorrowMaterialArgs = {
  userBorrowMaterialInput: UserBorrowMaterialInput;
};


export type MutationAddUserBorrowToolArgs = {
  userBorrowToolInput: UserBorrowToolInput;
};


export type MutationDeleteAdminScheduleArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteAnnouncementArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteArticleArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteDisposableMaterialArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteMachineArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteMaterialArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteMaterialLikeArgs = {
  materialLikeInput: MaterialLikeInput;
};


export type MutationDeleteThreeDpArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteThreeDpRequestArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteToolArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteToolLikeArgs = {
  toolLikeInput: ToolLikeInput;
};


export type MutationDeleteUserArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteUserBorrowMaterialArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteUserBorrowToolArgs = {
  id: Scalars['String']['input'];
};


export type MutationDemoteUserArgs = {
  demoteUserInput: DemoteUserInput;
  id: Scalars['String']['input'];
};


export type MutationDisposableMaterialUsageUpdateArgs = {
  disposableMaterialUsageUpdateInput: DisposableMaterialUsageUpdateInput;
  id: Scalars['String']['input'];
};


export type MutationEditAdminScheduleArgs = {
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
};


export type MutationEditAnnouncementArgs = {
  announcementInput: AnnouncementInput;
  id: Scalars['String']['input'];
};


export type MutationEditDisposableMaterialArgs = {
  disposableMaterialInput: DisposableMaterialInput;
  id: Scalars['String']['input'];
};


export type MutationEditMachineArgs = {
  id: Scalars['String']['input'];
  machineInput: MachineInput;
};


export type MutationEditMaterialArgs = {
  id: Scalars['String']['input'];
  materialInput: MaterialInput;
};


export type MutationEditThreeDpArgs = {
  id: Scalars['String']['input'];
  threeDPInput: ThreeDpInput;
};


export type MutationEditThreeDpRequestStatusArgs = {
  id: Scalars['String']['input'];
  status: Scalars['String']['input'];
};


export type MutationEditToolArgs = {
  id: Scalars['String']['input'];
  toolInput: ToolInput;
};


export type MutationEditUserArgs = {
  id: Scalars['String']['input'];
  userEditInput: UserEditInput;
};


export type MutationEditUserBorrowMaterialQuantityArgs = {
  id: Scalars['String']['input'];
  userBorrowMaterialInput: UserBorrowMaterialInput;
};


export type MutationEditUserBorrowMaterialStatusArgs = {
  id: Scalars['String']['input'];
  status: Scalars['String']['input'];
};


export type MutationEditUserBorrowToolQuantityArgs = {
  id: Scalars['String']['input'];
  userBorrowToolInput: UserBorrowToolInput;
};


export type MutationEditUserBorrowToolStatusArgs = {
  id: Scalars['String']['input'];
  status: Scalars['String']['input'];
};


export type MutationEditUserLanguageArgs = {
  id: Scalars['String']['input'];
  language: Scalars['String']['input'];
};


export type MutationEditUserPasswordArgs = {
  id: Scalars['String']['input'];
  userPasswordEditInput: UserPasswordEditInput;
};


export type MutationMaterialUsageUpdateArgs = {
  id: Scalars['String']['input'];
  materialUsageUpdateInput: MaterialUsageUpdateInput;
};


export type MutationPromoteUserArgs = {
  id: Scalars['String']['input'];
  promoteUserInput: PromoteUserInput;
};


export type MutationSignUpArgs = {
  signUpInput: SignUpInput;
};


export type MutationToolUsageUpdateArgs = {
  id: Scalars['String']['input'];
  toolUsageUpdateInput: ToolUsageUpdateInput;
};


export type MutationUpdateArticleArgs = {
  articleInput: ArticleInput;
  id: Scalars['String']['input'];
};


export type MutationUpdateAuthorizedCodeArgs = {
  authorizedCodeInput: AuthorizedCodeInput;
};


export type MutationUserMachineUsageUpdateArgs = {
  id: Scalars['String']['input'];
  userMachineUpdateInput: UserMachineUpdateInput;
};

export type PromoteUserInput = {
  authorizedCode: Scalars['String']['input'];
  isAdmin: Scalars['Boolean']['input'];
  password: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  CheckSignupAuthCode?: Maybe<Scalars['Boolean']['output']>;
  GetAdminScheduleByDay?: Maybe<Array<Maybe<AdminSchedule>>>;
  GetAdminScheduleByPeriod?: Maybe<Array<Maybe<AdminSchedule>>>;
  GetAllAdminSchedules?: Maybe<Array<Maybe<Array<Maybe<AdminSchedule>>>>>;
  GetAllAnnouncements?: Maybe<GetAllAnnouncements>;
  GetAllArticles?: Maybe<GetAllArticles>;
  GetAllDisposableMaterials?: Maybe<GetAllDisposableMaterials>;
  GetAllMachines?: Maybe<GetAllMachines>;
  GetAllMaterials?: Maybe<GetAllMaterials>;
  GetAllSignupAuthCodes?: Maybe<Array<Maybe<SignupAuthCode>>>;
  GetAllThreeDPRequests?: Maybe<Array<Maybe<ThreeDpRequest>>>;
  GetAllThreeDPs?: Maybe<GetAllThreeDPs>;
  GetAllTools?: Maybe<GetAllTools>;
  GetAllUserBorrowMaterials?: Maybe<Array<Maybe<UserBorrowMaterial>>>;
  GetAllUserBorrowMaterialsByStatus?: Maybe<Array<Maybe<UserBorrowMaterial>>>;
  GetAllUserBorrowTools?: Maybe<Array<Maybe<UserBorrowTool>>>;
  GetAllUserBorrowToolsByStatus?: Maybe<Array<Maybe<UserBorrowTool>>>;
  GetAllUsers?: Maybe<GetAllUsers>;
  GetAnnouncementById?: Maybe<Announcement>;
  GetArticleById?: Maybe<Article>;
  GetAuthorizedCode?: Maybe<AuthorizedCode>;
  GetLikedMaterialsByUserId?: Maybe<Array<Maybe<Material>>>;
  GetLikedToolsByUserId?: Maybe<Array<Maybe<Tool>>>;
  GetMachineById?: Maybe<Machine>;
  GetMaterialById?: Maybe<Material>;
  GetMaterialLikeById?: Maybe<MaterialLike>;
  GetMaterialLikes?: Maybe<Array<Maybe<MaterialLike>>>;
  GetSignupAuthCodeByStudentID?: Maybe<SignupAuthCode>;
  GetThreeDPById?: Maybe<ThreeDp>;
  GetThreeDPRequestsByThreeDPId?: Maybe<Array<Maybe<ThreeDpRequest>>>;
  GetThreeDPRequestsByUserId?: Maybe<Array<Maybe<ThreeDpRequest>>>;
  GetToolById?: Maybe<Tool>;
  GetToolLikeById?: Maybe<ToolLike>;
  GetToolLikes?: Maybe<Array<Maybe<ToolLike>>>;
  GetUserBorrowMaterialById?: Maybe<UserBorrowMaterial>;
  GetUserBorrowMaterialsByStatusAndUserId?: Maybe<Array<Maybe<UserBorrowMaterial>>>;
  GetUserBorrowMaterialsByUserId?: Maybe<Array<Maybe<UserBorrowMaterial>>>;
  GetUserBorrowToolById?: Maybe<UserBorrowTool>;
  GetUserBorrowToolsByStatusAndUserId?: Maybe<Array<Maybe<UserBorrowTool>>>;
  GetUserBorrowToolsByUserId?: Maybe<Array<Maybe<UserBorrowTool>>>;
  GetUserByStudentID?: Maybe<User>;
  LogIn?: Maybe<LogInRet>;
  SearchAnnouncementByTitle?: Maybe<Array<Maybe<Announcement>>>;
  SearchDisposableMaterialByCategory?: Maybe<Array<Maybe<DisposableMaterial>>>;
  SearchDisposableMaterialByName?: Maybe<Array<Maybe<DisposableMaterial>>>;
  SearchDisposableMaterialByPosition?: Maybe<Array<Maybe<DisposableMaterial>>>;
  SearchMachineByCategory?: Maybe<Array<Maybe<Machine>>>;
  SearchMachineByName?: Maybe<Array<Maybe<Machine>>>;
  SearchMachineByPosition?: Maybe<Array<Maybe<Machine>>>;
  SearchMaterialByCategory?: Maybe<Array<Maybe<Material>>>;
  SearchMaterialByName?: Maybe<Array<Maybe<Material>>>;
  SearchMaterialByPosition?: Maybe<Array<Maybe<Material>>>;
  SearchThreeDPByCategory?: Maybe<Array<Maybe<ThreeDp>>>;
  SearchThreeDPByPosition?: Maybe<Array<Maybe<ThreeDp>>>;
  SearchToolByCategory?: Maybe<Array<Maybe<Tool>>>;
  SearchToolByName?: Maybe<Array<Maybe<Tool>>>;
  SearchToolByPosition?: Maybe<Array<Maybe<Tool>>>;
  SearchUserByName?: Maybe<Array<Maybe<SimpleUser>>>;
};


export type QueryCheckSignupAuthCodeArgs = {
  code: Scalars['String']['input'];
  studentID: Scalars['String']['input'];
};


export type QueryGetAdminScheduleByDayArgs = {
  day: Scalars['String']['input'];
};


export type QueryGetAdminScheduleByPeriodArgs = {
  period: Scalars['String']['input'];
};


export type QueryGetAllAnnouncementsArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAllArticlesArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAllDisposableMaterialsArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAllMachinesArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAllMaterialsArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAllThreeDPsArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAllToolsArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAllUserBorrowMaterialsByStatusArgs = {
  status: Array<InputMaybe<Scalars['String']['input']>>;
};


export type QueryGetAllUserBorrowToolsByStatusArgs = {
  status: Array<InputMaybe<Scalars['String']['input']>>;
};


export type QueryGetAllUsersArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAnnouncementByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetArticleByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetLikedMaterialsByUserIdArgs = {
  userId: Scalars['String']['input'];
};


export type QueryGetLikedToolsByUserIdArgs = {
  userId: Scalars['String']['input'];
};


export type QueryGetMachineByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetMaterialByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetMaterialLikeByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetSignupAuthCodeByStudentIdArgs = {
  studentID: Scalars['String']['input'];
};


export type QueryGetThreeDpByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetThreeDpRequestsByThreeDpIdArgs = {
  threeDPId: Scalars['String']['input'];
};


export type QueryGetThreeDpRequestsByUserIdArgs = {
  userId: Scalars['String']['input'];
};


export type QueryGetToolByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetToolLikeByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetUserBorrowMaterialByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetUserBorrowMaterialsByStatusAndUserIdArgs = {
  status: Array<InputMaybe<Scalars['String']['input']>>;
  userId: Scalars['String']['input'];
};


export type QueryGetUserBorrowMaterialsByUserIdArgs = {
  userId: Scalars['String']['input'];
};


export type QueryGetUserBorrowToolByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetUserBorrowToolsByStatusAndUserIdArgs = {
  status: Array<InputMaybe<Scalars['String']['input']>>;
  userId: Scalars['String']['input'];
};


export type QueryGetUserBorrowToolsByUserIdArgs = {
  userId: Scalars['String']['input'];
};


export type QueryGetUserByStudentIdArgs = {
  studentID: Scalars['String']['input'];
};


export type QueryLogInArgs = {
  logInInput: LogInInput;
};


export type QuerySearchAnnouncementByTitleArgs = {
  title: Scalars['String']['input'];
};


export type QuerySearchDisposableMaterialByCategoryArgs = {
  category: Scalars['String']['input'];
};


export type QuerySearchDisposableMaterialByNameArgs = {
  name: Scalars['String']['input'];
};


export type QuerySearchDisposableMaterialByPositionArgs = {
  position: Scalars['String']['input'];
};


export type QuerySearchMachineByCategoryArgs = {
  category: Scalars['String']['input'];
};


export type QuerySearchMachineByNameArgs = {
  input: Scalars['String']['input'];
};


export type QuerySearchMachineByPositionArgs = {
  position: Scalars['String']['input'];
};


export type QuerySearchMaterialByCategoryArgs = {
  category: Scalars['String']['input'];
};


export type QuerySearchMaterialByNameArgs = {
  name: Scalars['String']['input'];
};


export type QuerySearchMaterialByPositionArgs = {
  position: Scalars['String']['input'];
};


export type QuerySearchThreeDpByCategoryArgs = {
  category: Scalars['String']['input'];
};


export type QuerySearchThreeDpByPositionArgs = {
  position: Scalars['String']['input'];
};


export type QuerySearchToolByCategoryArgs = {
  category: Scalars['String']['input'];
};


export type QuerySearchToolByNameArgs = {
  name: Scalars['String']['input'];
};


export type QuerySearchToolByPositionArgs = {
  position: Scalars['String']['input'];
};


export type QuerySearchUserByNameArgs = {
  name: Scalars['String']['input'];
};

export type SignUpInput = {
  isAdmin: Scalars['Boolean']['input'];
  isMinister: Scalars['Boolean']['input'];
  language: Scalars['String']['input'];
  laserCutAvailable: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  photoLink: Scalars['String']['input'];
  studentID: Scalars['String']['input'];
  threeDPId?: InputMaybe<Scalars['String']['input']>;
};

export type SignUpRet = {
  __typename?: 'SignUpRet';
  token: Scalars['String']['output'];
  user: User;
};

export type SignupAuthCode = {
  __typename?: 'SignupAuthCode';
  code: Scalars['String']['output'];
  studentID: Scalars['String']['output'];
};

export type SignupAuthCodeInput = {
  browser: Scalars['String']['input'];
  date: Scalars['String']['input'];
  os: Scalars['String']['input'];
  studentID: Scalars['String']['input'];
  time: Scalars['String']['input'];
  timeZone: Scalars['String']['input'];
};

export type SimpleUser = {
  __typename?: 'SimpleUser';
  id: Scalars['String']['output'];
  isAdmin: Scalars['Boolean']['output'];
  isMinister: Scalars['Boolean']['output'];
  laserCutAvailable: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  photoLink?: Maybe<Scalars['String']['output']>;
  studentID: Scalars['String']['output'];
};

export type Subscription = {
  __typename?: 'Subscription';
  AnnouncementCreated?: Maybe<Announcement>;
  AnnouncementDeleted?: Maybe<Announcement>;
  AnnouncementUpdated?: Maybe<Announcement>;
  ArticleCreated?: Maybe<Article>;
  ArticleDeleted?: Maybe<Article>;
  ArticleUpdated?: Maybe<Article>;
  DisposableMaterialCreated?: Maybe<DisposableMaterial>;
  DisposableMaterialDeleted?: Maybe<DisposableMaterial>;
  DisposableMaterialUpdated?: Maybe<DisposableMaterial>;
  MachineCreated?: Maybe<Machine>;
  MachineDeleted?: Maybe<Machine>;
  MachineUpdated?: Maybe<Machine>;
  MaterialCreated?: Maybe<Material>;
  MaterialDeleted?: Maybe<Material>;
  MaterialUpdated?: Maybe<Material>;
  ThreeDPCreated?: Maybe<ThreeDp>;
  ThreeDPDeleted?: Maybe<ThreeDp>;
  ThreeDPUpdated?: Maybe<ThreeDp>;
  ToolCreated?: Maybe<Tool>;
  ToolDeleted?: Maybe<Tool>;
  ToolUpdated?: Maybe<Tool>;
  UserCreated?: Maybe<User>;
  UserDeleted?: Maybe<User>;
  UserLoggedIn?: Maybe<User>;
  UserMachineUpdate?: Maybe<User>;
  UserSignedUp?: Maybe<User>;
  UserUpdated?: Maybe<User>;
};

export type ThreeDp = {
  __typename?: 'ThreeDP';
  broken: Scalars['Boolean']['output'];
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  photoLink: Scalars['String']['output'];
  position: Scalars['String']['output'];
  threeDPRequestIds?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  tutorialLink: Scalars['String']['output'];
};

export type ThreeDpInput = {
  broken: Scalars['Boolean']['input'];
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
  photoLink: Scalars['String']['input'];
  position: Scalars['String']['input'];
  tutorialLink: Scalars['String']['input'];
};

export type ThreeDpRequest = {
  __typename?: 'ThreeDPRequest';
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  status: Scalars['String']['output'];
  studentID: Scalars['String']['output'];
  threeDPId: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type ThreeDpRequestInput = {
  name: Scalars['String']['input'];
  studentID: Scalars['String']['input'];
  threeDPId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type Tool = {
  __typename?: 'Tool';
  category: Scalars['String']['output'];
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  partName?: Maybe<Scalars['String']['output']>;
  photoLink: Scalars['String']['output'];
  position: Scalars['String']['output'];
  remain: Scalars['Int']['output'];
  toolLikeIds?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  tutorialLink: Scalars['String']['output'];
  usage: Scalars['Int']['output'];
  userBorrowToolIds?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type ToolInput = {
  category: Scalars['String']['input'];
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
  partName?: InputMaybe<Scalars['String']['input']>;
  photoLink: Scalars['String']['input'];
  position: Scalars['String']['input'];
  remain: Scalars['Int']['input'];
  tutorialLink: Scalars['String']['input'];
  usage: Scalars['Int']['input'];
};

export type ToolLike = {
  __typename?: 'ToolLike';
  id: Scalars['String']['output'];
  toolId: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type ToolLikeInput = {
  toolId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type ToolUsageUpdateInput = {
  remain: Scalars['Int']['input'];
  usage: Scalars['Int']['input'];
};

export type User = {
  __typename?: 'User';
  articlesId?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  id: Scalars['String']['output'];
  isAdmin: Scalars['Boolean']['output'];
  isMinister: Scalars['Boolean']['output'];
  language: Scalars['String']['output'];
  laserCutAvailable: Scalars['Boolean']['output'];
  materialLikeIds?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  name: Scalars['String']['output'];
  password: Scalars['String']['output'];
  photoLink?: Maybe<Scalars['String']['output']>;
  studentID: Scalars['String']['output'];
  threeDPId?: Maybe<Scalars['String']['output']>;
  toolLikeIds?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  userBorrowMaterialIds?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  userBorrowToolIds?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type UserBorrowMaterial = {
  __typename?: 'UserBorrowMaterial';
  borrowDate: Scalars['String']['output'];
  borrower: Scalars['String']['output'];
  category: Scalars['String']['output'];
  figure: Scalars['String']['output'];
  id: Scalars['String']['output'];
  materialId: Scalars['String']['output'];
  name: Scalars['String']['output'];
  partName?: Maybe<Scalars['String']['output']>;
  position: Scalars['String']['output'];
  quantity: Scalars['Int']['output'];
  remain: Scalars['Int']['output'];
  returnDate: Scalars['String']['output'];
  status: Scalars['String']['output'];
  studentId: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type UserBorrowMaterialInput = {
  materialId: Scalars['String']['input'];
  quantity: Scalars['Int']['input'];
  userId: Scalars['String']['input'];
};

export type UserBorrowTool = {
  __typename?: 'UserBorrowTool';
  borrowDate: Scalars['String']['output'];
  borrower: Scalars['String']['output'];
  category: Scalars['String']['output'];
  figure: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  partName?: Maybe<Scalars['String']['output']>;
  position: Scalars['String']['output'];
  quantity: Scalars['Int']['output'];
  remain: Scalars['Int']['output'];
  returnDate: Scalars['String']['output'];
  status: Scalars['String']['output'];
  studentId: Scalars['String']['output'];
  toolId: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type UserBorrowToolInput = {
  quantity: Scalars['Int']['input'];
  toolId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type UserEditInput = {
  language: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  photoLink: Scalars['String']['input'];
  studentID: Scalars['String']['input'];
};

export type UserInput = {
  isAdmin: Scalars['Boolean']['input'];
  isMinister: Scalars['Boolean']['input'];
  language: Scalars['String']['input'];
  laserCutAvailable: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  photoLink: Scalars['String']['input'];
  studentID: Scalars['String']['input'];
  threeDPId?: InputMaybe<Scalars['String']['input']>;
};

export type UserMachineUpdateInput = {
  laserCutAvailable: Scalars['Boolean']['input'];
  threeDPId?: InputMaybe<Scalars['String']['input']>;
};

export type UserPasswordEditInput = {
  newPassword: Scalars['String']['input'];
  originalPassword: Scalars['String']['input'];
};

export type AddAnnouncementMutationVariables = Exact<{
  announcementInput: AnnouncementInput;
}>;


export type AddAnnouncementMutation = { __typename?: 'Mutation', AddAnnouncement?: { __typename?: 'Announcement', id: string, title: string, date: string, content: string } | null };

export type DeleteAnnouncementMutationVariables = Exact<{
  deleteAnnouncementId: Scalars['String']['input'];
}>;


export type DeleteAnnouncementMutation = { __typename?: 'Mutation', DeleteAnnouncement?: { __typename?: 'Announcement', id: string, title: string, date: string, content: string } | null };

export type EditAnnouncementMutationVariables = Exact<{
  editAnnouncementId: Scalars['String']['input'];
  announcementInput: AnnouncementInput;
}>;


export type EditAnnouncementMutation = { __typename?: 'Mutation', EditAnnouncement?: { __typename?: 'Announcement', id: string, title: string, date: string, content: string } | null };

export type AddArticleMutationVariables = Exact<{
  articleInput: ArticleInput;
}>;


export type AddArticleMutation = { __typename?: 'Mutation', AddArticle?: { __typename?: 'Article', id: string, writerId: string, description: string, imageURL?: string | null, time: string, title: string, headline: boolean, content: string, userpic?: string | null } | null };

export type UpdateArticleMutationVariables = Exact<{
  updateArticleId: Scalars['String']['input'];
  articleInput: ArticleInput;
}>;


export type UpdateArticleMutation = { __typename?: 'Mutation', UpdateArticle?: { __typename?: 'Article', id: string, writerId: string, description: string, imageURL?: string | null, time: string, title: string, headline: boolean, content: string, userpic?: string | null } | null };

export type DeleteArticleMutationVariables = Exact<{
  deleteArticleId: Scalars['String']['input'];
}>;


export type DeleteArticleMutation = { __typename?: 'Mutation', DeleteArticle?: { __typename?: 'Article', id: string } | null };

export type AddDisposableMaterialMutationVariables = Exact<{
  disposableMaterialInput: DisposableMaterialInput;
}>;


export type AddDisposableMaterialMutation = { __typename?: 'Mutation', AddDisposableMaterial?: { __typename?: 'DisposableMaterial', id: string, name: string, partName?: string | null, category: string, position: string, description: string, photoLink: string, usage: number, tutorialLink: string, fee?: number | null, remain: boolean } | null };

export type DeleteDisposableMaterialMutationVariables = Exact<{
  deleteDisposableMaterialId: Scalars['String']['input'];
}>;


export type DeleteDisposableMaterialMutation = { __typename?: 'Mutation', DeleteDisposableMaterial?: { __typename?: 'DisposableMaterial', id: string, name: string, partName?: string | null, category: string, position: string, description: string, photoLink: string, usage: number, tutorialLink: string, fee?: number | null, remain: boolean } | null };

export type EditDisposableMaterialMutationVariables = Exact<{
  editDisposableMaterialId: Scalars['String']['input'];
  disposableMaterialInput: DisposableMaterialInput;
}>;


export type EditDisposableMaterialMutation = { __typename?: 'Mutation', EditDisposableMaterial?: { __typename?: 'DisposableMaterial', id: string, name: string, partName?: string | null, category: string, position: string, description: string, photoLink: string, usage: number, tutorialLink: string, fee?: number | null, remain: boolean } | null };

export type AddMachineMutationVariables = Exact<{
  machineInput: MachineInput;
}>;


export type AddMachineMutation = { __typename?: 'Mutation', AddMachine?: { __typename?: 'Machine', id: string, name: string, partName?: string | null, category: string, position: string, description: string, photoLink: string, usage: number, tutorialLink: string } | null };

export type DeleteMachineMutationVariables = Exact<{
  deleteMachineId: Scalars['String']['input'];
}>;


export type DeleteMachineMutation = { __typename?: 'Mutation', DeleteMachine?: { __typename?: 'Machine', id: string, name: string, partName?: string | null, category: string, position: string, description: string, photoLink: string, usage: number, tutorialLink: string } | null };

export type EditMachineMutationVariables = Exact<{
  editMachineId: Scalars['String']['input'];
  machineInput: MachineInput;
}>;


export type EditMachineMutation = { __typename?: 'Mutation', EditMachine?: { __typename?: 'Machine', id: string, name: string, partName?: string | null, category: string, position: string, description: string, photoLink: string, usage: number, tutorialLink: string } | null };

export type AddMaterialMutationVariables = Exact<{
  materialInput: MaterialInput;
}>;


export type AddMaterialMutation = { __typename?: 'Mutation', AddMaterial?: { __typename?: 'Material', id: string, name: string, partName?: string | null, category: string, valuable: boolean, position: string, description: string, photoLink: string, usage: number, tutorialLink?: string | null, fee: number, remain: number, materialLikeIds?: Array<string | null> | null, userBorrowMaterialIds?: Array<string | null> | null } | null };

export type DeleteMaterialMutationVariables = Exact<{
  deleteMaterialId: Scalars['String']['input'];
}>;


export type DeleteMaterialMutation = { __typename?: 'Mutation', DeleteMaterial?: { __typename?: 'Material', id: string, name: string, partName?: string | null, category: string, valuable: boolean, position: string, description: string, photoLink: string, usage: number, tutorialLink?: string | null, fee: number, remain: number, materialLikeIds?: Array<string | null> | null, userBorrowMaterialIds?: Array<string | null> | null } | null };

export type EditMaterialMutationVariables = Exact<{
  editMaterialId: Scalars['String']['input'];
  materialInput: MaterialInput;
}>;


export type EditMaterialMutation = { __typename?: 'Mutation', EditMaterial?: { __typename?: 'Material', id: string, name: string, partName?: string | null, category: string, valuable: boolean, position: string, description: string, photoLink: string, usage: number, tutorialLink?: string | null, fee: number, remain: number, materialLikeIds?: Array<string | null> | null, userBorrowMaterialIds?: Array<string | null> | null } | null };

export type AddThreeDpMutationVariables = Exact<{
  threeDpInput: ThreeDpInput;
}>;


export type AddThreeDpMutation = { __typename?: 'Mutation', AddThreeDP?: { __typename?: 'ThreeDP', id: string, name: string, position: string, description: string, photoLink: string, tutorialLink: string, broken: boolean } | null };

export type DeleteThreeDpMutationVariables = Exact<{
  deleteThreeDpId: Scalars['String']['input'];
}>;


export type DeleteThreeDpMutation = { __typename?: 'Mutation', DeleteThreeDP?: { __typename?: 'ThreeDP', id: string, name: string, position: string, description: string, photoLink: string, tutorialLink: string, threeDPRequestIds?: Array<string | null> | null, broken: boolean } | null };

export type EditThreeDpMutationVariables = Exact<{
  editThreeDpId: Scalars['String']['input'];
  threeDpInput: ThreeDpInput;
}>;


export type EditThreeDpMutation = { __typename?: 'Mutation', EditThreeDP?: { __typename?: 'ThreeDP', id: string, name: string, position: string, description: string, photoLink: string, tutorialLink: string, threeDPRequestIds?: Array<string | null> | null, broken: boolean } | null };

export type AddThreeDpRequestMutationVariables = Exact<{
  threeDpRequestInput: ThreeDpRequestInput;
}>;


export type AddThreeDpRequestMutation = { __typename?: 'Mutation', AddThreeDPRequest?: { __typename?: 'ThreeDPRequest', id: string, name: string, studentID: string, userId: string, threeDPId: string, status: string } | null };

export type DeleteThreeDpRequestMutationVariables = Exact<{
  deleteThreeDpRequestId: Scalars['String']['input'];
}>;


export type DeleteThreeDpRequestMutation = { __typename?: 'Mutation', DeleteThreeDPRequest?: { __typename?: 'ThreeDPRequest', id: string, name: string, studentID: string, userId: string, threeDPId: string, status: string } | null };

export type EditThreeDpRequestStatusMutationVariables = Exact<{
  editThreeDpRequestStatusId: Scalars['String']['input'];
  status: Scalars['String']['input'];
}>;


export type EditThreeDpRequestStatusMutation = { __typename?: 'Mutation', EditThreeDPRequestStatus?: { __typename?: 'ThreeDPRequest', id: string, name: string, studentID: string, userId: string, threeDPId: string, status: string } | null };

export type AddToolMutationVariables = Exact<{
  toolInput: ToolInput;
}>;


export type AddToolMutation = { __typename?: 'Mutation', AddTool?: { __typename?: 'Tool', id: string, name: string, partName?: string | null, category: string, position: string, description: string, photoLink: string, usage: number, tutorialLink: string, remain: number, toolLikeIds?: Array<string | null> | null, userBorrowToolIds?: Array<string | null> | null } | null };

export type DeleteToolMutationVariables = Exact<{
  deleteToolId: Scalars['String']['input'];
}>;


export type DeleteToolMutation = { __typename?: 'Mutation', DeleteTool?: { __typename?: 'Tool', id: string, name: string, partName?: string | null, category: string, position: string, description: string, photoLink: string, usage: number, tutorialLink: string, remain: number, toolLikeIds?: Array<string | null> | null, userBorrowToolIds?: Array<string | null> | null } | null };

export type EditToolMutationVariables = Exact<{
  editToolId: Scalars['String']['input'];
  toolInput: ToolInput;
}>;


export type EditToolMutation = { __typename?: 'Mutation', EditTool?: { __typename?: 'Tool', id: string, name: string, partName?: string | null, category: string, position: string, description: string, photoLink: string, usage: number, tutorialLink: string, remain: number, toolLikeIds?: Array<string | null> | null, userBorrowToolIds?: Array<string | null> | null } | null };

export type AddUserMutationVariables = Exact<{
  userInput: UserInput;
}>;


export type AddUserMutation = { __typename?: 'Mutation', AddUser?: { __typename?: 'User', id: string, name: string, studentID: string, password: string, photoLink?: string | null, language: string, threeDPId?: string | null, laserCutAvailable: boolean, articlesId?: Array<string | null> | null, isAdmin: boolean, isMinister: boolean, toolLikeIds?: Array<string | null> | null, userBorrowToolIds?: Array<string | null> | null, materialLikeIds?: Array<string | null> | null, userBorrowMaterialIds?: Array<string | null> | null } | null };

export type DeleteUserMutationVariables = Exact<{
  deleteUserId: Scalars['String']['input'];
}>;


export type DeleteUserMutation = { __typename?: 'Mutation', DeleteUser?: { __typename?: 'User', id: string, name: string, studentID: string, password: string, photoLink?: string | null, language: string, threeDPId?: string | null, laserCutAvailable: boolean, articlesId?: Array<string | null> | null, isAdmin: boolean, isMinister: boolean, toolLikeIds?: Array<string | null> | null, userBorrowToolIds?: Array<string | null> | null, materialLikeIds?: Array<string | null> | null, userBorrowMaterialIds?: Array<string | null> | null } | null };

export type EditUserMutationVariables = Exact<{
  editUserId: Scalars['String']['input'];
  userEditInput: UserEditInput;
}>;


export type EditUserMutation = { __typename?: 'Mutation', EditUser?: { __typename?: 'User', id: string, name: string, studentID: string, password: string, photoLink?: string | null, language: string, threeDPId?: string | null, laserCutAvailable: boolean, articlesId?: Array<string | null> | null, isAdmin: boolean, isMinister: boolean, toolLikeIds?: Array<string | null> | null, userBorrowToolIds?: Array<string | null> | null, materialLikeIds?: Array<string | null> | null, userBorrowMaterialIds?: Array<string | null> | null } | null };

export type DisposableMaterialUsageUpdateMutationVariables = Exact<{
  disposableMaterialUsageUpdateId: Scalars['String']['input'];
  disposableMaterialUsageUpdateInput: DisposableMaterialUsageUpdateInput;
}>;


export type DisposableMaterialUsageUpdateMutation = { __typename?: 'Mutation', DisposableMaterialUsageUpdate?: { __typename?: 'DisposableMaterial', id: string, name: string, partName?: string | null, category: string, position: string, description: string, photoLink: string, usage: number, tutorialLink: string, fee?: number | null, remain: boolean } | null };

export type MaterialUsageUpdateMutationVariables = Exact<{
  materialUsageUpdateId: Scalars['String']['input'];
  materialUsageUpdateInput: MaterialUsageUpdateInput;
}>;


export type MaterialUsageUpdateMutation = { __typename?: 'Mutation', MaterialUsageUpdate?: { __typename?: 'Material', id: string, name: string, partName?: string | null, category: string, valuable: boolean, position: string, description: string, photoLink: string, usage: number, tutorialLink?: string | null, fee: number, remain: number, materialLikeIds?: Array<string | null> | null, userBorrowMaterialIds?: Array<string | null> | null } | null };

export type ToolUsageUpdateMutationVariables = Exact<{
  toolUsageUpdateId: Scalars['String']['input'];
  toolUsageUpdateInput: ToolUsageUpdateInput;
}>;


export type ToolUsageUpdateMutation = { __typename?: 'Mutation', ToolUsageUpdate?: { __typename?: 'Tool', id: string, name: string, partName?: string | null, category: string, position: string, description: string, photoLink: string, usage: number, tutorialLink: string, remain: number, toolLikeIds?: Array<string | null> | null, userBorrowToolIds?: Array<string | null> | null } | null };

export type UserMachineUsageUpdateMutationVariables = Exact<{
  userMachineUsageUpdateId: Scalars['String']['input'];
  userMachineUpdateInput: UserMachineUpdateInput;
}>;


export type UserMachineUsageUpdateMutation = { __typename?: 'Mutation', UserMachineUsageUpdate?: { __typename?: 'User', id: string, name: string, studentID: string, password: string, photoLink?: string | null, threeDPId?: string | null, laserCutAvailable: boolean, articlesId?: Array<string | null> | null, isAdmin: boolean, isMinister: boolean, language: string } | null };

export type UpdateAuthorizedCodeMutationVariables = Exact<{
  authorizedCodeInput: AuthorizedCodeInput;
}>;


export type UpdateAuthorizedCodeMutation = { __typename?: 'Mutation', UpdateAuthorizedCode?: { __typename?: 'AuthorizedCode', id: string, codeList?: Array<string | null> | null, updatedAt: string } | null };

export type AddToolLikeMutationVariables = Exact<{
  toolLikeInput: ToolLikeInput;
}>;


export type AddToolLikeMutation = { __typename?: 'Mutation', AddToolLike?: { __typename?: 'ToolLike', id: string, userId: string, toolId: string } | null };

export type DeleteToolLikeMutationVariables = Exact<{
  toolLikeInput: ToolLikeInput;
}>;


export type DeleteToolLikeMutation = { __typename?: 'Mutation', DeleteToolLike?: { __typename?: 'ToolLike', id: string, userId: string, toolId: string } | null };

export type EditUserLanguageMutationVariables = Exact<{
  editUserLanguageId: Scalars['String']['input'];
  language: Scalars['String']['input'];
}>;


export type EditUserLanguageMutation = { __typename?: 'Mutation', EditUserLanguage?: { __typename?: 'User', id: string, name: string, studentID: string, password: string, photoLink?: string | null, language: string, threeDPId?: string | null, laserCutAvailable: boolean, articlesId?: Array<string | null> | null, isAdmin: boolean, isMinister: boolean, toolLikeIds?: Array<string | null> | null, userBorrowToolIds?: Array<string | null> | null, materialLikeIds?: Array<string | null> | null } | null };

export type AddUserBorrowToolMutationVariables = Exact<{
  userBorrowToolInput: UserBorrowToolInput;
}>;


export type AddUserBorrowToolMutation = { __typename?: 'Mutation', AddUserBorrowTool?: { __typename?: 'UserBorrowTool', id: string, userId: string, toolId: string, borrower: string, studentId: string, figure: string, name: string, partName?: string | null, category: string, remain: number, position: string, quantity: number, status: string, borrowDate: string, returnDate: string } | null };

export type DeleteUserBorrowToolMutationVariables = Exact<{
  deleteUserBorrowToolId: Scalars['String']['input'];
}>;


export type DeleteUserBorrowToolMutation = { __typename?: 'Mutation', DeleteUserBorrowTool?: { __typename?: 'UserBorrowTool', id: string, userId: string, toolId: string, borrower: string, studentId: string, figure: string, name: string, partName?: string | null, category: string, remain: number, position: string, quantity: number, status: string, borrowDate: string, returnDate: string } | null };

export type EditUserBorrowToolQuantityMutationVariables = Exact<{
  editUserBorrowToolQuantityId: Scalars['String']['input'];
  userBorrowToolInput: UserBorrowToolInput;
}>;


export type EditUserBorrowToolQuantityMutation = { __typename?: 'Mutation', EditUserBorrowToolQuantity?: { __typename?: 'UserBorrowTool', id: string, userId: string, toolId: string, borrower: string, studentId: string, figure: string, name: string, partName?: string | null, category: string, remain: number, position: string, quantity: number, status: string, borrowDate: string, returnDate: string } | null };

export type EditUserBorrowToolStatusMutationVariables = Exact<{
  editUserBorrowToolStatusId: Scalars['String']['input'];
  status: Scalars['String']['input'];
}>;


export type EditUserBorrowToolStatusMutation = { __typename?: 'Mutation', EditUserBorrowToolStatus?: { __typename?: 'UserBorrowTool', id: string, userId: string, toolId: string, borrower: string, studentId: string, figure: string, name: string, partName?: string | null, category: string, remain: number, position: string, quantity: number, status: string, borrowDate: string, returnDate: string } | null };

export type AddMaterialLikeMutationVariables = Exact<{
  materialLikeInput: MaterialLikeInput;
}>;


export type AddMaterialLikeMutation = { __typename?: 'Mutation', AddMaterialLike?: { __typename?: 'MaterialLike', id: string, userId: string, materialId: string } | null };

export type DeleteMaterialLikeMutationVariables = Exact<{
  materialLikeInput: MaterialLikeInput;
}>;


export type DeleteMaterialLikeMutation = { __typename?: 'Mutation', DeleteMaterialLike?: { __typename?: 'MaterialLike', id: string, userId: string, materialId: string } | null };

export type AddUserBorrowMaterialMutationVariables = Exact<{
  userBorrowMaterialInput: UserBorrowMaterialInput;
}>;


export type AddUserBorrowMaterialMutation = { __typename?: 'Mutation', AddUserBorrowMaterial?: { __typename?: 'UserBorrowMaterial', id: string, userId: string, materialId: string, borrower: string, studentId: string, figure: string, name: string, partName?: string | null, category: string, remain: number, position: string, quantity: number, status: string, borrowDate: string, returnDate: string } | null };

export type DeleteUserBorrowMaterialMutationVariables = Exact<{
  deleteUserBorrowMaterialId: Scalars['String']['input'];
}>;


export type DeleteUserBorrowMaterialMutation = { __typename?: 'Mutation', DeleteUserBorrowMaterial?: { __typename?: 'UserBorrowMaterial', id: string, userId: string, materialId: string, borrower: string, studentId: string, figure: string, name: string, partName?: string | null, category: string, remain: number, position: string, quantity: number, status: string, borrowDate: string, returnDate: string } | null };

export type EditUserBorrowMaterialQuantityMutationVariables = Exact<{
  editUserBorrowMaterialQuantityId: Scalars['String']['input'];
  userBorrowMaterialInput: UserBorrowMaterialInput;
}>;


export type EditUserBorrowMaterialQuantityMutation = { __typename?: 'Mutation', EditUserBorrowMaterialQuantity?: { __typename?: 'UserBorrowMaterial', id: string, userId: string, materialId: string, borrower: string, studentId: string, figure: string, name: string, partName?: string | null, category: string, remain: number, position: string, quantity: number, status: string, borrowDate: string, returnDate: string } | null };

export type EditUserBorrowMaterialStatusMutationVariables = Exact<{
  editUserBorrowMaterialStatusId: Scalars['String']['input'];
  status: Scalars['String']['input'];
}>;


export type EditUserBorrowMaterialStatusMutation = { __typename?: 'Mutation', EditUserBorrowMaterialStatus?: { __typename?: 'UserBorrowMaterial', id: string, userId: string, materialId: string, borrower: string, studentId: string, figure: string, name: string, partName?: string | null, category: string, remain: number, position: string, quantity: number, status: string, borrowDate: string, returnDate: string } | null };

export type SignUpMutationVariables = Exact<{
  signUpInput: SignUpInput;
}>;


export type SignUpMutation = { __typename?: 'Mutation', SignUp?: { __typename?: 'SignUpRet', token: string, user: { __typename?: 'User', id: string, name: string, studentID: string, password: string, photoLink?: string | null, language: string, threeDPId?: string | null, laserCutAvailable: boolean, articlesId?: Array<string | null> | null, isAdmin: boolean, isMinister: boolean, toolLikeIds?: Array<string | null> | null, userBorrowToolIds?: Array<string | null> | null, materialLikeIds?: Array<string | null> | null, userBorrowMaterialIds?: Array<string | null> | null } } | null };

export type AddSignupAuthCodeMutationVariables = Exact<{
  signupAuthCodeInput: SignupAuthCodeInput;
}>;


export type AddSignupAuthCodeMutation = { __typename?: 'Mutation', AddSignupAuthCode?: { __typename?: 'SignupAuthCode', studentID: string, code: string } | null };

export type EditUserPasswordMutationVariables = Exact<{
  editUserPasswordId: Scalars['String']['input'];
  userPasswordEditInput: UserPasswordEditInput;
}>;


export type EditUserPasswordMutation = { __typename?: 'Mutation', EditUserPassword?: { __typename?: 'User', id: string, name: string, studentID: string, password: string, photoLink?: string | null, language: string, threeDPId?: string | null, laserCutAvailable: boolean, articlesId?: Array<string | null> | null, isAdmin: boolean, isMinister: boolean, toolLikeIds?: Array<string | null> | null, userBorrowToolIds?: Array<string | null> | null, materialLikeIds?: Array<string | null> | null, userBorrowMaterialIds?: Array<string | null> | null } | null };

export type PromoteUserMutationVariables = Exact<{
  promoteUserId: Scalars['String']['input'];
  promoteUserInput: PromoteUserInput;
}>;


export type PromoteUserMutation = { __typename?: 'Mutation', PromoteUser?: { __typename?: 'User', id: string, name: string, studentID: string, password: string, photoLink?: string | null, language: string, threeDPId?: string | null, laserCutAvailable: boolean, articlesId?: Array<string | null> | null, isAdmin: boolean, isMinister: boolean, toolLikeIds?: Array<string | null> | null, userBorrowToolIds?: Array<string | null> | null, materialLikeIds?: Array<string | null> | null, userBorrowMaterialIds?: Array<string | null> | null } | null };

export type DemoteUserMutationVariables = Exact<{
  demoteUserId: Scalars['String']['input'];
  demoteUserInput: DemoteUserInput;
}>;


export type DemoteUserMutation = { __typename?: 'Mutation', DemoteUser?: { __typename?: 'User', id: string, name: string, studentID: string, password: string, photoLink?: string | null, language: string, threeDPId?: string | null, laserCutAvailable: boolean, articlesId?: Array<string | null> | null, isAdmin: boolean, isMinister: boolean, toolLikeIds?: Array<string | null> | null, userBorrowToolIds?: Array<string | null> | null, materialLikeIds?: Array<string | null> | null, userBorrowMaterialIds?: Array<string | null> | null } | null };

export type AddAdminScheduleMutationVariables = Exact<{
  adminScheduleInput: AdminScheduleInput;
}>;


export type AddAdminScheduleMutation = { __typename?: 'Mutation', AddAdminSchedule?: { __typename?: 'AdminSchedule', id: string, admin: string, day: string, period: string } | null };

export type DeleteAdminScheduleMutationVariables = Exact<{
  deleteAdminScheduleId: Scalars['String']['input'];
}>;


export type DeleteAdminScheduleMutation = { __typename?: 'Mutation', DeleteAdminSchedule?: { __typename?: 'AdminSchedule', id: string, admin: string, day: string, period: string } | null };

export type EditAdminScheduleMutationVariables = Exact<{
  editAdminScheduleId: Scalars['String']['input'];
  name: Scalars['String']['input'];
}>;


export type EditAdminScheduleMutation = { __typename?: 'Mutation', EditAdminSchedule?: { __typename?: 'AdminSchedule', id: string, admin: string, day: string, period: string } | null };

export type GetAllAnnouncementsQueryVariables = Exact<{
  cursor?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetAllAnnouncementsQuery = { __typename?: 'Query', GetAllAnnouncements?: { __typename?: 'GetAllAnnouncements', cursor?: string | null, announcements?: Array<{ __typename?: 'Announcement', id: string, title: string, date: string, content: string } | null> | null } | null };

export type GetAnnouncementByIdQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetAnnouncementByIdQuery = { __typename?: 'Query', GetAnnouncementById?: { __typename?: 'Announcement', id: string, title: string, date: string, content: string } | null };

export type SearchAnnouncementByTitleQueryVariables = Exact<{
  title: Scalars['String']['input'];
}>;


export type SearchAnnouncementByTitleQuery = { __typename?: 'Query', SearchAnnouncementByTitle?: Array<{ __typename?: 'Announcement', id: string, title: string, date: string, content: string } | null> | null };

export type GetAllToolsQueryVariables = Exact<{
  cursor?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetAllToolsQuery = { __typename?: 'Query', GetAllTools?: { __typename?: 'GetAllTools', cursor?: string | null, tools?: Array<{ __typename?: 'Tool', id: string, name: string, partName?: string | null, category: string, position: string, description: string, photoLink: string, usage: number, tutorialLink: string, remain: number, toolLikeIds?: Array<string | null> | null, userBorrowToolIds?: Array<string | null> | null } | null> | null } | null };

export type GetToolByIdQueryVariables = Exact<{
  getToolByIdId: Scalars['String']['input'];
}>;


export type GetToolByIdQuery = { __typename?: 'Query', GetToolById?: { __typename?: 'Tool', id: string, name: string, partName?: string | null, category: string, position: string, description: string, photoLink: string, usage: number, tutorialLink: string, remain: number, toolLikeIds?: Array<string | null> | null, userBorrowToolIds?: Array<string | null> | null } | null };

export type SearchToolByCategoryQueryVariables = Exact<{
  category: Scalars['String']['input'];
}>;


export type SearchToolByCategoryQuery = { __typename?: 'Query', SearchToolByCategory?: Array<{ __typename?: 'Tool', id: string, name: string, partName?: string | null, category: string, position: string, description: string, photoLink: string, usage: number, tutorialLink: string, remain: number, toolLikeIds?: Array<string | null> | null, userBorrowToolIds?: Array<string | null> | null } | null> | null };

export type SearchToolByPositionQueryVariables = Exact<{
  position: Scalars['String']['input'];
}>;


export type SearchToolByPositionQuery = { __typename?: 'Query', SearchToolByPosition?: Array<{ __typename?: 'Tool', id: string, name: string, partName?: string | null, category: string, position: string, description: string, photoLink: string, usage: number, tutorialLink: string, remain: number, toolLikeIds?: Array<string | null> | null, userBorrowToolIds?: Array<string | null> | null } | null> | null };

export type SearchToolByNameQueryVariables = Exact<{
  name: Scalars['String']['input'];
}>;


export type SearchToolByNameQuery = { __typename?: 'Query', SearchToolByName?: Array<{ __typename?: 'Tool', id: string, name: string, partName?: string | null, category: string, position: string, description: string, photoLink: string, usage: number, tutorialLink: string, remain: number, toolLikeIds?: Array<string | null> | null, userBorrowToolIds?: Array<string | null> | null } | null> | null };

export type GetAllArticlesQueryVariables = Exact<{
  cursor?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetAllArticlesQuery = { __typename?: 'Query', GetAllArticles?: { __typename?: 'GetAllArticles', cursor?: string | null, articles?: Array<{ __typename?: 'Article', id: string, writerId: string, description: string, imageURL?: string | null, time: string, title: string, headline: boolean, content: string, userpic?: string | null } | null> | null } | null };

export type GetArticleByIdQueryVariables = Exact<{
  getArticleByIdId: Scalars['String']['input'];
}>;


export type GetArticleByIdQuery = { __typename?: 'Query', GetArticleById?: { __typename?: 'Article', id: string, writerId: string, description: string, imageURL?: string | null, time: string, title: string, headline: boolean, content: string, userpic?: string | null } | null };

export type GetAllDisposableMaterialsQueryVariables = Exact<{
  cursor?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetAllDisposableMaterialsQuery = { __typename?: 'Query', GetAllDisposableMaterials?: { __typename?: 'GetAllDisposableMaterials', cursor?: string | null, disposableMaterials?: Array<{ __typename?: 'DisposableMaterial', id: string, name: string, partName?: string | null, category: string, position: string, description: string, photoLink: string, usage: number, tutorialLink: string, fee?: number | null, remain: boolean } | null> | null } | null };

export type SearchDisposableMaterialByCategoryQueryVariables = Exact<{
  category: Scalars['String']['input'];
}>;


export type SearchDisposableMaterialByCategoryQuery = { __typename?: 'Query', SearchDisposableMaterialByCategory?: Array<{ __typename?: 'DisposableMaterial', id: string, name: string, partName?: string | null, category: string, position: string, description: string, photoLink: string, usage: number, tutorialLink: string, fee?: number | null, remain: boolean } | null> | null };

export type SearchDisposableMaterialByPositionQueryVariables = Exact<{
  position: Scalars['String']['input'];
}>;


export type SearchDisposableMaterialByPositionQuery = { __typename?: 'Query', SearchDisposableMaterialByPosition?: Array<{ __typename?: 'DisposableMaterial', id: string, name: string, partName?: string | null, category: string, position: string, description: string, photoLink: string, usage: number, tutorialLink: string, fee?: number | null, remain: boolean } | null> | null };

export type SearchDisposableMaterialByNameQueryVariables = Exact<{
  name: Scalars['String']['input'];
}>;


export type SearchDisposableMaterialByNameQuery = { __typename?: 'Query', SearchDisposableMaterialByName?: Array<{ __typename?: 'DisposableMaterial', id: string, name: string, partName?: string | null, category: string, position: string, description: string, photoLink: string, usage: number, tutorialLink: string, fee?: number | null, remain: boolean } | null> | null };

export type GetAllMachinesQueryVariables = Exact<{
  cursor?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetAllMachinesQuery = { __typename?: 'Query', GetAllMachines?: { __typename?: 'GetAllMachines', cursor?: string | null, machines?: Array<{ __typename?: 'Machine', id: string, name: string, partName?: string | null, category: string, position: string, description: string, photoLink: string, usage: number, tutorialLink: string } | null> | null } | null };

export type GetMachineByIdQueryVariables = Exact<{
  getMachineByIdId: Scalars['String']['input'];
}>;


export type GetMachineByIdQuery = { __typename?: 'Query', GetMachineById?: { __typename?: 'Machine', id: string, name: string, partName?: string | null, category: string, position: string, description: string, photoLink: string, usage: number, tutorialLink: string } | null };

export type SearchMachineByCategoryQueryVariables = Exact<{
  category: Scalars['String']['input'];
}>;


export type SearchMachineByCategoryQuery = { __typename?: 'Query', SearchMachineByCategory?: Array<{ __typename?: 'Machine', id: string, name: string, partName?: string | null, category: string, position: string, description: string, photoLink: string, usage: number, tutorialLink: string } | null> | null };

export type SearchMachineByPositionQueryVariables = Exact<{
  position: Scalars['String']['input'];
}>;


export type SearchMachineByPositionQuery = { __typename?: 'Query', SearchMachineByPosition?: Array<{ __typename?: 'Machine', id: string, name: string, partName?: string | null, category: string, position: string, description: string, photoLink: string, usage: number, tutorialLink: string } | null> | null };

export type SearchMachineByNameQueryVariables = Exact<{
  input: Scalars['String']['input'];
}>;


export type SearchMachineByNameQuery = { __typename?: 'Query', SearchMachineByName?: Array<{ __typename?: 'Machine', id: string, name: string, partName?: string | null, category: string, position: string, description: string, photoLink: string, usage: number, tutorialLink: string } | null> | null };

export type GetAllMaterialsQueryVariables = Exact<{
  cursor?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetAllMaterialsQuery = { __typename?: 'Query', GetAllMaterials?: { __typename?: 'GetAllMaterials', cursor?: string | null, materials?: Array<{ __typename?: 'Material', id: string, name: string, partName?: string | null, category: string, valuable: boolean, position: string, description: string, photoLink: string, usage: number, tutorialLink?: string | null, fee: number, remain: number, materialLikeIds?: Array<string | null> | null, userBorrowMaterialIds?: Array<string | null> | null } | null> | null } | null };

export type GetMaterialByIdQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetMaterialByIdQuery = { __typename?: 'Query', GetMaterialById?: { __typename?: 'Material', id: string, name: string, partName?: string | null, category: string, valuable: boolean, position: string, description: string, photoLink: string, usage: number, tutorialLink?: string | null, fee: number, remain: number, materialLikeIds?: Array<string | null> | null, userBorrowMaterialIds?: Array<string | null> | null } | null };

export type SearchMaterialByCategoryQueryVariables = Exact<{
  category: Scalars['String']['input'];
}>;


export type SearchMaterialByCategoryQuery = { __typename?: 'Query', SearchMaterialByCategory?: Array<{ __typename?: 'Material', id: string, name: string, partName?: string | null, category: string, valuable: boolean, position: string, description: string, photoLink: string, usage: number, tutorialLink?: string | null, fee: number, remain: number, materialLikeIds?: Array<string | null> | null, userBorrowMaterialIds?: Array<string | null> | null } | null> | null };

export type SearchMaterialByPositionQueryVariables = Exact<{
  position: Scalars['String']['input'];
}>;


export type SearchMaterialByPositionQuery = { __typename?: 'Query', SearchMaterialByPosition?: Array<{ __typename?: 'Material', id: string, name: string, partName?: string | null, category: string, valuable: boolean, position: string, description: string, photoLink: string, usage: number, tutorialLink?: string | null, fee: number, remain: number, materialLikeIds?: Array<string | null> | null, userBorrowMaterialIds?: Array<string | null> | null } | null> | null };

export type SearchMaterialByNameQueryVariables = Exact<{
  name: Scalars['String']['input'];
}>;


export type SearchMaterialByNameQuery = { __typename?: 'Query', SearchMaterialByName?: Array<{ __typename?: 'Material', id: string, name: string, partName?: string | null, category: string, valuable: boolean, position: string, description: string, photoLink: string, usage: number, tutorialLink?: string | null, fee: number, remain: number, materialLikeIds?: Array<string | null> | null, userBorrowMaterialIds?: Array<string | null> | null } | null> | null };

export type GetAllThreeDPsQueryVariables = Exact<{
  cursor?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetAllThreeDPsQuery = { __typename?: 'Query', GetAllThreeDPs?: { __typename?: 'GetAllThreeDPs', cursor?: string | null, threeDPs?: Array<{ __typename?: 'ThreeDP', id: string, name: string, position: string, description: string, photoLink: string, tutorialLink: string, threeDPRequestIds?: Array<string | null> | null, broken: boolean } | null> | null } | null };

export type GetThreeDpByIdQueryVariables = Exact<{
  getThreeDpByIdId: Scalars['String']['input'];
}>;


export type GetThreeDpByIdQuery = { __typename?: 'Query', GetThreeDPById?: { __typename?: 'ThreeDP', id: string, name: string, position: string, description: string, photoLink: string, tutorialLink: string, threeDPRequestIds?: Array<string | null> | null, broken: boolean } | null };

export type SearchThreeDpByPositionQueryVariables = Exact<{
  position: Scalars['String']['input'];
}>;


export type SearchThreeDpByPositionQuery = { __typename?: 'Query', SearchThreeDPByPosition?: Array<{ __typename?: 'ThreeDP', id: string, name: string, position: string, description: string, photoLink: string, tutorialLink: string, threeDPRequestIds?: Array<string | null> | null, broken: boolean } | null> | null };

export type GetAllThreeDpRequestsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllThreeDpRequestsQuery = { __typename?: 'Query', GetAllThreeDPRequests?: Array<{ __typename?: 'ThreeDPRequest', id: string, name: string, studentID: string, userId: string, threeDPId: string, status: string } | null> | null };

export type GetThreeDpRequestsByThreeDpIdQueryVariables = Exact<{
  threeDpId: Scalars['String']['input'];
}>;


export type GetThreeDpRequestsByThreeDpIdQuery = { __typename?: 'Query', GetThreeDPRequestsByThreeDPId?: Array<{ __typename?: 'ThreeDPRequest', id: string, name: string, studentID: string, userId: string, threeDPId: string, status: string } | null> | null };

export type GetThreeDpRequestsByUserIdQueryVariables = Exact<{
  userId: Scalars['String']['input'];
}>;


export type GetThreeDpRequestsByUserIdQuery = { __typename?: 'Query', GetThreeDPRequestsByUserId?: Array<{ __typename?: 'ThreeDPRequest', id: string, name: string, studentID: string, userId: string, threeDPId: string, status: string } | null> | null };

export type GetAllUsersQueryVariables = Exact<{
  cursor?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetAllUsersQuery = { __typename?: 'Query', GetAllUsers?: { __typename?: 'GetAllUsers', cursor?: string | null, users?: Array<{ __typename?: 'SimpleUser', id: string, name: string, studentID: string, photoLink?: string | null, laserCutAvailable: boolean, isAdmin: boolean, isMinister: boolean } | null> | null } | null };

export type SearchUserByNameQueryVariables = Exact<{
  name: Scalars['String']['input'];
}>;


export type SearchUserByNameQuery = { __typename?: 'Query', SearchUserByName?: Array<{ __typename?: 'SimpleUser', id: string, name: string, studentID: string, photoLink?: string | null, laserCutAvailable: boolean, isAdmin: boolean, isMinister: boolean } | null> | null };

export type GetUserByStudentIdQueryVariables = Exact<{
  studentId: Scalars['String']['input'];
}>;


export type GetUserByStudentIdQuery = { __typename?: 'Query', GetUserByStudentID?: { __typename?: 'User', id: string, name: string, studentID: string, password: string, photoLink?: string | null, language: string, threeDPId?: string | null, laserCutAvailable: boolean, articlesId?: Array<string | null> | null, isAdmin: boolean, isMinister: boolean, toolLikeIds?: Array<string | null> | null, userBorrowToolIds?: Array<string | null> | null, materialLikeIds?: Array<string | null> | null, userBorrowMaterialIds?: Array<string | null> | null } | null };

export type GetAuthorizedCodeQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAuthorizedCodeQuery = { __typename?: 'Query', GetAuthorizedCode?: { __typename?: 'AuthorizedCode', id: string, codeList?: Array<string | null> | null, updatedAt: string } | null };

export type GetToolLikesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetToolLikesQuery = { __typename?: 'Query', GetToolLikes?: Array<{ __typename?: 'ToolLike', id: string, userId: string, toolId: string } | null> | null };

export type GetToolLikeByIdQueryVariables = Exact<{
  getToolLikeByIdId: Scalars['String']['input'];
}>;


export type GetToolLikeByIdQuery = { __typename?: 'Query', GetToolLikeById?: { __typename?: 'ToolLike', id: string, userId: string, toolId: string } | null };

export type GetLikedToolsByUserIdQueryVariables = Exact<{
  userId: Scalars['String']['input'];
}>;


export type GetLikedToolsByUserIdQuery = { __typename?: 'Query', GetLikedToolsByUserId?: Array<{ __typename?: 'Tool', id: string, name: string, partName?: string | null, category: string, position: string, description: string, photoLink: string, usage: number, tutorialLink: string, remain: number, toolLikeIds?: Array<string | null> | null, userBorrowToolIds?: Array<string | null> | null } | null> | null };

export type GetAllUserBorrowToolsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllUserBorrowToolsQuery = { __typename?: 'Query', GetAllUserBorrowTools?: Array<{ __typename?: 'UserBorrowTool', id: string, userId: string, toolId: string, borrower: string, studentId: string, figure: string, name: string, partName?: string | null, category: string, remain: number, position: string, quantity: number, status: string, borrowDate: string, returnDate: string } | null> | null };

export type GetAllUserBorrowToolsByStatusQueryVariables = Exact<{
  status: Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>;
}>;


export type GetAllUserBorrowToolsByStatusQuery = { __typename?: 'Query', GetAllUserBorrowToolsByStatus?: Array<{ __typename?: 'UserBorrowTool', id: string, userId: string, toolId: string, borrower: string, studentId: string, figure: string, name: string, partName?: string | null, category: string, remain: number, position: string, quantity: number, status: string, borrowDate: string, returnDate: string } | null> | null };

export type GetUserBorrowToolByIdQueryVariables = Exact<{
  getUserBorrowToolByIdId: Scalars['String']['input'];
}>;


export type GetUserBorrowToolByIdQuery = { __typename?: 'Query', GetUserBorrowToolById?: { __typename?: 'UserBorrowTool', id: string, userId: string, toolId: string, borrower: string, studentId: string, figure: string, name: string, partName?: string | null, category: string, remain: number, position: string, quantity: number, status: string, borrowDate: string, returnDate: string } | null };

export type GetUserBorrowToolsByUserIdQueryVariables = Exact<{
  userId: Scalars['String']['input'];
}>;


export type GetUserBorrowToolsByUserIdQuery = { __typename?: 'Query', GetUserBorrowToolsByUserId?: Array<{ __typename?: 'UserBorrowTool', id: string, userId: string, toolId: string, borrower: string, studentId: string, figure: string, name: string, partName?: string | null, category: string, remain: number, position: string, quantity: number, status: string, borrowDate: string, returnDate: string } | null> | null };

export type GetUserBorrowToolsByStatusAndUserIdQueryVariables = Exact<{
  userId: Scalars['String']['input'];
  status: Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>;
}>;


export type GetUserBorrowToolsByStatusAndUserIdQuery = { __typename?: 'Query', GetUserBorrowToolsByStatusAndUserId?: Array<{ __typename?: 'UserBorrowTool', id: string, userId: string, toolId: string, borrower: string, studentId: string, figure: string, name: string, partName?: string | null, category: string, remain: number, position: string, quantity: number, status: string, borrowDate: string, returnDate: string } | null> | null };

export type GetMaterialLikesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMaterialLikesQuery = { __typename?: 'Query', GetMaterialLikes?: Array<{ __typename?: 'MaterialLike', id: string, userId: string, materialId: string } | null> | null };

export type GetMaterialLikeByIdQueryVariables = Exact<{
  getMaterialLikeByIdId: Scalars['String']['input'];
}>;


export type GetMaterialLikeByIdQuery = { __typename?: 'Query', GetMaterialLikeById?: { __typename?: 'MaterialLike', id: string, userId: string, materialId: string } | null };

export type GetLikedMaterialsByUserIdQueryVariables = Exact<{
  userId: Scalars['String']['input'];
}>;


export type GetLikedMaterialsByUserIdQuery = { __typename?: 'Query', GetLikedMaterialsByUserId?: Array<{ __typename?: 'Material', id: string, name: string, partName?: string | null, category: string, valuable: boolean, position: string, description: string, photoLink: string, usage: number, tutorialLink?: string | null, fee: number, remain: number, materialLikeIds?: Array<string | null> | null } | null> | null };

export type GetAllUserBorrowMaterialsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllUserBorrowMaterialsQuery = { __typename?: 'Query', GetAllUserBorrowMaterials?: Array<{ __typename?: 'UserBorrowMaterial', id: string, userId: string, materialId: string, borrower: string, studentId: string, figure: string, name: string, partName?: string | null, category: string, remain: number, position: string, quantity: number, status: string, borrowDate: string, returnDate: string } | null> | null };

export type GetAllUserBorrowMaterialsByStatusQueryVariables = Exact<{
  status: Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>;
}>;


export type GetAllUserBorrowMaterialsByStatusQuery = { __typename?: 'Query', GetAllUserBorrowMaterialsByStatus?: Array<{ __typename?: 'UserBorrowMaterial', id: string, userId: string, materialId: string, borrower: string, studentId: string, figure: string, name: string, partName?: string | null, category: string, remain: number, position: string, quantity: number, status: string, borrowDate: string, returnDate: string } | null> | null };

export type GetUserBorrowMaterialByIdQueryVariables = Exact<{
  getUserBorrowMaterialByIdId: Scalars['String']['input'];
}>;


export type GetUserBorrowMaterialByIdQuery = { __typename?: 'Query', GetUserBorrowMaterialById?: { __typename?: 'UserBorrowMaterial', id: string, userId: string, materialId: string, borrower: string, studentId: string, figure: string, name: string, partName?: string | null, category: string, remain: number, position: string, quantity: number, status: string, borrowDate: string, returnDate: string } | null };

export type GetUserBorrowMaterialsByUserIdQueryVariables = Exact<{
  userId: Scalars['String']['input'];
}>;


export type GetUserBorrowMaterialsByUserIdQuery = { __typename?: 'Query', GetUserBorrowMaterialsByUserId?: Array<{ __typename?: 'UserBorrowMaterial', id: string, userId: string, materialId: string, borrower: string, studentId: string, figure: string, name: string, partName?: string | null, category: string, remain: number, position: string, quantity: number, status: string, borrowDate: string, returnDate: string } | null> | null };

export type GetUserBorrowMaterialsByStatusAndUserIdQueryVariables = Exact<{
  userId: Scalars['String']['input'];
  status: Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>;
}>;


export type GetUserBorrowMaterialsByStatusAndUserIdQuery = { __typename?: 'Query', GetUserBorrowMaterialsByStatusAndUserId?: Array<{ __typename?: 'UserBorrowMaterial', id: string, userId: string, materialId: string, borrower: string, studentId: string, figure: string, name: string, partName?: string | null, category: string, remain: number, position: string, quantity: number, status: string, borrowDate: string, returnDate: string } | null> | null };

export type LogInQueryVariables = Exact<{
  logInInput: LogInInput;
}>;


export type LogInQuery = { __typename?: 'Query', LogIn?: { __typename?: 'LogInRet', token: string, user: { __typename?: 'User', id: string, name: string, studentID: string, password: string, photoLink?: string | null, language: string, threeDPId?: string | null, laserCutAvailable: boolean, articlesId?: Array<string | null> | null, isAdmin: boolean, isMinister: boolean, toolLikeIds?: Array<string | null> | null, userBorrowToolIds?: Array<string | null> | null, materialLikeIds?: Array<string | null> | null, userBorrowMaterialIds?: Array<string | null> | null } } | null };

export type GetAdminScheduleByDayQueryVariables = Exact<{
  day: Scalars['String']['input'];
}>;


export type GetAdminScheduleByDayQuery = { __typename?: 'Query', GetAdminScheduleByDay?: Array<{ __typename?: 'AdminSchedule', id: string, admin: string, day: string, period: string } | null> | null };

export type GetAdminScheduleByPeriodQueryVariables = Exact<{
  period: Scalars['String']['input'];
}>;


export type GetAdminScheduleByPeriodQuery = { __typename?: 'Query', GetAdminScheduleByPeriod?: Array<{ __typename?: 'AdminSchedule', id: string, admin: string, day: string, period: string } | null> | null };

export type GetAllAdminSchedulesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllAdminSchedulesQuery = { __typename?: 'Query', GetAllAdminSchedules?: Array<Array<{ __typename?: 'AdminSchedule', id: string, admin: string, day: string, period: string } | null> | null> | null };

export type GetAllSignupAuthCodesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllSignupAuthCodesQuery = { __typename?: 'Query', GetAllSignupAuthCodes?: Array<{ __typename?: 'SignupAuthCode', studentID: string, code: string } | null> | null };

export type GetSignupAuthCodeByStudentIdQueryVariables = Exact<{
  studentId: Scalars['String']['input'];
}>;


export type GetSignupAuthCodeByStudentIdQuery = { __typename?: 'Query', GetSignupAuthCodeByStudentID?: { __typename?: 'SignupAuthCode', studentID: string, code: string } | null };

export type QueryQueryVariables = Exact<{
  studentId: Scalars['String']['input'];
  code: Scalars['String']['input'];
}>;


export type QueryQuery = { __typename?: 'Query', CheckSignupAuthCode?: boolean | null };

export type AnnouncementCreatedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type AnnouncementCreatedSubscription = { __typename?: 'Subscription', AnnouncementCreated?: { __typename?: 'Announcement', id: string, date: string, title: string, content: string } | null };

export type ArticleCreatedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type ArticleCreatedSubscription = { __typename?: 'Subscription', ArticleCreated?: { __typename?: 'Article', id: string, title: string, description: string, content: string, writerId: string, time: string } | null };

export type ArticleUpdatedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type ArticleUpdatedSubscription = { __typename?: 'Subscription', ArticleUpdated?: { __typename?: 'Article', id: string, title: string, description: string, content: string, writerId: string, time: string } | null };

export type ArticleDeletedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type ArticleDeletedSubscription = { __typename?: 'Subscription', ArticleDeleted?: { __typename?: 'Article', id: string } | null };


export const AddAnnouncementDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddAnnouncement"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"announcementInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AnnouncementInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"AddAnnouncement"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"announcementInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"announcementInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]}}]} as unknown as DocumentNode<AddAnnouncementMutation, AddAnnouncementMutationVariables>;
export const DeleteAnnouncementDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteAnnouncement"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteAnnouncementId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"DeleteAnnouncement"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteAnnouncementId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]}}]} as unknown as DocumentNode<DeleteAnnouncementMutation, DeleteAnnouncementMutationVariables>;
export const EditAnnouncementDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"EditAnnouncement"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"editAnnouncementId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"announcementInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AnnouncementInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"EditAnnouncement"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"editAnnouncementId"}}},{"kind":"Argument","name":{"kind":"Name","value":"announcementInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"announcementInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]}}]} as unknown as DocumentNode<EditAnnouncementMutation, EditAnnouncementMutationVariables>;
export const AddArticleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddArticle"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"articleInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ArticleInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"AddArticle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"articleInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"articleInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"writerId"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"imageURL"}},{"kind":"Field","name":{"kind":"Name","value":"time"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"headline"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"userpic"}}]}}]}}]} as unknown as DocumentNode<AddArticleMutation, AddArticleMutationVariables>;
export const UpdateArticleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateArticle"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateArticleId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"articleInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ArticleInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"UpdateArticle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateArticleId"}}},{"kind":"Argument","name":{"kind":"Name","value":"articleInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"articleInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"writerId"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"imageURL"}},{"kind":"Field","name":{"kind":"Name","value":"time"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"headline"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"userpic"}}]}}]}}]} as unknown as DocumentNode<UpdateArticleMutation, UpdateArticleMutationVariables>;
export const DeleteArticleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteArticle"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteArticleId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"DeleteArticle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteArticleId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteArticleMutation, DeleteArticleMutationVariables>;
export const AddDisposableMaterialDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddDisposableMaterial"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"disposableMaterialInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DisposableMaterialInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"AddDisposableMaterial"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"disposableMaterialInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"disposableMaterialInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"partName"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"usage"}},{"kind":"Field","name":{"kind":"Name","value":"tutorialLink"}},{"kind":"Field","name":{"kind":"Name","value":"fee"}},{"kind":"Field","name":{"kind":"Name","value":"remain"}}]}}]}}]} as unknown as DocumentNode<AddDisposableMaterialMutation, AddDisposableMaterialMutationVariables>;
export const DeleteDisposableMaterialDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteDisposableMaterial"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteDisposableMaterialId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"DeleteDisposableMaterial"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteDisposableMaterialId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"partName"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"usage"}},{"kind":"Field","name":{"kind":"Name","value":"tutorialLink"}},{"kind":"Field","name":{"kind":"Name","value":"fee"}},{"kind":"Field","name":{"kind":"Name","value":"remain"}}]}}]}}]} as unknown as DocumentNode<DeleteDisposableMaterialMutation, DeleteDisposableMaterialMutationVariables>;
export const EditDisposableMaterialDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"EditDisposableMaterial"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"editDisposableMaterialId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"disposableMaterialInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DisposableMaterialInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"EditDisposableMaterial"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"editDisposableMaterialId"}}},{"kind":"Argument","name":{"kind":"Name","value":"disposableMaterialInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"disposableMaterialInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"partName"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"usage"}},{"kind":"Field","name":{"kind":"Name","value":"tutorialLink"}},{"kind":"Field","name":{"kind":"Name","value":"fee"}},{"kind":"Field","name":{"kind":"Name","value":"remain"}}]}}]}}]} as unknown as DocumentNode<EditDisposableMaterialMutation, EditDisposableMaterialMutationVariables>;
export const AddMachineDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddMachine"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"machineInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MachineInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"AddMachine"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"machineInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"machineInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"partName"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"usage"}},{"kind":"Field","name":{"kind":"Name","value":"tutorialLink"}}]}}]}}]} as unknown as DocumentNode<AddMachineMutation, AddMachineMutationVariables>;
export const DeleteMachineDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteMachine"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteMachineId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"DeleteMachine"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteMachineId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"partName"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"usage"}},{"kind":"Field","name":{"kind":"Name","value":"tutorialLink"}}]}}]}}]} as unknown as DocumentNode<DeleteMachineMutation, DeleteMachineMutationVariables>;
export const EditMachineDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"EditMachine"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"editMachineId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"machineInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MachineInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"EditMachine"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"editMachineId"}}},{"kind":"Argument","name":{"kind":"Name","value":"machineInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"machineInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"partName"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"usage"}},{"kind":"Field","name":{"kind":"Name","value":"tutorialLink"}}]}}]}}]} as unknown as DocumentNode<EditMachineMutation, EditMachineMutationVariables>;
export const AddMaterialDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddMaterial"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"materialInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MaterialInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"AddMaterial"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"materialInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"materialInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"partName"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"valuable"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"usage"}},{"kind":"Field","name":{"kind":"Name","value":"tutorialLink"}},{"kind":"Field","name":{"kind":"Name","value":"fee"}},{"kind":"Field","name":{"kind":"Name","value":"remain"}},{"kind":"Field","name":{"kind":"Name","value":"materialLikeIds"}},{"kind":"Field","name":{"kind":"Name","value":"userBorrowMaterialIds"}}]}}]}}]} as unknown as DocumentNode<AddMaterialMutation, AddMaterialMutationVariables>;
export const DeleteMaterialDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteMaterial"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteMaterialId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"DeleteMaterial"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteMaterialId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"partName"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"valuable"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"usage"}},{"kind":"Field","name":{"kind":"Name","value":"tutorialLink"}},{"kind":"Field","name":{"kind":"Name","value":"fee"}},{"kind":"Field","name":{"kind":"Name","value":"remain"}},{"kind":"Field","name":{"kind":"Name","value":"materialLikeIds"}},{"kind":"Field","name":{"kind":"Name","value":"userBorrowMaterialIds"}}]}}]}}]} as unknown as DocumentNode<DeleteMaterialMutation, DeleteMaterialMutationVariables>;
export const EditMaterialDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"EditMaterial"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"editMaterialId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"materialInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MaterialInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"EditMaterial"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"editMaterialId"}}},{"kind":"Argument","name":{"kind":"Name","value":"materialInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"materialInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"partName"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"valuable"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"usage"}},{"kind":"Field","name":{"kind":"Name","value":"tutorialLink"}},{"kind":"Field","name":{"kind":"Name","value":"fee"}},{"kind":"Field","name":{"kind":"Name","value":"remain"}},{"kind":"Field","name":{"kind":"Name","value":"materialLikeIds"}},{"kind":"Field","name":{"kind":"Name","value":"userBorrowMaterialIds"}}]}}]}}]} as unknown as DocumentNode<EditMaterialMutation, EditMaterialMutationVariables>;
export const AddThreeDpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddThreeDP"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"threeDpInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ThreeDPInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"AddThreeDP"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"threeDPInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"threeDpInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"tutorialLink"}},{"kind":"Field","name":{"kind":"Name","value":"broken"}}]}}]}}]} as unknown as DocumentNode<AddThreeDpMutation, AddThreeDpMutationVariables>;
export const DeleteThreeDpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteThreeDP"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteThreeDpId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"DeleteThreeDP"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteThreeDpId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"tutorialLink"}},{"kind":"Field","name":{"kind":"Name","value":"threeDPRequestIds"}},{"kind":"Field","name":{"kind":"Name","value":"broken"}}]}}]}}]} as unknown as DocumentNode<DeleteThreeDpMutation, DeleteThreeDpMutationVariables>;
export const EditThreeDpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"EditThreeDP"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"editThreeDpId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"threeDpInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ThreeDPInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"EditThreeDP"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"editThreeDpId"}}},{"kind":"Argument","name":{"kind":"Name","value":"threeDPInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"threeDpInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"tutorialLink"}},{"kind":"Field","name":{"kind":"Name","value":"threeDPRequestIds"}},{"kind":"Field","name":{"kind":"Name","value":"broken"}}]}}]}}]} as unknown as DocumentNode<EditThreeDpMutation, EditThreeDpMutationVariables>;
export const AddThreeDpRequestDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddThreeDPRequest"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"threeDpRequestInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ThreeDPRequestInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"AddThreeDPRequest"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"threeDPRequestInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"threeDpRequestInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"studentID"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"threeDPId"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<AddThreeDpRequestMutation, AddThreeDpRequestMutationVariables>;
export const DeleteThreeDpRequestDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteThreeDPRequest"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteThreeDpRequestId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"DeleteThreeDPRequest"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteThreeDpRequestId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"studentID"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"threeDPId"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<DeleteThreeDpRequestMutation, DeleteThreeDpRequestMutationVariables>;
export const EditThreeDpRequestStatusDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"EditThreeDPRequestStatus"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"editThreeDpRequestStatusId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"status"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"EditThreeDPRequestStatus"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"editThreeDpRequestStatusId"}}},{"kind":"Argument","name":{"kind":"Name","value":"status"},"value":{"kind":"Variable","name":{"kind":"Name","value":"status"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"studentID"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"threeDPId"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<EditThreeDpRequestStatusMutation, EditThreeDpRequestStatusMutationVariables>;
export const AddToolDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddTool"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"toolInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ToolInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"AddTool"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"toolInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"toolInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"partName"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"usage"}},{"kind":"Field","name":{"kind":"Name","value":"tutorialLink"}},{"kind":"Field","name":{"kind":"Name","value":"remain"}},{"kind":"Field","name":{"kind":"Name","value":"toolLikeIds"}},{"kind":"Field","name":{"kind":"Name","value":"userBorrowToolIds"}}]}}]}}]} as unknown as DocumentNode<AddToolMutation, AddToolMutationVariables>;
export const DeleteToolDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteTool"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteToolId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"DeleteTool"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteToolId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"partName"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"usage"}},{"kind":"Field","name":{"kind":"Name","value":"tutorialLink"}},{"kind":"Field","name":{"kind":"Name","value":"remain"}},{"kind":"Field","name":{"kind":"Name","value":"toolLikeIds"}},{"kind":"Field","name":{"kind":"Name","value":"userBorrowToolIds"}}]}}]}}]} as unknown as DocumentNode<DeleteToolMutation, DeleteToolMutationVariables>;
export const EditToolDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"EditTool"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"editToolId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"toolInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ToolInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"EditTool"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"editToolId"}}},{"kind":"Argument","name":{"kind":"Name","value":"toolInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"toolInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"partName"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"usage"}},{"kind":"Field","name":{"kind":"Name","value":"tutorialLink"}},{"kind":"Field","name":{"kind":"Name","value":"remain"}},{"kind":"Field","name":{"kind":"Name","value":"toolLikeIds"}},{"kind":"Field","name":{"kind":"Name","value":"userBorrowToolIds"}}]}}]}}]} as unknown as DocumentNode<EditToolMutation, EditToolMutationVariables>;
export const AddUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"AddUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"studentID"}},{"kind":"Field","name":{"kind":"Name","value":"password"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"threeDPId"}},{"kind":"Field","name":{"kind":"Name","value":"laserCutAvailable"}},{"kind":"Field","name":{"kind":"Name","value":"articlesId"}},{"kind":"Field","name":{"kind":"Name","value":"isAdmin"}},{"kind":"Field","name":{"kind":"Name","value":"isMinister"}},{"kind":"Field","name":{"kind":"Name","value":"toolLikeIds"}},{"kind":"Field","name":{"kind":"Name","value":"userBorrowToolIds"}},{"kind":"Field","name":{"kind":"Name","value":"materialLikeIds"}},{"kind":"Field","name":{"kind":"Name","value":"userBorrowMaterialIds"}}]}}]}}]} as unknown as DocumentNode<AddUserMutation, AddUserMutationVariables>;
export const DeleteUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteUserId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"DeleteUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteUserId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"studentID"}},{"kind":"Field","name":{"kind":"Name","value":"password"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"threeDPId"}},{"kind":"Field","name":{"kind":"Name","value":"laserCutAvailable"}},{"kind":"Field","name":{"kind":"Name","value":"articlesId"}},{"kind":"Field","name":{"kind":"Name","value":"isAdmin"}},{"kind":"Field","name":{"kind":"Name","value":"isMinister"}},{"kind":"Field","name":{"kind":"Name","value":"toolLikeIds"}},{"kind":"Field","name":{"kind":"Name","value":"userBorrowToolIds"}},{"kind":"Field","name":{"kind":"Name","value":"materialLikeIds"}},{"kind":"Field","name":{"kind":"Name","value":"userBorrowMaterialIds"}}]}}]}}]} as unknown as DocumentNode<DeleteUserMutation, DeleteUserMutationVariables>;
export const EditUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"EditUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"editUserId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userEditInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserEditInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"EditUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"editUserId"}}},{"kind":"Argument","name":{"kind":"Name","value":"userEditInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userEditInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"studentID"}},{"kind":"Field","name":{"kind":"Name","value":"password"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"threeDPId"}},{"kind":"Field","name":{"kind":"Name","value":"laserCutAvailable"}},{"kind":"Field","name":{"kind":"Name","value":"articlesId"}},{"kind":"Field","name":{"kind":"Name","value":"isAdmin"}},{"kind":"Field","name":{"kind":"Name","value":"isMinister"}},{"kind":"Field","name":{"kind":"Name","value":"toolLikeIds"}},{"kind":"Field","name":{"kind":"Name","value":"userBorrowToolIds"}},{"kind":"Field","name":{"kind":"Name","value":"materialLikeIds"}},{"kind":"Field","name":{"kind":"Name","value":"userBorrowMaterialIds"}}]}}]}}]} as unknown as DocumentNode<EditUserMutation, EditUserMutationVariables>;
export const DisposableMaterialUsageUpdateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DisposableMaterialUsageUpdate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"disposableMaterialUsageUpdateId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"disposableMaterialUsageUpdateInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DisposableMaterialUsageUpdateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"DisposableMaterialUsageUpdate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"disposableMaterialUsageUpdateId"}}},{"kind":"Argument","name":{"kind":"Name","value":"disposableMaterialUsageUpdateInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"disposableMaterialUsageUpdateInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"partName"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"usage"}},{"kind":"Field","name":{"kind":"Name","value":"tutorialLink"}},{"kind":"Field","name":{"kind":"Name","value":"fee"}},{"kind":"Field","name":{"kind":"Name","value":"remain"}}]}}]}}]} as unknown as DocumentNode<DisposableMaterialUsageUpdateMutation, DisposableMaterialUsageUpdateMutationVariables>;
export const MaterialUsageUpdateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"MaterialUsageUpdate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"materialUsageUpdateId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"materialUsageUpdateInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MaterialUsageUpdateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"MaterialUsageUpdate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"materialUsageUpdateId"}}},{"kind":"Argument","name":{"kind":"Name","value":"materialUsageUpdateInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"materialUsageUpdateInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"partName"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"valuable"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"usage"}},{"kind":"Field","name":{"kind":"Name","value":"tutorialLink"}},{"kind":"Field","name":{"kind":"Name","value":"fee"}},{"kind":"Field","name":{"kind":"Name","value":"remain"}},{"kind":"Field","name":{"kind":"Name","value":"materialLikeIds"}},{"kind":"Field","name":{"kind":"Name","value":"userBorrowMaterialIds"}}]}}]}}]} as unknown as DocumentNode<MaterialUsageUpdateMutation, MaterialUsageUpdateMutationVariables>;
export const ToolUsageUpdateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ToolUsageUpdate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"toolUsageUpdateId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"toolUsageUpdateInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ToolUsageUpdateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ToolUsageUpdate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"toolUsageUpdateId"}}},{"kind":"Argument","name":{"kind":"Name","value":"toolUsageUpdateInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"toolUsageUpdateInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"partName"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"usage"}},{"kind":"Field","name":{"kind":"Name","value":"tutorialLink"}},{"kind":"Field","name":{"kind":"Name","value":"remain"}},{"kind":"Field","name":{"kind":"Name","value":"toolLikeIds"}},{"kind":"Field","name":{"kind":"Name","value":"userBorrowToolIds"}}]}}]}}]} as unknown as DocumentNode<ToolUsageUpdateMutation, ToolUsageUpdateMutationVariables>;
export const UserMachineUsageUpdateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserMachineUsageUpdate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userMachineUsageUpdateId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userMachineUpdateInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserMachineUpdateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"UserMachineUsageUpdate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userMachineUsageUpdateId"}}},{"kind":"Argument","name":{"kind":"Name","value":"userMachineUpdateInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userMachineUpdateInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"studentID"}},{"kind":"Field","name":{"kind":"Name","value":"password"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"threeDPId"}},{"kind":"Field","name":{"kind":"Name","value":"laserCutAvailable"}},{"kind":"Field","name":{"kind":"Name","value":"articlesId"}},{"kind":"Field","name":{"kind":"Name","value":"isAdmin"}},{"kind":"Field","name":{"kind":"Name","value":"isMinister"}},{"kind":"Field","name":{"kind":"Name","value":"language"}}]}}]}}]} as unknown as DocumentNode<UserMachineUsageUpdateMutation, UserMachineUsageUpdateMutationVariables>;
export const UpdateAuthorizedCodeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateAuthorizedCode"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"authorizedCodeInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AuthorizedCodeInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"UpdateAuthorizedCode"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"authorizedCodeInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"authorizedCodeInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"codeList"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<UpdateAuthorizedCodeMutation, UpdateAuthorizedCodeMutationVariables>;
export const AddToolLikeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddToolLike"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"toolLikeInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ToolLikeInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"AddToolLike"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"toolLikeInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"toolLikeInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"toolId"}}]}}]}}]} as unknown as DocumentNode<AddToolLikeMutation, AddToolLikeMutationVariables>;
export const DeleteToolLikeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteToolLike"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"toolLikeInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ToolLikeInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"DeleteToolLike"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"toolLikeInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"toolLikeInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"toolId"}}]}}]}}]} as unknown as DocumentNode<DeleteToolLikeMutation, DeleteToolLikeMutationVariables>;
export const EditUserLanguageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"EditUserLanguage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"editUserLanguageId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"language"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"EditUserLanguage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"editUserLanguageId"}}},{"kind":"Argument","name":{"kind":"Name","value":"language"},"value":{"kind":"Variable","name":{"kind":"Name","value":"language"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"studentID"}},{"kind":"Field","name":{"kind":"Name","value":"password"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"threeDPId"}},{"kind":"Field","name":{"kind":"Name","value":"laserCutAvailable"}},{"kind":"Field","name":{"kind":"Name","value":"articlesId"}},{"kind":"Field","name":{"kind":"Name","value":"isAdmin"}},{"kind":"Field","name":{"kind":"Name","value":"isMinister"}},{"kind":"Field","name":{"kind":"Name","value":"toolLikeIds"}},{"kind":"Field","name":{"kind":"Name","value":"userBorrowToolIds"}},{"kind":"Field","name":{"kind":"Name","value":"materialLikeIds"}}]}}]}}]} as unknown as DocumentNode<EditUserLanguageMutation, EditUserLanguageMutationVariables>;
export const AddUserBorrowToolDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddUserBorrowTool"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userBorrowToolInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserBorrowToolInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"AddUserBorrowTool"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userBorrowToolInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userBorrowToolInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"toolId"}},{"kind":"Field","name":{"kind":"Name","value":"borrower"}},{"kind":"Field","name":{"kind":"Name","value":"studentId"}},{"kind":"Field","name":{"kind":"Name","value":"figure"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"partName"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"remain"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"borrowDate"}},{"kind":"Field","name":{"kind":"Name","value":"returnDate"}}]}}]}}]} as unknown as DocumentNode<AddUserBorrowToolMutation, AddUserBorrowToolMutationVariables>;
export const DeleteUserBorrowToolDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteUserBorrowTool"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteUserBorrowToolId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"DeleteUserBorrowTool"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteUserBorrowToolId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"toolId"}},{"kind":"Field","name":{"kind":"Name","value":"borrower"}},{"kind":"Field","name":{"kind":"Name","value":"studentId"}},{"kind":"Field","name":{"kind":"Name","value":"figure"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"partName"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"remain"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"borrowDate"}},{"kind":"Field","name":{"kind":"Name","value":"returnDate"}}]}}]}}]} as unknown as DocumentNode<DeleteUserBorrowToolMutation, DeleteUserBorrowToolMutationVariables>;
export const EditUserBorrowToolQuantityDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"EditUserBorrowToolQuantity"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"editUserBorrowToolQuantityId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userBorrowToolInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserBorrowToolInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"EditUserBorrowToolQuantity"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"editUserBorrowToolQuantityId"}}},{"kind":"Argument","name":{"kind":"Name","value":"userBorrowToolInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userBorrowToolInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"toolId"}},{"kind":"Field","name":{"kind":"Name","value":"borrower"}},{"kind":"Field","name":{"kind":"Name","value":"studentId"}},{"kind":"Field","name":{"kind":"Name","value":"figure"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"partName"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"remain"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"borrowDate"}},{"kind":"Field","name":{"kind":"Name","value":"returnDate"}}]}}]}}]} as unknown as DocumentNode<EditUserBorrowToolQuantityMutation, EditUserBorrowToolQuantityMutationVariables>;
export const EditUserBorrowToolStatusDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"EditUserBorrowToolStatus"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"editUserBorrowToolStatusId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"status"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"EditUserBorrowToolStatus"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"editUserBorrowToolStatusId"}}},{"kind":"Argument","name":{"kind":"Name","value":"status"},"value":{"kind":"Variable","name":{"kind":"Name","value":"status"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"toolId"}},{"kind":"Field","name":{"kind":"Name","value":"borrower"}},{"kind":"Field","name":{"kind":"Name","value":"studentId"}},{"kind":"Field","name":{"kind":"Name","value":"figure"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"partName"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"remain"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"borrowDate"}},{"kind":"Field","name":{"kind":"Name","value":"returnDate"}}]}}]}}]} as unknown as DocumentNode<EditUserBorrowToolStatusMutation, EditUserBorrowToolStatusMutationVariables>;
export const AddMaterialLikeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddMaterialLike"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"materialLikeInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MaterialLikeInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"AddMaterialLike"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"materialLikeInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"materialLikeInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"materialId"}}]}}]}}]} as unknown as DocumentNode<AddMaterialLikeMutation, AddMaterialLikeMutationVariables>;
export const DeleteMaterialLikeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteMaterialLike"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"materialLikeInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MaterialLikeInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"DeleteMaterialLike"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"materialLikeInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"materialLikeInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"materialId"}}]}}]}}]} as unknown as DocumentNode<DeleteMaterialLikeMutation, DeleteMaterialLikeMutationVariables>;
export const AddUserBorrowMaterialDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddUserBorrowMaterial"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userBorrowMaterialInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserBorrowMaterialInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"AddUserBorrowMaterial"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userBorrowMaterialInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userBorrowMaterialInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"materialId"}},{"kind":"Field","name":{"kind":"Name","value":"borrower"}},{"kind":"Field","name":{"kind":"Name","value":"studentId"}},{"kind":"Field","name":{"kind":"Name","value":"figure"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"partName"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"remain"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"borrowDate"}},{"kind":"Field","name":{"kind":"Name","value":"returnDate"}}]}}]}}]} as unknown as DocumentNode<AddUserBorrowMaterialMutation, AddUserBorrowMaterialMutationVariables>;
export const DeleteUserBorrowMaterialDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteUserBorrowMaterial"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteUserBorrowMaterialId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"DeleteUserBorrowMaterial"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteUserBorrowMaterialId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"materialId"}},{"kind":"Field","name":{"kind":"Name","value":"borrower"}},{"kind":"Field","name":{"kind":"Name","value":"studentId"}},{"kind":"Field","name":{"kind":"Name","value":"figure"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"partName"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"remain"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"borrowDate"}},{"kind":"Field","name":{"kind":"Name","value":"returnDate"}}]}}]}}]} as unknown as DocumentNode<DeleteUserBorrowMaterialMutation, DeleteUserBorrowMaterialMutationVariables>;
export const EditUserBorrowMaterialQuantityDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"EditUserBorrowMaterialQuantity"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"editUserBorrowMaterialQuantityId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userBorrowMaterialInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserBorrowMaterialInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"EditUserBorrowMaterialQuantity"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"editUserBorrowMaterialQuantityId"}}},{"kind":"Argument","name":{"kind":"Name","value":"userBorrowMaterialInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userBorrowMaterialInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"materialId"}},{"kind":"Field","name":{"kind":"Name","value":"borrower"}},{"kind":"Field","name":{"kind":"Name","value":"studentId"}},{"kind":"Field","name":{"kind":"Name","value":"figure"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"partName"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"remain"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"borrowDate"}},{"kind":"Field","name":{"kind":"Name","value":"returnDate"}}]}}]}}]} as unknown as DocumentNode<EditUserBorrowMaterialQuantityMutation, EditUserBorrowMaterialQuantityMutationVariables>;
export const EditUserBorrowMaterialStatusDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"EditUserBorrowMaterialStatus"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"editUserBorrowMaterialStatusId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"status"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"EditUserBorrowMaterialStatus"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"editUserBorrowMaterialStatusId"}}},{"kind":"Argument","name":{"kind":"Name","value":"status"},"value":{"kind":"Variable","name":{"kind":"Name","value":"status"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"materialId"}},{"kind":"Field","name":{"kind":"Name","value":"borrower"}},{"kind":"Field","name":{"kind":"Name","value":"studentId"}},{"kind":"Field","name":{"kind":"Name","value":"figure"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"partName"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"remain"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"borrowDate"}},{"kind":"Field","name":{"kind":"Name","value":"returnDate"}}]}}]}}]} as unknown as DocumentNode<EditUserBorrowMaterialStatusMutation, EditUserBorrowMaterialStatusMutationVariables>;
export const SignUpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SignUp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"signUpInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SignUpInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"SignUp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"signUpInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"signUpInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"studentID"}},{"kind":"Field","name":{"kind":"Name","value":"password"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"threeDPId"}},{"kind":"Field","name":{"kind":"Name","value":"laserCutAvailable"}},{"kind":"Field","name":{"kind":"Name","value":"articlesId"}},{"kind":"Field","name":{"kind":"Name","value":"isAdmin"}},{"kind":"Field","name":{"kind":"Name","value":"isMinister"}},{"kind":"Field","name":{"kind":"Name","value":"toolLikeIds"}},{"kind":"Field","name":{"kind":"Name","value":"userBorrowToolIds"}},{"kind":"Field","name":{"kind":"Name","value":"materialLikeIds"}},{"kind":"Field","name":{"kind":"Name","value":"userBorrowMaterialIds"}}]}},{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<SignUpMutation, SignUpMutationVariables>;
export const AddSignupAuthCodeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddSignupAuthCode"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"signupAuthCodeInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SignupAuthCodeInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"AddSignupAuthCode"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"signupAuthCodeInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"signupAuthCodeInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"studentID"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}}]} as unknown as DocumentNode<AddSignupAuthCodeMutation, AddSignupAuthCodeMutationVariables>;
export const EditUserPasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"EditUserPassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"editUserPasswordId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userPasswordEditInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserPasswordEditInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"EditUserPassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"editUserPasswordId"}}},{"kind":"Argument","name":{"kind":"Name","value":"userPasswordEditInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userPasswordEditInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"studentID"}},{"kind":"Field","name":{"kind":"Name","value":"password"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"threeDPId"}},{"kind":"Field","name":{"kind":"Name","value":"laserCutAvailable"}},{"kind":"Field","name":{"kind":"Name","value":"articlesId"}},{"kind":"Field","name":{"kind":"Name","value":"isAdmin"}},{"kind":"Field","name":{"kind":"Name","value":"isMinister"}},{"kind":"Field","name":{"kind":"Name","value":"toolLikeIds"}},{"kind":"Field","name":{"kind":"Name","value":"userBorrowToolIds"}},{"kind":"Field","name":{"kind":"Name","value":"materialLikeIds"}},{"kind":"Field","name":{"kind":"Name","value":"userBorrowMaterialIds"}}]}}]}}]} as unknown as DocumentNode<EditUserPasswordMutation, EditUserPasswordMutationVariables>;
export const PromoteUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"PromoteUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"promoteUserId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"promoteUserInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PromoteUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"PromoteUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"promoteUserId"}}},{"kind":"Argument","name":{"kind":"Name","value":"promoteUserInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"promoteUserInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"studentID"}},{"kind":"Field","name":{"kind":"Name","value":"password"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"threeDPId"}},{"kind":"Field","name":{"kind":"Name","value":"laserCutAvailable"}},{"kind":"Field","name":{"kind":"Name","value":"articlesId"}},{"kind":"Field","name":{"kind":"Name","value":"isAdmin"}},{"kind":"Field","name":{"kind":"Name","value":"isMinister"}},{"kind":"Field","name":{"kind":"Name","value":"toolLikeIds"}},{"kind":"Field","name":{"kind":"Name","value":"userBorrowToolIds"}},{"kind":"Field","name":{"kind":"Name","value":"materialLikeIds"}},{"kind":"Field","name":{"kind":"Name","value":"userBorrowMaterialIds"}}]}}]}}]} as unknown as DocumentNode<PromoteUserMutation, PromoteUserMutationVariables>;
export const DemoteUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DemoteUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"demoteUserId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"demoteUserInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DemoteUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"DemoteUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"demoteUserId"}}},{"kind":"Argument","name":{"kind":"Name","value":"demoteUserInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"demoteUserInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"studentID"}},{"kind":"Field","name":{"kind":"Name","value":"password"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"threeDPId"}},{"kind":"Field","name":{"kind":"Name","value":"laserCutAvailable"}},{"kind":"Field","name":{"kind":"Name","value":"articlesId"}},{"kind":"Field","name":{"kind":"Name","value":"isAdmin"}},{"kind":"Field","name":{"kind":"Name","value":"isMinister"}},{"kind":"Field","name":{"kind":"Name","value":"toolLikeIds"}},{"kind":"Field","name":{"kind":"Name","value":"userBorrowToolIds"}},{"kind":"Field","name":{"kind":"Name","value":"materialLikeIds"}},{"kind":"Field","name":{"kind":"Name","value":"userBorrowMaterialIds"}}]}}]}}]} as unknown as DocumentNode<DemoteUserMutation, DemoteUserMutationVariables>;
export const AddAdminScheduleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddAdminSchedule"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"adminScheduleInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AdminScheduleInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"AddAdminSchedule"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"adminScheduleInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"adminScheduleInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"admin"}},{"kind":"Field","name":{"kind":"Name","value":"day"}},{"kind":"Field","name":{"kind":"Name","value":"period"}}]}}]}}]} as unknown as DocumentNode<AddAdminScheduleMutation, AddAdminScheduleMutationVariables>;
export const DeleteAdminScheduleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteAdminSchedule"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteAdminScheduleId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"DeleteAdminSchedule"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteAdminScheduleId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"admin"}},{"kind":"Field","name":{"kind":"Name","value":"day"}},{"kind":"Field","name":{"kind":"Name","value":"period"}}]}}]}}]} as unknown as DocumentNode<DeleteAdminScheduleMutation, DeleteAdminScheduleMutationVariables>;
export const EditAdminScheduleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"EditAdminSchedule"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"editAdminScheduleId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"EditAdminSchedule"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"editAdminScheduleId"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"admin"}},{"kind":"Field","name":{"kind":"Name","value":"day"}},{"kind":"Field","name":{"kind":"Name","value":"period"}}]}}]}}]} as unknown as DocumentNode<EditAdminScheduleMutation, EditAdminScheduleMutationVariables>;
export const GetAllAnnouncementsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllAnnouncements"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"GetAllAnnouncements"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"cursor"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"announcements"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}}]}}]}}]} as unknown as DocumentNode<GetAllAnnouncementsQuery, GetAllAnnouncementsQueryVariables>;
export const GetAnnouncementByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAnnouncementById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"GetAnnouncementById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]}}]} as unknown as DocumentNode<GetAnnouncementByIdQuery, GetAnnouncementByIdQueryVariables>;
export const SearchAnnouncementByTitleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SearchAnnouncementByTitle"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"title"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"SearchAnnouncementByTitle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"title"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]}}]} as unknown as DocumentNode<SearchAnnouncementByTitleQuery, SearchAnnouncementByTitleQueryVariables>;
export const GetAllToolsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllTools"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"GetAllTools"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"cursor"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tools"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"partName"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"usage"}},{"kind":"Field","name":{"kind":"Name","value":"tutorialLink"}},{"kind":"Field","name":{"kind":"Name","value":"remain"}},{"kind":"Field","name":{"kind":"Name","value":"toolLikeIds"}},{"kind":"Field","name":{"kind":"Name","value":"userBorrowToolIds"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}}]}}]}}]} as unknown as DocumentNode<GetAllToolsQuery, GetAllToolsQueryVariables>;
export const GetToolByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetToolById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getToolByIdId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"GetToolById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getToolByIdId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"partName"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"usage"}},{"kind":"Field","name":{"kind":"Name","value":"tutorialLink"}},{"kind":"Field","name":{"kind":"Name","value":"remain"}},{"kind":"Field","name":{"kind":"Name","value":"toolLikeIds"}},{"kind":"Field","name":{"kind":"Name","value":"userBorrowToolIds"}}]}}]}}]} as unknown as DocumentNode<GetToolByIdQuery, GetToolByIdQueryVariables>;
export const SearchToolByCategoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SearchToolByCategory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"category"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"SearchToolByCategory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"category"},"value":{"kind":"Variable","name":{"kind":"Name","value":"category"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"partName"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"usage"}},{"kind":"Field","name":{"kind":"Name","value":"tutorialLink"}},{"kind":"Field","name":{"kind":"Name","value":"remain"}},{"kind":"Field","name":{"kind":"Name","value":"toolLikeIds"}},{"kind":"Field","name":{"kind":"Name","value":"userBorrowToolIds"}}]}}]}}]} as unknown as DocumentNode<SearchToolByCategoryQuery, SearchToolByCategoryQueryVariables>;
export const SearchToolByPositionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SearchToolByPosition"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"position"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"SearchToolByPosition"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"position"},"value":{"kind":"Variable","name":{"kind":"Name","value":"position"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"partName"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"usage"}},{"kind":"Field","name":{"kind":"Name","value":"tutorialLink"}},{"kind":"Field","name":{"kind":"Name","value":"remain"}},{"kind":"Field","name":{"kind":"Name","value":"toolLikeIds"}},{"kind":"Field","name":{"kind":"Name","value":"userBorrowToolIds"}}]}}]}}]} as unknown as DocumentNode<SearchToolByPositionQuery, SearchToolByPositionQueryVariables>;
export const SearchToolByNameDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SearchToolByName"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"SearchToolByName"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"partName"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"usage"}},{"kind":"Field","name":{"kind":"Name","value":"tutorialLink"}},{"kind":"Field","name":{"kind":"Name","value":"remain"}},{"kind":"Field","name":{"kind":"Name","value":"toolLikeIds"}},{"kind":"Field","name":{"kind":"Name","value":"userBorrowToolIds"}}]}}]}}]} as unknown as DocumentNode<SearchToolByNameQuery, SearchToolByNameQueryVariables>;
export const GetAllArticlesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllArticles"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"GetAllArticles"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"cursor"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"articles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"writerId"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"imageURL"}},{"kind":"Field","name":{"kind":"Name","value":"time"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"headline"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"userpic"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}}]}}]}}]} as unknown as DocumentNode<GetAllArticlesQuery, GetAllArticlesQueryVariables>;
export const GetArticleByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetArticleById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getArticleByIdId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"GetArticleById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getArticleByIdId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"writerId"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"imageURL"}},{"kind":"Field","name":{"kind":"Name","value":"time"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"headline"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"userpic"}}]}}]}}]} as unknown as DocumentNode<GetArticleByIdQuery, GetArticleByIdQueryVariables>;
export const GetAllDisposableMaterialsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllDisposableMaterials"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"GetAllDisposableMaterials"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"cursor"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"disposableMaterials"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"partName"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"usage"}},{"kind":"Field","name":{"kind":"Name","value":"tutorialLink"}},{"kind":"Field","name":{"kind":"Name","value":"fee"}},{"kind":"Field","name":{"kind":"Name","value":"remain"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}}]}}]}}]} as unknown as DocumentNode<GetAllDisposableMaterialsQuery, GetAllDisposableMaterialsQueryVariables>;
export const SearchDisposableMaterialByCategoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SearchDisposableMaterialByCategory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"category"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"SearchDisposableMaterialByCategory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"category"},"value":{"kind":"Variable","name":{"kind":"Name","value":"category"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"partName"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"usage"}},{"kind":"Field","name":{"kind":"Name","value":"tutorialLink"}},{"kind":"Field","name":{"kind":"Name","value":"fee"}},{"kind":"Field","name":{"kind":"Name","value":"remain"}}]}}]}}]} as unknown as DocumentNode<SearchDisposableMaterialByCategoryQuery, SearchDisposableMaterialByCategoryQueryVariables>;
export const SearchDisposableMaterialByPositionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SearchDisposableMaterialByPosition"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"position"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"SearchDisposableMaterialByPosition"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"position"},"value":{"kind":"Variable","name":{"kind":"Name","value":"position"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"partName"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"usage"}},{"kind":"Field","name":{"kind":"Name","value":"tutorialLink"}},{"kind":"Field","name":{"kind":"Name","value":"fee"}},{"kind":"Field","name":{"kind":"Name","value":"remain"}}]}}]}}]} as unknown as DocumentNode<SearchDisposableMaterialByPositionQuery, SearchDisposableMaterialByPositionQueryVariables>;
export const SearchDisposableMaterialByNameDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SearchDisposableMaterialByName"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"SearchDisposableMaterialByName"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"partName"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"usage"}},{"kind":"Field","name":{"kind":"Name","value":"tutorialLink"}},{"kind":"Field","name":{"kind":"Name","value":"fee"}},{"kind":"Field","name":{"kind":"Name","value":"remain"}}]}}]}}]} as unknown as DocumentNode<SearchDisposableMaterialByNameQuery, SearchDisposableMaterialByNameQueryVariables>;
export const GetAllMachinesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllMachines"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"GetAllMachines"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"cursor"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"machines"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"partName"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"usage"}},{"kind":"Field","name":{"kind":"Name","value":"tutorialLink"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}}]}}]}}]} as unknown as DocumentNode<GetAllMachinesQuery, GetAllMachinesQueryVariables>;
export const GetMachineByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMachineById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getMachineByIdId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"GetMachineById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getMachineByIdId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"partName"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"usage"}},{"kind":"Field","name":{"kind":"Name","value":"tutorialLink"}}]}}]}}]} as unknown as DocumentNode<GetMachineByIdQuery, GetMachineByIdQueryVariables>;
export const SearchMachineByCategoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SearchMachineByCategory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"category"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"SearchMachineByCategory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"category"},"value":{"kind":"Variable","name":{"kind":"Name","value":"category"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"partName"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"usage"}},{"kind":"Field","name":{"kind":"Name","value":"tutorialLink"}}]}}]}}]} as unknown as DocumentNode<SearchMachineByCategoryQuery, SearchMachineByCategoryQueryVariables>;
export const SearchMachineByPositionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SearchMachineByPosition"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"position"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"SearchMachineByPosition"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"position"},"value":{"kind":"Variable","name":{"kind":"Name","value":"position"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"partName"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"usage"}},{"kind":"Field","name":{"kind":"Name","value":"tutorialLink"}}]}}]}}]} as unknown as DocumentNode<SearchMachineByPositionQuery, SearchMachineByPositionQueryVariables>;
export const SearchMachineByNameDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SearchMachineByName"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"SearchMachineByName"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"partName"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"usage"}},{"kind":"Field","name":{"kind":"Name","value":"tutorialLink"}}]}}]}}]} as unknown as DocumentNode<SearchMachineByNameQuery, SearchMachineByNameQueryVariables>;
export const GetAllMaterialsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllMaterials"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"GetAllMaterials"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"cursor"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"materials"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"partName"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"valuable"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"usage"}},{"kind":"Field","name":{"kind":"Name","value":"tutorialLink"}},{"kind":"Field","name":{"kind":"Name","value":"fee"}},{"kind":"Field","name":{"kind":"Name","value":"remain"}},{"kind":"Field","name":{"kind":"Name","value":"materialLikeIds"}},{"kind":"Field","name":{"kind":"Name","value":"userBorrowMaterialIds"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}}]}}]}}]} as unknown as DocumentNode<GetAllMaterialsQuery, GetAllMaterialsQueryVariables>;
export const GetMaterialByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMaterialById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"GetMaterialById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"partName"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"valuable"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"usage"}},{"kind":"Field","name":{"kind":"Name","value":"tutorialLink"}},{"kind":"Field","name":{"kind":"Name","value":"fee"}},{"kind":"Field","name":{"kind":"Name","value":"remain"}},{"kind":"Field","name":{"kind":"Name","value":"materialLikeIds"}},{"kind":"Field","name":{"kind":"Name","value":"userBorrowMaterialIds"}}]}}]}}]} as unknown as DocumentNode<GetMaterialByIdQuery, GetMaterialByIdQueryVariables>;
export const SearchMaterialByCategoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SearchMaterialByCategory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"category"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"SearchMaterialByCategory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"category"},"value":{"kind":"Variable","name":{"kind":"Name","value":"category"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"partName"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"valuable"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"usage"}},{"kind":"Field","name":{"kind":"Name","value":"tutorialLink"}},{"kind":"Field","name":{"kind":"Name","value":"fee"}},{"kind":"Field","name":{"kind":"Name","value":"remain"}},{"kind":"Field","name":{"kind":"Name","value":"materialLikeIds"}},{"kind":"Field","name":{"kind":"Name","value":"userBorrowMaterialIds"}}]}}]}}]} as unknown as DocumentNode<SearchMaterialByCategoryQuery, SearchMaterialByCategoryQueryVariables>;
export const SearchMaterialByPositionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SearchMaterialByPosition"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"position"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"SearchMaterialByPosition"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"position"},"value":{"kind":"Variable","name":{"kind":"Name","value":"position"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"partName"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"valuable"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"usage"}},{"kind":"Field","name":{"kind":"Name","value":"tutorialLink"}},{"kind":"Field","name":{"kind":"Name","value":"fee"}},{"kind":"Field","name":{"kind":"Name","value":"remain"}},{"kind":"Field","name":{"kind":"Name","value":"materialLikeIds"}},{"kind":"Field","name":{"kind":"Name","value":"userBorrowMaterialIds"}}]}}]}}]} as unknown as DocumentNode<SearchMaterialByPositionQuery, SearchMaterialByPositionQueryVariables>;
export const SearchMaterialByNameDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SearchMaterialByName"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"SearchMaterialByName"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"partName"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"valuable"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"usage"}},{"kind":"Field","name":{"kind":"Name","value":"tutorialLink"}},{"kind":"Field","name":{"kind":"Name","value":"fee"}},{"kind":"Field","name":{"kind":"Name","value":"remain"}},{"kind":"Field","name":{"kind":"Name","value":"materialLikeIds"}},{"kind":"Field","name":{"kind":"Name","value":"userBorrowMaterialIds"}}]}}]}}]} as unknown as DocumentNode<SearchMaterialByNameQuery, SearchMaterialByNameQueryVariables>;
export const GetAllThreeDPsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllThreeDPs"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"GetAllThreeDPs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"cursor"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"threeDPs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"tutorialLink"}},{"kind":"Field","name":{"kind":"Name","value":"threeDPRequestIds"}},{"kind":"Field","name":{"kind":"Name","value":"broken"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}}]}}]}}]} as unknown as DocumentNode<GetAllThreeDPsQuery, GetAllThreeDPsQueryVariables>;
export const GetThreeDpByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetThreeDPById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getThreeDpByIdId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"GetThreeDPById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getThreeDpByIdId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"tutorialLink"}},{"kind":"Field","name":{"kind":"Name","value":"threeDPRequestIds"}},{"kind":"Field","name":{"kind":"Name","value":"broken"}}]}}]}}]} as unknown as DocumentNode<GetThreeDpByIdQuery, GetThreeDpByIdQueryVariables>;
export const SearchThreeDpByPositionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SearchThreeDPByPosition"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"position"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"SearchThreeDPByPosition"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"position"},"value":{"kind":"Variable","name":{"kind":"Name","value":"position"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"tutorialLink"}},{"kind":"Field","name":{"kind":"Name","value":"threeDPRequestIds"}},{"kind":"Field","name":{"kind":"Name","value":"broken"}}]}}]}}]} as unknown as DocumentNode<SearchThreeDpByPositionQuery, SearchThreeDpByPositionQueryVariables>;
export const GetAllThreeDpRequestsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllThreeDPRequests"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"GetAllThreeDPRequests"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"studentID"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"threeDPId"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<GetAllThreeDpRequestsQuery, GetAllThreeDpRequestsQueryVariables>;
export const GetThreeDpRequestsByThreeDpIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetThreeDPRequestsByThreeDPId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"threeDpId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"GetThreeDPRequestsByThreeDPId"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"threeDPId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"threeDpId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"studentID"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"threeDPId"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<GetThreeDpRequestsByThreeDpIdQuery, GetThreeDpRequestsByThreeDpIdQueryVariables>;
export const GetThreeDpRequestsByUserIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetThreeDPRequestsByUserId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"GetThreeDPRequestsByUserId"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"studentID"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"threeDPId"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<GetThreeDpRequestsByUserIdQuery, GetThreeDpRequestsByUserIdQueryVariables>;
export const GetAllUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllUsers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"GetAllUsers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"cursor"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"studentID"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"laserCutAvailable"}},{"kind":"Field","name":{"kind":"Name","value":"isAdmin"}},{"kind":"Field","name":{"kind":"Name","value":"isMinister"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}}]}}]}}]} as unknown as DocumentNode<GetAllUsersQuery, GetAllUsersQueryVariables>;
export const SearchUserByNameDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SearchUserByName"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"SearchUserByName"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"studentID"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"laserCutAvailable"}},{"kind":"Field","name":{"kind":"Name","value":"isAdmin"}},{"kind":"Field","name":{"kind":"Name","value":"isMinister"}}]}}]}}]} as unknown as DocumentNode<SearchUserByNameQuery, SearchUserByNameQueryVariables>;
export const GetUserByStudentIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserByStudentID"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"studentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"GetUserByStudentID"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"studentID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"studentId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"studentID"}},{"kind":"Field","name":{"kind":"Name","value":"password"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"threeDPId"}},{"kind":"Field","name":{"kind":"Name","value":"laserCutAvailable"}},{"kind":"Field","name":{"kind":"Name","value":"articlesId"}},{"kind":"Field","name":{"kind":"Name","value":"isAdmin"}},{"kind":"Field","name":{"kind":"Name","value":"isMinister"}},{"kind":"Field","name":{"kind":"Name","value":"toolLikeIds"}},{"kind":"Field","name":{"kind":"Name","value":"userBorrowToolIds"}},{"kind":"Field","name":{"kind":"Name","value":"materialLikeIds"}},{"kind":"Field","name":{"kind":"Name","value":"userBorrowMaterialIds"}}]}}]}}]} as unknown as DocumentNode<GetUserByStudentIdQuery, GetUserByStudentIdQueryVariables>;
export const GetAuthorizedCodeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAuthorizedCode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"GetAuthorizedCode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"codeList"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<GetAuthorizedCodeQuery, GetAuthorizedCodeQueryVariables>;
export const GetToolLikesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetToolLikes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"GetToolLikes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"toolId"}}]}}]}}]} as unknown as DocumentNode<GetToolLikesQuery, GetToolLikesQueryVariables>;
export const GetToolLikeByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetToolLikeById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getToolLikeByIdId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"GetToolLikeById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getToolLikeByIdId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"toolId"}}]}}]}}]} as unknown as DocumentNode<GetToolLikeByIdQuery, GetToolLikeByIdQueryVariables>;
export const GetLikedToolsByUserIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetLikedToolsByUserId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"GetLikedToolsByUserId"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"partName"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"usage"}},{"kind":"Field","name":{"kind":"Name","value":"tutorialLink"}},{"kind":"Field","name":{"kind":"Name","value":"remain"}},{"kind":"Field","name":{"kind":"Name","value":"toolLikeIds"}},{"kind":"Field","name":{"kind":"Name","value":"userBorrowToolIds"}}]}}]}}]} as unknown as DocumentNode<GetLikedToolsByUserIdQuery, GetLikedToolsByUserIdQueryVariables>;
export const GetAllUserBorrowToolsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllUserBorrowTools"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"GetAllUserBorrowTools"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"toolId"}},{"kind":"Field","name":{"kind":"Name","value":"borrower"}},{"kind":"Field","name":{"kind":"Name","value":"studentId"}},{"kind":"Field","name":{"kind":"Name","value":"figure"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"partName"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"remain"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"borrowDate"}},{"kind":"Field","name":{"kind":"Name","value":"returnDate"}}]}}]}}]} as unknown as DocumentNode<GetAllUserBorrowToolsQuery, GetAllUserBorrowToolsQueryVariables>;
export const GetAllUserBorrowToolsByStatusDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllUserBorrowToolsByStatus"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"status"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"GetAllUserBorrowToolsByStatus"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"status"},"value":{"kind":"Variable","name":{"kind":"Name","value":"status"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"toolId"}},{"kind":"Field","name":{"kind":"Name","value":"borrower"}},{"kind":"Field","name":{"kind":"Name","value":"studentId"}},{"kind":"Field","name":{"kind":"Name","value":"figure"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"partName"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"remain"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"borrowDate"}},{"kind":"Field","name":{"kind":"Name","value":"returnDate"}}]}}]}}]} as unknown as DocumentNode<GetAllUserBorrowToolsByStatusQuery, GetAllUserBorrowToolsByStatusQueryVariables>;
export const GetUserBorrowToolByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserBorrowToolById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getUserBorrowToolByIdId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"GetUserBorrowToolById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getUserBorrowToolByIdId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"toolId"}},{"kind":"Field","name":{"kind":"Name","value":"borrower"}},{"kind":"Field","name":{"kind":"Name","value":"studentId"}},{"kind":"Field","name":{"kind":"Name","value":"figure"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"partName"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"remain"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"borrowDate"}},{"kind":"Field","name":{"kind":"Name","value":"returnDate"}}]}}]}}]} as unknown as DocumentNode<GetUserBorrowToolByIdQuery, GetUserBorrowToolByIdQueryVariables>;
export const GetUserBorrowToolsByUserIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserBorrowToolsByUserId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"GetUserBorrowToolsByUserId"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"toolId"}},{"kind":"Field","name":{"kind":"Name","value":"borrower"}},{"kind":"Field","name":{"kind":"Name","value":"studentId"}},{"kind":"Field","name":{"kind":"Name","value":"figure"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"partName"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"remain"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"borrowDate"}},{"kind":"Field","name":{"kind":"Name","value":"returnDate"}}]}}]}}]} as unknown as DocumentNode<GetUserBorrowToolsByUserIdQuery, GetUserBorrowToolsByUserIdQueryVariables>;
export const GetUserBorrowToolsByStatusAndUserIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserBorrowToolsByStatusAndUserId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"status"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"GetUserBorrowToolsByStatusAndUserId"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"Argument","name":{"kind":"Name","value":"status"},"value":{"kind":"Variable","name":{"kind":"Name","value":"status"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"toolId"}},{"kind":"Field","name":{"kind":"Name","value":"borrower"}},{"kind":"Field","name":{"kind":"Name","value":"studentId"}},{"kind":"Field","name":{"kind":"Name","value":"figure"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"partName"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"remain"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"borrowDate"}},{"kind":"Field","name":{"kind":"Name","value":"returnDate"}}]}}]}}]} as unknown as DocumentNode<GetUserBorrowToolsByStatusAndUserIdQuery, GetUserBorrowToolsByStatusAndUserIdQueryVariables>;
export const GetMaterialLikesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMaterialLikes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"GetMaterialLikes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"materialId"}}]}}]}}]} as unknown as DocumentNode<GetMaterialLikesQuery, GetMaterialLikesQueryVariables>;
export const GetMaterialLikeByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMaterialLikeById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getMaterialLikeByIdId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"GetMaterialLikeById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getMaterialLikeByIdId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"materialId"}}]}}]}}]} as unknown as DocumentNode<GetMaterialLikeByIdQuery, GetMaterialLikeByIdQueryVariables>;
export const GetLikedMaterialsByUserIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetLikedMaterialsByUserId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"GetLikedMaterialsByUserId"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"partName"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"valuable"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"usage"}},{"kind":"Field","name":{"kind":"Name","value":"tutorialLink"}},{"kind":"Field","name":{"kind":"Name","value":"fee"}},{"kind":"Field","name":{"kind":"Name","value":"remain"}},{"kind":"Field","name":{"kind":"Name","value":"materialLikeIds"}}]}}]}}]} as unknown as DocumentNode<GetLikedMaterialsByUserIdQuery, GetLikedMaterialsByUserIdQueryVariables>;
export const GetAllUserBorrowMaterialsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllUserBorrowMaterials"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"GetAllUserBorrowMaterials"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"materialId"}},{"kind":"Field","name":{"kind":"Name","value":"borrower"}},{"kind":"Field","name":{"kind":"Name","value":"studentId"}},{"kind":"Field","name":{"kind":"Name","value":"figure"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"partName"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"remain"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"borrowDate"}},{"kind":"Field","name":{"kind":"Name","value":"returnDate"}}]}}]}}]} as unknown as DocumentNode<GetAllUserBorrowMaterialsQuery, GetAllUserBorrowMaterialsQueryVariables>;
export const GetAllUserBorrowMaterialsByStatusDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllUserBorrowMaterialsByStatus"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"status"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"GetAllUserBorrowMaterialsByStatus"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"status"},"value":{"kind":"Variable","name":{"kind":"Name","value":"status"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"materialId"}},{"kind":"Field","name":{"kind":"Name","value":"borrower"}},{"kind":"Field","name":{"kind":"Name","value":"studentId"}},{"kind":"Field","name":{"kind":"Name","value":"figure"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"partName"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"remain"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"borrowDate"}},{"kind":"Field","name":{"kind":"Name","value":"returnDate"}}]}}]}}]} as unknown as DocumentNode<GetAllUserBorrowMaterialsByStatusQuery, GetAllUserBorrowMaterialsByStatusQueryVariables>;
export const GetUserBorrowMaterialByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserBorrowMaterialById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getUserBorrowMaterialByIdId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"GetUserBorrowMaterialById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getUserBorrowMaterialByIdId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"materialId"}},{"kind":"Field","name":{"kind":"Name","value":"borrower"}},{"kind":"Field","name":{"kind":"Name","value":"studentId"}},{"kind":"Field","name":{"kind":"Name","value":"figure"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"partName"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"remain"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"borrowDate"}},{"kind":"Field","name":{"kind":"Name","value":"returnDate"}}]}}]}}]} as unknown as DocumentNode<GetUserBorrowMaterialByIdQuery, GetUserBorrowMaterialByIdQueryVariables>;
export const GetUserBorrowMaterialsByUserIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserBorrowMaterialsByUserId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"GetUserBorrowMaterialsByUserId"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"materialId"}},{"kind":"Field","name":{"kind":"Name","value":"borrower"}},{"kind":"Field","name":{"kind":"Name","value":"studentId"}},{"kind":"Field","name":{"kind":"Name","value":"figure"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"partName"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"remain"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"borrowDate"}},{"kind":"Field","name":{"kind":"Name","value":"returnDate"}}]}}]}}]} as unknown as DocumentNode<GetUserBorrowMaterialsByUserIdQuery, GetUserBorrowMaterialsByUserIdQueryVariables>;
export const GetUserBorrowMaterialsByStatusAndUserIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserBorrowMaterialsByStatusAndUserId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"status"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"GetUserBorrowMaterialsByStatusAndUserId"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"Argument","name":{"kind":"Name","value":"status"},"value":{"kind":"Variable","name":{"kind":"Name","value":"status"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"materialId"}},{"kind":"Field","name":{"kind":"Name","value":"borrower"}},{"kind":"Field","name":{"kind":"Name","value":"studentId"}},{"kind":"Field","name":{"kind":"Name","value":"figure"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"partName"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"remain"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"borrowDate"}},{"kind":"Field","name":{"kind":"Name","value":"returnDate"}}]}}]}}]} as unknown as DocumentNode<GetUserBorrowMaterialsByStatusAndUserIdQuery, GetUserBorrowMaterialsByStatusAndUserIdQueryVariables>;
export const LogInDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"LogIn"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"logInInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LogInInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"LogIn"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"logInInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"logInInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"studentID"}},{"kind":"Field","name":{"kind":"Name","value":"password"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"threeDPId"}},{"kind":"Field","name":{"kind":"Name","value":"laserCutAvailable"}},{"kind":"Field","name":{"kind":"Name","value":"articlesId"}},{"kind":"Field","name":{"kind":"Name","value":"isAdmin"}},{"kind":"Field","name":{"kind":"Name","value":"isMinister"}},{"kind":"Field","name":{"kind":"Name","value":"toolLikeIds"}},{"kind":"Field","name":{"kind":"Name","value":"userBorrowToolIds"}},{"kind":"Field","name":{"kind":"Name","value":"materialLikeIds"}},{"kind":"Field","name":{"kind":"Name","value":"userBorrowMaterialIds"}}]}},{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<LogInQuery, LogInQueryVariables>;
export const GetAdminScheduleByDayDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAdminScheduleByDay"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"day"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"GetAdminScheduleByDay"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"day"},"value":{"kind":"Variable","name":{"kind":"Name","value":"day"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"admin"}},{"kind":"Field","name":{"kind":"Name","value":"day"}},{"kind":"Field","name":{"kind":"Name","value":"period"}}]}}]}}]} as unknown as DocumentNode<GetAdminScheduleByDayQuery, GetAdminScheduleByDayQueryVariables>;
export const GetAdminScheduleByPeriodDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAdminScheduleByPeriod"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"period"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"GetAdminScheduleByPeriod"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"period"},"value":{"kind":"Variable","name":{"kind":"Name","value":"period"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"admin"}},{"kind":"Field","name":{"kind":"Name","value":"day"}},{"kind":"Field","name":{"kind":"Name","value":"period"}}]}}]}}]} as unknown as DocumentNode<GetAdminScheduleByPeriodQuery, GetAdminScheduleByPeriodQueryVariables>;
export const GetAllAdminSchedulesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllAdminSchedules"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"GetAllAdminSchedules"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"admin"}},{"kind":"Field","name":{"kind":"Name","value":"day"}},{"kind":"Field","name":{"kind":"Name","value":"period"}}]}}]}}]} as unknown as DocumentNode<GetAllAdminSchedulesQuery, GetAllAdminSchedulesQueryVariables>;
export const GetAllSignupAuthCodesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllSignupAuthCodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"GetAllSignupAuthCodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"studentID"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}}]} as unknown as DocumentNode<GetAllSignupAuthCodesQuery, GetAllSignupAuthCodesQueryVariables>;
export const GetSignupAuthCodeByStudentIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSignupAuthCodeByStudentID"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"studentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"GetSignupAuthCodeByStudentID"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"studentID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"studentId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"studentID"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}}]} as unknown as DocumentNode<GetSignupAuthCodeByStudentIdQuery, GetSignupAuthCodeByStudentIdQueryVariables>;
export const QueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Query"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"studentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"code"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"CheckSignupAuthCode"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"studentID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"studentId"}}},{"kind":"Argument","name":{"kind":"Name","value":"code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"code"}}}]}]}}]} as unknown as DocumentNode<QueryQuery, QueryQueryVariables>;
export const AnnouncementCreatedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"AnnouncementCreated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"AnnouncementCreated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]}}]} as unknown as DocumentNode<AnnouncementCreatedSubscription, AnnouncementCreatedSubscriptionVariables>;
export const ArticleCreatedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"ArticleCreated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ArticleCreated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"writerId"}},{"kind":"Field","name":{"kind":"Name","value":"time"}}]}}]}}]} as unknown as DocumentNode<ArticleCreatedSubscription, ArticleCreatedSubscriptionVariables>;
export const ArticleUpdatedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"ArticleUpdated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ArticleUpdated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"writerId"}},{"kind":"Field","name":{"kind":"Name","value":"time"}}]}}]}}]} as unknown as DocumentNode<ArticleUpdatedSubscription, ArticleUpdatedSubscriptionVariables>;
export const ArticleDeletedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"ArticleDeleted"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ArticleDeleted"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<ArticleDeletedSubscription, ArticleDeletedSubscriptionVariables>;