import { gql } from "../__generated__";

// Announcement
const ADD_ANNOUNCEMENT_MUTATION = gql(`
  mutation AddAnnouncement($announcementInput: AnnouncementInput!) {
    AddAnnouncement(announcementInput: $announcementInput) {
      id
      title
      date
      content
    }
  }
`);

const DELETE_ANNOUNCEMENT_MUTATION = gql(`
  mutation DeleteAnnouncement($deleteAnnouncementId: Int!) {
    DeleteAnnouncement(id: $deleteAnnouncementId) {
      id
      title
      date
      content
    }
  }
`);

const EDIT_ANNOUNCEMENT_MUTATION = gql(`
  mutation EditAnnouncement($editAnnouncementId: Int!, $announcementInput: AnnouncementInput!) {
    EditAnnouncement(id: $editAnnouncementId, announcementInput: $announcementInput) {
      id
      title
      date
      content
    }
  }
`);

// Article
const ADD_ARTICLE_MUTATION = gql(`
  mutation AddArticle($articleInput: ArticleInput!) {
    AddArticle(articleInput: $articleInput) {
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

// DisposableMaterial
const ADD_DISPOSABLE_MATERIAL_MUTATION = gql(`
  mutation AddDisposableMaterial($disposableMaterialInput: DisposableMaterialInput!) {
    AddDisposableMaterial(disposableMaterialInput: $disposableMaterialInput) {
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

const DELETE_DISPOSABLE_MATERIAL_MUTATION = gql(`
  mutation DeleteDisposableMaterial($deleteDisposableMaterialId: Int!) {
    DeleteDisposableMaterial(id: $deleteDisposableMaterialId) {
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

const EDIT_DISPOSABLE_MATERIAL_MUTATION = gql(`
  mutation EditDisposableMaterial($editDisposableMaterialId: Int!, $disposableMaterialInput: DisposableMaterialInput!) {
    EditDisposableMaterial(id: $editDisposableMaterialId, disposableMaterialInput: $disposableMaterialInput) {
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
const ADD_MACHINE_MUTATION = gql(`
  mutation AddMachine($machineInput: MachineInput!) {
    AddMachine(machineInput: $machineInput) {
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

const DELETE_MACHINE_MUTATION = gql(`
  mutation DeleteMachine($deleteMachineId: Int!) {
    DeleteMachine(id: $deleteMachineId) {
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

const EDIT_MACHINE_MUTATION = gql(`
  mutation EditMachine($editMachineId: Int!, $machineInput: MachineInput!) {
    EditMachine(id: $editMachineId, machineInput: $machineInput) {
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
const ADD_MATERIAL_MUTATION = gql(`
  mutation AddMaterial($materialInput: MaterialInput!) {
    AddMaterial(materialInput: $materialInput) {
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

const DELETE_MATERIAL_MUTATION = gql(`
  mutation DeleteMaterial($deleteMaterialId: Int!) {
    DeleteMaterial(id: $deleteMaterialId) {
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

const EDIT_MATERIAL_MUTATION = gql(`
  mutation EditMaterial($editMaterialId: Int!, $materialInput: MaterialInput!) {
    EditMaterial(id: $editMaterialId, materialInput: $materialInput) {
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

//ThreeDP
const ADD_THREE_DP_MUTATION = gql(`
  mutation AddThreeDP($threeDpInput: ThreeDPInput!) {
    AddThreeDP(threeDPInput: $threeDpInput) {
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

const DELETE_THREE_DP_MUTATION = gql(`
  mutation DeleteThreeDP($deleteThreeDpId: Int!) {
    DeleteThreeDP(id: $deleteThreeDpId) {
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

const EDIT_THREE_DP_MUTATION = gql(`
  mutation EditThreeDP($editThreeDpId: Int!, $threeDpInput: ThreeDPInput!) {
    EditThreeDP(id: $editThreeDpId, threeDPInput: $threeDpInput) {
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

//Tool
const ADD_TOOL_MUTATION = gql(`
  mutation AddTool($toolInput: ToolInput!) {
    AddTool(toolInput: $toolInput) {
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

const DELETE_TOOL_MUTATION = gql(`
  mutation DeleteTool($deleteToolId: Int!) {
    DeleteTool(id: $deleteToolId) {
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

const EDIT_TOOL_MUTATION = gql(`
  mutation EditTool($editToolId: Int!, $toolInput: ToolInput!) {
    EditTool(id: $editToolId, toolInput: $toolInput) {
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

// User
const ADD_USER_MUTATION = gql(`
  mutation AddUser($userInput: UserInput!) {
    AddUser(userInput: $userInput) {
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

const DELETE_USER_MUTATION = gql(`
  mutation DeleteUser($deleteUserId: Int!) {
    DeleteUser(id: $deleteUserId) {
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

const EDIT_USER_MUTATION = gql(`
  mutation EditUser($editUserId: Int!, $userEditInput: UserEditInput!) {
    EditUser(id: $editUserId, userEditInput: $userEditInput) {
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

// DisposableMaterialUsageUpdate
const DISPOSABLE_MATERIAL_USAGE_UPDATE_MUTATION = gql(`
  mutation DisposableMaterialUsageUpdate($disposableMaterialUsageUpdateId: Int!, $disposableMaterialUsageUpdateInput: DisposableMaterialUsageUpdateInput!) {
    DisposableMaterialUsageUpdate(id: $disposableMaterialUsageUpdateId, disposableMaterialUsageUpdateInput: $disposableMaterialUsageUpdateInput) {
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

// MaterialUsageUpdate
const MATERIAL_USAGE_UPDATE_MUTATION = gql(`
  mutation MaterialUsageUpdate($materialUsageUpdateId: Int!, $materialUsageUpdateInput: MaterialUsageUpdateInput!) {
    MaterialUsageUpdate(id: $materialUsageUpdateId, materialUsageUpdateInput: $materialUsageUpdateInput) {
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

// ToolUsageUpdate
const TOOL_USAGE_UPDATE_MUTATION = gql(`
  mutation ToolUsageUpdate($toolUsageUpdateId: Int!, $toolUsageUpdateInput: ToolUsageUpdateInput!) {
    ToolUsageUpdate(id: $toolUsageUpdateId, toolUsageUpdateInput: $toolUsageUpdateInput) {
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

// UserMachineUsageUpdate
const USER_MACHINE_USAGE_UPDATE_MUTATION = gql(`
  mutation UserMachineUsageUpdate($userMachineUsageUpdateId: Int!, $userMachineUpdateInput: UserMachineUpdateInput!) {
    UserMachineUsageUpdate(id: $userMachineUsageUpdateId, userMachineUpdateInput: $userMachineUpdateInput) {
      id
      name
      studentID
      password
      photoLink
      threeDPId
      laserCutAvailable
      articlesId
      isAdmin
      isMinister
      language
    }
  }
`);

//update authorizedCode
const AUTHORIZED_CODE_UPDATE_MUTATION = gql(`
  mutation UpdateAuthorizedCode($authorizedCodeInput: AuthorizedCodeInput!) {
    UpdateAuthorizedCode(authorizedCodeInput: $authorizedCodeInput) {
      id
      codeList
      updatedAt
    }
  }
`);

// tool like
const ADD_TOOL_LIKE_MUTATION = gql(`
  mutation AddToolLike($toolLikeInput: ToolLikeInput!) {
    AddToolLike(toolLikeInput: $toolLikeInput) {
      id
      userId
      toolId
    }
  }
`);

const DELETE_TOOL_LIKE_MUTATION = gql(`
  mutation DeleteToolLike($toolLikeInput: ToolLikeInput!) {
    DeleteToolLike(toolLikeInput: $toolLikeInput) {
      id
      userId
      toolId
    }
  }
`);

// language
const EDIT_USER_LANGUAGE_MUTATION = gql(`
  mutation EditUserLanguage($editUserLanguageId: Int!, $language: String!) {
    EditUserLanguage(id: $editUserLanguageId, language: $language) {
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
    }
  }
`);

// user borrow tool
const ADD_USER_BORROW_TOOL_MUTATION = gql(`
  mutation AddUserBorrowTool($userBorrowToolInput: UserBorrowToolInput!) {
    AddUserBorrowTool(userBorrowToolInput: $userBorrowToolInput) {
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

const DELETE_USER_BORROW_TOOL_MUTATION = gql(`
  mutation DeleteUserBorrowTool($deleteUserBorrowToolId: Int!) {
    DeleteUserBorrowTool(id: $deleteUserBorrowToolId) {
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

const EDIT_USER_BORROW_TOOL_QUANTITY_MUTATION = gql(`
  mutation EditUserBorrowToolQuantity($editUserBorrowToolQuantityId: Int!, $userBorrowToolInput: UserBorrowToolInput!) {
    EditUserBorrowToolQuantity(id: $editUserBorrowToolQuantityId, userBorrowToolInput: $userBorrowToolInput) {
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

const EDIT_USER_BORROW_TOOL_STATUS_MUTATION = gql(`
  mutation EditUserBorrowToolStatus($editUserBorrowToolStatusId: Int!, $status: String!) {
    EditUserBorrowToolStatus(id: $editUserBorrowToolStatusId, status: $status) {
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

// material like
const ADD_MATERIAL_LIKE_MUTATION = gql(`
  mutation AddMaterialLike($materialLikeInput: MaterialLikeInput!) {
    AddMaterialLike(materialLikeInput: $materialLikeInput) {
      id
      userId
      materialId
    }
  }
`);

const DELETE_MATERIAL_LIKE_MUTATION = gql(`
  mutation DeleteMaterialLike($materialLikeInput: MaterialLikeInput!) {
    DeleteMaterialLike(materialLikeInput: $materialLikeInput) {
      id
      userId
      materialId
    }
  }
`);

// user borrow material
const ADD_USER_BORROW_MATERIAL_MUTATION = gql(`
  mutation AddUserBorrowMaterial($userBorrowMaterialInput: UserBorrowMaterialInput!) {
    AddUserBorrowMaterial(userBorrowMaterialInput: $userBorrowMaterialInput) {
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

const DELETE_USER_BORROW_MATERIAL_MUTATION = gql(`
  mutation DeleteUserBorrowMaterial($deleteUserBorrowMaterialId: Int!) {
    DeleteUserBorrowMaterial(id: $deleteUserBorrowMaterialId) {
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

const EDIT_USER_BORROW_MATERIAL_QUANTITY_MUTATION = gql(`
  mutation EditUserBorrowMaterialQuantity($editUserBorrowMaterialQuantityId: Int!, $userBorrowMaterialInput: UserBorrowMaterialInput!) {
    EditUserBorrowMaterialQuantity(id: $editUserBorrowMaterialQuantityId, userBorrowMaterialInput: $userBorrowMaterialInput) {
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

const EDIT_USER_BORROW_MATERIAL_STATUS_MUTATION = gql(`
  mutation EditUserBorrowMaterialStatus($editUserBorrowMaterialStatusId: Int!, $status: String!) {
    EditUserBorrowMaterialStatus(id: $editUserBorrowMaterialStatusId, status: $status) {
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

const SIGNUP_MUTATION = gql(`
  mutation SignUp($signUpInput: SignUpInput!) {
    SignUp(signUpInput: $signUpInput) {
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

const EDIT_USER_PASSWORD_MUTATION = gql(`
  mutation EditUserPassword($editUserPasswordId: Int!, $userPasswordEditInput: UserPasswordEditInput!) {
    EditUserPassword(id: $editUserPasswordId, userPasswordEditInput: $userPasswordEditInput) {
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

const PROMOTE_USER_MUTATION = gql(`
  mutation PromoteUser($promoteUserId: Int!, $promoteUserInput: PromoteUserInput!) {
    PromoteUser(id: $promoteUserId, promoteUserInput: $promoteUserInput) {
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

const DEMOTE_USER_MUTATION = gql(`
  mutation DemoteUser($demoteUserId: Int!, $demoteUserInput: DemoteUserInput!) {
    DemoteUser(id: $demoteUserId, demoteUserInput: $demoteUserInput) {
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

const ADD_ADMIN_SCHEDULE_MUTATION = gql(`
  mutation AddAdminSchedule($adminScheduleInput: AdminScheduleInput!) {
    AddAdminSchedule(adminScheduleInput: $adminScheduleInput) {
      id
      admin
      day
      period
    }
  }
`);

const DELETE_ADMIN_SCHEDULE_MUTATION = gql(`
  mutation DeleteAdminSchedule($deleteAdminScheduleId: Int!) {
    DeleteAdminSchedule(id: $deleteAdminScheduleId) {
      id
      admin
      day
      period
    }
  }
`);

const EDIT_ADMIN_SCHEDULE_MUTATION = gql(`
  mutation EditAdminSchedule($editAdminScheduleId: Int!, $name: String!) {
    EditAdminSchedule(id: $editAdminScheduleId, name: $name) {
      id
      admin
      day
      period
    }
  }
`);

export {
  ADD_ANNOUNCEMENT_MUTATION,
  DELETE_ANNOUNCEMENT_MUTATION,
  EDIT_ANNOUNCEMENT_MUTATION,
  ADD_ARTICLE_MUTATION,
  ADD_DISPOSABLE_MATERIAL_MUTATION,
  DELETE_DISPOSABLE_MATERIAL_MUTATION,
  EDIT_DISPOSABLE_MATERIAL_MUTATION,
  ADD_MACHINE_MUTATION,
  DELETE_MACHINE_MUTATION,
  EDIT_MACHINE_MUTATION,
  ADD_MATERIAL_MUTATION,
  DELETE_MATERIAL_MUTATION,
  EDIT_MATERIAL_MUTATION,
  ADD_THREE_DP_MUTATION,
  DELETE_THREE_DP_MUTATION,
  EDIT_THREE_DP_MUTATION,
  ADD_TOOL_MUTATION,
  DELETE_TOOL_MUTATION,
  EDIT_TOOL_MUTATION,
  ADD_USER_MUTATION,
  DELETE_USER_MUTATION,
  EDIT_USER_MUTATION,
  EDIT_USER_PASSWORD_MUTATION,
  PROMOTE_USER_MUTATION,
  DEMOTE_USER_MUTATION,
  DISPOSABLE_MATERIAL_USAGE_UPDATE_MUTATION,
  MATERIAL_USAGE_UPDATE_MUTATION,
  TOOL_USAGE_UPDATE_MUTATION,
  USER_MACHINE_USAGE_UPDATE_MUTATION,
  AUTHORIZED_CODE_UPDATE_MUTATION,
  ADD_TOOL_LIKE_MUTATION,
  DELETE_TOOL_LIKE_MUTATION,
  EDIT_USER_LANGUAGE_MUTATION,
  ADD_USER_BORROW_TOOL_MUTATION,
  DELETE_USER_BORROW_TOOL_MUTATION,
  EDIT_USER_BORROW_TOOL_QUANTITY_MUTATION,
  EDIT_USER_BORROW_TOOL_STATUS_MUTATION,
  ADD_MATERIAL_LIKE_MUTATION,
  DELETE_MATERIAL_LIKE_MUTATION,
  ADD_USER_BORROW_MATERIAL_MUTATION,
  DELETE_USER_BORROW_MATERIAL_MUTATION,
  EDIT_USER_BORROW_MATERIAL_QUANTITY_MUTATION,
  EDIT_USER_BORROW_MATERIAL_STATUS_MUTATION,
  SIGNUP_MUTATION,
  ADD_ADMIN_SCHEDULE_MUTATION,
  DELETE_ADMIN_SCHEDULE_MUTATION,
  EDIT_ADMIN_SCHEDULE_MUTATION,
};
