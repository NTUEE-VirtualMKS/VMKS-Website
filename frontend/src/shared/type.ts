import { StringFormat } from "firebase/storage";
import { RefObject } from "react";

export type AnnouncementType = {
  id: string;
  title: string;
  content: string;
  date: string;
};

export type AnnouncementInputType = {
  title: string;
  content: string;
};

export type UserType = {
  __typename?: "User";
  id: string;
  name: string;
  studentID: string;
  password: string;
  photoLink?: string | null;
  language: string;
  threeDPId?: string | null;
  laserCutAvailable: boolean;
  articlesId?: Array<string | null> | null;
  isAdmin: boolean;
  isMinister: boolean;
  toolLikeIds?: Array<string | null> | null;
  userBorrowToolIds?: Array<string | null> | null;
  materialLikeIds?: Array<string | null> | null;
  userBorrowMaterialIds?: Array<string | null> | null;
};

export type MaterialType = {
  __typename?: "Material";
  id: string;
  name: string;
  partName?: string | null;
  category: string;
  valuable: boolean;
  position: string;
  description: string;
  photoLink: string;
  usage: number;
  tutorialLink?: string | null;
  fee: number;
  remain: number;
  materialLikeIds?: Array<string | null> | null;
  userBorrowMaterialIds?: Array<string | null> | null;
};

export type ToolType = {
  __typename?: "Tool";
  id: string;
  name: string;
  partName?: string | null;
  category: string;
  position: string;
  description: string;
  photoLink: string;
  usage: number;
  tutorialLink: string;
  remain: number;
  toolLikeIds?: Array<string | null> | null;
  userBorrowToolIds?: Array<string | null> | null;
};

export type AuthorizedCodeType = {
  __typename?: "AuthorizedCode" | undefined;
  id: string;
  codeList?: Array<string | null> | null;
  updatedAt: string;
};

export type ThreeDPType = {
  __typename?: "ThreeDP";
  id: string;
  name: string;
  position: string;
  description: string;
  photoLink: string;
  tutorialLink: string;
  threeDPRequestIds: Array<string | null> | null;
  broken: boolean;
}

export type OtherMachineType = {
  __typename?: "OtherMachine";
  id: string;
  name: string;
  partName: string;
  category: string;
  position: string;
  description: string;
  photoLink: string;
  tutorialLink: string;
  usage: number;
}

export type MaterialInput = {
  name: string;
  partName: string | null;
  category: string;
  valuable: boolean;
  position: string;
  description: string;
  photoLink: string;
  usage: number | string;
  tutorialLink: string | null;
  fee: number | string;
  remain: number | string;
};

export type OtherMachineInput = {
  name: string;
  partName: string;
  category: string;
  position: string;
  description: string;
  photoLink: string;
  tutorialLink: string;
}

export type ThreeDPInput = {
  name: string;
  position: string;
  description: string;
  photoLink: string;
  tutorialLink: string;
  broken: boolean;
}

export type ThreeDPRequestInput = {
  name: string;
  studentID: string;
  userId: string;
  threeDPId: string;
}

export type ToolInput = {
  name: string;
  partName: string | null;
  category: string;
  position: string;
  description: string;
  photoLink: string;
  usage: number | string;
  tutorialLink: string;
  remain: number | string;
};

export type AuthorizedCodeInputType = {
  codeList: string[];
};

export type NavButtonProps = {
  onClick: () => void;
  Icon: React.ElementType;
  ariaLabel: string;
};

export type RouteBarProps = {
  route: string | undefined;
};

export type SignupProps = {
  name: string;
  studentId: string;
  password: string;
};

export type LoginProps = {
  studentId: string;
  password: string;
  redirect: boolean;
};

export type ProfileCardProps = {
  id: string;
  name: string;
  studentID: string;
  password: string;
  photoLink?: string;
  language: string;
  laserCutAvailable: boolean;
  isAdmin: boolean;
  isMinister: boolean;
};

export type UserEditInput = {
  name: string;
  studentID: string;
  photoLink: string;
  language: string;
};

export type BorrowType = {
  id: string;
  borrower: string;
  figure: string;
  name: string;
  partName: string;
  remain: number;
  position: string;
  quantity: number;
  status: string;
};

