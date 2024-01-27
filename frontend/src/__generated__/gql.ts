/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation AddAnnouncement($announcementInput: AnnouncementInput!) {\n    AddAnnouncement(announcementInput: $announcementInput) {\n      id\n      title\n      date\n      content\n    }\n  }\n": types.AddAnnouncementDocument,
    "\n  mutation DeleteAnnouncement($deleteAnnouncementId: Int!) {\n    DeleteAnnouncement(id: $deleteAnnouncementId) {\n      id\n      title\n      date\n      content\n    }\n  }\n": types.DeleteAnnouncementDocument,
    "\n  mutation EditAnnouncement($editAnnouncementId: Int!, $announcementInput: AnnouncementInput!) {\n    EditAnnouncement(id: $editAnnouncementId, announcementInput: $announcementInput) {\n      id\n      title\n      date\n      content\n    }\n  }\n": types.EditAnnouncementDocument,
    "\n  mutation AddArticle($articleInput: ArticleInput!) {\n    AddArticle(articleInput: $articleInput) {\n      id\n      writerId\n      description\n      imageURL\n      time\n      title\n      headline\n      content\n      userpic\n    }\n  }\n": types.AddArticleDocument,
    "\n  mutation AddDisposableMaterial($disposableMaterialInput: DisposableMaterialInput!) {\n    AddDisposableMaterial(disposableMaterialInput: $disposableMaterialInput) {\n      id\n      name\n      partName\n      category\n      position\n      description\n      photoLink\n      usage\n      tutorialLink\n      fee\n      remain\n    }\n  }\n": types.AddDisposableMaterialDocument,
    "\n  mutation DeleteDisposableMaterial($deleteDisposableMaterialId: Int!) {\n    DeleteDisposableMaterial(id: $deleteDisposableMaterialId) {\n      id\n      name\n      partName\n      category\n      position\n      description\n      photoLink\n      usage\n      tutorialLink\n      fee\n      remain\n    }\n  }\n": types.DeleteDisposableMaterialDocument,
    "\n  mutation EditDisposableMaterial($editDisposableMaterialId: Int!, $disposableMaterialInput: DisposableMaterialInput!) {\n    EditDisposableMaterial(id: $editDisposableMaterialId, disposableMaterialInput: $disposableMaterialInput) {\n      id\n      name\n      partName\n      category\n      position\n      description\n      photoLink\n      usage\n      tutorialLink\n      fee\n      remain\n    }\n  }\n": types.EditDisposableMaterialDocument,
    "\n  mutation AddMachine($machineInput: MachineInput!) {\n    AddMachine(machineInput: $machineInput) {\n      id\n      name\n      partName\n      category\n      position\n      description\n      photoLink\n      usage\n      tutorialLink\n    }\n  }\n": types.AddMachineDocument,
    "\n  mutation DeleteMachine($deleteMachineId: Int!) {\n    DeleteMachine(id: $deleteMachineId) {\n      id\n      name\n      partName\n      category\n      position\n      description\n      photoLink\n      usage\n      tutorialLink\n    }\n  }\n": types.DeleteMachineDocument,
    "\n  mutation EditMachine($editMachineId: Int!, $machineInput: MachineInput!) {\n    EditMachine(id: $editMachineId, machineInput: $machineInput) {\n      id\n      name\n      partName\n      category\n      position\n      description\n      photoLink\n      usage\n      tutorialLink\n    }\n  }\n": types.EditMachineDocument,
    "\n  mutation AddMaterial($materialInput: MaterialInput!) {\n    AddMaterial(materialInput: $materialInput) {\n      id\n      name\n      partName\n      category\n      valuable\n      position\n      description\n      photoLink\n      usage\n      tutorialLink\n      fee\n      remain\n    }\n  }\n": types.AddMaterialDocument,
    "\n  mutation DeleteMaterial($deleteMaterialId: Int!) {\n    DeleteMaterial(id: $deleteMaterialId) {\n      id\n      name\n      partName\n      category\n      valuable\n      position\n      description\n      photoLink\n      usage\n      tutorialLink\n      fee\n      remain\n    }\n  }\n": types.DeleteMaterialDocument,
    "\n  mutation EditMaterial($editMaterialId: Int!, $materialInput: MaterialInput!) {\n    EditMaterial(id: $editMaterialId, materialInput: $materialInput) {\n      id\n      name\n      partName\n      category\n      valuable\n      position\n      description\n      photoLink\n      usage\n      tutorialLink\n      fee\n      remain\n    }\n  }\n": types.EditMaterialDocument,
    "\n  mutation AddThreeDP($threeDpInput: ThreeDPInput!) {\n    AddThreeDP(threeDPInput: $threeDpInput) {\n      id\n      name\n      category\n      position\n      description\n      photoLink\n      usage\n      tutorialLink\n      waitingId\n      broken\n    }\n  }\n": types.AddThreeDpDocument,
    "\n  mutation DeleteThreeDP($deleteThreeDpId: Int!) {\n    DeleteThreeDP(id: $deleteThreeDpId) {\n      id\n      name\n      category\n      position\n      description\n      photoLink\n      usage\n      tutorialLink\n      waitingId\n      broken\n    }\n  }\n": types.DeleteThreeDpDocument,
    "\n  mutation EditThreeDP($editThreeDpId: Int!, $threeDpInput: ThreeDPInput!) {\n    EditThreeDP(id: $editThreeDpId, threeDPInput: $threeDpInput) {\n      id\n      name\n      category\n      position\n      description\n      photoLink\n      usage\n      tutorialLink\n      waitingId\n      broken\n    }\n  }\n": types.EditThreeDpDocument,
    "\n  mutation AddTool($toolInput: ToolInput!) {\n    AddTool(toolInput: $toolInput) {\n      id\n      name\n      partName\n      category\n      position\n      description\n      photoLink\n      usage\n      tutorialLink\n      remain\n    }\n  }\n": types.AddToolDocument,
    "\n  mutation DeleteTool($deleteToolId: Int!) {\n    DeleteTool(id: $deleteToolId) {\n      id\n      name\n      partName\n      category\n      position\n      description\n      photoLink\n      usage\n      tutorialLink\n      remain\n    }\n  }\n": types.DeleteToolDocument,
    "\n  mutation EditTool($editToolId: Int!, $toolInput: ToolInput!) {\n    EditTool(id: $editToolId, toolInput: $toolInput) {\n      id\n      name\n      partName\n      category\n      position\n      description\n      photoLink\n      usage\n      tutorialLink\n      remain\n    }\n  }\n": types.EditToolDocument,
    "\n  mutation AddUser($userInput: UserInput!) {\n    AddUser(userInput: $userInput) {\n      id\n      name\n      studentID\n      password\n      photoLink\n      threeDPId\n      laserCutAvailable\n      borrowHistoryId\n      articlesId\n      isAdmin\n      isMinister\n    }\n  }\n": types.AddUserDocument,
    "\n  mutation DeleteUser($deleteUserId: Int!) {\n    DeleteUser(id: $deleteUserId) {\n      id\n      name\n      studentID\n      password\n      photoLink\n      threeDPId\n      laserCutAvailable\n      borrowHistoryId\n      articlesId\n      isAdmin\n      isMinister\n    }\n  }\n": types.DeleteUserDocument,
    "\n  mutation EditUser($editUserId: Int!, $userEditInput: UserEditInput!) {\n    EditUser(id: $editUserId, userEditInput: $userEditInput) {\n      id\n      name\n      studentID\n      password\n      photoLink\n      threeDPId\n      laserCutAvailable\n      borrowHistoryId\n      articlesId\n      isAdmin\n      isMinister\n    }\n  }\n": types.EditUserDocument,
    "\n  mutation AddUserMaterial($userMaterialInput: UserMaterialInput!) {\n    AddUserMaterial(userMaterialInput: $userMaterialInput) {\n      id\n      name\n      partName\n      borrowerId\n      borrowNum\n      borrowDate\n      returnDate\n      status\n    }\n  }\n": types.AddUserMaterialDocument,
    "\n  mutation DeleteUserMaterial($deleteUserMaterialId: Int!) {\n    DeleteUserMaterial(id: $deleteUserMaterialId) {\n      id\n      name\n      partName\n      borrowerId\n      borrowNum\n      borrowDate\n      returnDate\n      status\n    }\n  }\n": types.DeleteUserMaterialDocument,
    "\n  mutation EditUserMaterial($editUserMaterialId: Int!, $userMaterialEditInput: UserMaterialEditInput!) {\n    EditUserMaterial(id: $editUserMaterialId, userMaterialEditInput: $userMaterialEditInput) {\n      id\n      name\n      partName\n      borrowerId\n      borrowNum\n      borrowDate\n      returnDate\n      status\n    }\n  }\n": types.EditUserMaterialDocument,
    "\n  mutation DisposableMaterialUsageUpdate($disposableMaterialUsageUpdateId: Int!, $disposableMaterialUsageUpdateInput: DisposableMaterialUsageUpdateInput!) {\n    DisposableMaterialUsageUpdate(id: $disposableMaterialUsageUpdateId, disposableMaterialUsageUpdateInput: $disposableMaterialUsageUpdateInput) {\n      id\n      name\n      partName\n      category\n      position\n      description\n      photoLink\n      usage\n      tutorialLink\n      fee\n      remain\n    }\n  }\n": types.DisposableMaterialUsageUpdateDocument,
    "\n  mutation MaterialUsageUpdate($materialUsageUpdateId: Int!, $materialUsageUpdateInput: MaterialUsageUpdateInput!) {\n  MaterialUsageUpdate(id: $materialUsageUpdateId, materialUsageUpdateInput: $materialUsageUpdateInput) {\n    id\n    name\n    partName\n    category\n    valuable\n    position\n    description\n    photoLink\n    usage\n    tutorialLink\n    fee\n    remain\n  }\n}\n": types.MaterialUsageUpdateDocument,
    "\n  mutation ToolUsageUpdate($toolUsageUpdateId: Int!, $toolUsageUpdateInput: ToolUsageUpdateInput!) {\n    ToolUsageUpdate(id: $toolUsageUpdateId, toolUsageUpdateInput: $toolUsageUpdateInput) {\n      id\n      name\n      partName\n      category\n      position\n      description\n      photoLink\n      usage\n      tutorialLink\n      remain\n    }\n  }\n": types.ToolUsageUpdateDocument,
    "\n  mutation UserMachineUsageUpdate($userMachineUsageUpdateId: Int!, $userMachineUpdateInput: UserMachineUpdateInput!) {\n    UserMachineUsageUpdate(id: $userMachineUsageUpdateId, userMachineUpdateInput: $userMachineUpdateInput) {\n      id\n      name\n      studentID\n      password\n      photoLink\n      threeDPId\n      laserCutAvailable\n      borrowHistoryId\n      articlesId\n      isAdmin\n      isMinister\n    }\n  }\n": types.UserMachineUsageUpdateDocument,
    "\n  mutation UpdateAuthorizedCode($authorizedCodeInput: AuthorizedCodeInput!) {\n    UpdateAuthorizedCode(authorizedCodeInput: $authorizedCodeInput) {\n      id\n      codeList\n      updatedAt\n    }\n  }\n": types.UpdateAuthorizedCodeDocument,
    "\n  query AllAnnouncements {\n    AllAnnouncements {\n      id\n      title\n      date\n      content\n    }\n  }\n": types.AllAnnouncementsDocument,
    "\n  query AllArticles {\n    AllArticles {\n      id\n      writerId\n      description\n      imageURL\n      time\n      title\n      headline\n      content\n      userpic\n    }\n  }\n": types.AllArticlesDocument,
    "\n  query AllDisposableMaterials {\n    AllDisposableMaterials {\n      id\n      name\n      partName\n      category\n      position\n      description\n      photoLink\n      usage\n      tutorialLink\n      fee\n      remain\n    }\n  }\n": types.AllDisposableMaterialsDocument,
    "\n  query SearchDisposableMaterialsByCategory($category: String!) {\n    SearchDisposableMaterialsByCategory(category: $category) {\n      id\n      name\n      partName\n      category\n      position\n      description\n      photoLink\n      usage\n      tutorialLink\n      fee\n      remain\n    }\n  }\n": types.SearchDisposableMaterialsByCategoryDocument,
    "\n  query SearchDisposableMaterialsByName($name: String!) {\n    SearchDisposableMaterialsByName(name: $name) {\n      id\n      name\n      partName\n      category\n      position\n      description\n      photoLink\n      usage\n      tutorialLink\n      fee\n      remain\n    }\n  }\n": types.SearchDisposableMaterialsByNameDocument,
    "\n  query SearchDisposableMaterialsByPosition($position: String!) {\n    SearchDisposableMaterialsByPosition(position: $position) {\n      id\n      name\n      partName\n      category\n      position\n      description\n      photoLink\n      usage\n      tutorialLink\n      fee\n      remain\n    }\n  }\n": types.SearchDisposableMaterialsByPositionDocument,
    "\n  query AllMachines {\n    AllMachines {\n      id\n      name\n      partName\n      category\n      position\n      description\n      photoLink\n      usage\n      tutorialLink\n    }\n  }\n": types.AllMachinesDocument,
    "\n  query SearchMachineByName($input: String!) {\n    SearchMachineByName(input: $input) {\n      id\n      name\n      partName\n      category\n      position\n      description\n      photoLink\n      usage\n      tutorialLink\n    }\n  }\n": types.SearchMachineByNameDocument,
    "\n  query SearchMachinesByCategory($category: String!) {\n    SearchMachinesByCategory(category: $category) {\n      id\n      name\n      partName\n      category\n      position\n      description\n      photoLink\n      usage\n      tutorialLink\n    }\n  }\n": types.SearchMachinesByCategoryDocument,
    "\n  query SearchMachinesByPosition($position: String!) {\n    SearchMachinesByPosition(position: $position) {\n      id\n      name\n      partName\n      category\n      position\n      description\n      photoLink\n      usage\n      tutorialLink\n    }\n  }\n": types.SearchMachinesByPositionDocument,
    "\n  query AllMaterials {\n    AllMaterials {\n      id\n      name\n      partName\n      category\n      valuable\n      position\n      description\n      photoLink\n      usage\n      tutorialLink\n      fee\n      remain\n    }\n  }\n": types.AllMaterialsDocument,
    "\n  query SearchMaterialByName($name: String!) {\n    SearchMaterialByName(name: $name) {\n      id\n      name\n      partName\n      category\n      valuable\n      position\n      description\n      photoLink\n      usage\n      tutorialLink\n      fee\n      remain\n    }\n  }\n": types.SearchMaterialByNameDocument,
    "\n  query SearchMaterialsByCategory($category: String!) {\n    SearchMaterialsByCategory(category: $category) {\n      id\n      name\n      partName\n      category\n      valuable\n      position\n      description\n      photoLink\n      usage\n      tutorialLink\n      fee\n      remain\n    }\n  }\n": types.SearchMaterialsByCategoryDocument,
    "\n  query SearchMaterialsByPosition($position: String!) {\n    SearchMaterialsByPosition(position: $position) {\n      id\n      name\n      partName\n      category\n      valuable\n      position\n      description\n      photoLink\n      usage\n      tutorialLink\n      fee\n      remain\n    }\n  }\n": types.SearchMaterialsByPositionDocument,
    "\n  query AllThreeDP {\n    AllThreeDP {\n      id\n      name\n      category\n      position\n      description\n      photoLink\n      usage\n      tutorialLink\n      waitingId\n      broken\n    }\n  }\n": types.AllThreeDpDocument,
    "\n  query SearchThreeDPByCategory($category: String!) {\n    SearchThreeDPByCategory(category: $category) {\n      id\n      name\n      category\n      position\n      description\n      photoLink\n      usage\n      tutorialLink\n      waitingId\n      broken\n    }\n  }\n": types.SearchThreeDpByCategoryDocument,
    "\n  query SearchThreeDPByPosition($position: String!) {\n    SearchThreeDPByPosition(position: $position) {\n      id\n      name\n      category\n      position\n      description\n      photoLink\n      usage\n      tutorialLink\n      waitingId\n      broken\n    }\n  }\n": types.SearchThreeDpByPositionDocument,
    "\n  query AllTools {\n    AllTools {\n      id\n      name\n      partName\n      category\n      position\n      description\n      photoLink\n      usage\n      tutorialLink\n      remain\n    }\n  }\n": types.AllToolsDocument,
    "\n  query SearchToolsByCategory($category: String!) {\n    SearchToolsByCategory(category: $category) {\n      id\n      name\n      partName\n      category\n      position\n      description\n      photoLink\n      usage\n      tutorialLink\n      remain\n    }\n  }\n": types.SearchToolsByCategoryDocument,
    "\n  query SearchToolsByName($name: String!) {\n    SearchToolsByName(name: $name) {\n      id\n      name\n      partName\n      category\n      position\n      description\n      photoLink\n      usage\n      tutorialLink\n      remain\n    }\n  }\n": types.SearchToolsByNameDocument,
    "\n  query SearchToolsByPosition($position: String!) {\n    SearchToolsByPosition(position: $position) {\n      id\n      name\n      partName\n      category\n      position\n      description\n      photoLink\n      usage\n      tutorialLink\n      remain\n    }\n  }\n": types.SearchToolsByPositionDocument,
    "\n  query AllUser {\n    AllUser {\n      id\n      name\n      studentID\n      password\n      photoLink\n      threeDPId\n      laserCutAvailable\n      borrowHistoryId\n      articlesId\n      isAdmin\n      isMinister\n    }\n  }\n": types.AllUserDocument,
    "\n  query SearchUserByName($name: String!) {\n    SearchUserByName(name: $name) {\n      id\n      name\n      studentID\n      password\n      photoLink\n      threeDPId\n      laserCutAvailable\n      borrowHistoryId\n      articlesId\n      isAdmin\n      isMinister\n    }\n  }\n": types.SearchUserByNameDocument,
    "\n  query AllUserMaterials {\n    AllUserMaterials {\n      id\n      name\n      partName\n      borrowerId\n      borrowNum\n      borrowDate\n      returnDate\n      status\n    }\n  }\n": types.AllUserMaterialsDocument,
    "\n  query GetAuthorizedCode {\n    GetAuthorizedCode {\n      id\n      codeList\n      updatedAt\n    }\n  }\n": types.GetAuthorizedCodeDocument,
    "\n    subscription AnnouncementCreated {\n        AnnouncementCreated {\n        id\n        date\n        title\n        content\n        }\n    }\n": types.AnnouncementCreatedDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation AddAnnouncement($announcementInput: AnnouncementInput!) {\n    AddAnnouncement(announcementInput: $announcementInput) {\n      id\n      title\n      date\n      content\n    }\n  }\n"): (typeof documents)["\n  mutation AddAnnouncement($announcementInput: AnnouncementInput!) {\n    AddAnnouncement(announcementInput: $announcementInput) {\n      id\n      title\n      date\n      content\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation DeleteAnnouncement($deleteAnnouncementId: Int!) {\n    DeleteAnnouncement(id: $deleteAnnouncementId) {\n      id\n      title\n      date\n      content\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteAnnouncement($deleteAnnouncementId: Int!) {\n    DeleteAnnouncement(id: $deleteAnnouncementId) {\n      id\n      title\n      date\n      content\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation EditAnnouncement($editAnnouncementId: Int!, $announcementInput: AnnouncementInput!) {\n    EditAnnouncement(id: $editAnnouncementId, announcementInput: $announcementInput) {\n      id\n      title\n      date\n      content\n    }\n  }\n"): (typeof documents)["\n  mutation EditAnnouncement($editAnnouncementId: Int!, $announcementInput: AnnouncementInput!) {\n    EditAnnouncement(id: $editAnnouncementId, announcementInput: $announcementInput) {\n      id\n      title\n      date\n      content\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation AddArticle($articleInput: ArticleInput!) {\n    AddArticle(articleInput: $articleInput) {\n      id\n      writerId\n      description\n      imageURL\n      time\n      title\n      headline\n      content\n      userpic\n    }\n  }\n"): (typeof documents)["\n  mutation AddArticle($articleInput: ArticleInput!) {\n    AddArticle(articleInput: $articleInput) {\n      id\n      writerId\n      description\n      imageURL\n      time\n      title\n      headline\n      content\n      userpic\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation AddDisposableMaterial($disposableMaterialInput: DisposableMaterialInput!) {\n    AddDisposableMaterial(disposableMaterialInput: $disposableMaterialInput) {\n      id\n      name\n      partName\n      category\n      position\n      description\n      photoLink\n      usage\n      tutorialLink\n      fee\n      remain\n    }\n  }\n"): (typeof documents)["\n  mutation AddDisposableMaterial($disposableMaterialInput: DisposableMaterialInput!) {\n    AddDisposableMaterial(disposableMaterialInput: $disposableMaterialInput) {\n      id\n      name\n      partName\n      category\n      position\n      description\n      photoLink\n      usage\n      tutorialLink\n      fee\n      remain\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation DeleteDisposableMaterial($deleteDisposableMaterialId: Int!) {\n    DeleteDisposableMaterial(id: $deleteDisposableMaterialId) {\n      id\n      name\n      partName\n      category\n      position\n      description\n      photoLink\n      usage\n      tutorialLink\n      fee\n      remain\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteDisposableMaterial($deleteDisposableMaterialId: Int!) {\n    DeleteDisposableMaterial(id: $deleteDisposableMaterialId) {\n      id\n      name\n      partName\n      category\n      position\n      description\n      photoLink\n      usage\n      tutorialLink\n      fee\n      remain\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation EditDisposableMaterial($editDisposableMaterialId: Int!, $disposableMaterialInput: DisposableMaterialInput!) {\n    EditDisposableMaterial(id: $editDisposableMaterialId, disposableMaterialInput: $disposableMaterialInput) {\n      id\n      name\n      partName\n      category\n      position\n      description\n      photoLink\n      usage\n      tutorialLink\n      fee\n      remain\n    }\n  }\n"): (typeof documents)["\n  mutation EditDisposableMaterial($editDisposableMaterialId: Int!, $disposableMaterialInput: DisposableMaterialInput!) {\n    EditDisposableMaterial(id: $editDisposableMaterialId, disposableMaterialInput: $disposableMaterialInput) {\n      id\n      name\n      partName\n      category\n      position\n      description\n      photoLink\n      usage\n      tutorialLink\n      fee\n      remain\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation AddMachine($machineInput: MachineInput!) {\n    AddMachine(machineInput: $machineInput) {\n      id\n      name\n      partName\n      category\n      position\n      description\n      photoLink\n      usage\n      tutorialLink\n    }\n  }\n"): (typeof documents)["\n  mutation AddMachine($machineInput: MachineInput!) {\n    AddMachine(machineInput: $machineInput) {\n      id\n      name\n      partName\n      category\n      position\n      description\n      photoLink\n      usage\n      tutorialLink\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation DeleteMachine($deleteMachineId: Int!) {\n    DeleteMachine(id: $deleteMachineId) {\n      id\n      name\n      partName\n      category\n      position\n      description\n      photoLink\n      usage\n      tutorialLink\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteMachine($deleteMachineId: Int!) {\n    DeleteMachine(id: $deleteMachineId) {\n      id\n      name\n      partName\n      category\n      position\n      description\n      photoLink\n      usage\n      tutorialLink\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation EditMachine($editMachineId: Int!, $machineInput: MachineInput!) {\n    EditMachine(id: $editMachineId, machineInput: $machineInput) {\n      id\n      name\n      partName\n      category\n      position\n      description\n      photoLink\n      usage\n      tutorialLink\n    }\n  }\n"): (typeof documents)["\n  mutation EditMachine($editMachineId: Int!, $machineInput: MachineInput!) {\n    EditMachine(id: $editMachineId, machineInput: $machineInput) {\n      id\n      name\n      partName\n      category\n      position\n      description\n      photoLink\n      usage\n      tutorialLink\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation AddMaterial($materialInput: MaterialInput!) {\n    AddMaterial(materialInput: $materialInput) {\n      id\n      name\n      partName\n      category\n      valuable\n      position\n      description\n      photoLink\n      usage\n      tutorialLink\n      fee\n      remain\n    }\n  }\n"): (typeof documents)["\n  mutation AddMaterial($materialInput: MaterialInput!) {\n    AddMaterial(materialInput: $materialInput) {\n      id\n      name\n      partName\n      category\n      valuable\n      position\n      description\n      photoLink\n      usage\n      tutorialLink\n      fee\n      remain\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation DeleteMaterial($deleteMaterialId: Int!) {\n    DeleteMaterial(id: $deleteMaterialId) {\n      id\n      name\n      partName\n      category\n      valuable\n      position\n      description\n      photoLink\n      usage\n      tutorialLink\n      fee\n      remain\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteMaterial($deleteMaterialId: Int!) {\n    DeleteMaterial(id: $deleteMaterialId) {\n      id\n      name\n      partName\n      category\n      valuable\n      position\n      description\n      photoLink\n      usage\n      tutorialLink\n      fee\n      remain\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation EditMaterial($editMaterialId: Int!, $materialInput: MaterialInput!) {\n    EditMaterial(id: $editMaterialId, materialInput: $materialInput) {\n      id\n      name\n      partName\n      category\n      valuable\n      position\n      description\n      photoLink\n      usage\n      tutorialLink\n      fee\n      remain\n    }\n  }\n"): (typeof documents)["\n  mutation EditMaterial($editMaterialId: Int!, $materialInput: MaterialInput!) {\n    EditMaterial(id: $editMaterialId, materialInput: $materialInput) {\n      id\n      name\n      partName\n      category\n      valuable\n      position\n      description\n      photoLink\n      usage\n      tutorialLink\n      fee\n      remain\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation AddThreeDP($threeDpInput: ThreeDPInput!) {\n    AddThreeDP(threeDPInput: $threeDpInput) {\n      id\n      name\n      category\n      position\n      description\n      photoLink\n      usage\n      tutorialLink\n      waitingId\n      broken\n    }\n  }\n"): (typeof documents)["\n  mutation AddThreeDP($threeDpInput: ThreeDPInput!) {\n    AddThreeDP(threeDPInput: $threeDpInput) {\n      id\n      name\n      category\n      position\n      description\n      photoLink\n      usage\n      tutorialLink\n      waitingId\n      broken\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation DeleteThreeDP($deleteThreeDpId: Int!) {\n    DeleteThreeDP(id: $deleteThreeDpId) {\n      id\n      name\n      category\n      position\n      description\n      photoLink\n      usage\n      tutorialLink\n      waitingId\n      broken\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteThreeDP($deleteThreeDpId: Int!) {\n    DeleteThreeDP(id: $deleteThreeDpId) {\n      id\n      name\n      category\n      position\n      description\n      photoLink\n      usage\n      tutorialLink\n      waitingId\n      broken\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation EditThreeDP($editThreeDpId: Int!, $threeDpInput: ThreeDPInput!) {\n    EditThreeDP(id: $editThreeDpId, threeDPInput: $threeDpInput) {\n      id\n      name\n      category\n      position\n      description\n      photoLink\n      usage\n      tutorialLink\n      waitingId\n      broken\n    }\n  }\n"): (typeof documents)["\n  mutation EditThreeDP($editThreeDpId: Int!, $threeDpInput: ThreeDPInput!) {\n    EditThreeDP(id: $editThreeDpId, threeDPInput: $threeDpInput) {\n      id\n      name\n      category\n      position\n      description\n      photoLink\n      usage\n      tutorialLink\n      waitingId\n      broken\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation AddTool($toolInput: ToolInput!) {\n    AddTool(toolInput: $toolInput) {\n      id\n      name\n      partName\n      category\n      position\n      description\n      photoLink\n      usage\n      tutorialLink\n      remain\n    }\n  }\n"): (typeof documents)["\n  mutation AddTool($toolInput: ToolInput!) {\n    AddTool(toolInput: $toolInput) {\n      id\n      name\n      partName\n      category\n      position\n      description\n      photoLink\n      usage\n      tutorialLink\n      remain\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation DeleteTool($deleteToolId: Int!) {\n    DeleteTool(id: $deleteToolId) {\n      id\n      name\n      partName\n      category\n      position\n      description\n      photoLink\n      usage\n      tutorialLink\n      remain\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteTool($deleteToolId: Int!) {\n    DeleteTool(id: $deleteToolId) {\n      id\n      name\n      partName\n      category\n      position\n      description\n      photoLink\n      usage\n      tutorialLink\n      remain\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation EditTool($editToolId: Int!, $toolInput: ToolInput!) {\n    EditTool(id: $editToolId, toolInput: $toolInput) {\n      id\n      name\n      partName\n      category\n      position\n      description\n      photoLink\n      usage\n      tutorialLink\n      remain\n    }\n  }\n"): (typeof documents)["\n  mutation EditTool($editToolId: Int!, $toolInput: ToolInput!) {\n    EditTool(id: $editToolId, toolInput: $toolInput) {\n      id\n      name\n      partName\n      category\n      position\n      description\n      photoLink\n      usage\n      tutorialLink\n      remain\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation AddUser($userInput: UserInput!) {\n    AddUser(userInput: $userInput) {\n      id\n      name\n      studentID\n      password\n      photoLink\n      threeDPId\n      laserCutAvailable\n      borrowHistoryId\n      articlesId\n      isAdmin\n      isMinister\n    }\n  }\n"): (typeof documents)["\n  mutation AddUser($userInput: UserInput!) {\n    AddUser(userInput: $userInput) {\n      id\n      name\n      studentID\n      password\n      photoLink\n      threeDPId\n      laserCutAvailable\n      borrowHistoryId\n      articlesId\n      isAdmin\n      isMinister\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation DeleteUser($deleteUserId: Int!) {\n    DeleteUser(id: $deleteUserId) {\n      id\n      name\n      studentID\n      password\n      photoLink\n      threeDPId\n      laserCutAvailable\n      borrowHistoryId\n      articlesId\n      isAdmin\n      isMinister\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteUser($deleteUserId: Int!) {\n    DeleteUser(id: $deleteUserId) {\n      id\n      name\n      studentID\n      password\n      photoLink\n      threeDPId\n      laserCutAvailable\n      borrowHistoryId\n      articlesId\n      isAdmin\n      isMinister\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation EditUser($editUserId: Int!, $userEditInput: UserEditInput!) {\n    EditUser(id: $editUserId, userEditInput: $userEditInput) {\n      id\n      name\n      studentID\n      password\n      photoLink\n      threeDPId\n      laserCutAvailable\n      borrowHistoryId\n      articlesId\n      isAdmin\n      isMinister\n    }\n  }\n"): (typeof documents)["\n  mutation EditUser($editUserId: Int!, $userEditInput: UserEditInput!) {\n    EditUser(id: $editUserId, userEditInput: $userEditInput) {\n      id\n      name\n      studentID\n      password\n      photoLink\n      threeDPId\n      laserCutAvailable\n      borrowHistoryId\n      articlesId\n      isAdmin\n      isMinister\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation AddUserMaterial($userMaterialInput: UserMaterialInput!) {\n    AddUserMaterial(userMaterialInput: $userMaterialInput) {\n      id\n      name\n      partName\n      borrowerId\n      borrowNum\n      borrowDate\n      returnDate\n      status\n    }\n  }\n"): (typeof documents)["\n  mutation AddUserMaterial($userMaterialInput: UserMaterialInput!) {\n    AddUserMaterial(userMaterialInput: $userMaterialInput) {\n      id\n      name\n      partName\n      borrowerId\n      borrowNum\n      borrowDate\n      returnDate\n      status\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation DeleteUserMaterial($deleteUserMaterialId: Int!) {\n    DeleteUserMaterial(id: $deleteUserMaterialId) {\n      id\n      name\n      partName\n      borrowerId\n      borrowNum\n      borrowDate\n      returnDate\n      status\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteUserMaterial($deleteUserMaterialId: Int!) {\n    DeleteUserMaterial(id: $deleteUserMaterialId) {\n      id\n      name\n      partName\n      borrowerId\n      borrowNum\n      borrowDate\n      returnDate\n      status\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation EditUserMaterial($editUserMaterialId: Int!, $userMaterialEditInput: UserMaterialEditInput!) {\n    EditUserMaterial(id: $editUserMaterialId, userMaterialEditInput: $userMaterialEditInput) {\n      id\n      name\n      partName\n      borrowerId\n      borrowNum\n      borrowDate\n      returnDate\n      status\n    }\n  }\n"): (typeof documents)["\n  mutation EditUserMaterial($editUserMaterialId: Int!, $userMaterialEditInput: UserMaterialEditInput!) {\n    EditUserMaterial(id: $editUserMaterialId, userMaterialEditInput: $userMaterialEditInput) {\n      id\n      name\n      partName\n      borrowerId\n      borrowNum\n      borrowDate\n      returnDate\n      status\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation DisposableMaterialUsageUpdate($disposableMaterialUsageUpdateId: Int!, $disposableMaterialUsageUpdateInput: DisposableMaterialUsageUpdateInput!) {\n    DisposableMaterialUsageUpdate(id: $disposableMaterialUsageUpdateId, disposableMaterialUsageUpdateInput: $disposableMaterialUsageUpdateInput) {\n      id\n      name\n      partName\n      category\n      position\n      description\n      photoLink\n      usage\n      tutorialLink\n      fee\n      remain\n    }\n  }\n"): (typeof documents)["\n  mutation DisposableMaterialUsageUpdate($disposableMaterialUsageUpdateId: Int!, $disposableMaterialUsageUpdateInput: DisposableMaterialUsageUpdateInput!) {\n    DisposableMaterialUsageUpdate(id: $disposableMaterialUsageUpdateId, disposableMaterialUsageUpdateInput: $disposableMaterialUsageUpdateInput) {\n      id\n      name\n      partName\n      category\n      position\n      description\n      photoLink\n      usage\n      tutorialLink\n      fee\n      remain\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation MaterialUsageUpdate($materialUsageUpdateId: Int!, $materialUsageUpdateInput: MaterialUsageUpdateInput!) {\n  MaterialUsageUpdate(id: $materialUsageUpdateId, materialUsageUpdateInput: $materialUsageUpdateInput) {\n    id\n    name\n    partName\n    category\n    valuable\n    position\n    description\n    photoLink\n    usage\n    tutorialLink\n    fee\n    remain\n  }\n}\n"): (typeof documents)["\n  mutation MaterialUsageUpdate($materialUsageUpdateId: Int!, $materialUsageUpdateInput: MaterialUsageUpdateInput!) {\n  MaterialUsageUpdate(id: $materialUsageUpdateId, materialUsageUpdateInput: $materialUsageUpdateInput) {\n    id\n    name\n    partName\n    category\n    valuable\n    position\n    description\n    photoLink\n    usage\n    tutorialLink\n    fee\n    remain\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation ToolUsageUpdate($toolUsageUpdateId: Int!, $toolUsageUpdateInput: ToolUsageUpdateInput!) {\n    ToolUsageUpdate(id: $toolUsageUpdateId, toolUsageUpdateInput: $toolUsageUpdateInput) {\n      id\n      name\n      partName\n      category\n      position\n      description\n      photoLink\n      usage\n      tutorialLink\n      remain\n    }\n  }\n"): (typeof documents)["\n  mutation ToolUsageUpdate($toolUsageUpdateId: Int!, $toolUsageUpdateInput: ToolUsageUpdateInput!) {\n    ToolUsageUpdate(id: $toolUsageUpdateId, toolUsageUpdateInput: $toolUsageUpdateInput) {\n      id\n      name\n      partName\n      category\n      position\n      description\n      photoLink\n      usage\n      tutorialLink\n      remain\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UserMachineUsageUpdate($userMachineUsageUpdateId: Int!, $userMachineUpdateInput: UserMachineUpdateInput!) {\n    UserMachineUsageUpdate(id: $userMachineUsageUpdateId, userMachineUpdateInput: $userMachineUpdateInput) {\n      id\n      name\n      studentID\n      password\n      photoLink\n      threeDPId\n      laserCutAvailable\n      borrowHistoryId\n      articlesId\n      isAdmin\n      isMinister\n    }\n  }\n"): (typeof documents)["\n  mutation UserMachineUsageUpdate($userMachineUsageUpdateId: Int!, $userMachineUpdateInput: UserMachineUpdateInput!) {\n    UserMachineUsageUpdate(id: $userMachineUsageUpdateId, userMachineUpdateInput: $userMachineUpdateInput) {\n      id\n      name\n      studentID\n      password\n      photoLink\n      threeDPId\n      laserCutAvailable\n      borrowHistoryId\n      articlesId\n      isAdmin\n      isMinister\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UpdateAuthorizedCode($authorizedCodeInput: AuthorizedCodeInput!) {\n    UpdateAuthorizedCode(authorizedCodeInput: $authorizedCodeInput) {\n      id\n      codeList\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateAuthorizedCode($authorizedCodeInput: AuthorizedCodeInput!) {\n    UpdateAuthorizedCode(authorizedCodeInput: $authorizedCodeInput) {\n      id\n      codeList\n      updatedAt\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query AllAnnouncements {\n    AllAnnouncements {\n      id\n      title\n      date\n      content\n    }\n  }\n"): (typeof documents)["\n  query AllAnnouncements {\n    AllAnnouncements {\n      id\n      title\n      date\n      content\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query AllArticles {\n    AllArticles {\n      id\n      writerId\n      description\n      imageURL\n      time\n      title\n      headline\n      content\n      userpic\n    }\n  }\n"): (typeof documents)["\n  query AllArticles {\n    AllArticles {\n      id\n      writerId\n      description\n      imageURL\n      time\n      title\n      headline\n      content\n      userpic\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query AllDisposableMaterials {\n    AllDisposableMaterials {\n      id\n      name\n      partName\n      category\n      position\n      description\n      photoLink\n      usage\n      tutorialLink\n      fee\n      remain\n    }\n  }\n"): (typeof documents)["\n  query AllDisposableMaterials {\n    AllDisposableMaterials {\n      id\n      name\n      partName\n      category\n      position\n      description\n      photoLink\n      usage\n      tutorialLink\n      fee\n      remain\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query SearchDisposableMaterialsByCategory($category: String!) {\n    SearchDisposableMaterialsByCategory(category: $category) {\n      id\n      name\n      partName\n      category\n      position\n      description\n      photoLink\n      usage\n      tutorialLink\n      fee\n      remain\n    }\n  }\n"): (typeof documents)["\n  query SearchDisposableMaterialsByCategory($category: String!) {\n    SearchDisposableMaterialsByCategory(category: $category) {\n      id\n      name\n      partName\n      category\n      position\n      description\n      photoLink\n      usage\n      tutorialLink\n      fee\n      remain\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query SearchDisposableMaterialsByName($name: String!) {\n    SearchDisposableMaterialsByName(name: $name) {\n      id\n      name\n      partName\n      category\n      position\n      description\n      photoLink\n      usage\n      tutorialLink\n      fee\n      remain\n    }\n  }\n"): (typeof documents)["\n  query SearchDisposableMaterialsByName($name: String!) {\n    SearchDisposableMaterialsByName(name: $name) {\n      id\n      name\n      partName\n      category\n      position\n      description\n      photoLink\n      usage\n      tutorialLink\n      fee\n      remain\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query SearchDisposableMaterialsByPosition($position: String!) {\n    SearchDisposableMaterialsByPosition(position: $position) {\n      id\n      name\n      partName\n      category\n      position\n      description\n      photoLink\n      usage\n      tutorialLink\n      fee\n      remain\n    }\n  }\n"): (typeof documents)["\n  query SearchDisposableMaterialsByPosition($position: String!) {\n    SearchDisposableMaterialsByPosition(position: $position) {\n      id\n      name\n      partName\n      category\n      position\n      description\n      photoLink\n      usage\n      tutorialLink\n      fee\n      remain\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query AllMachines {\n    AllMachines {\n      id\n      name\n      partName\n      category\n      position\n      description\n      photoLink\n      usage\n      tutorialLink\n    }\n  }\n"): (typeof documents)["\n  query AllMachines {\n    AllMachines {\n      id\n      name\n      partName\n      category\n      position\n      description\n      photoLink\n      usage\n      tutorialLink\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query SearchMachineByName($input: String!) {\n    SearchMachineByName(input: $input) {\n      id\n      name\n      partName\n      category\n      position\n      description\n      photoLink\n      usage\n      tutorialLink\n    }\n  }\n"): (typeof documents)["\n  query SearchMachineByName($input: String!) {\n    SearchMachineByName(input: $input) {\n      id\n      name\n      partName\n      category\n      position\n      description\n      photoLink\n      usage\n      tutorialLink\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query SearchMachinesByCategory($category: String!) {\n    SearchMachinesByCategory(category: $category) {\n      id\n      name\n      partName\n      category\n      position\n      description\n      photoLink\n      usage\n      tutorialLink\n    }\n  }\n"): (typeof documents)["\n  query SearchMachinesByCategory($category: String!) {\n    SearchMachinesByCategory(category: $category) {\n      id\n      name\n      partName\n      category\n      position\n      description\n      photoLink\n      usage\n      tutorialLink\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query SearchMachinesByPosition($position: String!) {\n    SearchMachinesByPosition(position: $position) {\n      id\n      name\n      partName\n      category\n      position\n      description\n      photoLink\n      usage\n      tutorialLink\n    }\n  }\n"): (typeof documents)["\n  query SearchMachinesByPosition($position: String!) {\n    SearchMachinesByPosition(position: $position) {\n      id\n      name\n      partName\n      category\n      position\n      description\n      photoLink\n      usage\n      tutorialLink\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query AllMaterials {\n    AllMaterials {\n      id\n      name\n      partName\n      category\n      valuable\n      position\n      description\n      photoLink\n      usage\n      tutorialLink\n      fee\n      remain\n    }\n  }\n"): (typeof documents)["\n  query AllMaterials {\n    AllMaterials {\n      id\n      name\n      partName\n      category\n      valuable\n      position\n      description\n      photoLink\n      usage\n      tutorialLink\n      fee\n      remain\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query SearchMaterialByName($name: String!) {\n    SearchMaterialByName(name: $name) {\n      id\n      name\n      partName\n      category\n      valuable\n      position\n      description\n      photoLink\n      usage\n      tutorialLink\n      fee\n      remain\n    }\n  }\n"): (typeof documents)["\n  query SearchMaterialByName($name: String!) {\n    SearchMaterialByName(name: $name) {\n      id\n      name\n      partName\n      category\n      valuable\n      position\n      description\n      photoLink\n      usage\n      tutorialLink\n      fee\n      remain\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query SearchMaterialsByCategory($category: String!) {\n    SearchMaterialsByCategory(category: $category) {\n      id\n      name\n      partName\n      category\n      valuable\n      position\n      description\n      photoLink\n      usage\n      tutorialLink\n      fee\n      remain\n    }\n  }\n"): (typeof documents)["\n  query SearchMaterialsByCategory($category: String!) {\n    SearchMaterialsByCategory(category: $category) {\n      id\n      name\n      partName\n      category\n      valuable\n      position\n      description\n      photoLink\n      usage\n      tutorialLink\n      fee\n      remain\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query SearchMaterialsByPosition($position: String!) {\n    SearchMaterialsByPosition(position: $position) {\n      id\n      name\n      partName\n      category\n      valuable\n      position\n      description\n      photoLink\n      usage\n      tutorialLink\n      fee\n      remain\n    }\n  }\n"): (typeof documents)["\n  query SearchMaterialsByPosition($position: String!) {\n    SearchMaterialsByPosition(position: $position) {\n      id\n      name\n      partName\n      category\n      valuable\n      position\n      description\n      photoLink\n      usage\n      tutorialLink\n      fee\n      remain\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query AllThreeDP {\n    AllThreeDP {\n      id\n      name\n      category\n      position\n      description\n      photoLink\n      usage\n      tutorialLink\n      waitingId\n      broken\n    }\n  }\n"): (typeof documents)["\n  query AllThreeDP {\n    AllThreeDP {\n      id\n      name\n      category\n      position\n      description\n      photoLink\n      usage\n      tutorialLink\n      waitingId\n      broken\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query SearchThreeDPByCategory($category: String!) {\n    SearchThreeDPByCategory(category: $category) {\n      id\n      name\n      category\n      position\n      description\n      photoLink\n      usage\n      tutorialLink\n      waitingId\n      broken\n    }\n  }\n"): (typeof documents)["\n  query SearchThreeDPByCategory($category: String!) {\n    SearchThreeDPByCategory(category: $category) {\n      id\n      name\n      category\n      position\n      description\n      photoLink\n      usage\n      tutorialLink\n      waitingId\n      broken\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query SearchThreeDPByPosition($position: String!) {\n    SearchThreeDPByPosition(position: $position) {\n      id\n      name\n      category\n      position\n      description\n      photoLink\n      usage\n      tutorialLink\n      waitingId\n      broken\n    }\n  }\n"): (typeof documents)["\n  query SearchThreeDPByPosition($position: String!) {\n    SearchThreeDPByPosition(position: $position) {\n      id\n      name\n      category\n      position\n      description\n      photoLink\n      usage\n      tutorialLink\n      waitingId\n      broken\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query AllTools {\n    AllTools {\n      id\n      name\n      partName\n      category\n      position\n      description\n      photoLink\n      usage\n      tutorialLink\n      remain\n    }\n  }\n"): (typeof documents)["\n  query AllTools {\n    AllTools {\n      id\n      name\n      partName\n      category\n      position\n      description\n      photoLink\n      usage\n      tutorialLink\n      remain\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query SearchToolsByCategory($category: String!) {\n    SearchToolsByCategory(category: $category) {\n      id\n      name\n      partName\n      category\n      position\n      description\n      photoLink\n      usage\n      tutorialLink\n      remain\n    }\n  }\n"): (typeof documents)["\n  query SearchToolsByCategory($category: String!) {\n    SearchToolsByCategory(category: $category) {\n      id\n      name\n      partName\n      category\n      position\n      description\n      photoLink\n      usage\n      tutorialLink\n      remain\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query SearchToolsByName($name: String!) {\n    SearchToolsByName(name: $name) {\n      id\n      name\n      partName\n      category\n      position\n      description\n      photoLink\n      usage\n      tutorialLink\n      remain\n    }\n  }\n"): (typeof documents)["\n  query SearchToolsByName($name: String!) {\n    SearchToolsByName(name: $name) {\n      id\n      name\n      partName\n      category\n      position\n      description\n      photoLink\n      usage\n      tutorialLink\n      remain\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query SearchToolsByPosition($position: String!) {\n    SearchToolsByPosition(position: $position) {\n      id\n      name\n      partName\n      category\n      position\n      description\n      photoLink\n      usage\n      tutorialLink\n      remain\n    }\n  }\n"): (typeof documents)["\n  query SearchToolsByPosition($position: String!) {\n    SearchToolsByPosition(position: $position) {\n      id\n      name\n      partName\n      category\n      position\n      description\n      photoLink\n      usage\n      tutorialLink\n      remain\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query AllUser {\n    AllUser {\n      id\n      name\n      studentID\n      password\n      photoLink\n      threeDPId\n      laserCutAvailable\n      borrowHistoryId\n      articlesId\n      isAdmin\n      isMinister\n    }\n  }\n"): (typeof documents)["\n  query AllUser {\n    AllUser {\n      id\n      name\n      studentID\n      password\n      photoLink\n      threeDPId\n      laserCutAvailable\n      borrowHistoryId\n      articlesId\n      isAdmin\n      isMinister\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query SearchUserByName($name: String!) {\n    SearchUserByName(name: $name) {\n      id\n      name\n      studentID\n      password\n      photoLink\n      threeDPId\n      laserCutAvailable\n      borrowHistoryId\n      articlesId\n      isAdmin\n      isMinister\n    }\n  }\n"): (typeof documents)["\n  query SearchUserByName($name: String!) {\n    SearchUserByName(name: $name) {\n      id\n      name\n      studentID\n      password\n      photoLink\n      threeDPId\n      laserCutAvailable\n      borrowHistoryId\n      articlesId\n      isAdmin\n      isMinister\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query AllUserMaterials {\n    AllUserMaterials {\n      id\n      name\n      partName\n      borrowerId\n      borrowNum\n      borrowDate\n      returnDate\n      status\n    }\n  }\n"): (typeof documents)["\n  query AllUserMaterials {\n    AllUserMaterials {\n      id\n      name\n      partName\n      borrowerId\n      borrowNum\n      borrowDate\n      returnDate\n      status\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetAuthorizedCode {\n    GetAuthorizedCode {\n      id\n      codeList\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  query GetAuthorizedCode {\n    GetAuthorizedCode {\n      id\n      codeList\n      updatedAt\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    subscription AnnouncementCreated {\n        AnnouncementCreated {\n        id\n        date\n        title\n        content\n        }\n    }\n"): (typeof documents)["\n    subscription AnnouncementCreated {\n        AnnouncementCreated {\n        id\n        date\n        title\n        content\n        }\n    }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;