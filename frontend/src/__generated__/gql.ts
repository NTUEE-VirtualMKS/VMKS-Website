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
    "\n    query ALL_ANNOUNCEMENT_QUERY {\n        AllAnnouncements {\n            id\n            title\n            date\n            content\n        }\n    }\n": types.All_Announcement_QueryDocument,
    "\n    query ALL_TOOL_QUERY {\n        AllTools {\n            id\n            name\n            partName\n            category\n            position\n            description\n            photoLink\n            usage\n            tutorialLink\n            remain\n        }\n    }\n": types.All_Tool_QueryDocument,
    "\n    query ALL_DISPOSABLE_MATERIALS_QUERY {\n        AllDisposableMaterials {\n            id\n            name\n            partName\n            category\n            position\n            description\n            photoLink\n            usage\n            tutorialLink\n            fee\n            remain\n        }\n    }\n": types.All_Disposable_Materials_QueryDocument,
    "\n    query ALL_MACHINE_QUERY {\n        AllMachines {\n            id\n            name\n            partName\n            category\n            position\n            description\n            photoLink\n            usage\n            tutorialLink\n        }\n    }\n": types.All_Machine_QueryDocument,
    "\n    query ALL_MATERIAL_QUERY {\n        AllMaterials {\n            id\n            name\n            partName\n            category\n            valuable\n            position\n            description\n            photoLink\n            usage\n            tutorialLink\n            fee\n            remain\n        }\n    }\n": types.All_Material_QueryDocument,
    "\n    query ALL_THREEDP_QUERY {\n        AllThreeDP {\n            id    \n            name\n            category\n            position\n            description\n            photoLink\n            usage\n            tutorialLink\n            waitingId\n            broken\n        }\n    }\n": types.All_Threedp_QueryDocument,
    "\n    query ALL_USER_QUERY {\n        AllUser {\n            id\n            name\n            studentID\n            password\n            photoLink\n            threeDPId\n            laserCutAvailable\n            borrowHistoryId\n            articlesId\n        }\n    }\n": types.All_User_QueryDocument,
    "\n    query ALL_USER_MATERIAL_QUERY {\n        AllUserMaterials {\n            id\n            name\n            partName\n            borrowerId\n            borrowNum\n            borrowDate\n            returnDate\n            status\n        }\n    }\n": types.All_User_Material_QueryDocument,
    "\n    query ALL_ARTICLE_QUERY {\n        AllArticles {\n            id\n            writerId\n            description\n            imageURL\n            time\n            title\n            headline\n            content\n            userpic\n        }\n    }\n": types.All_Article_QueryDocument,
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
export function gql(source: "\n    query ALL_ANNOUNCEMENT_QUERY {\n        AllAnnouncements {\n            id\n            title\n            date\n            content\n        }\n    }\n"): (typeof documents)["\n    query ALL_ANNOUNCEMENT_QUERY {\n        AllAnnouncements {\n            id\n            title\n            date\n            content\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query ALL_TOOL_QUERY {\n        AllTools {\n            id\n            name\n            partName\n            category\n            position\n            description\n            photoLink\n            usage\n            tutorialLink\n            remain\n        }\n    }\n"): (typeof documents)["\n    query ALL_TOOL_QUERY {\n        AllTools {\n            id\n            name\n            partName\n            category\n            position\n            description\n            photoLink\n            usage\n            tutorialLink\n            remain\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query ALL_DISPOSABLE_MATERIALS_QUERY {\n        AllDisposableMaterials {\n            id\n            name\n            partName\n            category\n            position\n            description\n            photoLink\n            usage\n            tutorialLink\n            fee\n            remain\n        }\n    }\n"): (typeof documents)["\n    query ALL_DISPOSABLE_MATERIALS_QUERY {\n        AllDisposableMaterials {\n            id\n            name\n            partName\n            category\n            position\n            description\n            photoLink\n            usage\n            tutorialLink\n            fee\n            remain\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query ALL_MACHINE_QUERY {\n        AllMachines {\n            id\n            name\n            partName\n            category\n            position\n            description\n            photoLink\n            usage\n            tutorialLink\n        }\n    }\n"): (typeof documents)["\n    query ALL_MACHINE_QUERY {\n        AllMachines {\n            id\n            name\n            partName\n            category\n            position\n            description\n            photoLink\n            usage\n            tutorialLink\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query ALL_MATERIAL_QUERY {\n        AllMaterials {\n            id\n            name\n            partName\n            category\n            valuable\n            position\n            description\n            photoLink\n            usage\n            tutorialLink\n            fee\n            remain\n        }\n    }\n"): (typeof documents)["\n    query ALL_MATERIAL_QUERY {\n        AllMaterials {\n            id\n            name\n            partName\n            category\n            valuable\n            position\n            description\n            photoLink\n            usage\n            tutorialLink\n            fee\n            remain\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query ALL_THREEDP_QUERY {\n        AllThreeDP {\n            id    \n            name\n            category\n            position\n            description\n            photoLink\n            usage\n            tutorialLink\n            waitingId\n            broken\n        }\n    }\n"): (typeof documents)["\n    query ALL_THREEDP_QUERY {\n        AllThreeDP {\n            id    \n            name\n            category\n            position\n            description\n            photoLink\n            usage\n            tutorialLink\n            waitingId\n            broken\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query ALL_USER_QUERY {\n        AllUser {\n            id\n            name\n            studentID\n            password\n            photoLink\n            threeDPId\n            laserCutAvailable\n            borrowHistoryId\n            articlesId\n        }\n    }\n"): (typeof documents)["\n    query ALL_USER_QUERY {\n        AllUser {\n            id\n            name\n            studentID\n            password\n            photoLink\n            threeDPId\n            laserCutAvailable\n            borrowHistoryId\n            articlesId\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query ALL_USER_MATERIAL_QUERY {\n        AllUserMaterials {\n            id\n            name\n            partName\n            borrowerId\n            borrowNum\n            borrowDate\n            returnDate\n            status\n        }\n    }\n"): (typeof documents)["\n    query ALL_USER_MATERIAL_QUERY {\n        AllUserMaterials {\n            id\n            name\n            partName\n            borrowerId\n            borrowNum\n            borrowDate\n            returnDate\n            status\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query ALL_ARTICLE_QUERY {\n        AllArticles {\n            id\n            writerId\n            description\n            imageURL\n            time\n            title\n            headline\n            content\n            userpic\n        }\n    }\n"): (typeof documents)["\n    query ALL_ARTICLE_QUERY {\n        AllArticles {\n            id\n            writerId\n            description\n            imageURL\n            time\n            title\n            headline\n            content\n            userpic\n        }\n    }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;