import { gql } from "../__generated__"

const ANNOUNCEMENT_CREATED_SUBSCRIPTION = gql(`
    subscription AnnouncementCreated {
        AnnouncementCreated {
        id
        date
        title
        content
        }
    }
`);

export { ANNOUNCEMENT_CREATED_SUBSCRIPTION };