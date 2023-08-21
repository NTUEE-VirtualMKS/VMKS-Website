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
  tutorialLink: Scalars['String']['output'];
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
  tutorialLink: Scalars['String']['input'];
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
  AddUser?: Maybe<User>;
  AddUserMaterial?: Maybe<UserMaterial>;
  DeleteAnnouncement?: Maybe<Announcement>;
  DeleteDisposableMaterial?: Maybe<DisposableMaterial>;
  DeleteMachine?: Maybe<Machine>;
  DeleteMaterial?: Maybe<Material>;
  DeleteThreeDP?: Maybe<ThreeDp>;
  DeleteTool?: Maybe<Tool>;
  DeleteUser?: Maybe<User>;
  DeleteUserMaterial?: Maybe<UserMaterial>;
  DisposableMaterialUsageUpdate?: Maybe<DisposableMaterial>;
  EditAnnouncement?: Maybe<Announcement>;
  EditDisposableMaterial?: Maybe<DisposableMaterial>;
  EditMachine?: Maybe<Machine>;
  EditMaterial?: Maybe<Material>;
  EditThreeDP?: Maybe<ThreeDp>;
  EditTool?: Maybe<Tool>;
  EditUser?: Maybe<User>;
  EditUserMaterial?: Maybe<UserMaterial>;
  MaterialUsageUpdate?: Maybe<Material>;
  ToolUsageUpdate?: Maybe<Tool>;
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


export type MutationAddUserArgs = {
  userInput: UserInput;
};


