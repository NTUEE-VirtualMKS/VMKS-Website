import { AdminScheduleInput } from "@/types/types.ts";
import { prisma } from "../prisma/client.ts";
import fs from "fs";

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
};

initUserDB();
