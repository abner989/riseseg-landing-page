"""Create a contact sheet of downloaded raster brand assets for visual QA."""
from pathlib import Path
from PIL import Image, ImageDraw

root = Path(__file__).resolve().parents[1]
files = []
for path in (root / 'public/rise-seg/partners').iterdir():
    if path.suffix.lower() in ['.png', '.webp']:
        try:
            picture = Image.open(path).convert('RGBA')
            if path.name == 'omint.webp':
                from collections import Counter
                print('OMINT opaque colors', Counter(pixel[:3] for pixel in picture.getdata() if pixel[3] > 128).most_common(4))
            files.append((path, picture))
        except Exception as error:
            print(path.name, error)
sheet = Image.new('RGB', (900, ((len(files) + 3) // 4) * 130), 'white')
draw = ImageDraw.Draw(sheet)
for index, (path, picture) in enumerate(files):
    print(path.name, picture.size, path.stat().st_size)
    picture.thumbnail((190, 80))
    x, y = (index % 4) * 225, (index // 4) * 130
    sheet.paste(picture, (x + (225-picture.width)//2, y+10), picture)
    draw.text((x+10, y+100), path.name, fill='black')
sheet.save(root / 'partner-qa.png')
