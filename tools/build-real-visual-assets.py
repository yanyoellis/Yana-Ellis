from __future__ import annotations

import json
import shutil
from dataclasses import dataclass
from datetime import datetime, timezone
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont, ImageOps


ROOT = Path(__file__).resolve().parents[1]
SOURCE_DIR = Path(
    r"C:\Users\nyano\.codex\generated_images\019f161d-f160-7f91-93de-355923e32b88"
)
OUTPUT_ROOT = ROOT / "assets" / "visual-design-real"
MANIFEST_PATH = ROOT / "visual-design" / "real-asset-manifest.json"


@dataclass(frozen=True)
class ProjectAsset:
    id: str
    title: str
    source: str
    panels: tuple[tuple[str, str, str], ...]


PROJECTS: tuple[ProjectAsset, ...] = (
    ProjectAsset(
        "lumiere-no7",
        "LUMIÈRE NO. 7",
        "call_G5f8oLKQ3cCb8SAUnWvAExB7.png",
        (
            ("cover", "Box and Bottle Set", "square"),
            ("bottle-close-up", "Bottle Close-Up", "square"),
            ("outer-box", "Outer Box", "square"),
            ("product-set", "Product Set", "square"),
            ("campaign-poster", "Campaign Poster", "square"),
            ("social-launch", "Social Launch", "square"),
        ),
    ),
    ProjectAsset(
        "sola",
        "SOLA",
        "call_MlLCckHrwlml261YqvkeF8LV.png",
        (
            ("cover", "Product Trio", "square"),
            ("variant-lineup", "Variant Lineup", "square"),
            ("summer-key-visual", "Summer Key Visual", "square"),
            ("billboard", "Billboard", "square"),
            ("instagram-story", "Instagram Story", "square"),
            ("retail-shelf", "Retail Shelf", "square"),
        ),
    ),
    ProjectAsset(
        "northline",
        "NORTHLINE",
        "call_3EmHdez9JtCXMMJF10iajI4P.png",
        (
            ("cover", "Stationery System", "square"),
            ("deck-laptop", "Deck on Laptop", "square"),
            ("annual-report", "Annual Report", "square"),
            ("conference-screen", "Conference Screen", "square"),
            ("linkedin-banner", "LinkedIn Banner", "square"),
            ("badge-lanyard", "Badge and Lanyard", "square"),
        ),
    ),
    ProjectAsset(
        "after-midnight",
        "AFTER MIDNIGHT",
        "call_NKy3aGCLcsL6rblrDg5NSiuT.png",
        (
            ("cover", "Wall Poster", "square"),
            ("alternate-poster", "Alternate Poster", "square"),
            ("stage-screen", "Stage Screen", "square"),
            ("ticket-wristband", "Ticket and Wristband", "square"),
            ("instagram-story", "Instagram Story", "square"),
            ("venue-signage", "Venue Signage", "square"),
        ),
    ),
    ProjectAsset(
        "casa-fiora",
        "CASA FIORA",
        "call_ML9ZDS3lp6qzYTSBCA2GRjce.png",
        (
            ("cover", "Stationery Set", "square"),
            ("room-key", "Room Key", "square"),
            ("breakfast-menu", "Breakfast Menu", "square"),
            ("postcard-set", "Postcard Set", "square"),
            ("tote-guide", "Tote and Guide", "square"),
            ("hotel-signage", "Hotel Signage", "square"),
        ),
    ),
    ProjectAsset(
        "kinetic",
        "KINETIC",
        "call_lMTmS9RmXwiyWoPgNdUcB7xG.png",
        (
            ("cover", "Mobile Campaign", "square"),
            ("meta-ad", "Meta Ad", "square"),
            ("instagram-story", "Instagram Story", "square"),
            ("retargeting-banner", "Retargeting Banner", "square"),
            ("offer-visual", "Offer Visual", "square"),
            ("app-store", "App Store Asset", "square"),
        ),
    ),
    ProjectAsset(
        "form-26",
        "FORM / 26",
        "call_g3TqLxANC0BVYiT2Rl3A4LQq.png",
        (
            ("cover", "Magazine Cover", "square"),
            ("contents", "Contents", "square"),
            ("architecture-spread", "Architecture Spread", "square"),
            ("long-form-spread", "Long-Form Spread", "square"),
            ("photo-led-spread", "Photo-Led Spread", "square"),
            ("interview-spread", "Interview Spread", "square"),
        ),
    ),
    ProjectAsset(
        "pawpaw",
        "PAWPAW",
        "call_bSxuGGSj5qTeWJ7lOGr4XOTY.png",
        (
            ("cover", "Package Lineup", "square"),
            ("dog-package", "Dog Package", "square"),
            ("cat-package", "Cat Package", "square"),
            ("treat-variants", "Treat Variants", "square"),
            ("retail-shelf", "Retail Shelf", "square"),
            ("shipping-social", "Shipping and Social", "square"),
        ),
    ),
    ProjectAsset(
        "maison-elan",
        "MAISON ÉLAN",
        "call_8bdAT0LtxfMkywqxZyJq4zGn.png",
        (
            ("cover", "Campaign Key Visual", "square"),
            ("lookbook-cover", "Lookbook Cover", "square"),
            ("lookbook-spread", "Lookbook Spread", "square"),
            ("invitation", "Invitation", "square"),
            ("social-campaign", "Social Campaign", "square"),
            ("boutique-poster", "Boutique Poster", "square"),
        ),
    ),
    ProjectAsset(
        "verde",
        "VERDE",
        "call_fZqhCBHMOy73UYRkOAxTjDOG.png",
        (
            ("cover", "Bottle and Gift Box", "square"),
            ("front-label", "Front Label", "square"),
            ("back-label", "Back Label", "square"),
            ("product-family", "Product Family", "square"),
            ("retail-shelf", "Retail Shelf", "square"),
            ("recipe-shipping", "Recipe and Shipping", "square"),
        ),
    ),
    ProjectAsset(
        "future-forum",
        "FUTURE FORUM",
        "call_BBBcYEElu4mgWqBtb4FM0nah.png",
        (
            ("cover", "Wall Poster", "square"),
            ("stage-screen", "Stage Screen", "square"),
            ("social-template", "Social Template", "square"),
            ("badge-lanyard", "Badge and Lanyard", "square"),
            ("venue-signage", "Venue Signage", "square"),
            ("presentation-screen", "Presentation Screen", "square"),
        ),
    ),
    ProjectAsset(
        "kora",
        "KORA",
        "call_KLlcUDV9v0YWiJnn0mWAFNQz.png",
        (
            ("cover", "Product Family", "square"),
            ("bottle", "Bottle", "square"),
            ("jar", "Jar", "square"),
            ("outer-packaging", "Outer Packaging", "square"),
            ("shipping-stickers", "Shipping Stickers", "square"),
            ("social-launch", "Social Launch", "square"),
        ),
    ),
    ProjectAsset(
        "no-signal",
        "NO SIGNAL",
        "call_nFiiAXxYMS72z6SgtjeqIztI.png",
        (
            ("cover", "Wall Poster", "square"),
            ("black-poster", "Black Poster", "square"),
            ("texture-closeup", "Texture Close-Up", "square"),
            ("gallery-wall", "Gallery Wall", "square"),
            ("print-stack", "Print Stack", "square"),
            ("street-display", "Street Display", "square"),
        ),
    ),
    ProjectAsset(
        "orbit",
        "ORBIT",
        "call_ftOei2DyqAx2Vw5jQtrB3yaF.png",
        (
            ("cover", "Investor Deck", "square"),
            ("kpi-dashboard", "KPI Dashboard", "square"),
            ("annual-report", "Annual Report", "square"),
            ("webinar-banner", "Webinar Banner", "square"),
            ("linkedin-post", "LinkedIn Post", "square"),
            ("conference-screen", "Conference Screen", "square"),
        ),
    ),
    ProjectAsset(
        "miso-club",
        "MISO CLUB",
        "call_jkBPbLM5SfPqmIZ5kWPRQrRM.png",
        (
            ("cover", "Menu Table", "square"),
            ("takeaway-box", "Takeaway Box", "square"),
            ("delivery-bag", "Delivery Bag", "square"),
            ("loyalty-sleeve", "Loyalty Sleeve", "square"),
            ("window-poster", "Window Poster", "square"),
            ("social-post", "Social Post", "square"),
        ),
    ),
    ProjectAsset(
        "nest",
        "NEST",
        "call_S4zakS8XTNiPqThIHB1sBPUu.png",
        (
            ("cover", "Brochure Cover", "square"),
            ("brochure-spread", "Brochure Spread", "square"),
            ("sales-presentation", "Sales Presentation", "square"),
            ("billboard", "Billboard", "square"),
            ("construction-fence", "Construction Fence", "square"),
            ("sales-office", "Sales Office", "square"),
        ),
    ),
    ProjectAsset(
        "echo-commerce",
        "ECHO COMMERCE",
        "call_TA7POLuM7C0FjzCpc0Lt17Lv.png",
        (
            ("cover", "Homepage Laptop", "square"),
            ("sale-tablet", "Sale Tablet", "square"),
            ("mobile-grid", "Mobile Grid", "square"),
            ("email-hero", "Email Hero", "square"),
            ("social-carousel", "Social Carousel", "square"),
            ("retail-display", "Retail Display", "square"),
        ),
    ),
    ProjectAsset(
        "aura-beauty",
        "AURA BEAUTY",
        "call_0elDlkXEhBOQd8zyk9mF6pHF.png",
        (
            ("cover", "Product Hero", "square"),
            ("packaging-closeup", "Packaging Close-Up", "square"),
            ("retail-display", "Retail Display", "square"),
            ("digital-hero", "Digital Hero", "square"),
            ("paid-social", "Paid Social", "square"),
            ("launch-display", "Launch Display", "square"),
        ),
    ),
)


