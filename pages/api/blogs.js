import fs from "fs";
import path from "path";

export default function handler(req, resp) {
  const file = fs.readFileSync("Backend/Blogs.json", "utf-8");
  resp.json(file);
}
