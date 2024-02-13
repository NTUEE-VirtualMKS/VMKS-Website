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
  partName?: string;
  category: string;
  valuable: boolean;
  position: string;
  description: string;
  photoLink: string;
  usage: number;
  tutorialLink?: string;
  fee: number;
  remain: number;
};
