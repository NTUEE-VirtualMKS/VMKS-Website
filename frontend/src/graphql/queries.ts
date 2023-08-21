import { gql } from "../__generated__"

export const ALL_ANNOUNCEMENT_QUERY = gql(`
    query ALL_ANNOUNCEMENT_QUERY {
        AllAnnouncements {
            id
            title
            date
            content
        }
    }
`);

export const ALL_TOOL_QUERY = gql(`
    query ALL_TOOL_QUERY {
        AllTools {
            id
            name
            partName
            category
            position
            description
            photoLink
            usage
            tutorialLink
            remain
        }
    }
`);

export const ALL_DISPOSABLE_MATERIALS_QUERY = gql(`
    query ALL_DISPOSABLE_MATERIALS_QUERY {
        AllDisposableMaterials {
            id
            name
            partName
            category
            position
            description
            photoLink
            usage
            tutorialLink
            fee
            remain
        }
    }
`)

export const ALL_MACHINE_QUERY = gql(`
    query ALL_MACHINE_QUERY {
        AllMachines {
            id
            name
            partName
            category
            position
            description
            photoLink
            usage
            tutorialLink
        }
    }
`)

export const ALL_MATERIAL_QUERY = gql(`
    query ALL_MATERIAL_QUERY {
        AllMaterials {
            id
            name
            partName
            category
            valuable
            position
            description
            photoLink
            usage
            tutorialLink
            fee
            remain
        }
    }
`)

export const ALL_THREEDP_QUERY = gql(`
    query ALL_THREEDP_QUERY {
        AllThreeDP {
            id    
            name
            category
            position
            description
            photoLink
            usage
            tutorialLink
            waitingId
            broken
        }
    }
`)


export const ALL_USER_QUERY = gql(`
    query ALL_USER_QUERY {
        AllUser {
            id
            name
            studentID
            password
            photoLink
            threeDPId
            laserCutAvailable
            borrowHistoryId
            articlesId
        }
    }
`)

export const ALL_USER_MATERIAL_QUERY = gql(`
    query ALL_USER_MATERIAL_QUERY {
        AllUserMaterials {
            id
            name
            partName
            borrowerId
            borrowNum
            borrowDate
            returnDate
            status
        }
    }
`)

export const ALL_ARTICLE_QUERY = gql(`
    query ALL_ARTICLE_QUERY {
        AllArticles {
            id
            writerId
            description
            imageURL
            time
            title
            headline
            content
            userpic
        }
    }
`)