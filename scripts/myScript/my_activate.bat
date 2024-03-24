echo Deploying the service...
echo Access the server on: "http://127.0.0.1:8000"

python ../../manage.py makemigrations
python ../../manage.py migrate
python ../../manage.py runserver