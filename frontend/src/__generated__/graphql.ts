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

export type Announcement = {
  __typename?: 'Announcement';
  content: Scalars['String']['output'];
  date: Scalars['String']['output'];
  id: Scalars['Int']['output'];
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
  id: Scalars['Int']['output'];
  imageURL?: Maybe<Scalars['String']['output']>;
  time: Scalars['String']['output'];
  title: Scalars['String']['output'];
  userpic?: Maybe<Scalars['String']['output']>;
  writerId: Scalars['Int']['output'];
};

export type ArticleInput = {
  content: Scalars['String']['input'];
  description: Scalars['String']['input'];
  headline: Scalars['Boolean']['input'];
  imageURL?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  userpic?: InputMaybe<Scalars['String']['input']>;
  writerId: Scalars['Int']['input'];
};

export type AuthorizedCode = {
  __typename?: 'AuthorizedCode';
  codeList?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  id: Scalars['Int']['output'];
  updatedAt: Scalars['String']['output'];
};

export type AuthorizedCodeInput = {
  codeList?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type DisposableMaterial = {
  __typename?: 'DisposableMaterial';
  category: Scalars['String']['output'];
  description: Scalars['String']['output'];
  fee?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
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

export type Introduction = {
  __typename?: 'Introduction';
  content: Scalars['String']['output'];
  id: Scalars['Int']['output'];
};

export type IntroductionInput = {
  content: Scalars['String']['input'];
};

export type Machine = {
  __typename?: 'Machine';
  category: Scalars['String']['output'];
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
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
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  partName?: Maybe<Scalars['String']['output']>;
  photoLink: Scalars['String']['output'];
  position: Scalars['String']['output'];
  remain: Scalars['Int']['output'];
  tutorialLink?: Maybe<Scalars['String']['output']>;
  usage: Scalars['Int']['output'];
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

export type MaterialUsageUpdateInput = {
  remain: Scalars['Int']['input'];
  usage: Scalars['Int']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  AddAnnouncement?: Maybe<Announcement>;
  AddArticle?: Maybe<Article>;
  AddDisposableMaterial?: Maybe<DisposableMaterial>;
  AddMachine?: Maybe<Machine>;
  AddMaterial?: Maybe<Material>;
  AddThreeDP?: Maybe<ThreeDp>;
  AddTool?: Maybe<Tool>;
  AddToolLike?: Maybe<ToolLike>;
  AddUser?: Maybe<User>;
  DeleteAnnouncement?: Maybe<Announcement>;
  DeleteDisposableMaterial?: Maybe<DisposableMaterial>;
  DeleteMachine?: Maybe<Machine>;
  DeleteMaterial?: Maybe<Material>;
  DeleteThreeDP?: Maybe<ThreeDp>;
  DeleteTool?: Maybe<Tool>;
  DeleteToolLike?: Maybe<ToolLike>;
  DeleteUser?: Maybe<User>;
  DisposableMaterialUsageUpdate?: Maybe<DisposableMaterial>;
  EditAnnouncement?: Maybe<Announcement>;
  EditDisposableMaterial?: Maybe<DisposableMaterial>;
  EditMachine?: Maybe<Machine>;
  EditMaterial?: Maybe<Material>;
  EditThreeDP?: Maybe<ThreeDp>;
  EditTool?: Maybe<Tool>;
  EditUser?: Maybe<User>;
  EditUserLanguage?: Maybe<User>;
  MaterialUsageUpdate?: Maybe<Material>;
  SignUp?: Maybe<SignUpRet>;
  ToolUsageUpdate?: Maybe<Tool>;
  UpdateAuthorizedCode?: Maybe<AuthorizedCode>;
  UpdateIntroduction?: Maybe<Introduction>;
  UserMachineUsageUpdate?: Maybe<User>;
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


export type MutationAddThreeDpArgs = {
  threeDPInput: ThreeDpInput;
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


export type MutationDeleteAnnouncementArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteDisposableMaterialArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteMachineArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteMaterialArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteThreeDpArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteToolArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteToolLikeArgs = {
  toolLikeInput: ToolLikeInput;
};


export type MutationDeleteUserArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDisposableMaterialUsageUpdateArgs = {
  disposableMaterialUsageUpdateInput: DisposableMaterialUsageUpdateInput;
  id: Scalars['Int']['input'];
};


export type MutationEditAnnouncementArgs = {
  announcementInput: AnnouncementInput;
  id: Scalars['Int']['input'];
};


export type MutationEditDisposableMaterialArgs = {
  disposableMaterialInput: DisposableMaterialInput;
  id: Scalars['Int']['input'];
};


export type MutationEditMachineArgs = {
  id: Scalars['Int']['input'];
  machineInput: MachineInput;
};


export type MutationEditMaterialArgs = {
  id: Scalars['Int']['input'];
  materialInput: MaterialInput;
};


export type MutationEditThreeDpArgs = {
  id: Scalars['Int']['input'];
  threeDPInput: ThreeDpInput;
};


export type MutationEditToolArgs = {
  id: Scalars['Int']['input'];
  toolInput: ToolInput;
};


export type MutationEditUserArgs = {
  id: Scalars['Int']['input'];
  userEditInput: UserEditInput;
};


export type MutationEditUserLanguageArgs = {
  id: Scalars['Int']['input'];
  language: Scalars['String']['input'];
};


export type MutationMaterialUsageUpdateArgs = {
  id: Scalars['Int']['input'];
  materialUsageUpdateInput: MaterialUsageUpdateInput;
};


export type MutationSignUpArgs = {
  signUpInput: SignUpInput;
};


export type MutationToolUsageUpdateArgs = {
  id: Scalars['Int']['input'];
  toolUsageUpdateInput: ToolUsageUpdateInput;
};


export type MutationUpdateAuthorizedCodeArgs = {
  authorizedCodeInput: AuthorizedCodeInput;
};


export type MutationUpdateIntroductionArgs = {
  introductionInput: IntroductionInput;
};


export type MutationUserMachineUsageUpdateArgs = {
  id: Scalars['Int']['input'];
  userMachineUpdateInput: UserMachineUpdateInput;
};

export type Query = {
  __typename?: 'Query';
  AllAnnouncements?: Maybe<Array<Maybe<Announcement>>>;
  AllArticles?: Maybe<Array<Maybe<Article>>>;
  AllDisposableMaterials?: Maybe<Array<Maybe<DisposableMaterial>>>;
  AllMachines?: Maybe<Array<Maybe<Machine>>>;
  AllMaterials?: Maybe<Array<Maybe<Material>>>;
  AllThreeDP?: Maybe<Array<Maybe<ThreeDp>>>;
  AllTools?: Maybe<Array<Maybe<Tool>>>;
  AllUser?: Maybe<Array<Maybe<User>>>;
  CurrentIntroduction?: Maybe<Introduction>;
  GetAuthorizedCode?: Maybe<AuthorizedCode>;
  GetLikedToolsByUserId?: Maybe<Array<Maybe<Tool>>>;
  GetMaterialById?: Maybe<Material>;
  GetToolById?: Maybe<Tool>;
  GetToolLikeById?: Maybe<ToolLike>;
  GetToolLikes?: Maybe<Array<Maybe<ToolLike>>>;
  GetUserByStudentID?: Maybe<User>;
  LogIn?: Maybe<LogInRet>;
  SearchDisposableMaterialsByCategory?: Maybe<Array<Maybe<DisposableMaterial>>>;
  SearchDisposableMaterialsByName?: Maybe<Array<Maybe<DisposableMaterial>>>;
  SearchDisposableMaterialsByPosition?: Maybe<Array<Maybe<DisposableMaterial>>>;
  SearchMachineByName?: Maybe<Array<Maybe<Machine>>>;
  SearchMachinesByCategory?: Maybe<Array<Maybe<Machine>>>;
  SearchMachinesByPosition?: Maybe<Array<Maybe<Machine>>>;
  SearchMaterialByName?: Maybe<Array<Maybe<Material>>>;
  SearchMaterialsByCategory?: Maybe<Array<Maybe<Material>>>;
  SearchMaterialsByPosition?: Maybe<Array<Maybe<Material>>>;
  SearchThreeDPByCategory?: Maybe<Array<Maybe<ThreeDp>>>;
  SearchThreeDPByPosition?: Maybe<Array<Maybe<ThreeDp>>>;
  SearchToolsByCategory?: Maybe<Array<Maybe<Tool>>>;
  SearchToolsByName?: Maybe<Array<Maybe<Tool>>>;
  SearchToolsByPosition?: Maybe<Array<Maybe<Tool>>>;
  SearchUserByName?: Maybe<Array<Maybe<User>>>;
};


export type QueryGetLikedToolsByUserIdArgs = {
  userId: Scalars['Int']['input'];
};


export type QueryGetMaterialByIdArgs = {
  id: Scalars['Int']['input'];
};


export type QueryGetToolByIdArgs = {
  id: Scalars['Int']['input'];
};


export type QueryGetToolLikeByIdArgs = {
  id: Scalars['Int']['input'];
};


export type QueryGetUserByStudentIdArgs = {
  studentID: Scalars['String']['input'];
};


export type QueryLogInArgs = {
  logInInput: LogInInput;
};


export type QuerySearchDisposableMaterialsByCategoryArgs = {
  category: Scalars['String']['input'];
};


export type QuerySearchDisposableMaterialsByNameArgs = {
  name: Scalars['String']['input'];
};


export type QuerySearchDisposableMaterialsByPositionArgs = {
  position: Scalars['String']['input'];
};


export type QuerySearchMachineByNameArgs = {
  input: Scalars['String']['input'];
};


export type QuerySearchMachinesByCategoryArgs = {
  category: Scalars['String']['input'];
};


export type QuerySearchMachinesByPositionArgs = {
  position: Scalars['String']['input'];
};


export type QuerySearchMaterialByNameArgs = {
  name: Scalars['String']['input'];
};


export type QuerySearchMaterialsByCategoryArgs = {
  category: Scalars['String']['input'];
};


export type QuerySearchMaterialsByPositionArgs = {
  position: Scalars['String']['input'];
};


export type QuerySearchThreeDpByCategoryArgs = {
  category: Scalars['String']['input'];
};


export type QuerySearchThreeDpByPositionArgs = {
  position: Scalars['String']['input'];
};


export type QuerySearchToolsByCategoryArgs = {
  category: Scalars['String']['input'];
};


export type QuerySearchToolsByNameArgs = {
  name: Scalars['String']['input'];
};


export type QuerySearchToolsByPositionArgs = {
  position: Scalars['String']['input'];
};


export type QuerySearchUserByNameArgs = {
  name: Scalars['String']['input'];
};

export type Subscription = {
  __typename?: 'Subscription';
  AnnouncementCreated?: Maybe<Announcement>;
  AnnouncementDeleted?: Maybe<Announcement>;
  AnnouncementUpdated?: Maybe<Announcement>;
  ArticleCreated?: Maybe<Article>;
  DisposableMaterialCreated?: Maybe<DisposableMaterial>;
  DisposableMaterialDeleted?: Maybe<DisposableMaterial>;
  DisposableMaterialUpdated?: Maybe<DisposableMaterial>;
  IntroductionCreated?: Maybe<Introduction>;
  IntroductionUpdated?: Maybe<Introduction>;
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
  category: Scalars['String']['output'];
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  photoLink: Scalars['String']['output'];
  position: Scalars['String']['output'];
  tutorialLink: Scalars['String']['output'];
  usage: Scalars['Int']['output'];
  waitingId?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
};

export type ThreeDpInput = {
  broken: Scalars['Boolean']['input'];
  category: Scalars['String']['input'];
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
  photoLink: Scalars['String']['input'];
  position: Scalars['String']['input'];
  tutorialLink: Scalars['String']['input'];
  usage: Scalars['Int']['input'];
};

export type Tool = {
  __typename?: 'Tool';
  category: Scalars['String']['output'];
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  partName?: Maybe<Scalars['String']['output']>;
  photoLink: Scalars['String']['output'];
  position: Scalars['String']['output'];
  remain: Scalars['Int']['output'];
  toolLikeIds?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  tutorialLink: Scalars['String']['output'];
  usage: Scalars['Int']['output'];
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
  id: Scalars['Int']['output'];
  toolId: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type ToolUsageUpdateInput = {
  remain: Scalars['Int']['input'];
  usage: Scalars['Int']['input'];
};

export type User = {
  __typename?: 'User';
  articlesId?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  id: Scalars['Int']['output'];
  isAdmin: Scalars['Boolean']['output'];
  isMinister: Scalars['Boolean']['output'];
  language: Scalars['String']['output'];
  laserCutAvailable: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  password: Scalars['String']['output'];
  photoLink?: Maybe<Scalars['String']['output']>;
  studentID: Scalars['String']['output'];
  threeDPId?: Maybe<Scalars['Int']['output']>;
  toolLikeIds?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
};

export type UserEditInput = {
  isAdmin: Scalars['Boolean']['input'];
  isMinister: Scalars['Boolean']['input'];
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
  threeDPId?: InputMaybe<Scalars['Int']['input']>;
};

export type UserMachineUpdateInput = {
  laserCutAvailable: Scalars['Boolean']['input'];
  threeDPId?: InputMaybe<Scalars['Int']['input']>;
};

export type LogInInput = {
  password: Scalars['String']['input'];
  studentID: Scalars['String']['input'];
};

export type LogInRet = {
  __typename?: 'logInRet';
  token: Scalars['String']['output'];
  user: User;
};

export type SignUpInput = {
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  studentID: Scalars['String']['input'];
};

export type SignUpRet = {
  __typename?: 'signUpRet';
  token: Scalars['String']['output'];
  user: User;
};

export type ToolLikeInput = {
  toolId: Scalars['Int']['input'];
  userId: Scalars['Int']['input'];
};

export type AddAnnouncementMutationVariables = Exact<{
  announcementInput: AnnouncementInput;
}>;


export type AddAnnouncementMutation = { __typename?: 'Mutation', AddAnnouncement?: { __typename?: 'Announcement', id: number, title: string, date: string, content: string } | null };

export type DeleteAnnouncementMutationVariables = Exact<{
  deleteAnnouncementId: Scalars['Int']['input'];
}>;


export type DeleteAnnouncementMutation = { __typename?: 'Mutation', DeleteAnnouncement?: { __typename?: 'Announcement', id: number, title: string, date: string, content: string } | null };

export type EditAnnouncementMutationVariables = Exact<{
  editAnnouncementId: Scalars['Int']['input'];
  announcementInput: AnnouncementInput;
}>;


export type EditAnnouncementMutation = { __typename?: 'Mutation', EditAnnouncement?: { __typename?: 'Announcement', id: number, title: string, date: string, content: string } | null };

export type AddArticleMutationVariables = Exact<{
  articleInput: ArticleInput;
}>;


export type AddArticleMutation = { __typename?: 'Mutation', AddArticle?: { __typename?: 'Article', id: number, writerId: number, description: string, imageURL?: string | null, time: string, title: string, headline: boolean, content: string, userpic?: string | null } | null };

export type AddDisposableMaterialMutationVariables = Exact<{
  disposableMaterialInput: DisposableMaterialInput;
}>;


export type AddDisposableMaterialMutation = { __typename?: 'Mutation', AddDisposableMaterial?: { __typename?: 'DisposableMaterial', id: number, name: string, partName?: string | null, category: string, position: string, description: string, photoLink: string, usage: number, tutorialLink: string, fee?: number | null, remain: boolean } | null };

export type DeleteDisposableMaterialMutationVariables = Exact<{
  deleteDisposableMaterialId: Scalars['Int']['input'];
}>;


export type DeleteDisposableMaterialMutation = { __typename?: 'Mutation', DeleteDisposableMaterial?: { __typename?: 'DisposableMaterial', id: number, name: string, partName?: string | null, category: string, position: string, description: string, photoLink: string, usage: number, tutorialLink: string, fee?: number | null, remain: boolean } | null };

export type EditDisposableMaterialMutationVariables = Exact<{
  editDisposableMaterialId: Scalars['Int']['input'];
  disposableMaterialInput: DisposableMaterialInput;
}>;


export type EditDisposableMaterialMutation = { __typename?: 'Mutation', EditDisposableMaterial?: { __typename?: 'DisposableMaterial', id: number, name: string, partName?: string | null, category: string, position: string, description: string, photoLink: string, usage: number, tutorialLink: string, fee?: number | null, remain: boolean } | null };

export type AddMachineMutationVariables = Exact<{
  machineInput: MachineInput;
}>;


export type AddMachineMutation = { __typename?: 'Mutation', AddMachine?: { __typename?: 'Machine', id: number, name: string, partName?: string | null, category: string, position: string, description: string, photoLink: string, usage: number, tutorialLink: string } | null };

export type DeleteMachineMutationVariables = Exact<{
  deleteMachineId: Scalars['Int']['input'];
}>;


export type DeleteMachineMutation = { __typename?: 'Mutation', DeleteMachine?: { __typename?: 'Machine', id: number, name: string, partName?: string | null, category: string, position: string, description: string, photoLink: string, usage: number, tutorialLink: string } | null };

export type EditMachineMutationVariables = Exact<{
  editMachineId: Scalars['Int']['input'];
  machineInput: MachineInput;
}>;


export type EditMachineMutation = { __typename?: 'Mutation', EditMachine?: { __typename?: 'Machine', id: number, name: string, partName?: string | null, category: string, position: string, description: string, photoLink: string, usage: number, tutorialLink: string } | null };

export type AddMaterialMutationVariables = Exact<{
  materialInput: MaterialInput;
}>;


export type AddMaterialMutation = { __typename?: 'Mutation', AddMaterial?: { __typename?: 'Material', id: number, name: string, partName?: string | null, category: string, valuable: boolean, position: string, description: string, photoLink: string, usage: number, tutorialLink?: string | null, fee: number, remain: number } | null };

export type DeleteMaterialMutationVariables = Exact<{
  deleteMaterialId: Scalars['Int']['input'];
}>;


export type DeleteMaterialMutation = { __typename?: 'Mutation', DeleteMaterial?: { __typename?: 'Material', id: number, name: string, partName?: string | null, category: string, valuable: boolean, position: string, description: string, photoLink: string, usage: number, tutorialLink?: string | null, fee: number, remain: number } | null };

export type EditMaterialMutationVariables = Exact<{
  editMaterialId: Scalars['Int']['input'];
  materialInput: MaterialInput;
}>;


export type EditMaterialMutation = { __typename?: 'Mutation', EditMaterial?: { __typename?: 'Material', id: number, name: string, partName?: string | null, category: string, valuable: boolean, position: string, description: string, photoLink: string, usage: number, tutorialLink?: string | null, fee: number, remain: number } | null };

export type AddThreeDpMutationVariables = Exact<{
  threeDpInput: ThreeDpInput;
}>;


export type AddThreeDpMutation = { __typename?: 'Mutation', AddThreeDP?: { __typename?: 'ThreeDP', id: number, name: string, category: string, position: string, description: string, photoLink: string, usage: number, tutorialLink: string, waitingId?: Array<number | null> | null, broken: boolean } | null };

export type DeleteThreeDpMutationVariables = Exact<{
  deleteThreeDpId: Scalars['Int']['input'];
}>;


export type DeleteThreeDpMutation = { __typename?: 'Mutation', DeleteThreeDP?: { __typename?: 'ThreeDP', id: number, name: string, category: string, position: string, description: string, photoLink: string, usage: number, tutorialLink: string, waitingId?: Array<number | null> | null, broken: boolean } | null };

export type EditThreeDpMutationVariables = Exact<{
  editThreeDpId: Scalars['Int']['input'];
  threeDpInput: ThreeDpInput;
}>;


export type EditThreeDpMutation = { __typename?: 'Mutation', EditThreeDP?: { __typename?: 'ThreeDP', id: number, name: string, category: string, position: string, description: string, photoLink: string, usage: number, tutorialLink: string, waitingId?: Array<number | null> | null, broken: boolean } | null };

export type AddToolMutationVariables = Exact<{
  toolInput: ToolInput;
}>;


export type AddToolMutation = { __typename?: 'Mutation', AddTool?: { __typename?: 'Tool', id: number, name: string, partName?: string | null, category: string, position: string, description: string, photoLink: string, usage: number, tutorialLink: string, remain: number, toolLikeIds?: Array<number | null> | null } | null };

export type DeleteToolMutationVariables = Exact<{
  deleteToolId: Scalars['Int']['input'];
}>;


export type DeleteToolMutation = { __typename?: 'Mutation', DeleteTool?: { __typename?: 'Tool', id: number, name: string, partName?: string | null, category: string, position: string, description: string, photoLink: string, usage: number, tutorialLink: string, remain: number, toolLikeIds?: Array<number | null> | null } | null };

export type EditToolMutationVariables = Exact<{
  editToolId: Scalars['Int']['input'];
  toolInput: ToolInput;
}>;


export type EditToolMutation = { __typename?: 'Mutation', EditTool?: { __typename?: 'Tool', id: number, name: string, partName?: string | null, category: string, position: string, description: string, photoLink: string, usage: number, tutorialLink: string, remain: number, toolLikeIds?: Array<number | null> | null } | null };

export type AddUserMutationVariables = Exact<{
  userInput: UserInput;
}>;


export type AddUserMutation = { __typename?: 'Mutation', AddUser?: { __typename?: 'User', id: number, name: string, studentID: string, password: string, photoLink?: string | null, language: string, threeDPId?: number | null, laserCutAvailable: boolean, articlesId?: Array<number | null> | null, isAdmin: boolean, isMinister: boolean, toolLikeIds?: Array<number | null> | null } | null };

export type DeleteUserMutationVariables = Exact<{
  deleteUserId: Scalars['Int']['input'];
}>;


export type DeleteUserMutation = { __typename?: 'Mutation', DeleteUser?: { __typename?: 'User', id: number, name: string, studentID: string, password: string, photoLink?: string | null, language: string, threeDPId?: number | null, laserCutAvailable: boolean, articlesId?: Array<number | null> | null, isAdmin: boolean, isMinister: boolean, toolLikeIds?: Array<number | null> | null } | null };

export type EditUserMutationVariables = Exact<{
  editUserId: Scalars['Int']['input'];
  userEditInput: UserEditInput;
}>;


export type EditUserMutation = { __typename?: 'Mutation', EditUser?: { __typename?: 'User', id: number, name: string, studentID: string, password: string, photoLink?: string | null, language: string, threeDPId?: number | null, laserCutAvailable: boolean, articlesId?: Array<number | null> | null, isAdmin: boolean, isMinister: boolean, toolLikeIds?: Array<number | null> | null } | null };

export type DisposableMaterialUsageUpdateMutationVariables = Exact<{
  disposableMaterialUsageUpdateId: Scalars['Int']['input'];
  disposableMaterialUsageUpdateInput: DisposableMaterialUsageUpdateInput;
}>;


export type DisposableMaterialUsageUpdateMutation = { __typename?: 'Mutation', DisposableMaterialUsageUpdate?: { __typename?: 'DisposableMaterial', id: number, name: string, partName?: string | null, category: string, position: string, description: string, photoLink: string, usage: number, tutorialLink: string, fee?: number | null, remain: boolean } | null };

export type MaterialUsageUpdateMutationVariables = Exact<{
  materialUsageUpdateId: Scalars['Int']['input'];
  materialUsageUpdateInput: MaterialUsageUpdateInput;
}>;


export type MaterialUsageUpdateMutation = { __typename?: 'Mutation', MaterialUsageUpdate?: { __typename?: 'Material', id: number, name: string, partName?: string | null, category: string, valuable: boolean, position: string, description: string, photoLink: string, usage: number, tutorialLink?: string | null, fee: number, remain: number } | null };

export type ToolUsageUpdateMutationVariables = Exact<{
  toolUsageUpdateId: Scalars['Int']['input'];
  toolUsageUpdateInput: ToolUsageUpdateInput;
}>;


export type ToolUsageUpdateMutation = { __typename?: 'Mutation', ToolUsageUpdate?: { __typename?: 'Tool', id: number, name: string, partName?: string | null, category: string, position: string, description: string, photoLink: string, usage: number, tutorialLink: string, remain: number, toolLikeIds?: Array<number | null> | null } | null };

export type UserMachineUsageUpdateMutationVariables = Exact<{
  userMachineUsageUpdateId: Scalars['Int']['input'];
  userMachineUpdateInput: UserMachineUpdateInput;
}>;


export type UserMachineUsageUpdateMutation = { __typename?: 'Mutation', UserMachineUsageUpdate?: { __typename?: 'User', id: number, name: string, studentID: string, password: string, photoLink?: string | null, threeDPId?: number | null, laserCutAvailable: boolean, articlesId?: Array<number | null> | null, isAdmin: boolean, isMinister: boolean, language: string } | null };

export type UpdateIntroductionMutationVariables = Exact<{
  introductionInput: IntroductionInput;
}>;


export type UpdateIntroductionMutation = { __typename?: 'Mutation', UpdateIntroduction?: { __typename?: 'Introduction', id: number, content: string } | null };

export type UpdateAuthorizedCodeMutationVariables = Exact<{
  authorizedCodeInput: AuthorizedCodeInput;
}>;


export type UpdateAuthorizedCodeMutation = { __typename?: 'Mutation', UpdateAuthorizedCode?: { __typename?: 'AuthorizedCode', id: number, codeList?: Array<string | null> | null, updatedAt: string } | null };

export type AddToolLikeMutationVariables = Exact<{
  toolLikeInput: ToolLikeInput;
}>;


export type AddToolLikeMutation = { __typename?: 'Mutation', AddToolLike?: { __typename?: 'ToolLike', id: number, userId: number, toolId: number } | null };

export type DeleteToolLikeMutationVariables = Exact<{
  toolLikeInput: ToolLikeInput;
}>;


export type DeleteToolLikeMutation = { __typename?: 'Mutation', DeleteToolLike?: { __typename?: 'ToolLike', id: number, userId: number, toolId: number } | null };

export type EditUserLanguageMutationVariables = Exact<{
  editUserLanguageId: Scalars['Int']['input'];
  language: Scalars['String']['input'];
}>;


export type EditUserLanguageMutation = { __typename?: 'Mutation', EditUserLanguage?: { __typename?: 'User', id: number, name: string, studentID: string, password: string, photoLink?: string | null, language: string, threeDPId?: number | null, laserCutAvailable: boolean, articlesId?: Array<number | null> | null, isAdmin: boolean, isMinister: boolean, toolLikeIds?: Array<number | null> | null } | null };

export type AllAnnouncementsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllAnnouncementsQuery = { __typename?: 'Query', AllAnnouncements?: Array<{ __typename?: 'Announcement', id: number, title: string, date: string, content: string } | null> | null };

export type AllArticlesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllArticlesQuery = { __typename?: 'Query', AllArticles?: Array<{ __typename?: 'Article', id: number, writerId: number, description: string, imageURL?: string | null, time: string, title: string, headline: boolean, content: string, userpic?: string | null } | null> | null };

export type AllDisposableMaterialsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllDisposableMaterialsQuery = { __typename?: 'Query', AllDisposableMaterials?: Array<{ __typename?: 'DisposableMaterial', id: number, name: string, partName?: string | null, category: string, position: string, description: string, photoLink: string, usage: number, tutorialLink: string, fee?: number | null, remain: boolean } | null> | null };

export type SearchDisposableMaterialsByCategoryQueryVariables = Exact<{
  category: Scalars['String']['input'];
}>;


export type SearchDisposableMaterialsByCategoryQuery = { __typename?: 'Query', SearchDisposableMaterialsByCategory?: Array<{ __typename?: 'DisposableMaterial', id: number, name: string, partName?: string | null, category: string, position: string, description: string, photoLink: string, usage: number, tutorialLink: string, fee?: number | null, remain: boolean } | null> | null };

export type SearchDisposableMaterialsByNameQueryVariables = Exact<{
  name: Scalars['String']['input'];
}>;


export type SearchDisposableMaterialsByNameQuery = { __typename?: 'Query', SearchDisposableMaterialsByName?: Array<{ __typename?: 'DisposableMaterial', id: number, name: string, partName?: string | null, category: string, position: string, description: string, photoLink: string, usage: number, tutorialLink: string, fee?: number | null, remain: boolean } | null> | null };

export type SearchDisposableMaterialsByPositionQueryVariables = Exact<{
  position: Scalars['String']['input'];
}>;


export type SearchDisposableMaterialsByPositionQuery = { __typename?: 'Query', SearchDisposableMaterialsByPosition?: Array<{ __typename?: 'DisposableMaterial', id: number, name: string, partName?: string | null, category: string, position: string, description: string, photoLink: string, usage: number, tutorialLink: string, fee?: number | null, remain: boolean } | null> | null };

export type AllMachinesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllMachinesQuery = { __typename?: 'Query', AllMachines?: Array<{ __typename?: 'Machine', id: number, name: string, partName?: string | null, category: string, position: string, description: string, photoLink: string, usage: number, tutorialLink: string } | null> | null };

export type SearchMachineByNameQueryVariables = Exact<{
  input: Scalars['String']['input'];
}>;


export type SearchMachineByNameQuery = { __typename?: 'Query', SearchMachineByName?: Array<{ __typename?: 'Machine', id: number, name: string, partName?: string | null, category: string, position: string, description: string, photoLink: string, usage: number, tutorialLink: string } | null> | null };

export type SearchMachinesByCategoryQueryVariables = Exact<{
  category: Scalars['String']['input'];
}>;


export type SearchMachinesByCategoryQuery = { __typename?: 'Query', SearchMachinesByCategory?: Array<{ __typename?: 'Machine', id: number, name: string, partName?: string | null, category: string, position: string, description: string, photoLink: string, usage: number, tutorialLink: string } | null> | null };

export type SearchMachinesByPositionQueryVariables = Exact<{
  position: Scalars['String']['input'];
}>;


export type SearchMachinesByPositionQuery = { __typename?: 'Query', SearchMachinesByPosition?: Array<{ __typename?: 'Machine', id: number, name: string, partName?: string | null, category: string, position: string, description: string, photoLink: string, usage: number, tutorialLink: string } | null> | null };

export type AllMaterialsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllMaterialsQuery = { __typename?: 'Query', AllMaterials?: Array<{ __typename?: 'Material', id: number, name: string, partName?: string | null, category: string, valuable: boolean, position: string, description: string, photoLink: string, usage: number, tutorialLink?: string | null, fee: number, remain: number } | null> | null };

export type GetMaterialByIdQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetMaterialByIdQuery = { __typename?: 'Query', GetMaterialById?: { __typename?: 'Material', id: number, name: string, partName?: string | null, category: string, valuable: boolean, position: string, description: string, photoLink: string, usage: number, tutorialLink?: string | null, fee: number, remain: number } | null };

export type SearchMaterialByNameQueryVariables = Exact<{
  name: Scalars['String']['input'];
}>;


export type SearchMaterialByNameQuery = { __typename?: 'Query', SearchMaterialByName?: Array<{ __typename?: 'Material', id: number, name: string, partName?: string | null, category: string, valuable: boolean, position: string, description: string, photoLink: string, usage: number, tutorialLink?: string | null, fee: number, remain: number } | null> | null };

export type SearchMaterialsByCategoryQueryVariables = Exact<{
  category: Scalars['String']['input'];
}>;


export type SearchMaterialsByCategoryQuery = { __typename?: 'Query', SearchMaterialsByCategory?: Array<{ __typename?: 'Material', id: number, name: string, partName?: string | null, category: string, valuable: boolean, position: string, description: string, photoLink: string, usage: number, tutorialLink?: string | null, fee: number, remain: number } | null> | null };

export type SearchMaterialsByPositionQueryVariables = Exact<{
  position: Scalars['String']['input'];
}>;


export type SearchMaterialsByPositionQuery = { __typename?: 'Query', SearchMaterialsByPosition?: Array<{ __typename?: 'Material', id: number, name: string, partName?: string | null, category: string, valuable: boolean, position: string, description: string, photoLink: string, usage: number, tutorialLink?: string | null, fee: number, remain: number } | null> | null };

export type AllThreeDpQueryVariables = Exact<{ [key: string]: never; }>;


export type AllThreeDpQuery = { __typename?: 'Query', AllThreeDP?: Array<{ __typename?: 'ThreeDP', id: number, name: string, category: string, position: string, description: string, photoLink: string, usage: number, tutorialLink: string, waitingId?: Array<number | null> | null, broken: boolean } | null> | null };

export type SearchThreeDpByCategoryQueryVariables = Exact<{
  category: Scalars['String']['input'];
}>;


export type SearchThreeDpByCategoryQuery = { __typename?: 'Query', SearchThreeDPByCategory?: Array<{ __typename?: 'ThreeDP', id: number, name: string, category: string, position: string, description: string, photoLink: string, usage: number, tutorialLink: string, waitingId?: Array<number | null> | null, broken: boolean } | null> | null };

export type SearchThreeDpByPositionQueryVariables = Exact<{
  position: Scalars['String']['input'];
}>;


export type SearchThreeDpByPositionQuery = { __typename?: 'Query', SearchThreeDPByPosition?: Array<{ __typename?: 'ThreeDP', id: number, name: string, category: string, position: string, description: string, photoLink: string, usage: number, tutorialLink: string, waitingId?: Array<number | null> | null, broken: boolean } | null> | null };

export type AllToolsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllToolsQuery = { __typename?: 'Query', AllTools?: Array<{ __typename?: 'Tool', id: number, name: string, partName?: string | null, category: string, position: string, description: string, photoLink: string, usage: number, tutorialLink: string, remain: number, toolLikeIds?: Array<number | null> | null } | null> | null };

export type GetToolByIdQueryVariables = Exact<{
  getToolByIdId: Scalars['Int']['input'];
}>;


export type GetToolByIdQuery = { __typename?: 'Query', GetToolById?: { __typename?: 'Tool', id: number, name: string, partName?: string | null, category: string, position: string, description: string, photoLink: string, usage: number, tutorialLink: string, remain: number, toolLikeIds?: Array<number | null> | null } | null };

export type SearchToolsByCategoryQueryVariables = Exact<{
  category: Scalars['String']['input'];
}>;


export type SearchToolsByCategoryQuery = { __typename?: 'Query', SearchToolsByCategory?: Array<{ __typename?: 'Tool', id: number, name: string, partName?: string | null, category: string, position: string, description: string, photoLink: string, usage: number, tutorialLink: string, remain: number, toolLikeIds?: Array<number | null> | null } | null> | null };

export type SearchToolsByNameQueryVariables = Exact<{
  name: Scalars['String']['input'];
}>;


export type SearchToolsByNameQuery = { __typename?: 'Query', SearchToolsByName?: Array<{ __typename?: 'Tool', id: number, name: string, partName?: string | null, category: string, position: string, description: string, photoLink: string, usage: number, tutorialLink: string, remain: number, toolLikeIds?: Array<number | null> | null } | null> | null };

export type SearchToolsByPositionQueryVariables = Exact<{
  position: Scalars['String']['input'];
}>;


export type SearchToolsByPositionQuery = { __typename?: 'Query', SearchToolsByPosition?: Array<{ __typename?: 'Tool', id: number, name: string, partName?: string | null, category: string, position: string, description: string, photoLink: string, usage: number, tutorialLink: string, remain: number, toolLikeIds?: Array<number | null> | null } | null> | null };

export type AllUserQueryVariables = Exact<{ [key: string]: never; }>;


export type AllUserQuery = { __typename?: 'Query', AllUser?: Array<{ __typename?: 'User', id: number, name: string, studentID: string, password: string, photoLink?: string | null, language: string, threeDPId?: number | null, laserCutAvailable: boolean, articlesId?: Array<number | null> | null, isAdmin: boolean, isMinister: boolean, toolLikeIds?: Array<number | null> | null } | null> | null };

export type SearchUserByNameQueryVariables = Exact<{
  name: Scalars['String']['input'];
}>;


export type SearchUserByNameQuery = { __typename?: 'Query', SearchUserByName?: Array<{ __typename?: 'User', id: number, name: string, studentID: string, password: string, photoLink?: string | null, language: string, threeDPId?: number | null, laserCutAvailable: boolean, articlesId?: Array<number | null> | null, isAdmin: boolean, isMinister: boolean, toolLikeIds?: Array<number | null> | null } | null> | null };

export type GetUserByStudentIdQueryVariables = Exact<{
  studentId: Scalars['String']['input'];
}>;


export type GetUserByStudentIdQuery = { __typename?: 'Query', GetUserByStudentID?: { __typename?: 'User', id: number, name: string, studentID: string, password: string, photoLink?: string | null, language: string, threeDPId?: number | null, laserCutAvailable: boolean, articlesId?: Array<number | null> | null, isAdmin: boolean, isMinister: boolean, toolLikeIds?: Array<number | null> | null } | null };

export type GetAuthorizedCodeQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAuthorizedCodeQuery = { __typename?: 'Query', GetAuthorizedCode?: { __typename?: 'AuthorizedCode', id: number, codeList?: Array<string | null> | null, updatedAt: string } | null };

export type CurrentIntroductionQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentIntroductionQuery = { __typename?: 'Query', CurrentIntroduction?: { __typename?: 'Introduction', id: number, content: string } | null };

export type GetToolLikesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetToolLikesQuery = { __typename?: 'Query', GetToolLikes?: Array<{ __typename?: 'ToolLike', id: number, userId: number, toolId: number } | null> | null };

export type GetToolLikeByIdQueryVariables = Exact<{
  getToolLikeByIdId: Scalars['Int']['input'];
}>;


export type GetToolLikeByIdQuery = { __typename?: 'Query', GetToolLikeById?: { __typename?: 'ToolLike', id: number, userId: number, toolId: number } | null };

export type GetLikedToolsByUserIdQueryVariables = Exact<{
  userId: Scalars['Int']['input'];
}>;


export type GetLikedToolsByUserIdQuery = { __typename?: 'Query', GetLikedToolsByUserId?: Array<{ __typename?: 'Tool', id: number, name: string, partName?: string | null, category: string, position: string, description: string, photoLink: string, usage: number, tutorialLink: string, remain: number, toolLikeIds?: Array<number | null> | null } | null> | null };

export type AnnouncementCreatedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type AnnouncementCreatedSubscription = { __typename?: 'Subscription', AnnouncementCreated?: { __typename?: 'Announcement', id: number, date: string, title: string, content: string } | null };

export type IntroductionUpdatedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type IntroductionUpdatedSubscription = { __typename?: 'Subscription', IntroductionUpdated?: { __typename?: 'Introduction', id: number, content: string } | null };


export const AddAnnouncementDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddAnnouncement"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"announcementInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AnnouncementInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"AddAnnouncement"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"announcementInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"announcementInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]}}]} as unknown as DocumentNode<AddAnnouncementMutation, AddAnnouncementMutationVariables>;
export const DeleteAnnouncementDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteAnnouncement"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteAnnouncementId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"DeleteAnnouncement"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteAnnouncementId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]}}]} as unknown as DocumentNode<DeleteAnnouncementMutation, DeleteAnnouncementMutationVariables>;
export const EditAnnouncementDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"EditAnnouncement"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"editAnnouncementId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"announcementInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AnnouncementInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"EditAnnouncement"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"editAnnouncementId"}}},{"kind":"Argument","name":{"kind":"Name","value":"announcementInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"announcementInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]}}]} as unknown as DocumentNode<EditAnnouncementMutation, EditAnnouncementMutationVariables>;
export const AddArticleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddArticle"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"articleInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ArticleInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"AddArticle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"articleInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"articleInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"writerId"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"imageURL"}},{"kind":"Field","name":{"kind":"Name","value":"time"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"headline"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"userpic"}}]}}]}}]} as unknown as DocumentNode<AddArticleMutation, AddArticleMutationVariables>;
export const AddDisposableMaterialDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddDisposableMaterial"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"disposableMaterialInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DisposableMaterialInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"AddDisposableMaterial"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"disposableMaterialInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"disposableMaterialInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"partName"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"usage"}},{"kind":"Field","name":{"kind":"Name","value":"tutorialLink"}},{"kind":"Field","name":{"kind":"Name","value":"fee"}},{"kind":"Field","name":{"kind":"Name","value":"remain"}}]}}]}}]} as unknown as DocumentNode<AddDisposableMaterialMutation, AddDisposableMaterialMutationVariables>;
export const DeleteDisposableMaterialDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteDisposableMaterial"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteDisposableMaterialId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"DeleteDisposableMaterial"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteDisposableMaterialId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"partName"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"usage"}},{"kind":"Field","name":{"kind":"Name","value":"tutorialLink"}},{"kind":"Field","name":{"kind":"Name","value":"fee"}},{"kind":"Field","name":{"kind":"Name","value":"remain"}}]}}]}}]} as unknown as DocumentNode<DeleteDisposableMaterialMutation, DeleteDisposableMaterialMutationVariables>;
export const EditDisposableMaterialDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"EditDisposableMaterial"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"editDisposableMaterialId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"disposableMaterialInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DisposableMaterialInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"EditDisposableMaterial"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"editDisposableMaterialId"}}},{"kind":"Argument","name":{"kind":"Name","value":"disposableMaterialInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"disposableMaterialInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"partName"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"usage"}},{"kind":"Field","name":{"kind":"Name","value":"tutorialLink"}},{"kind":"Field","name":{"kind":"Name","value":"fee"}},{"kind":"Field","name":{"kind":"Name","value":"remain"}}]}}]}}]} as unknown as DocumentNode<EditDisposableMaterialMutation, EditDisposableMaterialMutationVariables>;
export const AddMachineDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddMachine"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"machineInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MachineInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"AddMachine"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"machineInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"machineInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"partName"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"usage"}},{"kind":"Field","name":{"kind":"Name","value":"tutorialLink"}}]}}]}}]} as unknown as DocumentNode<AddMachineMutation, AddMachineMutationVariables>;
export const DeleteMachineDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteMachine"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteMachineId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"DeleteMachine"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteMachineId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"partName"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"usage"}},{"kind":"Field","name":{"kind":"Name","value":"tutorialLink"}}]}}]}}]} as unknown as DocumentNode<DeleteMachineMutation, DeleteMachineMutationVariables>;
export const EditMachineDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"EditMachine"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"editMachineId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"machineInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MachineInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"EditMachine"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"editMachineId"}}},{"kind":"Argument","name":{"kind":"Name","value":"machineInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"machineInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"partName"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"usage"}},{"kind":"Field","name":{"kind":"Name","value":"tutorialLink"}}]}}]}}]} as unknown as DocumentNode<EditMachineMutation, EditMachineMutationVariables>;
export const AddMaterialDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddMaterial"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"materialInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MaterialInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"AddMaterial"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"materialInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"materialInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"partName"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"valuable"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"usage"}},{"kind":"Field","name":{"kind":"Name","value":"tutorialLink"}},{"kind":"Field","name":{"kind":"Name","value":"fee"}},{"kind":"Field","name":{"kind":"Name","value":"remain"}}]}}]}}]} as unknown as DocumentNode<AddMaterialMutation, AddMaterialMutationVariables>;
export const DeleteMaterialDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteMaterial"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteMaterialId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"DeleteMaterial"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteMaterialId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"partName"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"valuable"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"usage"}},{"kind":"Field","name":{"kind":"Name","value":"tutorialLink"}},{"kind":"Field","name":{"kind":"Name","value":"fee"}},{"kind":"Field","name":{"kind":"Name","value":"remain"}}]}}]}}]} as unknown as DocumentNode<DeleteMaterialMutation, DeleteMaterialMutationVariables>;
export const EditMaterialDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"EditMaterial"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"editMaterialId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"materialInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MaterialInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"EditMaterial"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"editMaterialId"}}},{"kind":"Argument","name":{"kind":"Name","value":"materialInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"materialInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"partName"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"valuable"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"usage"}},{"kind":"Field","name":{"kind":"Name","value":"tutorialLink"}},{"kind":"Field","name":{"kind":"Name","value":"fee"}},{"kind":"Field","name":{"kind":"Name","value":"remain"}}]}}]}}]} as unknown as DocumentNode<EditMaterialMutation, EditMaterialMutationVariables>;
export const AddThreeDpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddThreeDP"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"threeDpInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ThreeDPInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"AddThreeDP"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"threeDPInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"threeDpInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"usage"}},{"kind":"Field","name":{"kind":"Name","value":"tutorialLink"}},{"kind":"Field","name":{"kind":"Name","value":"waitingId"}},{"kind":"Field","name":{"kind":"Name","value":"broken"}}]}}]}}]} as unknown as DocumentNode<AddThreeDpMutation, AddThreeDpMutationVariables>;
export const DeleteThreeDpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteThreeDP"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteThreeDpId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"DeleteThreeDP"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteThreeDpId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"usage"}},{"kind":"Field","name":{"kind":"Name","value":"tutorialLink"}},{"kind":"Field","name":{"kind":"Name","value":"waitingId"}},{"kind":"Field","name":{"kind":"Name","value":"broken"}}]}}]}}]} as unknown as DocumentNode<DeleteThreeDpMutation, DeleteThreeDpMutationVariables>;
export const EditThreeDpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"EditThreeDP"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"editThreeDpId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"threeDpInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ThreeDPInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"EditThreeDP"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"editThreeDpId"}}},{"kind":"Argument","name":{"kind":"Name","value":"threeDPInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"threeDpInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"usage"}},{"kind":"Field","name":{"kind":"Name","value":"tutorialLink"}},{"kind":"Field","name":{"kind":"Name","value":"waitingId"}},{"kind":"Field","name":{"kind":"Name","value":"broken"}}]}}]}}]} as unknown as DocumentNode<EditThreeDpMutation, EditThreeDpMutationVariables>;
export const AddToolDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddTool"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"toolInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ToolInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"AddTool"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"toolInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"toolInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"partName"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"usage"}},{"kind":"Field","name":{"kind":"Name","value":"tutorialLink"}},{"kind":"Field","name":{"kind":"Name","value":"remain"}},{"kind":"Field","name":{"kind":"Name","value":"toolLikeIds"}}]}}]}}]} as unknown as DocumentNode<AddToolMutation, AddToolMutationVariables>;
export const DeleteToolDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteTool"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteToolId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"DeleteTool"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteToolId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"partName"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"usage"}},{"kind":"Field","name":{"kind":"Name","value":"tutorialLink"}},{"kind":"Field","name":{"kind":"Name","value":"remain"}},{"kind":"Field","name":{"kind":"Name","value":"toolLikeIds"}}]}}]}}]} as unknown as DocumentNode<DeleteToolMutation, DeleteToolMutationVariables>;
export const EditToolDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"EditTool"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"editToolId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"toolInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ToolInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"EditTool"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"editToolId"}}},{"kind":"Argument","name":{"kind":"Name","value":"toolInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"toolInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"partName"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"usage"}},{"kind":"Field","name":{"kind":"Name","value":"tutorialLink"}},{"kind":"Field","name":{"kind":"Name","value":"remain"}},{"kind":"Field","name":{"kind":"Name","value":"toolLikeIds"}}]}}]}}]} as unknown as DocumentNode<EditToolMutation, EditToolMutationVariables>;
export const AddUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"AddUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"studentID"}},{"kind":"Field","name":{"kind":"Name","value":"password"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"threeDPId"}},{"kind":"Field","name":{"kind":"Name","value":"laserCutAvailable"}},{"kind":"Field","name":{"kind":"Name","value":"articlesId"}},{"kind":"Field","name":{"kind":"Name","value":"isAdmin"}},{"kind":"Field","name":{"kind":"Name","value":"isMinister"}},{"kind":"Field","name":{"kind":"Name","value":"toolLikeIds"}}]}}]}}]} as unknown as DocumentNode<AddUserMutation, AddUserMutationVariables>;
export const DeleteUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteUserId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"DeleteUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteUserId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"studentID"}},{"kind":"Field","name":{"kind":"Name","value":"password"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"threeDPId"}},{"kind":"Field","name":{"kind":"Name","value":"laserCutAvailable"}},{"kind":"Field","name":{"kind":"Name","value":"articlesId"}},{"kind":"Field","name":{"kind":"Name","value":"isAdmin"}},{"kind":"Field","name":{"kind":"Name","value":"isMinister"}},{"kind":"Field","name":{"kind":"Name","value":"toolLikeIds"}}]}}]}}]} as unknown as DocumentNode<DeleteUserMutation, DeleteUserMutationVariables>;
export const EditUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"EditUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"editUserId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userEditInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserEditInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"EditUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"editUserId"}}},{"kind":"Argument","name":{"kind":"Name","value":"userEditInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userEditInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"studentID"}},{"kind":"Field","name":{"kind":"Name","value":"password"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"threeDPId"}},{"kind":"Field","name":{"kind":"Name","value":"laserCutAvailable"}},{"kind":"Field","name":{"kind":"Name","value":"articlesId"}},{"kind":"Field","name":{"kind":"Name","value":"isAdmin"}},{"kind":"Field","name":{"kind":"Name","value":"isMinister"}},{"kind":"Field","name":{"kind":"Name","value":"toolLikeIds"}}]}}]}}]} as unknown as DocumentNode<EditUserMutation, EditUserMutationVariables>;
export const DisposableMaterialUsageUpdateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DisposableMaterialUsageUpdate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"disposableMaterialUsageUpdateId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"disposableMaterialUsageUpdateInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DisposableMaterialUsageUpdateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"DisposableMaterialUsageUpdate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"disposableMaterialUsageUpdateId"}}},{"kind":"Argument","name":{"kind":"Name","value":"disposableMaterialUsageUpdateInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"disposableMaterialUsageUpdateInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"partName"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"usage"}},{"kind":"Field","name":{"kind":"Name","value":"tutorialLink"}},{"kind":"Field","name":{"kind":"Name","value":"fee"}},{"kind":"Field","name":{"kind":"Name","value":"remain"}}]}}]}}]} as unknown as DocumentNode<DisposableMaterialUsageUpdateMutation, DisposableMaterialUsageUpdateMutationVariables>;
export const MaterialUsageUpdateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"MaterialUsageUpdate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"materialUsageUpdateId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"materialUsageUpdateInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MaterialUsageUpdateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"MaterialUsageUpdate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"materialUsageUpdateId"}}},{"kind":"Argument","name":{"kind":"Name","value":"materialUsageUpdateInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"materialUsageUpdateInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"partName"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"valuable"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"usage"}},{"kind":"Field","name":{"kind":"Name","value":"tutorialLink"}},{"kind":"Field","name":{"kind":"Name","value":"fee"}},{"kind":"Field","name":{"kind":"Name","value":"remain"}}]}}]}}]} as unknown as DocumentNode<MaterialUsageUpdateMutation, MaterialUsageUpdateMutationVariables>;
export const ToolUsageUpdateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ToolUsageUpdate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"toolUsageUpdateId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"toolUsageUpdateInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ToolUsageUpdateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ToolUsageUpdate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"toolUsageUpdateId"}}},{"kind":"Argument","name":{"kind":"Name","value":"toolUsageUpdateInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"toolUsageUpdateInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"partName"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"usage"}},{"kind":"Field","name":{"kind":"Name","value":"tutorialLink"}},{"kind":"Field","name":{"kind":"Name","value":"remain"}},{"kind":"Field","name":{"kind":"Name","value":"toolLikeIds"}}]}}]}}]} as unknown as DocumentNode<ToolUsageUpdateMutation, ToolUsageUpdateMutationVariables>;
export const UserMachineUsageUpdateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserMachineUsageUpdate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userMachineUsageUpdateId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userMachineUpdateInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserMachineUpdateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"UserMachineUsageUpdate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userMachineUsageUpdateId"}}},{"kind":"Argument","name":{"kind":"Name","value":"userMachineUpdateInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userMachineUpdateInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"studentID"}},{"kind":"Field","name":{"kind":"Name","value":"password"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"threeDPId"}},{"kind":"Field","name":{"kind":"Name","value":"laserCutAvailable"}},{"kind":"Field","name":{"kind":"Name","value":"articlesId"}},{"kind":"Field","name":{"kind":"Name","value":"isAdmin"}},{"kind":"Field","name":{"kind":"Name","value":"isMinister"}},{"kind":"Field","name":{"kind":"Name","value":"language"}}]}}]}}]} as unknown as DocumentNode<UserMachineUsageUpdateMutation, UserMachineUsageUpdateMutationVariables>;
export const UpdateIntroductionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateIntroduction"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"introductionInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"IntroductionInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"UpdateIntroduction"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"introductionInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"introductionInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]}}]} as unknown as DocumentNode<UpdateIntroductionMutation, UpdateIntroductionMutationVariables>;
export const UpdateAuthorizedCodeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateAuthorizedCode"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"authorizedCodeInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AuthorizedCodeInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"UpdateAuthorizedCode"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"authorizedCodeInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"authorizedCodeInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"codeList"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<UpdateAuthorizedCodeMutation, UpdateAuthorizedCodeMutationVariables>;
export const AddToolLikeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddToolLike"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"toolLikeInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"toolLikeInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"AddToolLike"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"toolLikeInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"toolLikeInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"toolId"}}]}}]}}]} as unknown as DocumentNode<AddToolLikeMutation, AddToolLikeMutationVariables>;
export const DeleteToolLikeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteToolLike"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"toolLikeInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"toolLikeInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"DeleteToolLike"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"toolLikeInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"toolLikeInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"toolId"}}]}}]}}]} as unknown as DocumentNode<DeleteToolLikeMutation, DeleteToolLikeMutationVariables>;
export const EditUserLanguageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"EditUserLanguage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"editUserLanguageId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"language"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"EditUserLanguage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"editUserLanguageId"}}},{"kind":"Argument","name":{"kind":"Name","value":"language"},"value":{"kind":"Variable","name":{"kind":"Name","value":"language"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"studentID"}},{"kind":"Field","name":{"kind":"Name","value":"password"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"threeDPId"}},{"kind":"Field","name":{"kind":"Name","value":"laserCutAvailable"}},{"kind":"Field","name":{"kind":"Name","value":"articlesId"}},{"kind":"Field","name":{"kind":"Name","value":"isAdmin"}},{"kind":"Field","name":{"kind":"Name","value":"isMinister"}},{"kind":"Field","name":{"kind":"Name","value":"toolLikeIds"}}]}}]}}]} as unknown as DocumentNode<EditUserLanguageMutation, EditUserLanguageMutationVariables>;
export const AllAnnouncementsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllAnnouncements"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"AllAnnouncements"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]}}]} as unknown as DocumentNode<AllAnnouncementsQuery, AllAnnouncementsQueryVariables>;
export const AllArticlesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllArticles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"AllArticles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"writerId"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"imageURL"}},{"kind":"Field","name":{"kind":"Name","value":"time"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"headline"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"userpic"}}]}}]}}]} as unknown as DocumentNode<AllArticlesQuery, AllArticlesQueryVariables>;
export const AllDisposableMaterialsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllDisposableMaterials"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"AllDisposableMaterials"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"partName"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"usage"}},{"kind":"Field","name":{"kind":"Name","value":"tutorialLink"}},{"kind":"Field","name":{"kind":"Name","value":"fee"}},{"kind":"Field","name":{"kind":"Name","value":"remain"}}]}}]}}]} as unknown as DocumentNode<AllDisposableMaterialsQuery, AllDisposableMaterialsQueryVariables>;
export const SearchDisposableMaterialsByCategoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SearchDisposableMaterialsByCategory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"category"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"SearchDisposableMaterialsByCategory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"category"},"value":{"kind":"Variable","name":{"kind":"Name","value":"category"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"partName"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"usage"}},{"kind":"Field","name":{"kind":"Name","value":"tutorialLink"}},{"kind":"Field","name":{"kind":"Name","value":"fee"}},{"kind":"Field","name":{"kind":"Name","value":"remain"}}]}}]}}]} as unknown as DocumentNode<SearchDisposableMaterialsByCategoryQuery, SearchDisposableMaterialsByCategoryQueryVariables>;
export const SearchDisposableMaterialsByNameDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SearchDisposableMaterialsByName"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"SearchDisposableMaterialsByName"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"partName"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"usage"}},{"kind":"Field","name":{"kind":"Name","value":"tutorialLink"}},{"kind":"Field","name":{"kind":"Name","value":"fee"}},{"kind":"Field","name":{"kind":"Name","value":"remain"}}]}}]}}]} as unknown as DocumentNode<SearchDisposableMaterialsByNameQuery, SearchDisposableMaterialsByNameQueryVariables>;
export const SearchDisposableMaterialsByPositionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SearchDisposableMaterialsByPosition"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"position"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"SearchDisposableMaterialsByPosition"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"position"},"value":{"kind":"Variable","name":{"kind":"Name","value":"position"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"partName"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"usage"}},{"kind":"Field","name":{"kind":"Name","value":"tutorialLink"}},{"kind":"Field","name":{"kind":"Name","value":"fee"}},{"kind":"Field","name":{"kind":"Name","value":"remain"}}]}}]}}]} as unknown as DocumentNode<SearchDisposableMaterialsByPositionQuery, SearchDisposableMaterialsByPositionQueryVariables>;
export const AllMachinesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllMachines"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"AllMachines"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"partName"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"usage"}},{"kind":"Field","name":{"kind":"Name","value":"tutorialLink"}}]}}]}}]} as unknown as DocumentNode<AllMachinesQuery, AllMachinesQueryVariables>;
export const SearchMachineByNameDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SearchMachineByName"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"SearchMachineByName"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"partName"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"usage"}},{"kind":"Field","name":{"kind":"Name","value":"tutorialLink"}}]}}]}}]} as unknown as DocumentNode<SearchMachineByNameQuery, SearchMachineByNameQueryVariables>;
export const SearchMachinesByCategoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SearchMachinesByCategory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"category"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"SearchMachinesByCategory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"category"},"value":{"kind":"Variable","name":{"kind":"Name","value":"category"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"partName"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"usage"}},{"kind":"Field","name":{"kind":"Name","value":"tutorialLink"}}]}}]}}]} as unknown as DocumentNode<SearchMachinesByCategoryQuery, SearchMachinesByCategoryQueryVariables>;
export const SearchMachinesByPositionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SearchMachinesByPosition"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"position"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"SearchMachinesByPosition"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"position"},"value":{"kind":"Variable","name":{"kind":"Name","value":"position"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"partName"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"usage"}},{"kind":"Field","name":{"kind":"Name","value":"tutorialLink"}}]}}]}}]} as unknown as DocumentNode<SearchMachinesByPositionQuery, SearchMachinesByPositionQueryVariables>;
export const AllMaterialsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllMaterials"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"AllMaterials"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"partName"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"valuable"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"usage"}},{"kind":"Field","name":{"kind":"Name","value":"tutorialLink"}},{"kind":"Field","name":{"kind":"Name","value":"fee"}},{"kind":"Field","name":{"kind":"Name","value":"remain"}}]}}]}}]} as unknown as DocumentNode<AllMaterialsQuery, AllMaterialsQueryVariables>;
export const GetMaterialByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMaterialById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"GetMaterialById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"partName"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"valuable"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"usage"}},{"kind":"Field","name":{"kind":"Name","value":"tutorialLink"}},{"kind":"Field","name":{"kind":"Name","value":"fee"}},{"kind":"Field","name":{"kind":"Name","value":"remain"}}]}}]}}]} as unknown as DocumentNode<GetMaterialByIdQuery, GetMaterialByIdQueryVariables>;
export const SearchMaterialByNameDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SearchMaterialByName"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"SearchMaterialByName"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"partName"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"valuable"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"usage"}},{"kind":"Field","name":{"kind":"Name","value":"tutorialLink"}},{"kind":"Field","name":{"kind":"Name","value":"fee"}},{"kind":"Field","name":{"kind":"Name","value":"remain"}}]}}]}}]} as unknown as DocumentNode<SearchMaterialByNameQuery, SearchMaterialByNameQueryVariables>;
export const SearchMaterialsByCategoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SearchMaterialsByCategory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"category"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"SearchMaterialsByCategory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"category"},"value":{"kind":"Variable","name":{"kind":"Name","value":"category"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"partName"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"valuable"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"usage"}},{"kind":"Field","name":{"kind":"Name","value":"tutorialLink"}},{"kind":"Field","name":{"kind":"Name","value":"fee"}},{"kind":"Field","name":{"kind":"Name","value":"remain"}}]}}]}}]} as unknown as DocumentNode<SearchMaterialsByCategoryQuery, SearchMaterialsByCategoryQueryVariables>;
export const SearchMaterialsByPositionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SearchMaterialsByPosition"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"position"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"SearchMaterialsByPosition"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"position"},"value":{"kind":"Variable","name":{"kind":"Name","value":"position"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"partName"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"valuable"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"usage"}},{"kind":"Field","name":{"kind":"Name","value":"tutorialLink"}},{"kind":"Field","name":{"kind":"Name","value":"fee"}},{"kind":"Field","name":{"kind":"Name","value":"remain"}}]}}]}}]} as unknown as DocumentNode<SearchMaterialsByPositionQuery, SearchMaterialsByPositionQueryVariables>;
export const AllThreeDpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllThreeDP"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"AllThreeDP"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"usage"}},{"kind":"Field","name":{"kind":"Name","value":"tutorialLink"}},{"kind":"Field","name":{"kind":"Name","value":"waitingId"}},{"kind":"Field","name":{"kind":"Name","value":"broken"}}]}}]}}]} as unknown as DocumentNode<AllThreeDpQuery, AllThreeDpQueryVariables>;
export const SearchThreeDpByCategoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SearchThreeDPByCategory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"category"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"SearchThreeDPByCategory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"category"},"value":{"kind":"Variable","name":{"kind":"Name","value":"category"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"usage"}},{"kind":"Field","name":{"kind":"Name","value":"tutorialLink"}},{"kind":"Field","name":{"kind":"Name","value":"waitingId"}},{"kind":"Field","name":{"kind":"Name","value":"broken"}}]}}]}}]} as unknown as DocumentNode<SearchThreeDpByCategoryQuery, SearchThreeDpByCategoryQueryVariables>;
export const SearchThreeDpByPositionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SearchThreeDPByPosition"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"position"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"SearchThreeDPByPosition"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"position"},"value":{"kind":"Variable","name":{"kind":"Name","value":"position"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"usage"}},{"kind":"Field","name":{"kind":"Name","value":"tutorialLink"}},{"kind":"Field","name":{"kind":"Name","value":"waitingId"}},{"kind":"Field","name":{"kind":"Name","value":"broken"}}]}}]}}]} as unknown as DocumentNode<SearchThreeDpByPositionQuery, SearchThreeDpByPositionQueryVariables>;
export const AllToolsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllTools"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"AllTools"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"partName"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"usage"}},{"kind":"Field","name":{"kind":"Name","value":"tutorialLink"}},{"kind":"Field","name":{"kind":"Name","value":"remain"}},{"kind":"Field","name":{"kind":"Name","value":"toolLikeIds"}}]}}]}}]} as unknown as DocumentNode<AllToolsQuery, AllToolsQueryVariables>;
export const GetToolByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetToolById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getToolByIdId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"GetToolById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getToolByIdId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"partName"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"usage"}},{"kind":"Field","name":{"kind":"Name","value":"tutorialLink"}},{"kind":"Field","name":{"kind":"Name","value":"remain"}},{"kind":"Field","name":{"kind":"Name","value":"toolLikeIds"}}]}}]}}]} as unknown as DocumentNode<GetToolByIdQuery, GetToolByIdQueryVariables>;
export const SearchToolsByCategoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SearchToolsByCategory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"category"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"SearchToolsByCategory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"category"},"value":{"kind":"Variable","name":{"kind":"Name","value":"category"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"partName"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"usage"}},{"kind":"Field","name":{"kind":"Name","value":"tutorialLink"}},{"kind":"Field","name":{"kind":"Name","value":"remain"}},{"kind":"Field","name":{"kind":"Name","value":"toolLikeIds"}}]}}]}}]} as unknown as DocumentNode<SearchToolsByCategoryQuery, SearchToolsByCategoryQueryVariables>;
export const SearchToolsByNameDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SearchToolsByName"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"SearchToolsByName"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"partName"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"usage"}},{"kind":"Field","name":{"kind":"Name","value":"tutorialLink"}},{"kind":"Field","name":{"kind":"Name","value":"remain"}},{"kind":"Field","name":{"kind":"Name","value":"toolLikeIds"}}]}}]}}]} as unknown as DocumentNode<SearchToolsByNameQuery, SearchToolsByNameQueryVariables>;
export const SearchToolsByPositionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SearchToolsByPosition"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"position"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"SearchToolsByPosition"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"position"},"value":{"kind":"Variable","name":{"kind":"Name","value":"position"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"partName"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"usage"}},{"kind":"Field","name":{"kind":"Name","value":"tutorialLink"}},{"kind":"Field","name":{"kind":"Name","value":"remain"}},{"kind":"Field","name":{"kind":"Name","value":"toolLikeIds"}}]}}]}}]} as unknown as DocumentNode<SearchToolsByPositionQuery, SearchToolsByPositionQueryVariables>;
export const AllUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"AllUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"studentID"}},{"kind":"Field","name":{"kind":"Name","value":"password"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"threeDPId"}},{"kind":"Field","name":{"kind":"Name","value":"laserCutAvailable"}},{"kind":"Field","name":{"kind":"Name","value":"articlesId"}},{"kind":"Field","name":{"kind":"Name","value":"isAdmin"}},{"kind":"Field","name":{"kind":"Name","value":"isMinister"}},{"kind":"Field","name":{"kind":"Name","value":"toolLikeIds"}}]}}]}}]} as unknown as DocumentNode<AllUserQuery, AllUserQueryVariables>;
export const SearchUserByNameDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SearchUserByName"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"SearchUserByName"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"studentID"}},{"kind":"Field","name":{"kind":"Name","value":"password"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"threeDPId"}},{"kind":"Field","name":{"kind":"Name","value":"laserCutAvailable"}},{"kind":"Field","name":{"kind":"Name","value":"articlesId"}},{"kind":"Field","name":{"kind":"Name","value":"isAdmin"}},{"kind":"Field","name":{"kind":"Name","value":"isMinister"}},{"kind":"Field","name":{"kind":"Name","value":"toolLikeIds"}}]}}]}}]} as unknown as DocumentNode<SearchUserByNameQuery, SearchUserByNameQueryVariables>;
export const GetUserByStudentIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserByStudentID"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"studentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"GetUserByStudentID"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"studentID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"studentId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"studentID"}},{"kind":"Field","name":{"kind":"Name","value":"password"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"threeDPId"}},{"kind":"Field","name":{"kind":"Name","value":"laserCutAvailable"}},{"kind":"Field","name":{"kind":"Name","value":"articlesId"}},{"kind":"Field","name":{"kind":"Name","value":"isAdmin"}},{"kind":"Field","name":{"kind":"Name","value":"isMinister"}},{"kind":"Field","name":{"kind":"Name","value":"toolLikeIds"}}]}}]}}]} as unknown as DocumentNode<GetUserByStudentIdQuery, GetUserByStudentIdQueryVariables>;
export const GetAuthorizedCodeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAuthorizedCode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"GetAuthorizedCode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"codeList"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<GetAuthorizedCodeQuery, GetAuthorizedCodeQueryVariables>;
export const CurrentIntroductionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CurrentIntroduction"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"CurrentIntroduction"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]}}]} as unknown as DocumentNode<CurrentIntroductionQuery, CurrentIntroductionQueryVariables>;
export const GetToolLikesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetToolLikes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"GetToolLikes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"toolId"}}]}}]}}]} as unknown as DocumentNode<GetToolLikesQuery, GetToolLikesQueryVariables>;
export const GetToolLikeByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetToolLikeById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getToolLikeByIdId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"GetToolLikeById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getToolLikeByIdId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"toolId"}}]}}]}}]} as unknown as DocumentNode<GetToolLikeByIdQuery, GetToolLikeByIdQueryVariables>;
export const GetLikedToolsByUserIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetLikedToolsByUserId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"GetLikedToolsByUserId"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"partName"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"usage"}},{"kind":"Field","name":{"kind":"Name","value":"tutorialLink"}},{"kind":"Field","name":{"kind":"Name","value":"remain"}},{"kind":"Field","name":{"kind":"Name","value":"toolLikeIds"}}]}}]}}]} as unknown as DocumentNode<GetLikedToolsByUserIdQuery, GetLikedToolsByUserIdQueryVariables>;
export const AnnouncementCreatedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"AnnouncementCreated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"AnnouncementCreated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]}}]} as unknown as DocumentNode<AnnouncementCreatedSubscription, AnnouncementCreatedSubscriptionVariables>;
export const IntroductionUpdatedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"IntroductionUpdated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"IntroductionUpdated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]}}]} as unknown as DocumentNode<IntroductionUpdatedSubscription, IntroductionUpdatedSubscriptionVariables>;