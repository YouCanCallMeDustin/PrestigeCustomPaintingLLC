import json
import urllib.request
import urllib.parse
import math
import time

def haversine(lat1, lon1, lat2, lon2):
    R = 3958.8  # Earth radius in miles
    dLat = math.radians(lat2 - lat1)
    dLon = math.radians(lon2 - lon1)
    lat1 = math.radians(lat1)
    lat2 = math.radians(lat2)

    a = math.sin(dLat/2)**2 + math.cos(lat1)*math.cos(lat2)*math.sin(dLon/2)**2
    c = 2 * math.asin(math.sqrt(a))
    return R * c

def get_coords(city, state="WA"):
    url = f"https://nominatim.openstreetmap.org/search?city={urllib.parse.quote(city)}&state={state}&country=USA&format=json"
    headers = {'User-Agent': 'AntigravityAgent/1.0'}
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req) as response:
            data = json.loads(response.read().decode())
            if data:
                return float(data[0]['lat']), float(data[0]['lon'])
    except Exception as e:
        print(f"Error fetching {city}: {e}")
    
    # Try just the city name if city+state fails
    url2 = f"https://nominatim.openstreetmap.org/search?q={urllib.parse.quote(city + ', ' + state)}&format=json"
    req2 = urllib.request.Request(url2, headers=headers)
    try:
        with urllib.request.urlopen(req2) as response:
            data = json.loads(response.read().decode())
            if data:
                return float(data[0]['lat']), float(data[0]['lon'])
    except:
        pass
    return None, None

def main():
    spokane_coords = get_coords("Spokane", "WA")
    if not spokane_coords[0]:
        print("Could not find Spokane coords.")
        return

    print(f"Spokane coords: {spokane_coords}")

    with open(r'c:\Users\dusti\OneDrive\Desktop\Businesses Websites\prestige-painting\website\src\data\areaData.json', 'r') as f:
        data = json.load(f)

    to_remove = []
    
    for item in data:
        city = item['city']
        state = "ID" if city in ["Coeur d'Alene", "Post Falls"] or "id" in item['slug'] else "WA"
        
        lat, lon = get_coords(city, state)
        if lat and lon:
            dist = haversine(spokane_coords[0], spokane_coords[1], lat, lon)
            print(f"{city}, {state}: {dist:.2f} miles")
            if dist > 25:
                to_remove.append((city, dist))
        else:
            print(f"Could not find coordinates for {city}, {state}")
            
        time.sleep(1) # Be nice to nominatim

    print("\nTowns > 25 miles away:")
    for city, dist in to_remove:
        print(f"- {city}: {dist:.2f} miles")

if __name__ == '__main__':
    main()
