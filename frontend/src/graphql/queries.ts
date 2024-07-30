import { gql } from "../__generated__";

const ALL_ANNOUNCEMENT_QUERY = gql(`
  query AllAnnouncements {
    AllAnnouncements {
      id
      title
      date
      content
    }
  }
`);

const ALL_ARTICLE_QUERY = gql(`
  query AllArticles {
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
`);

const ALL_DISPOSIABLE_MATERIAL_QUERY = gql(`
  query AllDisposableMaterials {
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
`);

const SEARCH_DISPOSIABLE_MATERIAL_BY_CATEGORY_QUERY = gql(`
  query SearchDisposableMaterialsByCategory($category: String!) {
    SearchDisposableMaterialsByCategory(category: $category) {
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
`);

const SEARCH_DISPOSIABLE_MATERIAL_BY_NAME_QUERY = gql(`
  query SearchDisposableMaterialsByName($name: String!) {
    SearchDisposableMaterialsByName(name: $name) {
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
`);

const SEARCH_DISPOSIABLE_MATERIAL_BY_POSITION_QUERY = gql(`
  query SearchDisposableMaterialsByPosition($position: String!) {
    SearchDisposableMaterialsByPosition(position: $position) {
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
`);

const ALL_MACHINE_QUERY = gql(`
  query AllMachines {
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
`);

const SEARCH_MACHINE_BY_NAME_QUERY = gql(`
  query SearchMachineByName($input: String!) {
    SearchMachineByName(input: $input) {
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
`);

const SEARCH_MACHINE_BY_CATEGORY_QUERY = gql(`
  query SearchMachinesByCategory($category: String!) {
    SearchMachinesByCategory(category: $category) {
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
`);

const SEARCH_MACHINE_BY_POSITION_QUERY = gql(`
  query SearchMachinesByPosition($position: String!) {
    SearchMachinesByPosition(position: $position) {
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
`);

const ALL_MATERIAL_QUERY = gql(`
  query AllMaterials {
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
`);

const GET_MATERIAL_BY_ID_QUERY = gql(`
  query GetMaterialById($id: Int!) {
    GetMaterialById(id: $id) {
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
`);

const SEARCH_MATERIAL_BY_NAME_QUERY = gql(`
  query SearchMaterialByName($name: String!) {
    SearchMaterialByName(name: $name) {
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
`);

const SEARCH_MATERIAL_BY_CATEGORY_QUERY = gql(`
  query SearchMaterialsByCategory($category: String!) {
    SearchMaterialsByCategory(category: $category) {
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
`);

const SEARCH_MATERIAL_BY_POSITION_QUERY = gql(`
  query SearchMaterialsByPosition($position: String!) {
    SearchMaterialsByPosition(position: $position) {
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
`);

const ALL_THREEDP_QUERY = gql(`
  query AllThreeDP {
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
`);

const SEARCH_THREEDP_BY_CATEGORY_QUERY = gql(`
  query SearchThreeDPByCategory($category: String!) {
    SearchThreeDPByCategory(category: $category) {
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
`);

const SEARCH_THREEDP_BY_POSITION_QUERY = gql(`
  query SearchThreeDPByPosition($position: String!) {
    SearchThreeDPByPosition(position: $position) {
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
`);

const ALL_TOOL_QUERY = gql(`
  query AllTools {
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
    toolLikeIds
  }
}
`);

const GET_TOOL_BY_ID_QUERY = gql(`
query GetToolById($getToolByIdId: Int!) {
  GetToolById(id: $getToolByIdId) {
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
    toolLikeIds
  }
}  
`);

const SEARCH_TOOL_BY_CATEGORY_QUERY = gql(`
  query SearchToolsByCategory($category: String!) {
  SearchToolsByCategory(category: $category) {
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
    toolLikeIds
  }
}
`);

const SEARCH_TOOL_BY_NAME_QUERY = gql(`
  query SearchToolsByName($name: String!) {
    SearchToolsByName(name: $name) {
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
      toolLikeIds
    }
  }
`);

const SEARCH_TOOL_BY_POSITION_QUERY = gql(`
  query SearchToolsByPosition($position: String!) {
    SearchToolsByPosition(position: $position) {
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
      toolLikeIds
    }
  }
`);