// status: "Unborrowed" | "Processing" | "Success" | "Failed" | "Not Returned Yet" | "Returned";
// text-none | text-orange-400 | text-green-400 | text-red-500 | text-zinc-400 | text-none

export type ToolDetailCardProps = {
  id: string;
  photoLink: string;
  name: string;
  description: string;
  partName?: string;
  position: string;
  remain: number;
  usage: number;
  tutorialLink?: string;
  category: string;
};

export type MaterialDetailCardProps = {
  id: string;
  photoLink: string;
  name: string;
  description: string;
  partName?: string;
  position: string;
  remain: number;
  usage: number;
  tutorialLink?: string;
  category: string;
  fee: number;
  valuable: boolean;
};


export type ThreeDPDetailCardProps = {
  id: string;
  name: string;
  position: string;
  description: string;
  photoLink: string;
  tutorialLink: string;
  broken: boolean;
}

export type OtherMachineDetailCardProps = {
  id: string;
  name: string;
  partName: string;
  category: string;
  position: string;
  description: string;
  photoLink: string;
  tutorialLink: string;
}

export type AnnouncementCardProps = {
  id: string;
  title: string;
  content: string;
  date: string;
};

export type UserBorrowToolType = {
  __typename?: "UserBorrowTool";
  id: string;
  userId: string;
  toolId: string;
  borrower: string;
  studentId: string;
  figure: string;
  name: string;
  partName?: string | null;
  category: string;
  remain: number;
  position: string;
  quantity: number;
  status: string;
  borrowDate: string;
  returnDate: string;
};

export type UserBorrowMaterialType = {
  __typename?: "UserBorrowMaterial";
  id: string;
  userId: string;
  materialId: string;
  borrower: string;
  studentId: string;
  figure: string;
  name: string;
  partName?: string | null;
  category: string;
  remain: number;
  position: string;
  quantity: number;
  status: string;
  borrowDate: string;
  returnDate: string;
};

export type ThreeDPRequestType = {
  __typename?: "ThreeDPRequest";
  id: string;
  name: string;
  studentID: string;
  userId: string;
  threeDPId: string;
  status: string;
}

export type UserAvatarUploaderProps = {
  imgUrl: string;
  setImgUrl: (imgUrl: string) => void;
  imageRef: RefObject<HTMLInputElement>;
};

export type PasswordInputDialogProps = {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  handleFunction: () => void;
  pwd: string;
  setPwd: (pwd: string) => void;
};

export type AllUsersBorrowingMaterialDataTableProps = {
  tableName: string;
  Icon: React.ElementType;
  allUsersBorrowingMaterialData: UserBorrowMaterialType[];
  allUsersUnreturnedMaterialData: UserBorrowMaterialType[];
};

export type AllUsersBorrowingToolDataTableProps = {
  tableName: string;
  Icon: React.ElementType;
  allUsersBorrowingToolData: UserBorrowToolType[];
  allUsersUnreturnedToolData: UserBorrowToolType[];
};

export type UserMaterialDataTableProps = {
  tableName: string;
  Icon: React.ElementType;
  unborrowedData: UserBorrowMaterialType[];
  borrowingData: UserBorrowMaterialType[];
};

export type UserToolDataTableProps = {
  tableName: string;
  Icon: React.ElementType;
  unborrowedData: UserBorrowToolType[];
  borrowingData: UserBorrowToolType[];
};

export type AdminScheduleType = {
  __typename?: "AdminSchedule";
  id: string;
  admin: string;
  day: string;
  period: string;
};

export type ToolImportButtonProps = {
  setTools: (tools: ToolInput[]) => void;
  setLength: (length: number) => void;
  fileRef: RefObject<HTMLInputElement>;
  file: File | null;
  setFile: (file: File | null) => void;
  isFileUploadLoading: boolean;
};

export type MaterialImportButtonProps = {
  setMaterials: (tools: MaterialInput[]) => void;
  setLength: (length: number) => void;
  fileRef: RefObject<HTMLInputElement>;
  file: File | null;
  setFile: (file: File | null) => void;
  isFileUploadLoading: boolean;
};
