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
      materialLikeIds
      userBorrowMaterialIds
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
      materialLikeIds
      userBorrowMaterialIds
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
      materialLikeIds
      userBorrowMaterialIds
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
      materialLikeIds
      userBorrowMaterialIds
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
      materialLikeIds
      userBorrowMaterialIds
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
      userBorrowToolIds
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
      userBorrowToolIds
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
    userBorrowToolIds
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
      userBorrowToolIds
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
      userBorrowToolIds
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
      articlesId
      isAdmin
      isMinister
      toolLikeIds
      userBorrowToolIds
      materialLikeIds
      userBorrowMaterialIds
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
      articlesId
      isAdmin
      isMinister
      toolLikeIds
      userBorrowToolIds
      materialLikeIds
      userBorrowMaterialIds
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
      articlesId
      isAdmin
      isMinister
      toolLikeIds
      userBorrowToolIds
      materialLikeIds
      userBorrowMaterialIds
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
      userBorrowToolIds
    }
  }
`);

const GET_ALL_USER_BORROW_TOOLS_QUERY = gql(`
  query GetAllUserBorrowTools {
    GetAllUserBorrowTools {
      id
      userId
      toolId
      borrower
      studentId
      figure
      name
      partName
      category
      remain
      position
      quantity
      status
      borrowDate
      returnDate
    }
  }
`);

const GET_ALL_USER_BORROW_TOOLS_BY_STATUS_QUERY = gql(`
  query GetAllUserBorrowToolsByStatus($status: [String]!) {
    GetAllUserBorrowToolsByStatus(status: $status) {
      id
      userId
      toolId
      borrower
      studentId
      figure
      name
      partName
      category
      remain
      position
      quantity
      status
      borrowDate
      returnDate
    }
  }
`);

const GET_USER_BORROW_TOOL_BY_ID_QUERY = gql(`
  query GetUserBorrowToolById($getUserBorrowToolByIdId: Int!) {
    GetUserBorrowToolById(id: $getUserBorrowToolByIdId) {
      id
      userId
      toolId
      borrower
      studentId
      figure
      name
      partName
      category
      remain
      position
      quantity
      status
      borrowDate
      returnDate
    }
  }
`);

const GET_USER_BORROW_TOOLS_BY_USER_ID_QUERY = gql(`
  query GetUserBorrowToolsByUserId($userId: Int!) {
    GetUserBorrowToolsByUserId(userId: $userId) {
      id
      userId
      toolId
      borrower
      studentId
      figure
      name
      partName
      category
      remain
      position
      quantity
      status
      borrowDate
      returnDate
    }
  }
`);

const GET_USER_BORROW_TOOLS_BY_STATUS_AND_USER_ID_QUERY = gql(`
  query GetUserBorrowToolsByStatusAndUserId($userId: Int!, $status: [String]!) {
    GetUserBorrowToolsByStatusAndUserId(userId: $userId, status: $status) {
      id
      userId
      toolId
      borrower
      studentId
      figure
      name
      partName
      category
      remain
      position
      quantity
      status
      borrowDate
      returnDate
    }
  }
`);

const GET_MATERIAL_LIKES_QUERY = gql(`
  query GetMaterialLikes {
    GetMaterialLikes {
      id
      userId
      materialId
    }
  }
`);

const GET_MATERIAL_LIKE_BY_ID_QUERY = gql(`
  query GetMaterialLikeById($getMaterialLikeByIdId: Int!) {
    GetMaterialLikeById(id: $getMaterialLikeByIdId) {
      id
      userId
      materialId
    }
  }
`);

const GET_LIKED_MATERIALS_BY_USER_ID_QUERY = gql(`
  query GetLikedMaterialsByUserId($userId: Int!) {
    GetLikedMaterialsByUserId(userId: $userId) {
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
      materialLikeIds
    }
  }
`);

const GET_ALL_USER_BORROW_MATERIALS_QUERY = gql(`
  query GetAllUserBorrowMaterials {
    GetAllUserBorrowMaterials {
      id
      userId
      materialId
      borrower
      studentId
      figure
      name
      partName
      category
      remain
      position
      quantity
      status
      borrowDate
      returnDate
    }
  }
