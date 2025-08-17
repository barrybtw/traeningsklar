import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./prisma-client";

export const auth = betterAuth({
  socialProviders: {
    google: { clientId: "", clientSecret: "" },
  },
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
});
