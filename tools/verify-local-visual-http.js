const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.resolve(__dirname, "..");
const baseUrl = process.argv[2] || "http://127.0.0.1:8777";
const dataPath = path.join(root, "visual-design", "visual-design-data.js");

const context = { window: {} };
vm.runInNewContext(fs.readFileSync(dataPath, "utf8"), context);

const projects = context.window.visualDesignProjects || [];
const urls = new Set([
  "/",
  "/visual-design/index.html",
  ...projects.map((project) => project.url),
  ...projects.flatMap((project) => project.images.map((image) => image.src)),
]);

async function check(urlPath) {
  const url = new URL(urlPath, baseUrl).toString();
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`${response.status} ${url}`);
  }

  if (urlPath.endsWith(".webp")) {
    const buffer = Buffer.from(await response.arrayBuffer());
    if (buffer.length < 1024) {
      throw new Error(`Image is too small: ${url}`);
    }
  } else {
    await response.text();
  }
}

(async () => {
  for (const urlPath of urls) {
    await check(urlPath);
  }

  console.log(`Verified ${urls.size} local URLs against ${baseUrl}.`);
})().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