`);

const GET_ALL_USER_BORROW_MATERIALS_BY_STATUS_QUERY = gql(`
  query GetAllUserBorrowMaterialsByStatus($status: [String]!) {
    GetAllUserBorrowMaterialsByStatus(status: $status) {
      id
      userId
      materialId
      borrower
      studentId
      figure
      name
      partName
      category
      remain
      position
      quantity
      status
      borrowDate
      returnDate
    }
  }
`);

const GET_USER_BORROW_MATERIAL_BY_ID_QUERY = gql(`
  query GetUserBorrowMaterialById($getUserBorrowMaterialByIdId: Int!) {
    GetUserBorrowMaterialById(id: $getUserBorrowMaterialByIdId) {
      id
      userId
      materialId
      borrower
      studentId
      figure
      name
      partName
      category
      remain
      position
      quantity
      status
      borrowDate
      returnDate
    }
  }
`);

const GET_USER_BORROW_MATERIALS_BY_USER_ID_QUERY = gql(`
  query GetUserBorrowMaterialsByUserId($userId: Int!) {
    GetUserBorrowMaterialsByUserId(userId: $userId) {
      id
      userId
      materialId
      borrower
      studentId
      figure
      name
      partName
      category
      remain
      position
      quantity
      status
      borrowDate
      returnDate
    }
  }
`);

const GET_USER_BORROW_MATERIALS_BY_STATUS_AND_USER_ID_QUERY = gql(`
  query GetUserBorrowMaterialsByStatusAndUserId($userId: Int!, $status: [String]!) {
    GetUserBorrowMaterialsByStatusAndUserId(userId: $userId, status: $status) {
      id
      userId
      materialId
      borrower
      studentId
      figure
      name
      partName
      category
      remain
      position
      quantity
      status
      borrowDate
      returnDate
    }
  }
`);

const LOGIN_QUERY = gql(`
  query LogIn($logInInput: logInInput!) {
    LogIn(logInInput: $logInInput) {
      user {
        id
        name
        studentID
        password
        photoLink
        language
        threeDPId
        laserCutAvailable
        articlesId
        isAdmin
        isMinister
        toolLikeIds
        userBorrowToolIds
        materialLikeIds
        userBorrowMaterialIds
      }
      token
    }
  }
`);

const GET_ADMIN_SCHEDULE_BY_DAY_QUERY = gql(`
  query GetAdminScheduleByDay($day: String!) {
    GetAdminScheduleByDay(day: $day) {
      id
      admin
      day
      period
    }
  }
`);

const GET_ADMIN_SCHEDULE_BY_PERIOD_QUERY = gql(`
  query GetAdminScheduleByPeriod($period: String!) {
    GetAdminScheduleByPeriod(period: $period) {
      id
      admin
      day
      period
    }
  }
`);

const ALL_ADMIN_SCHEDULES_QUERY = gql(`
  query AllAdminSchedules {
    AllAdminSchedules {
      id
      admin
      day
      period
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
  GET_TOOL_LIKES_QUERY,
  GET_TOOL_LIKE_BY_ID_QUERY,
  GET_LIKED_TOOLS_BY_USER_ID_QUERY,
  GET_ALL_USER_BORROW_TOOLS_QUERY,
  GET_ALL_USER_BORROW_TOOLS_BY_STATUS_QUERY,
  GET_USER_BORROW_TOOL_BY_ID_QUERY,
  GET_USER_BORROW_TOOLS_BY_USER_ID_QUERY,
  GET_USER_BORROW_TOOLS_BY_STATUS_AND_USER_ID_QUERY,
  GET_MATERIAL_LIKES_QUERY,
  GET_MATERIAL_LIKE_BY_ID_QUERY,
  GET_LIKED_MATERIALS_BY_USER_ID_QUERY,
  GET_ALL_USER_BORROW_MATERIALS_QUERY,
  GET_ALL_USER_BORROW_MATERIALS_BY_STATUS_QUERY,
  GET_USER_BORROW_MATERIAL_BY_ID_QUERY,
  GET_USER_BORROW_MATERIALS_BY_USER_ID_QUERY,
  GET_USER_BORROW_MATERIALS_BY_STATUS_AND_USER_ID_QUERY,
  LOGIN_QUERY,
  GET_ADMIN_SCHEDULE_BY_DAY_QUERY,
  GET_ADMIN_SCHEDULE_BY_PERIOD_QUERY,
  ALL_ADMIN_SCHEDULES_QUERY,
};
