import { gql } from "../__generated__";

// Announcement
const GET_ALL_ANNOUNCEMENTS_QUERY = gql(`
  query GetAllAnnouncements($cursor: String, $limit: Int) {
    GetAllAnnouncements(cursor: $cursor, limit: $limit) {
      announcements {
        id
        title
        date
        content
      }
      cursor
    }
  }
`);

const GET_ANNOUNCEMENT_BY_ID_QUERY = gql(`
  query GetAnnouncementById($id: String!) {
    GetAnnouncementById(id: $id) {
      id
      title
      date
      content
    }
  }
`);

const SEARCH_ANNOUNCEMENT_BY_TITLE_QUERY = gql(`
  query SearchAnnouncementByTitle($title: String!) {
    SearchAnnouncementByTitle(title: $title) {
      id
      title
      date
      content
    }
  }
`);

// Tool
const GET_ALL_TOOLS_QUERY = gql(`
  query GetAllTools($cursor: String, $limit: Int) {
    GetAllTools(cursor: $cursor, limit: $limit) {
      tools {
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
      cursor
    }
  }
`);

const GET_TOOL_BY_ID_QUERY = gql(`
  query GetToolById($getToolByIdId: String!) {
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
  query SearchToolByCategory($category: String!) {
  SearchToolByCategory(category: $category) {
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
  query SearchToolByPosition($position: String!) {
    SearchToolByPosition(position: $position) {
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
  query SearchToolByName($name: String!) {
    SearchToolByName(name: $name) {
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

// Article
const GET_ALL_ARTICLES_QUERY = gql(`
  query GetAllArticles($cursor: String, $limit: Int) {
    GetAllArticles(cursor: $cursor, limit: $limit) {
      articles {
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
      cursor
    }
  }
`);

const GET_ALL_DISPOSIABLE_MATERIALS_QUERY = gql(`
  query GetAllDisposableMaterials($cursor: String, $limit: Int) {
    GetAllDisposableMaterials(cursor: $cursor, limit: $limit) {
      disposableMaterials {
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
      cursor
    }
  }
`);

const SEARCH_DISPOSIABLE_MATERIAL_BY_CATEGORY_QUERY = gql(`
  query SearchDisposableMaterialByCategory($category: String!) {
    SearchDisposableMaterialByCategory(category: $category) {
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
  query SearchDisposableMaterialByPosition($position: String!) {
    SearchDisposableMaterialByPosition(position: $position) {
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
  query SearchDisposableMaterialByName($name: String!) {
    SearchDisposableMaterialByName(name: $name) {
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

// Machine
const GET_ALL_MACHINES_QUERY = gql(`
  query GetAllMachines($cursor: String, $limit: Int) {
    GetAllMachines(cursor: $cursor, limit: $limit) {
      machines {
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
      cursor
    }
  }
`);

const SEARCH_MACHINE_BY_CATEGORY_QUERY = gql(`
  query SearchMachineByCategory($category: String!) {
    SearchMachineByCategory(category: $category) {
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
  query SearchMachineByPosition($position: String!) {
    SearchMachineByPosition(position: $position) {
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

// Material
const GET_ALL_MATERIALS_QUERY = gql(`
  query GetAllMaterials($cursor: String, $limit: Int) {
    GetAllMaterials(cursor: $cursor, limit: $limit) {
      materials {
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
      cursor
    }
  }
`);

const GET_MATERIAL_BY_ID_QUERY = gql(`
  query GetMaterialById($id: String!) {
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

const SEARCH_MATERIAL_BY_CATEGORY_QUERY = gql(`
  query SearchMaterialByCategory($category: String!) {
    SearchMaterialByCategory(category: $category) {
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
  query SearchMaterialByPosition($position: String!) {
    SearchMaterialByPosition(position: $position) {
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

// ThreeDP
const GET_ALL_THREEDPS_QUERY = gql(`
  query GetAllThreeDPs($cursor: String, $limit: Int) {
    GetAllThreeDPs(cursor: $cursor, limit: $limit) {
      threeDPs {
        broken
        description
        id
        name
        photoLink
        position
        tutorialLink
        waitingId
      }
      cursor
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

// User
const GET_ALL_USERS_QUERY = gql(`
  query GetAllUsers($cursor: String, $limit: Int) {
    GetAllUsers(cursor: $cursor, limit: $limit) {
      users {
        id
        name
        studentID
        photoLink
        laserCutAvailable
        isAdmin
        isMinister
      }
      cursor
    }
  }
`);

const SEARCH_USER_BY_NAME_QUERY = gql(`
  query SearchUserByName($name: String!) {
    SearchUserByName(name: $name) {
      id
      name
      studentID
      photoLink
      laserCutAvailable
      isAdmin
      isMinister
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

// AuthroizedCode
const GET_AUTHORIZED_CODE_QUERY = gql(`
  query GetAuthorizedCode {
    GetAuthorizedCode {
      id
      codeList
      updatedAt
    }
  }
`);

// ToolLike
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
  query GetToolLikeById($getToolLikeByIdId: String!) {
    GetToolLikeById(id: $getToolLikeByIdId) {
      id
      userId
      toolId
    }
  }
`);

const GET_LIKED_TOOLS_BY_USER_ID_QUERY = gql(`
  query GetLikedToolsByUserId($userId: String!) {
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

// UserBorrowTool
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
  query GetUserBorrowToolById($getUserBorrowToolByIdId: String!) {
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
  query GetUserBorrowToolsByUserId($userId: String!) {
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
  query GetUserBorrowToolsByStatusAndUserId($userId: String!, $status: [String]!) {
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

// MaterialLike
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
  query GetMaterialLikeById($getMaterialLikeByIdId: String!) {
    GetMaterialLikeById(id: $getMaterialLikeByIdId) {
      id
      userId
      materialId
    }
  }
`);

const GET_LIKED_MATERIALS_BY_USER_ID_QUERY = gql(`
  query GetLikedMaterialsByUserId($userId: String!) {
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

// UserBorrowMaterial
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
  query GetUserBorrowMaterialById($getUserBorrowMaterialByIdId: String!) {
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
  query GetUserBorrowMaterialsByUserId($userId: String!) {
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
  query GetUserBorrowMaterialsByStatusAndUserId($userId: String!, $status: [String]!) {
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

// LogIn
const LOGIN_QUERY = gql(`
  query LogIn($logInInput: LogInInput!) {
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

// AdminSchedule
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

const GET_ALL_ADMIN_SCHEDULES_QUERY = gql(`
  query GetAllAdminSchedules {
    GetAllAdminSchedules {
      id
      admin
      day
      period
    }
  }
`);

// SignupAuthCode
const GET_ALL_SIGNUP_AUTH_CODES_QUERY = gql(`
  query GetAllSignupAuthCodes {
    GetAllSignupAuthCodes {
      studentID
      code
    }
  }
`);

const GET_SIGNUP_AUTH_CODE_BY_STUDENT_ID_QUERY = gql(`
  query GetSignupAuthCodeByStudentID($studentId: String!) {
    GetSignupAuthCodeByStudentID(studentID: $studentId) {
      studentID
      code
    }
  }
`);

const CHECK_SIGNUP_AUTH_CODE_QUERY = gql(`
  query Query($studentId: String!, $code: String!) {
    CheckSignupAuthCode(studentID: $studentId, code: $code)
  }
`);

export {
  // Announcement
  GET_ALL_ANNOUNCEMENTS_QUERY,
  GET_ANNOUNCEMENT_BY_ID_QUERY,
  SEARCH_ANNOUNCEMENT_BY_TITLE_QUERY,
  // Tool
  GET_ALL_TOOLS_QUERY,
  GET_TOOL_BY_ID_QUERY,
  SEARCH_TOOL_BY_CATEGORY_QUERY,
  SEARCH_TOOL_BY_NAME_QUERY,
  SEARCH_TOOL_BY_POSITION_QUERY,
  // Article
  GET_ALL_ARTICLES_QUERY,
  // DisposableMaterial
  GET_ALL_DISPOSIABLE_MATERIALS_QUERY,
  SEARCH_DISPOSIABLE_MATERIAL_BY_CATEGORY_QUERY,
  SEARCH_DISPOSIABLE_MATERIAL_BY_NAME_QUERY,
  SEARCH_DISPOSIABLE_MATERIAL_BY_POSITION_QUERY,
  // Machine
  GET_ALL_MACHINES_QUERY,
  SEARCH_MACHINE_BY_CATEGORY_QUERY,
  SEARCH_MACHINE_BY_NAME_QUERY,
  SEARCH_MACHINE_BY_POSITION_QUERY,
  // Material
  GET_ALL_MATERIALS_QUERY,
  GET_MATERIAL_BY_ID_QUERY,
  SEARCH_MATERIAL_BY_CATEGORY_QUERY,
  SEARCH_MATERIAL_BY_NAME_QUERY,
  SEARCH_MATERIAL_BY_POSITION_QUERY,
  // ThreeDP
  GET_ALL_THREEDPS_QUERY,
  SEARCH_THREEDP_BY_CATEGORY_QUERY,
  SEARCH_THREEDP_BY_POSITION_QUERY,
  // User
  GET_ALL_USERS_QUERY,
  SEARCH_USER_BY_NAME_QUERY,
  GET_USER_BY_STUDENT_ID_QUERY,
  // AuthorizedCode
  GET_AUTHORIZED_CODE_QUERY,
  // ToolLike
  GET_TOOL_LIKES_QUERY,
  GET_TOOL_LIKE_BY_ID_QUERY,
  GET_LIKED_TOOLS_BY_USER_ID_QUERY,
  // UserBorrowTool
  GET_ALL_USER_BORROW_TOOLS_QUERY,
  GET_ALL_USER_BORROW_TOOLS_BY_STATUS_QUERY,
  GET_USER_BORROW_TOOL_BY_ID_QUERY,
  GET_USER_BORROW_TOOLS_BY_USER_ID_QUERY,
  GET_USER_BORROW_TOOLS_BY_STATUS_AND_USER_ID_QUERY,
  // MaterialLike
  GET_MATERIAL_LIKES_QUERY,
  GET_MATERIAL_LIKE_BY_ID_QUERY,
  GET_LIKED_MATERIALS_BY_USER_ID_QUERY,
  // UserBorrowMaterial
  GET_ALL_USER_BORROW_MATERIALS_QUERY,
  GET_ALL_USER_BORROW_MATERIALS_BY_STATUS_QUERY,
  GET_USER_BORROW_MATERIAL_BY_ID_QUERY,
  GET_USER_BORROW_MATERIALS_BY_USER_ID_QUERY,
  GET_USER_BORROW_MATERIALS_BY_STATUS_AND_USER_ID_QUERY,
  // LogIn
  LOGIN_QUERY,
  // AdminSchedule
  GET_ADMIN_SCHEDULE_BY_DAY_QUERY,
  GET_ADMIN_SCHEDULE_BY_PERIOD_QUERY,
  GET_ALL_ADMIN_SCHEDULES_QUERY,
  // SignupAuthCode
  GET_ALL_SIGNUP_AUTH_CODES_QUERY,
  GET_SIGNUP_AUTH_CODE_BY_STUDENT_ID_QUERY,
  CHECK_SIGNUP_AUTH_CODE_QUERY,
};
