import asyncio
import os 

class VTONManager:

    async def call_test_script():
        try:
            test_script_path = os.path.join('outfitwiz_app', 'vton', 'test.py')
            process = await asyncio.create_subprocess_exec('python', test_script_path)
            await process.wait()
        except asyncio.subprocess.CalledProcessError as e:
            print(f"Error: {e}")