export type MutationAddUserMaterialArgs = {
  userMaterialInput: UserMaterialInput;
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


export type MutationDeleteUserArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteUserMaterialArgs = {
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


export type MutationEditUserMaterialArgs = {
  id: Scalars['Int']['input'];
  userMaterialEditInput: UserMaterialEditInput;
};


export type MutationMaterialUsageUpdateArgs = {
  id: Scalars['Int']['input'];
  materialUsageUpdateInput: MaterialUsageUpdateInput;
};


export type MutationToolUsageUpdateArgs = {
  id: Scalars['Int']['input'];
  toolUsageUpdateInput: ToolUsageUpdateInput;
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
  AllUserMaterials?: Maybe<Array<Maybe<UserMaterial>>>;
  SearchDisposableMaterialsByCategory?: Maybe<Array<Maybe<DisposableMaterial>>>;
  SearchDisposableMaterialsByPosition?: Maybe<Array<Maybe<DisposableMaterial>>>;
  SearchMachineByName?: Maybe<Array<Maybe<Machine>>>;
  SearchMachinesByCategory?: Maybe<Array<Maybe<Machine>>>;
  SearchMachinesByPosition?: Maybe<Array<Maybe<Machine>>>;
  SearchMaterialsByCategory?: Maybe<Array<Maybe<Material>>>;
  SearchMaterialsByPosition?: Maybe<Array<Maybe<Material>>>;
  SearchThreeDPByCategory?: Maybe<Array<Maybe<ThreeDp>>>;
  SearchThreeDPByPosition?: Maybe<Array<Maybe<ThreeDp>>>;
  SearchToolsByCategory?: Maybe<Array<Maybe<Tool>>>;
  SearchToolsByPosition?: Maybe<Array<Maybe<Tool>>>;
};


export type QuerySearchDisposableMaterialsByCategoryArgs = {
  category: Scalars['String']['input'];
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


export type QuerySearchToolsByPositionArgs = {
  position: Scalars['String']['input'];
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
  MachineCreated?: Maybe<Machine>;
  MachineDeleted?: Maybe<Machine>;
  MachineUpdated?: Maybe<Machine>;
  MaterialCreated?: Maybe<Material>;
  MaterialDeleted?: Maybe<Material>;
  MaterialUpdated?: Maybe<Material>;
  ThreeDPCreated?: Maybe<ThreeDp>;
  ThreeDPDeleted?: Maybe<ThreeDp>;
  ThreeDPEdited?: Maybe<ThreeDp>;
  ToolCreated?: Maybe<Tool>;
  ToolDeleted?: Maybe<Tool>;
  ToolUpdated?: Maybe<Tool>;
  UserCreated?: Maybe<User>;
  UserDeleted?: Maybe<User>;
  UserEdited?: Maybe<User>;
  UserMachineUpdate?: Maybe<User>;
  UserMaterialCreated?: Maybe<UserMaterial>;
  UserMaterialDeleted?: Maybe<UserMaterial>;
  UserMaterialEdited?: Maybe<UserMaterial>;
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

export type ToolUsageUpdateInput = {
  remain: Scalars['Int']['input'];
  usage: Scalars['Int']['input'];
};

export type User = {
  __typename?: 'User';
  articlesId?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  borrowHistoryId?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  id: Scalars['Int']['output'];
  laserCutAvailable: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  password: Scalars['String']['output'];
  photoLink: Scalars['String']['output'];
  studentID: Scalars['String']['output'];
  threeDPId?: Maybe<Scalars['Int']['output']>;
};

export type UserEditInput = {
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  photoLink: Scalars['String']['input'];
  studentID: Scalars['String']['input'];
};

export type UserInput = {
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

export type UserMaterial = {
  __typename?: 'UserMaterial';
  borrowDate: Scalars['String']['output'];
  borrowNum: Scalars['Int']['output'];
  borrowerId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  partName?: Maybe<Scalars['String']['output']>;
  returnDate?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
};

export type UserMaterialEditInput = {
  borrowDate: Scalars['String']['input'];
  borrowNum: Scalars['Int']['input'];
  borrowerId: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  partName?: InputMaybe<Scalars['String']['input']>;
  returnDate: Scalars['String']['input'];
  status: Scalars['String']['input'];
};

export type UserMaterialInput = {
  borrowNum: Scalars['Int']['input'];
  borrowerId: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  partName?: InputMaybe<Scalars['String']['input']>;
  returnDate?: InputMaybe<Scalars['String']['input']>;
  status: Scalars['String']['input'];
};

export type All_Announcement_QueryQueryVariables = Exact<{ [key: string]: never; }>;


export type All_Announcement_QueryQuery = { __typename?: 'Query', AllAnnouncements?: Array<{ __typename?: 'Announcement', id: number, title: string, date: string, content: string } | null> | null };

export type All_Tool_QueryQueryVariables = Exact<{ [key: string]: never; }>;


export type All_Tool_QueryQuery = { __typename?: 'Query', AllTools?: Array<{ __typename?: 'Tool', id: number, name: string, partName?: string | null, category: string, position: string, description: string, photoLink: string, usage: number, tutorialLink: string, remain: number } | null> | null };

export type All_Disposable_Materials_QueryQueryVariables = Exact<{ [key: string]: never; }>;


export type All_Disposable_Materials_QueryQuery = { __typename?: 'Query', AllDisposableMaterials?: Array<{ __typename?: 'DisposableMaterial', id: number, name: string, partName?: string | null, category: string, position: string, description: string, photoLink: string, usage: number, tutorialLink: string, fee?: number | null, remain: boolean } | null> | null };

export type All_Machine_QueryQueryVariables = Exact<{ [key: string]: never; }>;


export type All_Machine_QueryQuery = { __typename?: 'Query', AllMachines?: Array<{ __typename?: 'Machine', id: number, name: string, partName?: string | null, category: string, position: string, description: string, photoLink: string, usage: number, tutorialLink: string } | null> | null };

export type All_Material_QueryQueryVariables = Exact<{ [key: string]: never; }>;


export type All_Material_QueryQuery = { __typename?: 'Query', AllMaterials?: Array<{ __typename?: 'Material', id: number, name: string, partName?: string | null, category: string, valuable: boolean, position: string, description: string, photoLink: string, usage: number, tutorialLink: string, fee: number, remain: number } | null> | null };

export type All_Threedp_QueryQueryVariables = Exact<{ [key: string]: never; }>;


export type All_Threedp_QueryQuery = { __typename?: 'Query', AllThreeDP?: Array<{ __typename?: 'ThreeDP', id: number, name: string, category: string, position: string, description: string, photoLink: string, usage: number, tutorialLink: string, waitingId?: Array<number | null> | null, broken: boolean } | null> | null };

export type All_User_QueryQueryVariables = Exact<{ [key: string]: never; }>;


export type All_User_QueryQuery = { __typename?: 'Query', AllUser?: Array<{ __typename?: 'User', id: number, name: string, studentID: string, password: string, photoLink: string, threeDPId?: number | null, laserCutAvailable: boolean, borrowHistoryId?: Array<number | null> | null, articlesId?: Array<number | null> | null } | null> | null };

export type All_User_Material_QueryQueryVariables = Exact<{ [key: string]: never; }>;


export type All_User_Material_QueryQuery = { __typename?: 'Query', AllUserMaterials?: Array<{ __typename?: 'UserMaterial', id: number, name: string, partName?: string | null, borrowerId: number, borrowNum: number, borrowDate: string, returnDate?: string | null, status: string } | null> | null };

export type All_Article_QueryQueryVariables = Exact<{ [key: string]: never; }>;


export type All_Article_QueryQuery = { __typename?: 'Query', AllArticles?: Array<{ __typename?: 'Article', id: number, writerId: number, description: string, imageURL?: string | null, time: string, title: string, headline: boolean, content: string, userpic?: string | null } | null> | null };


export const All_Announcement_QueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ALL_ANNOUNCEMENT_QUERY"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"AllAnnouncements"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]}}]} as unknown as DocumentNode<All_Announcement_QueryQuery, All_Announcement_QueryQueryVariables>;
export const All_Tool_QueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ALL_TOOL_QUERY"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"AllTools"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"partName"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"usage"}},{"kind":"Field","name":{"kind":"Name","value":"tutorialLink"}},{"kind":"Field","name":{"kind":"Name","value":"remain"}}]}}]}}]} as unknown as DocumentNode<All_Tool_QueryQuery, All_Tool_QueryQueryVariables>;
export const All_Disposable_Materials_QueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ALL_DISPOSABLE_MATERIALS_QUERY"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"AllDisposableMaterials"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"partName"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"usage"}},{"kind":"Field","name":{"kind":"Name","value":"tutorialLink"}},{"kind":"Field","name":{"kind":"Name","value":"fee"}},{"kind":"Field","name":{"kind":"Name","value":"remain"}}]}}]}}]} as unknown as DocumentNode<All_Disposable_Materials_QueryQuery, All_Disposable_Materials_QueryQueryVariables>;
export const All_Machine_QueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ALL_MACHINE_QUERY"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"AllMachines"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"partName"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"usage"}},{"kind":"Field","name":{"kind":"Name","value":"tutorialLink"}}]}}]}}]} as unknown as DocumentNode<All_Machine_QueryQuery, All_Machine_QueryQueryVariables>;
export const All_Material_QueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ALL_MATERIAL_QUERY"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"AllMaterials"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"partName"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"valuable"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"usage"}},{"kind":"Field","name":{"kind":"Name","value":"tutorialLink"}},{"kind":"Field","name":{"kind":"Name","value":"fee"}},{"kind":"Field","name":{"kind":"Name","value":"remain"}}]}}]}}]} as unknown as DocumentNode<All_Material_QueryQuery, All_Material_QueryQueryVariables>;
export const All_Threedp_QueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ALL_THREEDP_QUERY"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"AllThreeDP"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"usage"}},{"kind":"Field","name":{"kind":"Name","value":"tutorialLink"}},{"kind":"Field","name":{"kind":"Name","value":"waitingId"}},{"kind":"Field","name":{"kind":"Name","value":"broken"}}]}}]}}]} as unknown as DocumentNode<All_Threedp_QueryQuery, All_Threedp_QueryQueryVariables>;
export const All_User_QueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ALL_USER_QUERY"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"AllUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"studentID"}},{"kind":"Field","name":{"kind":"Name","value":"password"}},{"kind":"Field","name":{"kind":"Name","value":"photoLink"}},{"kind":"Field","name":{"kind":"Name","value":"threeDPId"}},{"kind":"Field","name":{"kind":"Name","value":"laserCutAvailable"}},{"kind":"Field","name":{"kind":"Name","value":"borrowHistoryId"}},{"kind":"Field","name":{"kind":"Name","value":"articlesId"}}]}}]}}]} as unknown as DocumentNode<All_User_QueryQuery, All_User_QueryQueryVariables>;
export const All_User_Material_QueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ALL_USER_MATERIAL_QUERY"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"AllUserMaterials"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"partName"}},{"kind":"Field","name":{"kind":"Name","value":"borrowerId"}},{"kind":"Field","name":{"kind":"Name","value":"borrowNum"}},{"kind":"Field","name":{"kind":"Name","value":"borrowDate"}},{"kind":"Field","name":{"kind":"Name","value":"returnDate"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<All_User_Material_QueryQuery, All_User_Material_QueryQueryVariables>;
export const All_Article_QueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ALL_ARTICLE_QUERY"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"AllArticles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"writerId"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"imageURL"}},{"kind":"Field","name":{"kind":"Name","value":"time"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"headline"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"userpic"}}]}}]}}]} as unknown as DocumentNode<All_Article_QueryQuery, All_Article_QueryQueryVariables>;