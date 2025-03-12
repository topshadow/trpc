import { Hono } from "hono";
import z from "npm:zod@3.24.2";

import { zValidator } from "npm:@hono/zod-validator";

const app = new Hono<any>();
const route = app.post(
    "/posts",
    zValidator(
        'query',
        {
            name:z.string(),
        }
        
    
    ),
    (c) => {
        // ...
        return c.json(
            {
                ok: true,
                message: "Created!",
            },
            201,
        );
    },
);

export type AppType = typeof route;
export default { fetch: app.fetch };
