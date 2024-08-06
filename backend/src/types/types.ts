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
}

interface LogInInput {
  studentID: string;
  password: string;
}

interface UserInput {
  name: string;
  studentID: string;
  password: string;
  photoLink: string;
  language: string;
  threeDPId: number;
  laserCutAvailable: boolean;
  isAdmin: boolean;
  isMinister: boolean;
}

interface UserEditInput {
  name: string;
  studentID: string;
  password: string;
  photoLink: string;
  language: string;
  isAdmin: boolean;
  isMinister: boolean;
}

interface UserMachineUpdateInput {
  threeDPId: number;
  laserCutAvailable: boolean;
}

interface ArticleInput {
  writerId: number;
  description: string;
  imageURL: string;
  title: string;
  headline: boolean;
  content: string;
  userpic: string;
}

interface IntroductionInput {
  content: string;
}

interface AuthorizedCodeInput {
  codeList: string[];
}

interface ToolLikeInput {
  userId: number;
  toolId: number;
}

interface UserBorrowToolInput {
  userId: number;
  toolId: number;
  quantity: number;
}

interface MaterialLikeInput {
  userId: number;
  materialId: number;
}

interface UserBorrowMaterialInput {
  userId: number;
  materialId: number;
  quantity: number;
}

export type {
  AnnouncementInput,
  ToolInput,
  ThreeDPInput,
  UserInput,
  UserEditInput,
  UserMachineUpdateInput,
  ToolUsageUpdateInput,
  DisposableMaterialInput,
  DisposableMaterialUsageUpdateInput,
  MachineInput,
  MaterialInput,
  MaterialUsageUpdateInput,
  ArticleInput,
  IntroductionInput,
  AuthorizedCodeInput,
  SignUpInput,
  LogInInput,
  ToolLikeInput,
  UserBorrowToolInput,
  MaterialLikeInput,
  UserBorrowMaterialInput,
};
