//import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
//  publicProcedure,
} from "@/server/api/trpc";

export const funcRouter = createTRPCRouter({
  getPlates: protectedProcedure.query(({ ctx }) => {
    return ctx.db.plate.findMany({
      where: { userId: ctx.session.user.id },
      select: {
        plate: true,
      },
    });
  }),
});