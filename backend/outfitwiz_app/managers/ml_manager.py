from outfitwiz_app.managers.vton_manager import VTONManager
import os

class MLManager:

    @staticmethod
    async def perform_prediction(image1_name, image2_name):   
        VTONManager.set_pairs(image1_name, image2_name)     
        await VTONManager.call_test_script()
        prediction_name = image1_name[:-7] + "_" + image2_name
        return prediction_name
