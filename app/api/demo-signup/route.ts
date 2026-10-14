import { createDemoSignupHandler } from "@/lib/server/demo-signup";

export const runtime = "nodejs";
export const maxDuration = 20;
export const POST = createDemoSignupHandler({ apiKey: () => process.env.RESEND_API_KEY });
