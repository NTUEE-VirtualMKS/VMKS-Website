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
  id: number;
  name: string;
  studentID: string;
  password: string;
  photoLink?: string;
  threeDPId?: string;
  laserCutAvailable: boolean;
  borrowHistoryId?: number[];
  articlesId?: number[];
  isAdmin: boolean;
  isMinister: boolean;
};

export type MaterialType = {
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
