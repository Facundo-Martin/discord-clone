import { PrismaClient } from "@prisma/client";

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

export const prisma = globalThis.prisma || new PrismaClient(); // Avoid hot realoading in dev

if (process.env.NODE_ENV !== "production") globalThis.prisma = prisma;
