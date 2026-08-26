const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.resolve(__dirname, "..");
const dataPath = path.join(root, "visual-design", "visual-design-data.js");
const manifestPath = path.join(root, "visual-design", "real-asset-manifest.json");

const context = { window: {} };
vm.runInNewContext(fs.readFileSync(dataPath, "utf8"), context);

const labels = context.window.visualDesignLabels;
const categories = context.window.visualDesignCategories;
const projects = context.window.visualDesignProjects;
const capabilityMatrix = context.window.visualDesignCapabilityMatrix || {};
const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
const manifestById = new Map(manifest.projects.map((project) => [project.id, project]));

function titleLower(title) {
  return String(title || "visual asset").toLowerCase();
}

function makeAlt(project, assetTitle) {
  const item = titleLower(assetTitle);
  return {
    en: `${project.title} ${item} real raster portfolio asset.`,
    uk: `${project.title}: реальний raster-візуал ${item}.`,
    pl: `${project.title}: realny rasterowy materiał portfolio ${item}.`,
  };
}

function convertAsset(project, asset) {
  return {
    id: asset.id,
    title: asset.title,
    src: asset.src,
    alt: makeAlt(project, asset.title),
    orientation: asset.orientation || "square",
    format: asset.format || "webp",
    generated: true,
    composited: Boolean(asset.composited),
  };
}

for (const project of projects) {
  const realAssets = manifestById.get(project.id);
  if (!realAssets) {
    throw new Error(`No generated assets found for ${project.id}`);
  }

  const cover = realAssets.assets.find((asset) => asset.id === "cover") || realAssets.assets[0];
  const board = {
    id: "board",
    title: "Full generated case board",
    src: realAssets.boardAsset.src,
    alt: makeAlt(project, "full generated case board"),
    orientation: "portrait",
    format: "webp",
    generated: true,
    composited: false,
  };

  project.cover = convertAsset(project, cover);
  project.coverSize = project.coverSize || "large";
  project.images = [board, ...realAssets.assets.map((asset) => convertAsset(project, asset))];
  project.deliverables = realAssets.assets.map((asset) => asset.title);
  project.assetDirectory = realAssets.directory;
  project.rasterAssets = realAssets.rasterFiles.map((file) => `${realAssets.directory}${file}`);
  project.svgAssets = [];
  project.compositedAssets = realAssets.compositedFiles.map((file) => `${realAssets.directory}${file}`);
}

const projectAssetSummary = projects.map((project) => ({
  id: project.id,
  title: project.title,
  category: project.category,
  filters: project.filters,
  capabilities: project.capabilities,
  imageCount: project.images.length,
  assetDirectory: project.assetDirectory,
  rasterAssets: project.rasterAssets,
  svgAssets: project.svgAssets,
  compositedAssets: project.compositedAssets,
}));

const output = `window.visualDesignLabels = ${JSON.stringify(labels, null, 2)};

window.visualDesignCategories = ${JSON.stringify(categories, null, 2)};

window.visualDesignProjects = ${JSON.stringify(projects, null, 2)};

window.visualDesignCapabilityMatrix = ${JSON.stringify(capabilityMatrix, null, 2)};

window.visualDesignAssetSummary = ${JSON.stringify(projectAssetSummary, null, 2)};
`;

fs.writeFileSync(dataPath, output, "utf8");
console.log(`Updated ${projects.length} visual design projects with real raster assets.`);
