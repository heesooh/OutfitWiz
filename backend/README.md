# OutfitWiz
AI technology designed for e-commerce fashion retailers and online shoppers, offering a unique virtual try-on experience that enhances consumer confidence and satisfaction.

## Installation
To install the dev environment for this project, you need to first install miniconda. 
https://docs.anaconda.com/free/miniconda/index.html

If you are on PC, you can navigate to the scripts folder and run 'setup-env-windows.bat'. It may take a few minutes. To verify its installation, you can run 'open-env-windows.bat' to see verify it has been created. You will see the 'outfitwiz_env' pop up in the console. 

On MAC, you can run 'conda create -n outfitwiz_env --file environment.yml -y'. To start the env you can run 'conda activate outfitwiz_env'. After activating the server you can run 'python manage.py runserver' to start to server, and goto 'http://127.0.0.1:8000/home'.


On PC you can run the same commands as listed above, or you can simply run 'start-server-windows.bat'.

## Frontend Explanation

This Django application manages serving the frontend files to the user. The URLS for 'home', 'login', 'profile', and 'product' have already been configured to navigate to the 'home_page.html', 'login_page.html', 'profile_page.html', and 'product_page.hyml' respectively. These html files are found inside 'outfitwiz_app/templates/outfitwiz_app/'. The stylesheet is called 'stylesheet1.css' and is found inside 'outfitwiz_app/static/outfitwiz_app/css/'. 

The home page and product page currently extend the 'base.html' file. This is done because the base.html is where the logo and the navigation bar is defined. This is done because this will be displayed on every page, and it is a good practice to resuse this code.


