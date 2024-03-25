from pylab import imshow
import numpy as np
import cv2
import torch
import albumentations as albu
from iglovikov_helper_functions.utils.image_utils import load_rgb, pad, unpad
from iglovikov_helper_functions.dl.pytorch.utils import tensor_from_rgb_image
from cloths_segmentation.pre_trained_models import create_model
import warnings
warnings.filterwarnings("ignore")

def process_cloth_image(image_path, save_path_mask):
    model = create_model("Unet_2020-10-30")
    model.eval()
    image = load_rgb(image_path)

    transform = albu.Compose([albu.Normalize(p=1)], p=1)

    padded_image, pads = pad(image, factor=32, border=cv2.BORDER_CONSTANT)

    x = transform(image=padded_image)["image"]
    x = torch.unsqueeze(tensor_from_rgb_image(x), 0)

    with torch.no_grad():
        prediction = model(x)[0][0]

    mask = (prediction > 0).cpu().numpy().astype(np.uint8)
    mask = unpad(mask, pads)

    img = np.full((1024,768,3), 255)
    seg_img = np.full((1024,768), 0)

    b = cv2.imread(image_path)
    b_img = mask * 255

    if b.shape[1] <= 600 and b.shape[0] <= 500:
        b = cv2.resize(b, (int(b.shape[1] * 1.2), int(b.shape[0] * 1.2)))
        b_img = cv2.resize(b_img, (int(b_img.shape[1] * 1.2), int(b_img.shape[0] * 1.2)))
    
    shape = b_img.shape
    img[int((1024 - shape[0]) / 2): 1024 - int((1024 - shape[0]) / 2), int((768 - shape[1]) / 2):768 - int((768 - shape[1]) / 2)] = b
    seg_img[int((1024 - shape[0]) / 2): 1024 - int((1024 - shape[0]) / 2), int((768 - shape[1]) / 2):768 - int((768 - shape[1]) / 2)] = b_img

    cv2.imwrite(save_path_mask, seg_img)

# Use the function for the specified files
process_cloth_image('/home/rzhyang/Desktop/repos/OutfitWiz/backend/outfitwiz_app/vton/datasets/test/cloth/test.jpg', 
                    '/home/rzhyang/Desktop/repos/OutfitWiz/backend/outfitwiz_app/vton/datasets/test/cloth-mask/test.jpg')
