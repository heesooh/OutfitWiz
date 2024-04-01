from bs4 import BeautifulSoup
import requests
import base64
import os

class WebManager:

    @staticmethod
    def perform_webscrape(source_url: str, source_is_local: bool = False):
        # Initialize an empty list to store image data
        images_data = []

        try:
            # Read the HTML content from the source (local file or URL)
            if source_is_local:
                source_url = source_url[8:]
                with open(source_url, 'r', encoding='utf-8') as file:
                    html_content = file.read()
            else:
                response = requests.get(source_url)
                html_content = response.text

            # Parse the HTML content using BeautifulSoup
            soup = BeautifulSoup(html_content, 'html.parser')

            # Find all <img> tags with src attribute
            img_tags = soup.find_all('img', src=True)

            # Process each image
            for img_tag in img_tags:
                # Extract image URL and name
                image_url = img_tag['src']
                image_name = os.path.basename(image_url)

                # Fetch image content (replace this with your method of fetching image content)
                if source_is_local:
                    image_url = os.path.dirname(source_url) + '/' + image_url
                    with open(image_url, 'rb') as image_file:
                        image_content = image_file.read()
                else:
                    response = requests.get(image_url)
                    image_content = response.content

                # Encode image content to base64
                image_base64 = base64.b64encode(image_content).decode('utf-8')

                # Create image dictionary with name, URL, and base64 encoding
                image_data = {
                    'name': image_name,
                    'url': image_url,
                    'base64': image_base64
                }

                # Append image dictionary to the list
                images_data.append(image_data)

        except Exception as e:
            print(f"Error during web scraping: {e}")
        
        # Return the list of image data
        return images_data
