export type AnnouncementType = {
  id: number;
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
  id: number;
  name: string;
  studentID: string;
  password: string;
  photoLink?: string | null;
  language: string;
  threeDPId?: number | null;
  laserCutAvailable: boolean;
  articlesId?: Array<number | null> | null;
  isAdmin: boolean;
  isMinister: boolean;
  toolLikeIds?: Array<number | null> | null;
  userBorrowToolIds?: Array<number | null> | null;
  materialLikeIds?: Array<number | null> | null;
  userBorrowMaterialIds?: Array<number | null> | null;
};

export type MaterialType = {
  __typename?: "Material";
  id: number;
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
  materialLikeIds?: Array<number | null> | null;
  userBorrowMaterialIds?: Array<number | null> | null;
};

export type ToolType = {
  __typename?: "Tool";
  id: number;
  name: string;
  partName?: string | null;
  category: string;
  position: string;
  description: string;
  photoLink: string;
  usage: number;
  tutorialLink: string;
  remain: number;
  toolLikeIds?: Array<number | null> | null;
  userBorrowToolIds?: Array<number | null> | null;
};

export type AuthorizedCodeType = {
  __typename?: "AuthorizedCode" | undefined;
  id: number;
  codeList?: Array<string | null> | null;
  updatedAt: string;
};

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
  id: number;
  name: string;
  studenetID: string;
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
  password: string;
  photoLink: string;
  language: string;
  isAdmin: boolean;
  isMinister: boolean;
};

export type BorrowType = {
  id: number;
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

export type AnnouncementCardProps = {
  id: number;
  title: string;
  content: string;
  date: string;
};

export type UserBorrowToolType = {
  __typename?: "UserBorrowTool";
  id: number;
  userId: number;
  toolId: number;
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
  id: number;
  userId: number;
  materialId: number;
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
