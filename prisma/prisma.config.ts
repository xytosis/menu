import { defineConfig } from "prisma/config";

export default defineConfig({
  config: {
    datasource: {
      url: process.env.DATABASE_URL,
      directUrl: process.env.DATABASE_URL, // Keep this to suppress the error
    },
  },
});
