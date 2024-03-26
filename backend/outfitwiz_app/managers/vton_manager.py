import asyncio
import os 

class VTONManager:

    @staticmethod
    def set_pairs(image1_name, image2_name):
        try:
            # Open the file in 'a' mode (append)
            with open('outfitwiz_app/vton/datasets/test_pairs_dynamic.txt', 'w') as file:
                # Write the strings to the file, separated by a space
                file.write(f"{image1_name} {image2_name}\n")
        except Exception as e:
            print(f"Error occurred while writing to file: {e}")

    @staticmethod
    async def call_test_script():
        try:
            test_script_path = os.path.join('outfitwiz_app', 'vton', 'test.py')
            process = await asyncio.create_subprocess_exec('python', test_script_path)
            await process.wait()
        except asyncio.subprocess.CalledProcessError as e:
            print(f"Error: {e}")