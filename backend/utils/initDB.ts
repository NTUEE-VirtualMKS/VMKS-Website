import { prisma } from "../prisma/client.ts";
import fs from "fs";

const initUserData = JSON.parse(
  fs.readFileSync("./data/user.json", "utf-8"),
).user;

const initUserDB = async () => {
  for (let i = 0; i < initUserData.length; i++) {
    try {
      await prisma.user.create({
        data: {
          name: initUserData[i].name,
          studentID: initUserData[i].studentID,
          password: initUserData[i].password,
          photoLink: initUserData[i].photoLink,
          threeDPId: initUserData[i].threeDPId,
          laserCutAvailable: initUserData[i].laserCutAvailable,
          borrowHistoryId: initUserData[i].borrowHistoryID,
          articlesId: initUserData[i].articlesId,
          isAdmin: initUserData[i].isAdmin,
        },
      });
    } catch (err) {
      console.log(err);
    }
  }
};

initUserDB();
