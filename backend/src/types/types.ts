// TODO: some id's type: number to string
interface AnnouncementInput {
  title: string;
  content: string;
}

interface ToolInput {
  name: string;
  partName: string;
  category: string;
  position: string;
  description: string;
  photoLink: string;
  usage: number;
  tutorialLink: string;
  remain: number;
}

interface ToolUsageUpdateInput {
  usage: number;
  remain: number;
}

interface DisposableMaterialInput {
  name: string;
  partName: string | null;
  category: string;
  position: string;
  description: string;
  photoLink: string;
  usage: number;
  tutorialLink: string;
  fee: number | null;
  remain: boolean;
}

interface DisposableMaterialUsageUpdateInput {
  usage: number;
  remain: boolean;
}

interface MaterialInput {
  name: string;
  partName: string | null;
  category: string;
  valuable: boolean;
  position: string;
  description: string;
  photoLink: string;
  usage: number;
  tutorialLink: string | null;
  fee: number;
  remain: number;
}

interface MaterialUsageUpdateInput {
  usage: number;
  remain: number;
}

interface MachineInput {
  name: string;
  partName: string;
  category: string;
  position: string;
  description: string;
  photoLink: string;
  usage: number;
  tutorialLink: string;
}

interface ThreeDPInput {
  name: string;
  category: string;
  position: string;
  description: string;
  photoLink: string;
  usage: number;
  tutorialLink: string;
  broken: boolean;
}

interface SignUpInput {
  name: string;
  studentID: string;
  password: string;
  photoLink: string;
  language: string;
  laserCutAvailable: boolean;
  isAdmin: boolean;
  isMinister: boolean;
}

interface SignupAuthCodeInput {
  studentID: string;
  browser: string;
  os: string;
  time: string;
  timeZone: string;
  date: string;
}

interface LogInInput {
  studentID: string;
  password: string;
  browser: string;
  os: string;
  time: string;
  timeZone: string;
  date: string;
  redirect: boolean;
}

interface UserInput {
  name: string;
  studentID: string;
  password: string;
  photoLink: string;
  language: string;
  laserCutAvailable: boolean;
  isAdmin: boolean;
  isMinister: boolean;
}

interface UserEditInput {
  name: string;
  studentID: string;
  photoLink: string;
  language: string;
  password: string;
}

interface UserPasswordEditInput {
  originalPassword: string;
  newPassword: string;
}

interface UserMachineUpdateInput {
  threeDPId: string;
  laserCutAvailable: boolean;
}

interface ArticleInput {
  writerId: string;
  description: string;
  imageURL: string;
  title: string;
  headline: boolean;
  content: string;
  userpic: string;
}

interface AuthorizedCodeInput {
  codeList: string[];
}

interface ToolLikeInput {
  userId: string;
  toolId: string;
}

interface UserBorrowToolInput {
  userId: string;
  toolId: string;
  quantity: number;
}

interface MaterialLikeInput {
  userId: string;
  materialId: string;
}

interface UserBorrowMaterialInput {
  userId: string;
  materialId: string;
  quantity: number;
}

interface PromoteUserInput {
  authorizedCode: string;
  password: string;
  isAdmin: boolean;
}

interface DemoteUserInput {
  studentID: string;
  password: string;
  isMinister: boolean;
}

interface AdminScheduleInput {
  admin: string;
  day: string;
  period: string;
}

export type {
  AnnouncementInput,
  ToolInput,
  ThreeDPInput,
  UserInput,
  UserEditInput,
  UserPasswordEditInput,
  UserMachineUpdateInput,
  ToolUsageUpdateInput,
  DisposableMaterialInput,
  DisposableMaterialUsageUpdateInput,
  MachineInput,
  MaterialInput,
  MaterialUsageUpdateInput,
  ArticleInput,
  AuthorizedCodeInput,
  SignUpInput,
  SignupAuthCodeInput,
  LogInInput,
  ToolLikeInput,
  UserBorrowToolInput,
  MaterialLikeInput,
  UserBorrowMaterialInput,
  PromoteUserInput,
  DemoteUserInput,
  AdminScheduleInput,
};
