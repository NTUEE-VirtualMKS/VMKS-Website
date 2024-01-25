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
  tutorialLink: string;
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

interface UserMaterialInput {
  name: string;
  partName: string;
  borrowerId: number;
  borrowNum: number;
  status: string;
}

interface UserMaterialEditInput {
  name: string;
  partName: string;
  borrowerId: number;
  borrowNum: number;
  borrowDate: string;
  returnDate: string;
  status: string;
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
  threeDPId: number;
  laserCutAvailable: boolean;
  isAdmin: boolean;
}

interface UserEditInput {
  name: string;
  studentID: string;
  password: string;
  photoLink: string;
  isAdmin: boolean;
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

export type {
  AnnouncementInput,
  ToolInput,
  UserMaterialInput,
  UserMaterialEditInput,
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
  SignUpInput,
  LogInInput,
};