const ALL_USER_QUERY = gql(`
  query AllUser {
  AllUser {
    id
    name
    studentID
    password
    photoLink
    language
    threeDPId
    laserCutAvailable
    borrowHistoryId
    articlesId
    isAdmin
    isMinister
    toolLikeIds
  }
}
`);

const SEARCH_USER_BY_NAME_QUERY = gql(`
  query SearchUserByName($name: String!) {
    SearchUserByName(name: $name) {
      id
      name
      studentID
      password
      photoLink
      language
      threeDPId
      laserCutAvailable
      borrowHistoryId
      articlesId
      isAdmin
      isMinister
      toolLikeIds
    }
  }
`);

const GET_USER_BY_STUDENT_ID_QUERY = gql(`
  query GetUserByStudentID($studentId: String!) {
  GetUserByStudentID(studentID: $studentId) {
    id
    name
    studentID
    password
    photoLink
    language
    threeDPId
    laserCutAvailable
    borrowHistoryId
    articlesId
    isAdmin
    isMinister
    toolLikeIds
  }
}
`);

const ALL_USER_MATERIAL_QUERY = gql(`
  query AllUserMaterials {
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
`);

const GET_AUTHORIZED_CODE_QUERY = gql(`
  query GetAuthorizedCode {
    GetAuthorizedCode {
      id
      codeList
      updatedAt
    }
  }
`);

const CURRENT_INTRODUCTION_QUERY = gql(`
  query CurrentIntroduction {
    CurrentIntroduction {
      id
      content
    }
  }
`);

const GET_TOOL_LIKES_QUERY = gql(`
  query GetToolLikes {
  GetToolLikes {
    id
    userId
    toolId
  }
}
`);

const GET_TOOL_LIKE_BY_ID_QUERY = gql(`
  query GetToolLikeById($getToolLikeByIdId: Int!) {
  GetToolLikeById(id: $getToolLikeByIdId) {
    id
    userId
    toolId
  }
}
`);

const GET_LIKED_TOOLS_BY_USER_ID_QUERY = gql(`
  query GetLikedToolsByUserId($userId: Int!) {
  GetLikedToolsByUserId(userId: $userId) {
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
    toolLikeIds
  }
}
`);

export {
  ALL_ANNOUNCEMENT_QUERY,
  ALL_ARTICLE_QUERY,
  ALL_DISPOSIABLE_MATERIAL_QUERY,
  ALL_MACHINE_QUERY,
  ALL_MATERIAL_QUERY,
  ALL_THREEDP_QUERY,
  ALL_TOOL_QUERY,
  ALL_USER_QUERY,
  GET_AUTHORIZED_CODE_QUERY,
  ALL_USER_MATERIAL_QUERY,
  SEARCH_DISPOSIABLE_MATERIAL_BY_CATEGORY_QUERY,
  SEARCH_DISPOSIABLE_MATERIAL_BY_NAME_QUERY,
  SEARCH_DISPOSIABLE_MATERIAL_BY_POSITION_QUERY,
  SEARCH_MACHINE_BY_CATEGORY_QUERY,
  SEARCH_MACHINE_BY_NAME_QUERY,
  SEARCH_MACHINE_BY_POSITION_QUERY,
  GET_MATERIAL_BY_ID_QUERY,
  SEARCH_MATERIAL_BY_CATEGORY_QUERY,
  SEARCH_MATERIAL_BY_NAME_QUERY,
  SEARCH_MATERIAL_BY_POSITION_QUERY,
  SEARCH_THREEDP_BY_CATEGORY_QUERY,
  SEARCH_THREEDP_BY_POSITION_QUERY,
  SEARCH_TOOL_BY_CATEGORY_QUERY,
  SEARCH_TOOL_BY_NAME_QUERY,
  SEARCH_TOOL_BY_POSITION_QUERY,
  GET_TOOL_BY_ID_QUERY,
  SEARCH_USER_BY_NAME_QUERY,
  GET_USER_BY_STUDENT_ID_QUERY,
  CURRENT_INTRODUCTION_QUERY,
  GET_TOOL_LIKES_QUERY,
  GET_TOOL_LIKE_BY_ID_QUERY,
  GET_LIKED_TOOLS_BY_USER_ID_QUERY,
};
