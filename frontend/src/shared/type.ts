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
  threeDPId?: number | null;
  laserCutAvailable: boolean;
  borrowHistoryId?: Array<number | null> | null;
  articlesId?: Array<number | null> | null;
  isAdmin: boolean;
  isMinister: boolean;
  toolLikeIds?: Array<number | null> | null;
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
};

export type ProfileCardProps = {
  name: string;
  studenetID: string;
  password: string;
  photoLink?: string;
  laserCutAvailable: boolean;
  isAdmin: boolean;
  isMinister: boolean;
};
