from __future__ import annotations

import math
from pathlib import Path

from PIL import Image, ImageDraw, ImageEnhance, ImageFilter, ImageFont


ROOT = Path(__file__).resolve().parents[1]
ASSETS = ROOT / "assets" / "visual-design-real"
FONTS = Path("C:/Windows/Fonts")


SERIF = FONTS / "georgia.ttf"
SERIF_BOLD = FONTS / "georgiab.ttf"
SERIF_ITALIC = FONTS / "georgiai.ttf"
SANS = FONTS / "segoeui.ttf"
SANS_BOLD = FONTS / "segoeuib.ttf"
SANS_LIGHT = FONTS / "segoeuil.ttf"
MONO = FONTS / "bahnschrift.ttf"


def font(path: Path, size: int) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(str(path), size)


def save(image: Image.Image, project: str, filename: str) -> None:
    output = ASSETS / project / filename
    output.parent.mkdir(parents=True, exist_ok=True)
    image.convert("RGB").save(output, "WEBP", quality=91, method=6)
    print(f"wrote {output.relative_to(ROOT)}")


def solid(size: tuple[int, int], color: str) -> Image.Image:
    return Image.new("RGB", size, color)


def vertical_gradient(size: tuple[int, int], top: tuple[int, int, int], bottom: tuple[int, int, int]) -> Image.Image:
    width, height = size
    image = Image.new("RGB", size)
    pixels = image.load()
    for y in range(height):
        ratio = y / max(height - 1, 1)
        color = tuple(round(top[i] * (1 - ratio) + bottom[i] * ratio) for i in range(3))
        for x in range(width):
            pixels[x, y] = color
    return image


def radial_glow(size: tuple[int, int], center: tuple[int, int], radius: int, color: tuple[int, int, int], opacity: int) -> Image.Image:
    glow = Image.new("RGBA", size, (0, 0, 0, 0))
    pixels = glow.load()
    cx, cy = center
    for y in range(size[1]):
        for x in range(size[0]):
            distance = math.hypot(x - cx, y - cy)
            if distance < radius:
                alpha = int(opacity * (1 - distance / radius) ** 2)
                pixels[x, y] = (*color, alpha)
    return glow


def paste_cover(canvas: Image.Image, source: Path, box: tuple[int, int, int, int], opacity: float = 1.0, blur: float = 0) -> None:
    if not source.exists():
        return
    image = Image.open(source).convert("RGB")
    target_width = box[2] - box[0]
    target_height = box[3] - box[1]
    ratio = max(target_width / image.width, target_height / image.height)
    resized = image.resize((round(image.width * ratio), round(image.height * ratio)), Image.Resampling.LANCZOS)
    left = (resized.width - target_width) // 2
    top = (resized.height - target_height) // 2
    crop = resized.crop((left, top, left + target_width, top + target_height))
    if blur:
        crop = crop.filter(ImageFilter.GaussianBlur(blur))
    if opacity < 1:
        overlay = Image.new("RGB", crop.size, (0, 0, 0))
        crop = Image.blend(overlay, crop, opacity)
    canvas.paste(crop, box[:2])


def rect(draw: ImageDraw.ImageDraw, box: tuple[int, int, int, int], fill: str, outline: str | None = None, width: int = 1) -> None:
    draw.rectangle(box, fill=fill, outline=outline, width=width)


def rounded(
    draw: ImageDraw.ImageDraw,
    box: tuple[int, int, int, int],
    radius: int,
    fill: str,
    outline: str | None = None,
    width: int = 1,
) -> None:
    draw.rounded_rectangle(box, radius=radius, fill=fill, outline=outline, width=width)


def text(
    draw: ImageDraw.ImageDraw,
    xy: tuple[int, int],
    value: str,
    size: int,
    fill: str,
    family: Path = SANS,
    anchor: str | None = None,
) -> None:
    draw.text(xy, value, font=font(family, size), fill=fill, anchor=anchor)


def text_box(draw: ImageDraw.ImageDraw, xy: tuple[int, int], value: str, size: int, fill: str, width: int, leading: float = 1.2) -> None:
    words = value.split()
    lines: list[str] = []
    current = ""
    active_font = font(SANS, size)
    for word in words:
        attempt = f"{current} {word}".strip()
        if draw.textlength(attempt, font=active_font) <= width or not current:
            current = attempt
        else:
            lines.append(current)
            current = word
    if current:
        lines.append(current)
    x, y = xy
    for line in lines:
        draw.text((x, y), line, font=active_font, fill=fill)
        y += int(size * leading)


def tracked(draw: ImageDraw.ImageDraw, xy: tuple[int, int], value: str, size: int, fill: str, tracking: int, family: Path = SANS_BOLD) -> None:
    x, y = xy
    active_font = font(family, size)
    for char in value:
        draw.text((x, y), char, font=active_font, fill=fill)
        x += int(draw.textlength(char, font=active_font)) + tracking


def centered_tracked(
    draw: ImageDraw.ImageDraw,
    y: int,
    value: str,
    size: int,
    fill: str,
    tracking: int,
    width: int,
    family: Path = SANS_BOLD,
) -> None:
    active_font = font(family, size)
    total = sum(draw.textlength(char, font=active_font) + tracking for char in value) - tracking
    tracked(draw, (round((width - total) / 2), y), value, size, fill, tracking, family)


def line(draw: ImageDraw.ImageDraw, xy: tuple[int, int, int, int], fill: str, width: int = 1) -> None:
    draw.line(xy, fill=fill, width=width)


def shadow(canvas: Image.Image, box: tuple[int, int, int, int], radius: int = 28, opacity: int = 80) -> None:
    layer = Image.new("RGBA", canvas.size, (0, 0, 0, 0))
    d = ImageDraw.Draw(layer)
    d.rounded_rectangle(box, radius=radius, fill=(0, 0, 0, opacity))
    layer = layer.filter(ImageFilter.GaussianBlur(34))
    canvas.paste(Image.alpha_composite(canvas.convert("RGBA"), layer).convert("RGB"))


