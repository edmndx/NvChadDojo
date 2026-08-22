import { readdir, readFile } from "node:fs/promises";
import { gzipSync } from "node:zlib";
import { resolve } from "node:path";

const assets = resolve("dist/assets");
const entry = (await readdir(assets)).find((file) =>
  /^index-[^.]+\.js$/.test(file),
);
if (!entry)
  throw new Error(
    "Production entry bundle was not found. Run npm run build first.",
  );
const gzipBytes = gzipSync(await readFile(resolve(assets, entry))).byteLength;
const budget = 80 * 1024;
console.log(
  `Entry JavaScript: ${(gzipBytes / 1024).toFixed(2)} KiB gzip (budget: 80 KiB)`,
);
if (gzipBytes > budget) process.exitCode = 1;
