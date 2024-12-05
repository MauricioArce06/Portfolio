import "dotenv/config";
import { config as dotenvConfig } from "dotenv";

dotenvConfig({ path: ["./.env.development", "./.env"] });

export const env = {
  mail: process.env.NEXT_PUBLIC_MAIL,
  idService: process.env.NEXT_PUBLIC_ID_SERVICE,
  publicKey: process.env.NEXT_PUBLIC_KEY,
  idTemplate: process.env.NEXT_PUBLIC_TEMPLATE,
};
