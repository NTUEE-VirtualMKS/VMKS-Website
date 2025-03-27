import dotenv from "dotenv";

dotenv.config({ path: "./.env" });

type envSchema = {
  DATABASE_URL: string;
  JWT_SECRET: string;
  JWT_EXPIRES_IN: string;
  EMAIL_ACCOUNT_NAME: string;
  EMAIL_USER: string;
  EMAIL_PASS: string;
};

export const env: envSchema = {
  DATABASE_URL: process.env.DATABASE_URL!,
  JWT_SECRET: process.env.JWT_SECRET!,
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN!,
  EMAIL_ACCOUNT_NAME: process.env.EMAIL_ACCOUNT_NAME!,
  EMAIL_USER: process.env.EMAIL_USER!,
  EMAIL_PASS: process.env.EMAIL_PASS!,
};
