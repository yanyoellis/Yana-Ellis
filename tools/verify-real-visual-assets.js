const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.resolve(__dirname, "..");
const dataPath = path.join(root, "visual-design", "visual-design-data.js");

const context = { window: {} };
vm.runInNewContext(fs.readFileSync(dataPath, "utf8"), context);

const projects = context.window.visualDesignProjects || [];
const failures = [];

if (projects.length !== 18) {
  failures.push(`Expected 18 visual design projects, found ${projects.length}.`);
}

for (const project of projects) {
  if (!project.cover?.src?.endsWith(".webp")) {
    failures.push(`${project.id} cover is not a WebP image.`);
  }

  if (project.cover?.src?.startsWith("/assets/visual-design/")) {
    failures.push(`${project.id} cover still points to the old SVG asset folder.`);
  }

  if (!Array.isArray(project.images) || project.images.length < 6) {
    failures.push(`${project.id} has fewer than 6 public detail images.`);
  }

  for (const image of project.images || []) {
    if (image.id === "board" || image.title === "Full generated case board") {
      failures.push(`${project.id} still exposes the generated case board publicly.`);
    }

    if (image.src.startsWith("/assets/visual-design/")) {
      failures.push(`${project.id}/${image.id} still points to the old SVG asset folder.`);
      continue;
    }

    const filePath = path.join(root, image.src.replace(/^\//, ""));
    if (!fs.existsSync(filePath)) {
      failures.push(`${project.id}/${image.id} is missing: ${image.src}`);
    }

    if (!image.src.endsWith(".webp")) {
      failures.push(`${project.id}/${image.id} is not WebP: ${image.src}`);
    }
  }

  for (const asset of project.rasterAssets || []) {
    const filePath = path.join(root, asset.replace(/^\//, ""));
    if (!fs.existsSync(filePath)) {
      failures.push(`${project.id} raster asset is missing: ${asset}`);
    }
  }

  if ((project.svgAssets || []).length !== 0) {
    failures.push(`${project.id} still declares SVG assets.`);
  }
}

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}

const activeImages = projects.reduce((total, project) => total + project.images.length, 0);
console.log(`Verified ${projects.length} projects, ${activeImages} active WebP images, 0 active SVG images.`);
