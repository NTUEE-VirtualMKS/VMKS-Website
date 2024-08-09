import { AdminScheduleInput } from "@/types/types.ts";
import { prisma } from "../prisma/client.ts";
import fs from "fs";
import bcrypt from "bcrypt";

const userData = JSON.parse(fs.readFileSync("./data/user.json", "utf-8")).user;

const adminScheduleData: AdminScheduleInput[] = JSON.parse(
  fs.readFileSync("./data/schedule.json", "utf-8"),
).schedule;

const initUserDB = async () => {
  adminScheduleData.map(async ({ admin, day, period }: AdminScheduleInput) => {
    try {
      await prisma.adminSchedule.create({
        data: {
          admin: admin,
          day: day,
          period: period,
        },
      });
    } catch (err) {
      console.log(err);
    }
  });
  userData.map(async (user: any) => {
    try {
      const costFactor = 12;
      const salt = await bcrypt.genSalt(costFactor);
      const hashedpassword = await bcrypt.hash(user.password, salt);
      await prisma.user.create({
        data: {
          name: user.name,
          studentID: user.studentID,
          password: hashedpassword,
          photoLink: user.photoLink,
          language: user.language,
          threeDPId: null,
          laserCutAvailable: user.laserCutAvailable,
          isAdmin: user.isAdmin,
          isMinister: user.isMinister,
          toolLikeIds: [],
          userBorrowToolIds: [],
          materialLikeIds: [],
          userBorrowMaterialIds: [],
        },
      });
    } catch (err) {
      console.log(err);
    }
  });
};

initUserDB();
