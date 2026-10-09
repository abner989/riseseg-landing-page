"""Prepare web-sized versions; preserve the supplied logo geometry and portraits."""
from pathlib import Path
from PIL import Image

root = Path(__file__).resolve().parents[1]
assets = root / 'public' / 'rise-seg'
hero = Image.open(r'C:\Users\abner\.codex\generated_images\01a08b52-9eed-7242-8f4a-0699ad5ea327\exec-9cca2ddc-9809-42dd-a214-3e5f82b9abcf.png').convert('RGB')
hero.thumbnail((1400, 1000), Image.Resampling.LANCZOS)
hero.save(assets / 'familia-riseseg.webp', quality=87, method=6)

logo = Image.open(assets / 'logo-riseseg-v21.png').convert('RGBA')
alpha = logo.getchannel('A')
bounds = alpha.point(lambda p: 255 if p > 10 else 0).getbbox()
if not bounds:
    raise ValueError('The supplied logo has no visible pixels')
logo = logo.crop(bounds)
logo.thumbnail((780, 260), Image.Resampling.LANCZOS)
for filename, color in [('logo-riseseg-white.png', '#ffffff'), ('logo-riseseg-navy.png', '#17384a')]:
    mark = Image.new('RGBA', logo.size, color)
    mark.putalpha(logo.getchannel('A'))
    mark.save(assets / filename, optimize=True)

for source, target in [('foto-gui.jpeg', 'guilherme.webp'), ('foto-isa.jpeg', 'isabela.webp'), ('humana.jpg', 'humana.webp'), ('consultiva.jpg', 'consultiva.webp'), ('contemporanea.jpg', 'contemporanea.webp'), ('hero-riseseg-original.png', 'empresas.webp')]:
    picture = Image.open(assets / source).convert('RGB')
    picture.thumbnail((1000, 1200), Image.Resampling.LANCZOS)
    picture.save(assets / target, quality=85, method=6)
print('Web assets prepared:', logo.size)
