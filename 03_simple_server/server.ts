import { serve } from "https://deno.land/std/http/server.ts";

const s = serve({ port: 8000 });
console.log("http://localhost:8000/");


for await (const req of s) {
    console.log(req.method, req.url)
    const headers = new Headers()
    headers.append("content-type", "application/json")
    req.respond({body: JSON.stringify({okay: true}), headers })
}