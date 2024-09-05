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

const ARTICLE_CREATED_SUBSCRIPTION = gql(`
  subscription ArticleCreated {
    ArticleCreated {
      id
      title
      description
      content
      writerId
      time
    }
  }
`);

const ARTICLE_UPDATED_SUBSCRIPTION = gql(`
  subscription ArticleUpdated {
    ArticleUpdated {
      id
      title
      description
      content
      writerId
      time
    }
  }
`);

const ARTICLE_DELETED_SUBSCRIPTION = gql(`
  subscription ArticleDeleted {
    ArticleDeleted {
      id
    }
  }
`);



export {
  ANNOUNCEMENT_CREATED_SUBSCRIPTION,
  ARTICLE_CREATED_SUBSCRIPTION,
  ARTICLE_UPDATED_SUBSCRIPTION,
  ARTICLE_DELETED_SUBSCRIPTION,
};
