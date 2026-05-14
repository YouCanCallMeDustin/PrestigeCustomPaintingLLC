import json

input_file = r"c:\Users\dusti\OneDrive\Desktop\Businesses Websites\prestige-painting\website\src\data\areaData.json"
output_file = input_file

cities_to_remove = [
    "Fairfield",
    "Waverly",
    "Latah",
    "Elk",
    "Plaza",
    "Tyler",
    "Grandview",
    "Michaud",
    "Antelope",
    "Blossom",
    "Darty",
    "Fairbank",
    "Waysat",
    "Skilsaw",
    "Grapeland",
    "Liberty Quarter"
]

with open(input_file, 'r', encoding='utf-8') as f:
    data = json.load(f)

filtered_data = [item for item in data if item.get('city') not in cities_to_remove]

with open(output_file, 'w', encoding='utf-8') as f:
    json.dump(filtered_data, f, indent=4)

print(f"Removed {len(data) - len(filtered_data)} cities.")
