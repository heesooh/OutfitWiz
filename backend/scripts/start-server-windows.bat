@echo off

cd ..

call C:\ProgramData\miniconda3\Scripts\activate.bat

call conda activate outfitwiz_env

echo Running migrations...
python manage.py makemigrations
python manage.py migrate

echo Starting Django development server...
start cmd /K "python manage.py runserver"

echo Performing Ping...
curl http://127.0.0.1:8000/ping/