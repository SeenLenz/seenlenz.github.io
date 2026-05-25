import os
import shutil
from pathlib import Path

root_dir = Path(".")
img_dir = root_dir / "img"
img_dir.mkdir(exist_ok=True)

allowed_extensions = {'.png', '.jpg', '.jpeg', '.svg', '.webp'}

for item in root_dir.rglob("*"):
    if item.is_file() and item.suffix.lower() in allowed_extensions:
        # Skip if the image is already in the img folder
        if "img" not in item.parts:
            target_path = img_dir / item.name
            # Copy the file to the new img directory
            shutil.copy2(item, target_path)
            print(f"Copied: {item.name}")
            