def load_font(name: str, size: int) -> ImageFont.FreeTypeFont | ImageFont.ImageFont:
    candidates = [
        Path(r"C:\Windows\Fonts") / name,
        Path(r"C:\Windows\Fonts\arial.ttf"),
        Path(r"C:\Windows\Fonts\segoeui.ttf"),
    ]
    for candidate in candidates:
        if candidate.exists():
            return ImageFont.truetype(str(candidate), size)
    return ImageFont.load_default()


TITLE_FONT = load_font("arialbd.ttf", 25)
META_FONT = load_font("arial.ttf", 15)
SMALL_FONT = load_font("arial.ttf", 13)


def text_size(draw: ImageDraw.ImageDraw, value: str, font: ImageFont.ImageFont) -> tuple[int, int]:
    box = draw.textbbox((0, 0), value, font=font)
    return box[2] - box[0], box[3] - box[1]


def make_overlay(image: Image.Image, project_title: str, asset_title: str) -> Image.Image:
    canvas = image.convert("RGBA")
    width, height = canvas.size
    overlay = Image.new("RGBA", canvas.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)

    strip_height = max(92, int(height * 0.18))
    y0 = height - strip_height
    for y in range(y0, height):
        alpha = int(150 * ((y - y0) / strip_height) ** 1.1)
        draw.line((0, y, width, y), fill=(0, 0, 0, alpha))

    title = asset_title.upper()
    draw.line((22, height - 68, 74, height - 68), fill=(255, 255, 250, 218), width=2)
    draw.text((22, height - 52), title, fill=(255, 255, 250, 246), font=TITLE_FONT)

    project_w, _ = text_size(draw, project_title, META_FONT)
    draw.text(
        (width - project_w - 22, height - 42),
        project_title,
        fill=(255, 255, 250, 218),
        font=META_FONT,
    )

    return Image.alpha_composite(canvas, overlay).convert("RGB")


