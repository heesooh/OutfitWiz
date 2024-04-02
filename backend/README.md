# OutfitWiz
AI technology designed for e-commerce fashion retailers and online shoppers, offering a unique virtual try-on experience that enhances consumer confidence and satisfaction.

## Installation
To install the dev environment for this project, you need to first install miniconda and cuda. 
https://docs.anaconda.com/free/miniconda/index.html

If you are on PC, you can navigate to the scripts folder and run 'setup-env-windows.bat'. It may take a few minutes. To verify its installation, you can run 'open-env-windows.bat' to verify it has been created. You will see the 'outfitwiz_env' pop up in the console. 

If you can not run the file, you can run the following commands:
- conda create -n outfitwiz_env python=3.8
- call conda activate outfitwiz_env
- pip install -r requirements.txt

To test the server is running, goto 'http://127.0.0.1:8000/home'. To start the server you can either run the file 'start-server-windows.bat' or run the following command:
- python manage.py runserver