def draw_phone(draw: ImageDraw.ImageDraw, box: tuple[int, int, int, int], fill: str, outline: str, radius: int = 52) -> None:
    rounded(draw, box, radius, fill, outline, 4)
    x1, y1, x2, _ = box
    notch_w = (x2 - x1) // 4
    rounded(draw, (x1 + (x2 - x1 - notch_w) // 2, y1 + 24, x1 + (x2 - x1 + notch_w) // 2, y1 + 54), 16, "#101010")


def draw_can(draw: ImageDraw.ImageDraw, x: int, y: int, w: int, h: int, color: str, flavor: str, accent: str) -> None:
    rounded(draw, (x, y, x + w, y + h), 30, "#f7f4eb", "#d7d0bf", 3)
    rect(draw, (x + 14, y + 55, x + w - 14, y + h - 38), "#fbf8f0", "#ded8c9", 1)
    draw.ellipse((x + 32, y + 150, x + w - 32, y + 150 + w - 64), fill=color)
    text(draw, (x + w // 2, y + 86), "SOLA", 26, "#182724", SANS_BOLD, "mm")
    text(draw, (x + w // 2, y + 302), flavor.upper(), 22, "#182724", SANS_BOLD, "mm")
    text(draw, (x + w // 2, y + 338), "SPARKLING WATER", 14, "#726e63", SANS, "mm")
    line(draw, (x + 38, y + h - 84, x + w - 38, y + h - 84), accent, 4)
    text(draw, (x + w // 2, y + h - 55), "330 ML", 13, "#726e63", SANS_BOLD, "mm")


def draw_package(draw: ImageDraw.ImageDraw, box: tuple[int, int, int, int], brand: str, title: str, subtitle: str, accent: str) -> None:
    x1, y1, x2, y2 = box
    rounded(draw, box, 32, "#faf5e7", "#cdbb96", 4)
    rect(draw, (x1 + 34, y1 + 42, x2 - 34, y2 - 42), "#fff9eb", "#d9c9a5", 2)
    text(draw, ((x1 + x2) // 2, y1 + 92), brand.upper(), 25, "#2e251a", SANS_BOLD, "mm")
    draw.ellipse((x1 + 78, y1 + 142, x2 - 78, y1 + 142 + (x2 - x1 - 156)), fill=accent)
    text(draw, ((x1 + x2) // 2, y2 - 150), title.upper(), 31, "#2e251a", SANS_BOLD, "mm")
    text(draw, ((x1 + x2) // 2, y2 - 103), subtitle, 18, "#786c58", SANS, "mm")
    text(draw, ((x1 + x2) // 2, y2 - 66), "1.2 KG", 15, "#786c58", SANS_BOLD, "mm")


def make_maison() -> None:
    project = "maison-elan"
    source = ASSETS / project / "lookbook-cover.webp"
    base = solid((1600, 1200), "#17120f")
    paste_cover(base, source, (720, 0, 1600, 1200), opacity=0.72)
    overlay = Image.new("RGBA", base.size, (0, 0, 0, 0))
    od = ImageDraw.Draw(overlay)
    od.rectangle((0, 0, 950, 1200), fill=(23, 18, 15, 228))
    od.rectangle((870, 95, 1510, 1105), outline=(216, 202, 179, 72), width=2)
    od.rectangle((720, 1108, 1600, 1200), fill=(23, 18, 15, 186))
    od.rectangle((950, 175, 1450, 885), fill=(233, 225, 208, 238))
    od.line((1010, 814, 1392, 814), fill=(69, 58, 45, 180), width=3)
    base = Image.alpha_composite(base.convert("RGBA"), overlay).convert("RGB")
    d = ImageDraw.Draw(base)
    text(d, (96, 110), "MAISON ELAN", 18, "#cfc2ad", SANS_BOLD)
    text(d, (96, 190), "THE QUIET STRUCTURE", 36, "#e8dece", SERIF)
    text(d, (94, 310), "STILL\nFORMS", 150, "#f8f2e8", SERIF)
    text(d, (102, 704), "AUTUMN / WINTER 2026", 22, "#cfc2ad", SANS_BOLD)
    text_box(d, (102, 770), "Form without excess. Movement without noise.", 31, "#f3eadb", 580, 1.24)
    text(d, (1010, 215), "STILL FORMS", 26, "#2d241b", SERIF)
    text(d, (1010, 266), "AW / 26", 18, "#786c58", SANS_BOLD)
    text_box(d, (1010, 338), "Campaign key visual for a quiet luxury fashion presentation.", 23, "#51463a", 360, 1.32)
    save(base, project, "cover.webp")

    img = solid((1800, 1200), "#ece3d2")
    d = ImageDraw.Draw(img)
    rect(d, (86, 86, 1714, 1114), "#f8f2e6", "#c9baa2", 3)
    text(d, (150, 150), "MAISON ELAN", 20, "#5f503f", SANS_BOLD)
    text(d, (150, 232), "STILL FORMS", 132, "#2f261d", SERIF)
    text(d, (152, 390), "AUTUMN / WINTER 2026", 32, "#7a6a54", SANS_BOLD)
    text_box(d, (150, 482), "Collection typography, invitation rhythm, campaign language and boutique poster hierarchy.", 28, "#5c5145", 600, 1.35)
    for idx, color in enumerate(["#201813", "#6f5d49", "#bca98d", "#e8ddc8"]):
        rect(d, (150 + idx * 116, 710, 236 + idx * 116, 796), color)
        text(d, (150 + idx * 116, 824), color.upper(), 15, "#5c5145", MONO)
    rect(d, (960, 165, 1570, 1010), "#18120f", "#bda988", 3)
    text(d, (1018, 235), "PRIVATE PRESENTATION", 31, "#e9ddcb", SANS_BOLD)
    text(d, (1018, 345), "18 SEPTEMBER 2026", 25, "#bda988", SANS_BOLD)
    text(d, (1018, 440), "LONDON", 82, "#f5ede0", SERIF)
    text_box(d, (1018, 615), "RSVP by invitation only. Form without excess. Movement without noise.", 25, "#d0c3ad", 430, 1.34)
    line(d, (1018, 900, 1510, 900), "#bda988", 2)
    save(img, project, "collection-system.webp")

    img = solid((1800, 1200), "#d7c8b2")
    d = ImageDraw.Draw(img)
    rounded(d, (110, 110, 1690, 1090), 18, "#f5efe3", "#b7a88f", 3)
    line(d, (900, 140, 900, 1060), "#d1c4af", 2)
    paste_cover(img, ASSETS / project / "lookbook-cover.webp", (944, 176, 1624, 1022), opacity=0.72)
    rect(d, (1168, 455, 1488, 806), "#eee4d4", "#6f5f49", 2)
    text(d, (1208, 510), "MAISON ELAN", 19, "#3a3026", SANS_BOLD)
    text(d, (1208, 610), "STILL\nFORMS", 49, "#2a211a", SERIF)
    text(d, (1208, 748), "AW / 26 LOOKBOOK", 17, "#6f5f49", SANS_BOLD)
    rect(d, (944, 970, 1624, 1022), "#17120f")
    text(d, (188, 188), "MAISON ELAN", 18, "#6e604e", SANS_BOLD)
    text(d, (188, 306), "LOOK 04", 44, "#2a211a", SANS_BOLD)
    text(d, (188, 398), "THE QUIET\nSTRUCTURE", 76, "#2a211a", SERIF)
    text_box(d, (190, 630), "Tailored wool coat, ivory trouser, structured shoulder. Editorial pacing keeps product focus calm and tactile.", 27, "#5a5046", 565, 1.36)
    text(d, (190, 994), "024", 20, "#887a66", SANS_BOLD)
    text(d, (1538, 994), "025", 20, "#f4eadc", SANS_BOLD)
    save(img, project, "lookbook-spread.webp")

    img = solid((1200, 1600), "#18120f")
    d = ImageDraw.Draw(img)
    rect(d, (86, 86, 1114, 1514), "#f4ebda", "#a8906d", 5)
    rect(d, (150, 150, 1050, 1450), "#fbf5ea", "#d1bf9d", 2)
    centered_tracked(d, 218, "MAISON ELAN", 24, "#35291f", 8, 1200, SANS_BOLD)
    text(d, (600, 392), "PRIVATE\nPRESENTATION", 86, "#2e241b", SERIF, "ma")
    text(d, (600, 700), "STILL FORMS", 40, "#7c6b54", SANS_BOLD, "mm")
    text(d, (600, 792), "18 SEPTEMBER 2026", 30, "#2e241b", SANS_BOLD, "mm")
    text(d, (600, 850), "19:30", 30, "#2e241b", SANS_BOLD, "mm")
    text(d, (600, 908), "LONDON", 30, "#2e241b", SANS_BOLD, "mm")
    line(d, (312, 1040, 888, 1040), "#a8906d", 2)
    text_box(d, (330, 1116), "Form without excess. Movement without noise. RSVP requested by 10 September.", 29, "#5d5144", 540, 1.36)
    save(img, project, "invitation.webp")

    img = solid((1800, 1200), "#1c1511")
    d = ImageDraw.Draw(img)
    for x in [190, 690, 1190]:
        rounded(d, (x, 100, x + 390, 1060), 44, "#ece1cf", "#a98f69", 4)
    paste_cover(img, ASSETS / project / "lookbook-cover.webp", (215, 150, 555, 710), opacity=0.78)
    text(d, (235, 768), "AW / 26", 28, "#3c3025", SANS_BOLD)
    text(d, (235, 822), "STILL FORMS", 43, "#2f261e", SERIF)
    text(d, (235, 920), "DISCOVER THE COLLECTION ->", 19, "#7b664a", SANS_BOLD)
    text(d, (735, 186), "MAISON ELAN", 23, "#3c3025", SANS_BOLD)
    text(d, (735, 290), "THE QUIET\nSTRUCTURE", 64, "#2f261e", SERIF)
    text_box(d, (735, 570), "Form without excess. Movement without noise.", 29, "#655848", 300, 1.32)
    text(d, (1235, 184), "STILL\nFORMS", 92, "#2f261e", SERIF)
    line(d, (1238, 515, 1515, 515), "#7b664a", 3)
    text(d, (1238, 590), "Private presentation", 26, "#56483a", SANS_BOLD)
    text(d, (1238, 638), "London / 18.09.26", 24, "#766852", SANS)
    text(d, (1238, 940), "MAISONELAN.COM", 18, "#7b664a", SANS_BOLD)
    save(img, project, "social-campaign.webp")

    img = solid((1200, 1600), "#c8bba5")
    paste_cover(img, ASSETS / project / "lookbook-cover.webp", (70, 70, 1130, 1530), opacity=0.5)
    overlay = Image.new("RGBA", img.size, (18, 13, 10, 85))
    img = Image.alpha_composite(img.convert("RGBA"), overlay).convert("RGB")
    d = ImageDraw.Draw(img)
    rect(d, (145, 160, 1055, 1440), "#f1e7d5", "#b29c76", 4)
    text(d, (220, 260), "MAISON ELAN", 27, "#2d241c", SANS_BOLD)
    text(d, (220, 414), "STILL\nFORMS", 146, "#2d241c", SERIF)
    text(d, (222, 826), "AUTUMN / WINTER 2026", 31, "#776750", SANS_BOLD)
    text_box(d, (222, 920), "Boutique poster system for seasonal windows, invitations and social launch assets.", 30, "#5f5548", 610, 1.34)
    text(d, (222, 1294), "THE QUIET STRUCTURE", 26, "#2d241c", SANS_BOLD)
    save(img, project, "boutique-poster.webp")


def make_sola() -> None:
    project = "sola"
    img = solid((1800, 1200), "#eaf7f6")
    d = ImageDraw.Draw(img)
    draw_can(d, 230, 250, 260, 620, "#f05e37", "Grapefruit", "#f05e37")
    draw_can(d, 594, 210, 260, 660, "#f7cb31", "Lemon", "#f0ba22")
    draw_can(d, 958, 250, 260, 620, "#73c7cf", "Lime", "#49aeb8")
    text(d, (1294, 238), "SOLA", 96, "#182724", SANS_BOLD)
    text(d, (1300, 356), "BRIGHT BY\nNATURE", 68, "#182724", SERIF)
    text_box(d, (1304, 548), "Flavor-coded packaging and summer launch graphics for sparkling water.", 30, "#496461", 330, 1.32)
    rounded(d, (1304, 768, 1644, 842), 37, "#182724", None)
    text(d, (1474, 805), "FIND YOUR FLAVOR", 19, "#f8f3e7", SANS_BOLD, "mm")
    save(img, project, "cover.webp")

    img = solid((1800, 1200), "#fbf7ef")
    d = ImageDraw.Draw(img)
    text(d, (126, 116), "SOLA LABEL SYSTEM", 38, "#182724", SANS_BOLD)
    for i, (flavor, color) in enumerate([("GRAPEFRUIT", "#f05e37"), ("LEMON", "#f7cb31"), ("LIME", "#73c7cf")]):
        x = 148 + i * 536
        rect(d, (x, 236, x + 420, 930), "#fffdfa", "#dacdbb", 3)
        d.ellipse((x + 110, 380, x + 310, 580), fill=color)
        text(d, (x + 210, 320), "SOLA", 34, "#182724", SANS_BOLD, "mm")
        text(d, (x + 210, 660), flavor, 30, "#182724", SANS_BOLD, "mm")
        text(d, (x + 210, 716), "SPARKLING WATER", 19, "#596c68", SANS_BOLD, "mm")
        text(d, (x + 210, 824), "330 ML", 19, "#596c68", SANS, "mm")
        rect(d, (x, 956, x + 420, 1002), color)
    save(img, project, "variant-lineup.webp")

    img = vertical_gradient((1600, 1000), (232, 249, 247), (255, 244, 214))
    d = ImageDraw.Draw(img)
    text(d, (112, 112), "SOLA", 54, "#182724", SANS_BOLD)
    text(d, (110, 232), "BRIGHT\nBY NATURE", 116, "#182724", SERIF)
    text_box(d, (118, 538), "A summer campaign that turns flavor color into the primary navigation system.", 29, "#496461", 520, 1.34)
    for i, color in enumerate(["#f05e37", "#f7cb31", "#73c7cf"]):
        d.ellipse((950 + i * 150, 260, 1070 + i * 150, 380), fill=color)
    rounded(d, (108, 770, 430, 842), 36, "#182724", None)
    text(d, (269, 806), "TRY THE TRIO", 20, "#fbf7ef", SANS_BOLD, "mm")
    save(img, project, "summer-key-visual.webp")

    img = solid((1080, 1600), "#def4f2")
    d = ImageDraw.Draw(img)
    text(d, (88, 116), "SOLA", 54, "#182724", SANS_BOLD)
    text(d, (86, 278), "SUMMER\nHAS A\nFLAVOR.", 112, "#182724", SERIF)
    draw_can(d, 388, 790, 280, 650, "#f05e37", "Grapefruit", "#f05e37")
    rounded(d, (86, 1392, 422, 1470), 39, "#182724", None)
    text(d, (254, 1431), "SHOP NOW", 23, "#fff8ed", SANS_BOLD, "mm")
    save(img, project, "instagram-story.webp")

    img = solid((1800, 1000), "#f6ecd6")
    d = ImageDraw.Draw(img)
    rect(d, (92, 110, 1708, 890), "#eaf7f6", "#b7c8c6", 4)
    text(d, (170, 198), "SOLA", 60, "#182724", SANS_BOLD)
    text(d, (168, 350), "THREE\nFLAVORS.\nONE SUMMER.", 88, "#182724", SERIF)
    for i, (flavor, color) in enumerate([("Grapefruit", "#f05e37"), ("Lemon", "#f7cb31"), ("Lime", "#73c7cf")]):
        draw_can(d, 930 + i * 210, 206, 150, 500, color, flavor, color)
    text(d, (170, 760), "AVAILABLE IN SELECT STORES", 22, "#496461", SANS_BOLD)
    save(img, project, "billboard.webp")


def make_northline() -> None:
    project = "northline"
    img = solid((1800, 1200), "#eef2f3")
    d = ImageDraw.Draw(img)
    text(d, (118, 118), "NORTHLINE SYSTEMS", 42, "#10283a", SANS_BOLD)
    text(d, (118, 242), "INFRASTRUCTURE\nMONITORING\nWITHOUT DRAMA.", 86, "#10283a", SERIF)
    text_box(d, (124, 560), "A B2B identity system built for scans, dashboards, enterprise decks and conference communication.", 29, "#536474", 590, 1.35)
    rect(d, (930, 126, 1628, 1000), "#ffffff", "#cbd5dc", 3)
    text(d, (990, 204), "Q4 OPERATIONAL BRIEF", 27, "#10283a", SANS_BOLD)
    for i, value in enumerate([("99.98%", "Uptime"), ("3.2s", "Response"), ("18", "Regions")]):
        x = 990 + i * 196
        rounded(d, (x, 292, x + 160, 420), 14, "#e8eef2", "#cbd5dc", 2)
        text(d, (x + 22, 326), value[0], 35, "#10283a", SANS_BOLD)
        text(d, (x + 22, 376), value[1], 16, "#60717d", SANS_BOLD)
    for i in range(9):
        y = 525 + i * 42
        line(d, (992, y, 1550, y), "#d8e0e5", 2)
    pts = [(1000, 830), (1110, 730), (1220, 770), (1330, 650), (1440, 684), (1550, 584)]
    d.line(pts, fill="#286fa3", width=8)
    save(img, project, "cover.webp")

    img = solid((1800, 1200), "#10283a")
    d = ImageDraw.Draw(img)
    text(d, (120, 106), "NORTHLINE", 44, "#ffffff", SANS_BOLD)
    text(d, (120, 210), "Q4 INFRASTRUCTURE\nRELIABILITY REPORT", 76, "#ffffff", SERIF)
    rect(d, (116, 520, 1660, 960), "#f7fafb", "#93a7b5", 3)
    for i, label in enumerate(["Network", "Compute", "Data", "Security"]):
        x = 170 + i * 360
        text(d, (x, 590), label.upper(), 20, "#60717d", SANS_BOLD)
        text(d, (x, 660), ["99.98%", "41ms", "8.2PB", "0"][i], 58, "#10283a", SANS_BOLD)
        line(d, (x, 790, x + 235, 790), "#286fa3", 10)
        line(d, (x, 830, x + 190, 830), "#9ab1bf", 10)
    save(img, project, "annual-report.webp")

    img = solid((1600, 900), "#e8eef2")
    d = ImageDraw.Draw(img)
    text(d, (96, 90), "NORTHLINE SYSTEMS", 35, "#10283a", SANS_BOLD)
    text(d, (96, 214), "BUILDING\nCALMER\nOPERATIONS", 85, "#10283a", SERIF)
    rounded(d, (916, 120, 1450, 712), 20, "#ffffff", "#c6d1d8", 3)
    for i in range(6):
        line(d, (980, 242 + i * 62, 1376, 242 + i * 62), "#dbe4e8", 3)
    d.line([(980, 585), (1080, 495), (1190, 522), (1310, 410), (1380, 432)], fill="#286fa3", width=8)
    text(d, (96, 744), "ENTERPRISE MONITORING PLATFORM", 25, "#60717d", SANS_BOLD)
    save(img, project, "conference-screen.webp")

    img = solid((1800, 900), "#f7fafb")
    d = ImageDraw.Draw(img)
    rect(d, (0, 0, 1800, 900), "#f7fafb")
    text(d, (110, 110), "NORTHLINE SYSTEMS", 38, "#10283a", SANS_BOLD)
    text(d, (110, 240), "Infrastructure signals your team can trust.", 56, "#10283a", SERIF)
    rounded(d, (114, 560, 450, 632), 36, "#10283a", None)
    text(d, (282, 596), "BOOK A DEMO", 20, "#ffffff", SANS_BOLD, "mm")
    for i, w in enumerate([430, 370, 490, 310]):
        rect(d, (1070, 190 + i * 112, 1070 + w, 224 + i * 112), "#286fa3")
    save(img, project, "linkedin-banner.webp")


def make_after_midnight() -> None:
    project = "after-midnight"
    img = solid((1200, 1600), "#08050e")
    img = Image.alpha_composite(img.convert("RGBA"), radial_glow(img.size, (680, 680), 650, (194, 38, 255), 180)).convert("RGB")
    d = ImageDraw.Draw(img)
    text(d, (86, 92), "ROOM 3 / BERLIN", 26, "#f9e7ff", SANS_BOLD)
    text(d, (82, 232), "AFTER\nMIDNIGHT", 143, "#ffffff", SERIF)
    line(d, (92, 642, 1090, 642), "#c426ff", 7)
    text(d, (92, 732), "14 NOV 2026", 52, "#f9e7ff", SANS_BOLD)
    text(d, (92, 812), "23:00 - LATE", 38, "#caa7dc", SANS)
    for i, name in enumerate(["LYRA VOSS", "MIRA STONE", "KAI NULL", "ELI NORTH"]):
        text(d, (92, 968 + i * 64), name, 31, "#ffffff", SANS_BOLD)
    text(d, (92, 1435), "TICKETS / AFTERMIDNIGHT.CLUB", 23, "#caa7dc", SANS_BOLD)
    save(img, project, "cover.webp")

    img = solid((1200, 1600), "#f5f0e8")
    d = ImageDraw.Draw(img)
    text(d, (94, 104), "AFTER MIDNIGHT", 37, "#151014", SANS_BOLD)
    text(d, (92, 278), "NOISE\nAS A\nSIGNAL", 126, "#151014", SERIF)
    for i in range(14):
        x = 80 + i * 78
        line(d, (x, 760, x + 160, 1150), "#c426ff", 5)
    text(d, (92, 1290), "14.11.26 / BERLIN / ROOM 3", 33, "#151014", SANS_BOLD)
    text(d, (92, 1364), "LYRA VOSS  MIRA STONE  KAI NULL", 24, "#5b5158", SANS)
    save(img, project, "alternate-poster.webp")

    img = solid((1800, 1000), "#07050c")
    img = Image.alpha_composite(img.convert("RGBA"), radial_glow(img.size, (1320, 430), 620, (194, 38, 255), 150)).convert("RGB")
    d = ImageDraw.Draw(img)
    text(d, (120, 100), "AFTER MIDNIGHT", 56, "#ffffff", SANS_BOLD)
    text(d, (116, 258), "14 NOV 2026", 82, "#ffffff", SERIF)
    text(d, (120, 430), "ROOM 3 / BERLIN", 39, "#caa7dc", SANS_BOLD)
    for i, name in enumerate(["LYRA VOSS", "MIRA STONE", "KAI NULL"]):
        text(d, (930, 230 + i * 110), name, 50, "#ffffff", SANS_BOLD)
    line(d, (120, 790, 1600, 790), "#c426ff", 9)
    save(img, project, "stage-screen.webp")

    img = solid((1800, 1200), "#171019")
    d = ImageDraw.Draw(img)
    rounded(d, (150, 300, 1150, 760), 28, "#f5f0e8", "#c426ff", 5)
    text(d, (220, 380), "AFTER MIDNIGHT", 45, "#151014", SANS_BOLD)
    text(d, (220, 500), "14 NOV 2026", 62, "#151014", SERIF)
    text(d, (220, 640), "ROOM 3 / BERLIN", 28, "#5b5158", SANS_BOLD)
    rounded(d, (1260, 220, 1500, 980), 80, "#c426ff", "#f5f0e8", 4)
    text(d, (1380, 600), "AFTER MIDNIGHT", 26, "#ffffff", SANS_BOLD, "mm")
    save(img, project, "ticket-wristband.webp")

    img = solid((1080, 1600), "#08050e")
    img = Image.alpha_composite(img.convert("RGBA"), radial_glow(img.size, (560, 480), 560, (194, 38, 255), 170)).convert("RGB")
    d = ImageDraw.Draw(img)
    text(d, (80, 92), "SATURDAY / 23:00", 27, "#caa7dc", SANS_BOLD)
    text(d, (74, 236), "AFTER\nMIDNIGHT", 118, "#ffffff", SERIF)
    text(d, (82, 690), "ROOM 3", 42, "#ffffff", SANS_BOLD)
    text(d, (82, 754), "BERLIN", 42, "#ffffff", SANS_BOLD)
    rounded(d, (80, 1366, 430, 1442), 38, "#ffffff", None)
    text(d, (255, 1404), "GET TICKETS", 22, "#08050e", SANS_BOLD, "mm")
    save(img, project, "instagram-story.webp")


def make_kinetic() -> None:
    project = "kinetic"
    palette = ("#071319", "#bbff3d", "#e8fff7")
    img = solid((1800, 1200), palette[0])
    d = ImageDraw.Draw(img)
    text(d, (118, 110), "KINETIC", 52, palette[2], SANS_BOLD)
    text(d, (116, 254), "TRAIN\nWITH\nDATA.", 122, palette[2], SERIF)
    text_box(d, (120, 710), "Performance app launch graphics with clear conversion messaging and high-contrast motion cues.", 30, "#a2c4bd", 570, 1.33)
    draw_phone(d, (1050, 120, 1500, 1060), "#101f26", "#5d7b7b")
    text(d, (1118, 250), "TODAY", 28, "#a2c4bd", SANS_BOLD)
    text(d, (1118, 340), "8.4 KM", 72, palette[2], SANS_BOLD)
    line(d, (1122, 560, 1428, 430), palette[1], 12)
    rounded(d, (1118, 810, 1430, 888), 39, palette[1], None)
    text(d, (1274, 850), "START PLAN", 22, palette[0], SANS_BOLD, "mm")
    save(img, project, "cover.webp")

    img = solid((1200, 1200), "#e8fff7")
    d = ImageDraw.Draw(img)
    text(d, (82, 82), "KINETIC", 43, "#071319", SANS_BOLD)
    text(d, (82, 226), "RUN SMARTER\nIN 7 DAYS", 80, "#071319", SERIF)
    rounded(d, (82, 730, 430, 810), 40, "#071319", None)
    text(d, (256, 770), "START FREE", 24, "#bbff3d", SANS_BOLD, "mm")
    draw_phone(d, (700, 170, 1030, 1010), "#071319", "#22363d")
    text(d, (754, 324), "Pace", 30, "#a2c4bd", SANS_BOLD)
    text(d, (754, 396), "4:48", 62, "#ffffff", SANS_BOLD)
    d.line([(754, 642), (840, 572), (930, 610), (1000, 520)], fill="#bbff3d", width=9)
    save(img, project, "meta-ad.webp")

    img = solid((1800, 900), "#071319")
    d = ImageDraw.Draw(img)
    text(d, (92, 105), "KINETIC", 42, "#bbff3d", SANS_BOLD)
    text(d, (92, 256), "YOUR NEXT SESSION\nIS ALREADY PLANNED.", 78, "#e8fff7", SERIF)
    text(d, (94, 606), "Personal training plans based on pace, recovery and consistency.", 30, "#a2c4bd", SANS)
    rounded(d, (1270, 350, 1630, 430), 40, "#bbff3d", None)
    text(d, (1450, 390), "OPEN APP", 25, "#071319", SANS_BOLD, "mm")
    save(img, project, "retargeting-banner.webp")

    img = solid((1200, 1200), "#bbff3d")
    d = ImageDraw.Draw(img)
    text(d, (88, 88), "KINETIC", 44, "#071319", SANS_BOLD)
    text(d, (88, 286), "7-DAY\nPACE RESET", 100, "#071319", SERIF)
    text_box(d, (90, 660), "A launch offer visual with one clear action, one promise and one metric.", 31, "#263b33", 530, 1.34)
    rounded(d, (90, 924, 420, 1004), 40, "#071319", None)
    text(d, (255, 964), "JOIN TODAY", 22, "#bbff3d", SANS_BOLD, "mm")
    save(img, project, "offer-visual.webp")


def make_form26() -> None:
    project = "form-26"
    img = solid((1400, 1800), "#f4f0e7")
    d = ImageDraw.Draw(img)
    text(d, (90, 82), "FORM / 26", 52, "#202020", SANS_BOLD)
    text(d, (88, 240), "SPACES\nTHAT HOLD\nTHEIR BREATH", 100, "#202020", SERIF)
    rect(d, (90, 820, 1310, 1438), "#d5d0c4", "#b9b1a3", 2)
    for i in range(8):
        line(d, (170 + i * 145, 1420, 320 + i * 145, 940), "#a5a194", 5)
    text(d, (90, 1580), "ISSUE 04 / DOMESTIC MODERNISM", 30, "#686458", SANS_BOLD)
    save(img, project, "cover.webp")

    img = solid((1800, 1200), "#f4f0e7")
    d = ImageDraw.Draw(img)
    line(d, (900, 100, 900, 1100), "#d2cabd", 2)
    text(d, (120, 130), "CONTENTS", 54, "#202020", SANS_BOLD)
    entries = [("012", "The quiet plan"), ("028", "Concrete domesticity"), ("046", "Light as material"), ("064", "Interview: Nora Vance")]
    for i, (page, title) in enumerate(entries):
        y = 284 + i * 132
        text(d, (120, y), page, 25, "#8d887c", SANS_BOLD)
        text(d, (220, y - 8), title, 43, "#202020", SERIF)
        line(d, (120, y + 66, 760, y + 66), "#d2cabd", 2)
    rect(d, (1010, 190, 1630, 870), "#d6d1c7", "#aaa295", 2)
    text_box(d, (1010, 936), "Caption: a courtyard house where negative space becomes the primary architectural gesture.", 24, "#56524b", 520, 1.34)
    save(img, project, "contents.webp")

    img = solid((1800, 1200), "#faf8f2")
    d = ImageDraw.Draw(img)
    line(d, (900, 80, 900, 1120), "#d8d0c2", 2)
    text(d, (120, 128), "CONCRETE\nDOMESTICITY", 80, "#202020", SERIF)
    text_box(d, (124, 358), "A long-form editorial spread with a restrained column grid, large folios and image-led rhythm.", 24, "#57534c", 590, 1.35)
    for col in range(2):
        x = 124 + col * 310
        text_box(d, (x, 560), "Material warmth is created through proportion, shadow and repeated structural pauses. The page system is designed for reading, not decoration.", 21, "#393631", 250, 1.42)
    rect(d, (980, 148, 1640, 920), "#c9c4ba", "#aaa295", 2)
    text(d, (980, 994), "046", 24, "#8d887c", SANS_BOLD)
    text(d, (1450, 994), "FORM / 26", 20, "#8d887c", SANS_BOLD)
    save(img, project, "long-form-spread.webp")

    img = solid((1800, 1200), "#ebe6dc")
    d = ImageDraw.Draw(img)
    rect(d, (90, 96, 1120, 1080), "#c8c3b8", "#aaa295", 2)
    text(d, (1220, 130), "LIGHT\nAS\nMATERIAL", 72, "#202020", SERIF)
    text_box(d, (1224, 420), "Photo-led editorial layout with restrained captioning and visible page structure.", 25, "#57534c", 380, 1.34)
    text(d, (1224, 998), "052 / FORM 26", 20, "#8d887c", SANS_BOLD)
    save(img, project, "photo-led-spread.webp")


def make_pawpaw() -> None:
    project = "pawpaw"
    img = solid((1800, 1200), "#fff1cc")
    d = ImageDraw.Draw(img)
    text(d, (116, 96), "PAWPAW", 62, "#2d251c", SANS_BOLD)
    text(d, (116, 226), "FOOD THAT\nFEELS LIKE\nHOME.", 88, "#2d251c", SERIF)
    draw_package(d, (820, 180, 1170, 950), "PAWPAW", "Daily Crunch", "Turkey & Oat", "#f08a64")
    draw_package(d, (1210, 240, 1540, 950), "PAWPAW", "Soft Bites", "Salmon & Rice", "#70b7a8")
    rounded(d, (116, 842, 430, 920), 39, "#2d251c", None)
    text(d, (273, 881), "SHOP THE LINE", 22, "#fff1cc", SANS_BOLD, "mm")
    save(img, project, "cover.webp")

    img = solid((1300, 1600), "#f8e5b2")
    d = ImageDraw.Draw(img)
    draw_package(d, (360, 180, 940, 1370), "PAWPAW", "Daily Crunch", "Turkey & Oat", "#f08a64")
    save(img, project, "dog-package.webp")

    img = solid((1300, 1600), "#d8f0e7")
    d = ImageDraw.Draw(img)
    draw_package(d, (360, 180, 940, 1370), "PAWPAW", "Soft Bites", "Salmon & Rice", "#70b7a8")
    save(img, project, "cat-package.webp")

    img = solid((1800, 1200), "#fff8e8")
    d = ImageDraw.Draw(img)
    text(d, (110, 100), "PAWPAW TREAT VARIANTS", 42, "#2d251c", SANS_BOLD)
    variants = [("TRAINING BITES", "#f08a64"), ("CALM CHEWS", "#c8a6d8"), ("COAT CRUNCH", "#70b7a8")]
    for i, (name, color) in enumerate(variants):
        x = 150 + i * 520
        rounded(d, (x, 270, x + 360, 840), 34, "#fffdf5", "#d8c296", 3)
        d.ellipse((x + 94, 370, x + 266, 542), fill=color)
        text(d, (x + 180, 650), name, 28, "#2d251c", SANS_BOLD, "mm")
        text(d, (x + 180, 706), "SMALL BATCH SNACKS", 16, "#766852", SANS_BOLD, "mm")
    save(img, project, "treat-variants.webp")


def make_miso() -> None:
    project = "miso-club"
    img = solid((1800, 1200), "#efe7d1")
    d = ImageDraw.Draw(img)
    text(d, (96, 86), "MISO CLUB", 58, "#25190f", SANS_BOLD)
    text(d, (96, 212), "RAMEN BAR\nMENU SYSTEM", 90, "#25190f", SERIF)
    rect(d, (850, 110, 1640, 1050), "#fbf4de", "#b84d34", 5)
    text(d, (920, 190), "NOODLES", 31, "#b84d34", SANS_BOLD)
    menu = [("Shoyu Ramen", "16"), ("Spicy Miso", "18"), ("Mushroom Tan Tan", "17"), ("Yuzu Broth", "15")]
    for i, (name, price) in enumerate(menu):
        y = 300 + i * 112
        text(d, (920, y), name, 36, "#25190f", SERIF)
        text(d, (1510, y), price, 31, "#25190f", SANS_BOLD)
        line(d, (920, y + 58, 1560, y + 58), "#dbcaa8", 2)
    rounded(d, (96, 842, 394, 918), 38, "#b84d34", None)
    text(d, (245, 881), "BOOK A TABLE", 22, "#fff7df", SANS_BOLD, "mm")
    save(img, project, "cover.webp")

    img = solid((1200, 1600), "#b84d34")
    d = ImageDraw.Draw(img)
    rect(d, (96, 108, 1104, 1492), "#fbf4de", "#25190f", 4)
    text(d, (164, 184), "MISO CLUB", 47, "#25190f", SANS_BOLD)
    text(d, (164, 346), "SPICY\nMISO\nNIGHT", 115, "#25190f", SERIF)
    text(d, (164, 820), "FRIDAY / 19:00", 35, "#b84d34", SANS_BOLD)
    text_box(d, (164, 908), "Limited bowls, natural wine and a small menu built around winter broth.", 29, "#5e4731", 680, 1.34)
    save(img, project, "window-poster.webp")

    img = solid((1080, 1350), "#efe7d1")
    d = ImageDraw.Draw(img)
    text(d, (78, 80), "MISO CLUB", 44, "#25190f", SANS_BOLD)
    text(d, (78, 228), "LUNCH\nSET", 104, "#25190f", SERIF)
    text(d, (80, 560), "RAMEN + SIDE + TEA", 35, "#b84d34", SANS_BOLD)
    rounded(d, (80, 1110, 390, 1186), 38, "#25190f", None)
    text(d, (235, 1149), "ORDER NOW", 22, "#efe7d1", SANS_BOLD, "mm")
    save(img, project, "social-post.webp")


def make_orbit() -> None:
    project = "orbit"
    img = solid((1800, 1200), "#061c1e")
    d = ImageDraw.Draw(img)
    text(d, (110, 96), "ORBIT", 64, "#e9f3ee", SANS_BOLD)
    text(d, (110, 250), "INVESTOR\nUPDATE\nSYSTEM", 100, "#e9f3ee", SERIF)
    rect(d, (920, 112, 1650, 1040), "#f2f0e8", "#5c837d", 3)
    text(d, (990, 190), "Q3 HIGHLIGHTS", 34, "#061c1e", SANS_BOLD)
    for i, (metric, value) in enumerate([("ARR", "$18.4M"), ("Churn", "2.1%"), ("Payback", "8 mo")]):
        x = 990 + i * 205
        text(d, (x, 300), metric, 20, "#5c837d", SANS_BOLD)
        text(d, (x, 356), value, 46, "#061c1e", SANS_BOLD)
    d.line([(990, 760), (1100, 675), (1210, 700), (1320, 590), (1450, 620), (1570, 510)], fill="#36c6b4", width=8)
    save(img, project, "cover.webp")

    img = solid((1800, 1200), "#f2f0e8")
    d = ImageDraw.Draw(img)
    text(d, (110, 100), "ORBIT KPI DASHBOARD", 40, "#061c1e", SANS_BOLD)
    cards = [("ARR", "$18.4M", "#36c6b4"), ("Net revenue retention", "124%", "#6b7bff"), ("Pipeline", "$4.8M", "#d6a34a")]
    for i, (label, value, color) in enumerate(cards):
        x = 110 + i * 535
        rounded(d, (x, 230, x + 450, 470), 20, "#ffffff", "#d2d7d3", 2)
        text(d, (x + 34, 282), label.upper(), 19, "#5c837d", SANS_BOLD)
        text(d, (x + 34, 344), value, 60, "#061c1e", SANS_BOLD)
        rect(d, (x + 34, 420, x + 290, 434), color)
    rect(d, (110, 600, 1660, 980), "#ffffff", "#d2d7d3", 2)
    d.line([(170, 900), (360, 810), (540, 840), (760, 730), (980, 760), (1260, 640), (1580, 690)], fill="#36c6b4", width=8)
    save(img, project, "kpi-dashboard.webp")

    img = solid((1800, 900), "#061c1e")
    d = ImageDraw.Draw(img)
    text(d, (96, 88), "ORBIT", 48, "#e9f3ee", SANS_BOLD)
    text(d, (96, 228), "FINTECH GROWTH\nBRIEFING", 80, "#e9f3ee", SERIF)
    text(d, (100, 562), "WEBINAR / 22 OCTOBER 2026 / 18:00 CET", 29, "#96b9b0", SANS_BOLD)
    rounded(d, (1250, 620, 1588, 698), 39, "#36c6b4", None)
    text(d, (1419, 660), "REGISTER", 25, "#061c1e", SANS_BOLD, "mm")
    save(img, project, "webinar-banner.webp")


def make_echo() -> None:
    project = "echo-commerce"
    img = solid((1800, 1200), "#f2eee8")
    d = ImageDraw.Draw(img)
    text(d, (110, 96), "ECHO COMMERCE", 54, "#181818", SANS_BOLD)
    text(d, (110, 238), "LAUNCH WEEK\nCREATIVE KIT", 94, "#181818", SERIF)
    rect(d, (970, 110, 1620, 1030), "#ffffff", "#d0c8be", 3)
    text(d, (1035, 190), "SHOP THE EDIT", 36, "#181818", SANS_BOLD)
    rect(d, (1035, 300, 1530, 600), "#d7c7b7")
    rounded(d, (1035, 720, 1325, 792), 36, "#181818", None)
    text(d, (1180, 756), "VIEW SALE", 22, "#f2eee8", SANS_BOLD, "mm")
    save(img, project, "cover.webp")

    img = solid((1800, 900), "#181818")
    d = ImageDraw.Draw(img)
    text(d, (100, 88), "ECHO COMMERCE", 40, "#f2eee8", SANS_BOLD)
    text(d, (100, 230), "48 HOURS\nOF QUIET LUXURY", 80, "#f2eee8", SERIF)
    text(d, (104, 550), "Email hero layout with one message, one offer and one conversion path.", 29, "#c8bdb0", SANS)
    rounded(d, (1190, 500, 1540, 580), 40, "#f2eee8", None)
    text(d, (1365, 540), "SHOP NOW", 24, "#181818", SANS_BOLD, "mm")
    save(img, project, "email-hero.webp")

    img = solid((1600, 1200), "#f2eee8")
    d = ImageDraw.Draw(img)
    for i in range(3):
        x = 110 + i * 495
        rounded(d, (x, 110, x + 390, 1050), 40, "#ffffff", "#d0c8be", 3)
        text(d, (x + 46, 180), "ECHO", 34, "#181818", SANS_BOLD)
        text(d, (x + 46, 320), ["NEW DROP", "BUNDLE SAVE", "LAST CALL"][i], 54, "#181818", SERIF)
        rect(d, (x + 46, 610, x + 344, 820), ["#d7c7b7", "#b8c2ba", "#c2b5d1"][i])
        text(d, (x + 46, 928), "SHOP NOW ->", 24, "#181818", SANS_BOLD)
    save(img, project, "social-carousel.webp")

    img = solid((1800, 1200), "#ffffff")
    d = ImageDraw.Draw(img)
    text(d, (110, 90), "ECHO RETAIL DISPLAY", 42, "#181818", SANS_BOLD)
    rect(d, (160, 260, 1640, 900), "#f2eee8", "#d0c8be", 4)
    text(d, (240, 366), "THE EDIT\nIS LIVE", 92, "#181818", SERIF)
    for i, color in enumerate(["#d7c7b7", "#b8c2ba", "#c2b5d1"]):
        rect(d, (1080 + i * 145, 410, 1185 + i * 145, 690), color)
    text(d, (240, 760), "SELECT PIECES / LIMITED RUN / ONLINE + IN STORE", 25, "#6b6258", SANS_BOLD)
    save(img, project, "retail-display.webp")


def main() -> None:
    make_maison()
    make_sola()
    make_northline()
    make_after_midnight()
    make_kinetic()
    make_form26()
    make_pawpaw()
    make_miso()
    make_orbit()
    make_echo()


if __name__ == "__main__":
    main()
