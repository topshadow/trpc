import { AppType } from "./main.ts";
import { hc } from "hono/client";
export const client = hc<AppType>("http://localhost:8000/");
