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
    "\n    mutation AddAnnouncement($announcementInput: AnnouncementInput!) {\n        AddAnnouncement(announcementInput: $announcementInput) {\n          id\n          title\n          date\n          content\n        }\n      }\n": types.AddAnnouncementDocument,
    "\n    query AllAnnouncements {\n        AllAnnouncements {\n            id\n            title\n            date\n            content\n        }\n    }\n": types.AllAnnouncementsDocument,
    "\n    query AllTools {\n        AllTools {\n            id\n            name\n            partName\n            category\n            position\n            description\n            photoLink\n            usage\n            tutorialLink\n            remain\n        }\n  }\n": types.AllToolsDocument,
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
export function gql(source: "\n    mutation AddAnnouncement($announcementInput: AnnouncementInput!) {\n        AddAnnouncement(announcementInput: $announcementInput) {\n          id\n          title\n          date\n          content\n        }\n      }\n"): (typeof documents)["\n    mutation AddAnnouncement($announcementInput: AnnouncementInput!) {\n        AddAnnouncement(announcementInput: $announcementInput) {\n          id\n          title\n          date\n          content\n        }\n      }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query AllAnnouncements {\n        AllAnnouncements {\n            id\n            title\n            date\n            content\n        }\n    }\n"): (typeof documents)["\n    query AllAnnouncements {\n        AllAnnouncements {\n            id\n            title\n            date\n            content\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query AllTools {\n        AllTools {\n            id\n            name\n            partName\n            category\n            position\n            description\n            photoLink\n            usage\n            tutorialLink\n            remain\n        }\n  }\n"): (typeof documents)["\n    query AllTools {\n        AllTools {\n            id\n            name\n            partName\n            category\n            position\n            description\n            photoLink\n            usage\n            tutorialLink\n            remain\n        }\n  }\n"];
export function gql(source: "\n    subscription AnnouncementCreated {\n        AnnouncementCreated {\n        id\n        date\n        title\n        content\n        }\n    }\n"): (typeof documents)["\n    subscription AnnouncementCreated {\n        AnnouncementCreated {\n        id\n        date\n        title\n        content\n        }\n    }\n"];

export function gql(source: string) {
    return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;