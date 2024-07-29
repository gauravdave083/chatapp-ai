import { authMiddleware } from "@clerk/nextjs/server";
//authMiddleware is depreceted clerkMiddleware is new but can't use
export default authMiddleware();

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};