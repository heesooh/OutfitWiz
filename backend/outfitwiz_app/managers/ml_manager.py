from outfitwiz_app.managers.vton_manager import VTONManager
from outfitwiz_app.managers.cloth_manager import ClothManager
import os
import cv2

class MLManager:

    @staticmethod
    async def perform_prediction(image1_name, image2_name):   
        VTONManager.set_pairs(image1_name, image2_name)     
        await VTONManager.call_test_script()
        prediction_name = image1_name[:-7] + "_" + image2_name
        return prediction_name

    @staticmethod
    async def perform_prediction_new(photo_person_name, photo_clothing_name, photo_person, photo_clothing):   
        #photo_person_resized = cv2.resize(photo_person, (768, 1024))
        #photo_clothing_resized = cv2.resize(photo_clothing, (768, 1024))

        #photo_person_preprocessed = photo_person_resized # TODO !!!
        #photo_clothing_preprocessed = ClothManager.perform_cloth_preprocessing(photo_clothing_resized)

        photo_person_path = os.path.join('outfitwiz_app', 'vton', 'datasets', 'test', 'image', photo_person_name)
        photo_clothing_path = os.path.join('outfitwiz_app', 'vton', 'datasets', 'test', 'cloth', photo_clothing_name)

        #cv2.imwrite(photo_person_path, photo_person)
        #cv2.imwrite(photo_clothing_path, photo_clothing)

        #cv2.imwrite(photo_person_path, photo_person_preprocessed)
        #cv2.imwrite(photo_clothing_path, photo_clothing_preprocessed)

        VTONManager.set_pairs(photo_person_name, photo_clothing_name)     
        await VTONManager.call_test_script()

        photo_prediction_name = photo_person_name[:-7] + "_" + photo_clothing_name
        photo_prediction_path = os.path.join('outfitwiz_app', 'vton', 'results', 'demo', photo_prediction_name)
        photo_prediction = cv2.imread(photo_prediction_path)
        return photo_prediction
