from outfitwiz_app.managers.vton_manager import VTONManager
from outfitwiz_app.managers.cloth_manager import ClothManager
import os
import cv2
from PIL import Image
import io
import base64
import numpy as np

class MLManager:

    @staticmethod
    async def perform_prediction(image1_name, image2_name):   
        VTONManager.set_pairs(image1_name, image2_name)     
        await VTONManager.call_test_script()
        prediction_name = image1_name[:-7] + "_" + image2_name
        return prediction_name

    @staticmethod
    async def perform_prediction_new(photo_person_name, photo_clothing_name, photo_person, photo_clothing):   
        VTONManager.set_pairs(photo_person_name, photo_clothing_name)     
        await VTONManager.call_test_script()

        photo_prediction_name = photo_person_name[:-7] + "_" + photo_clothing_name
        photo_prediction_path = os.path.join('outfitwiz_app', 'vton', 'results', 'demo', photo_prediction_name)

        with open(photo_prediction_path, 'rb') as file:
            binary_data = file.read()

        buffer = io.BytesIO(binary_data)
        image = Image.open(buffer)

        base64_data = io.BytesIO()
        image.save(base64_data, format="JPEG")

        base64_string = base64.b64encode(base64_data.getvalue()).decode("utf-8")
        return base64_string
    
    @staticmethod
    async def perform_prediction_complete(photo_person_name, photo_clothing_name, photo_person_base64, photo_clothing_base64):   
        print("Part 1")
        photo_person_decoded = base64.b64decode(photo_person_base64)
        photo_cloth_decoded = base64.b64decode(photo_clothing_base64)
        print("Part 1.1")

        print(photo_person_decoded)
        photo_person_nparr = np.frombuffer(photo_person_decoded, np.uint8)
        photo_cloth_nparr = np.frombuffer(photo_cloth_decoded, np.uint8)
        print("Part 1.2")

        print(photo_person_nparr)

        photo_person_cv2 = cv2.imdecode(photo_person_nparr, cv2.IMREAD_COLOR)
        photo_cloth_cv2 = cv2.imdecode(photo_cloth_nparr, cv2.IMREAD_COLOR)


        print("Part 2")
        print("Photo person dimensions:", photo_person_cv2.shape)
        print("Photo person path:", photo_person_path)

        #photo_person_resized = cv2.resize(photo_person_cv2, (768, 1024))
        #photo_clothing_resized = cv2.resize(photo_cloth_cv2, (768, 1024))


        photo_person_path = os.path.join('outfitwiz_app', 'vton', 'datasets', 'preprocessing', 'image', photo_person_name)
        photo_clothing_path = os.path.join('outfitwiz_app', 'vton', 'datasets', 'preprocessing', 'cloth', photo_clothing_name)

        cv2.imwrite(photo_person_path, photo_person_cv2)
        cv2.imwrite(photo_clothing_path, photo_cloth_cv2)
        
        print("Part 3")

        #photo_person_preprocessed = photo_person_resized        # TODO
        #photo_clothing_preprocessed = photo_clothing_resized    # TODO: ClothManager.perform_cloth_preprocessing(photo_clothing_resized)

        #cv2.imwrite(photo_person_path, photo_person_preprocessed)
        #cv2.imwrite(photo_clothing_path, photo_clothing_preprocessed)

        #VTONManager.set_pairs(photo_person_name, photo_clothing_name)     
        #await VTONManager.call_test_script()

        #photo_prediction_name = photo_person_name[:-7] + "_" + photo_clothing_name
        #photo_prediction_path = os.path.join('outfitwiz_app', 'vton', 'results', 'demo', photo_prediction_name)

        #with open(photo_prediction_path, 'rb') as file:
        #    binary_data = file.read()

        #buffer = io.BytesIO(binary_data)
        #image = Image.open(buffer)
        #base64_data = io.BytesIO()
        #image.save(base64_data, format="JPEG")
        #base64_string = base64.b64encode(base64_data.getvalue()).decode("utf-8")
        #return base64_string
        return None
