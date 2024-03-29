echo Please run "Conda init" if you haven't done so.

echo Create a new channel named "conda_forage"...
echo Create a new environment named "outfitwiz_env"...
echo Install all dependencies without manual confirmation...
conda create -c conda_forge -n outfitwiz_env --file environment.yml -y

echo Activate the new "outfitwiz_env" created above...
conda activate outfitwiz_env

echo Deploying the service...
echo Access the server on: "http://127.0.0.1:8000"
python ../../manage.py makemigrations
python ../../manage.py migrate
python ../../manage.py runserver

