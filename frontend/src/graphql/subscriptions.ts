import { gql } from "../__generated__";

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

const INTRODUCTION_UPDATED_SUBSCRIPTION = gql(`
  subscription IntroductionUpdated {
    IntroductionUpdated {
      id
      content
    }
  }
`);

export { ANNOUNCEMENT_CREATED_SUBSCRIPTION, INTRODUCTION_UPDATED_SUBSCRIPTION };
