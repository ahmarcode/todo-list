import os
import urllib.request

# Base URL
base_url = 'https://cyberfiction.io/sequence/'

# Directory to save images
download_dir = 'C:/Users/Asus/Desktop/Arsenal/Projects/Anime 3D/Canvas-02'

# Function to generate image URLs
def generate_image_urls(base_url, start, end, padding, extension):
    urls = []
    for i in range(start, end + 1):
        num = str(i).zfill(padding)
        urls.append(f'{base_url}{num}.{extension}')
    return urls

# Function to download an image
def download_image(url, download_dir):
    try:
        file_name = os.path.basename(url)
        file_path = os.path.join(download_dir, file_name)
        
        urllib.request.urlretrieve(url, file_path)
        
        print(f'Downloaded: {url}')
    except Exception as e:
        print(f'Failed to download {url}: {e}')

# Generate image URLs
image_urls = generate_image_urls(base_url, 1, 469, 4, 'png')

# Create directory if it doesn't exist
if not os.path.exists(download_dir):
    os.makedirs(download_dir)

# Download all images
for url in image_urls:
    download_image(url, download_dir)

print('All images downloaded')
