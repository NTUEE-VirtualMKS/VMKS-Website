import { AdminScheduleInput, UserInput } from "@/types/types.ts";
import { prisma } from "../prisma/client.ts";
import fs from "fs";
import bcrypt from "bcrypt";

const users: UserInput[] = JSON.parse(
  fs.readFileSync("./data/user.json", "utf-8"),
).users;

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

  users.map(
    async ({
      name,
      studentID,
      password,
      photoLink,
      language,
      laserCutAvailable,
      isAdmin,
      isMinister,
    }: UserInput) => {
      const costFactor = 12;
      const salt = await bcrypt.genSalt(costFactor);
      const hashedpassword = await bcrypt.hash(password, salt);
      try {
        await prisma.user.create({
          data: {
            name: name,
            studentID: studentID,
            password: hashedpassword,
            photoLink: photoLink,
            language: language,
            laserCutAvailable: laserCutAvailable,
            isAdmin: isAdmin,
            isMinister: isMinister,
          },
        });
      } catch (err) {
        console.log(err);
      }
    },
  );
};

initUserDB();