def crop_panels(source: Image.Image) -> list[Image.Image]:
    width, height = source.size
    panel_w = width // 2
    panel_h = height // 3
    trim = max(10, int(min(panel_w, panel_h) * 0.025))
    panels: list[Image.Image] = []

    for row in range(3):
        for col in range(2):
            left = col * panel_w + trim
            top = row * panel_h + trim
            right = (col + 1) * panel_w - trim
            bottom = (row + 1) * panel_h - trim
            crop = source.crop((left, top, right, bottom))
            crop = ImageOps.fit(crop, (1200, 1200), method=Image.Resampling.LANCZOS)
            panels.append(crop)

    return panels


def save_webp(image: Image.Image, destination: Path, quality: int = 88) -> None:
    image.save(destination, "WEBP", quality=quality, method=6)


def build_project(project: ProjectAsset) -> dict:
    source_path = SOURCE_DIR / project.source
    if not source_path.exists():
        raise FileNotFoundError(source_path)

    output_dir = OUTPUT_ROOT / project.id
    output_dir.mkdir(parents=True, exist_ok=True)

    source_board = output_dir / "source-board.png"
    shutil.copy2(source_path, source_board)

    with Image.open(source_path) as image:
        source = image.convert("RGB")
        board = ImageOps.contain(source, (1200, 1800), method=Image.Resampling.LANCZOS)
        board_path = output_dir / "board.webp"
        save_webp(board, board_path, quality=90)

        panels = crop_panels(source)
        assets = []
        for crop, (asset_id, title, orientation) in zip(panels, project.panels):
            composited = make_overlay(crop, project.title, title)
            filename = f"{asset_id}.webp"
            output_path = output_dir / filename
            save_webp(composited, output_path, quality=90)
            if asset_id == "cover":
                composited.save(output_dir / "cover.png", "PNG", optimize=True)

            assets.append(
                {
                    "id": asset_id,
                    "title": title,
                    "src": f"/assets/visual-design-real/{project.id}/{filename}",
                    "file": filename,
                    "format": "webp",
                    "orientation": orientation,
                    "generated": True,
                    "composited": True,
                }
            )

    return {
        "id": project.id,
        "title": project.title,
        "directory": f"/assets/visual-design-real/{project.id}/",
        "sourceImage": project.source,
        "sourceBoard": "source-board.png",
        "board": "board.webp",
        "cover": "cover.webp",
        "coverPng": "cover.png",
        "boardAsset": {
            "id": "board",
            "title": "Full Generated Case Board",
            "src": f"/assets/visual-design-real/{project.id}/board.webp",
            "file": "board.webp",
            "format": "webp",
            "orientation": "portrait",
            "generated": True,
            "composited": False,
        },
        "assets": assets,
        "rasterFiles": ["source-board.png", "board.webp", "cover.png"]
        + [asset["file"] for asset in assets],
        "svgFiles": [],
        "compositedFiles": [asset["file"] for asset in assets],
    }


def main() -> None:
    OUTPUT_ROOT.mkdir(parents=True, exist_ok=True)
    projects = [build_project(project) for project in PROJECTS]

    manifest = {
        "generatedAt": datetime.now(timezone.utc).isoformat(),
        "sourceDirectory": str(SOURCE_DIR),
        "assetRoot": "/assets/visual-design-real/",
        "sourceBoardsGeneratedWith": "image_gen.imagegen",
        "projectCount": len(projects),
        "sourceImageCount": len(projects),
        "activeWebpCount": len(projects) * 7,
        "compositedWebpCount": len(projects) * 6,
        "pngExportCount": len(projects) * 2,
        "svgCount": 0,
        "projects": projects,
    }

    MANIFEST_PATH.write_text(json.dumps(manifest, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    print(
        f"Built {manifest['activeWebpCount']} active WebP assets and "
        f"{manifest['pngExportCount']} PNG files for {manifest['projectCount']} projects."
    )


if __name__ == "__main__":
    main()
