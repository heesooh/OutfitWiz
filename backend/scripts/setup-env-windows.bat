@echo off

cd ..

echo Activating Miniconda3...
echo If you face any issue, check if the Miniconda3 path is correct
echo You can find your Miniconda3 path with "where conda" on CMD
call C:\ProgramData\miniconda3\Scripts\activate.bat

echo Creating Conda environment...
call conda create -n outfitwiz_env python=3.8

echo Activating Conda environment...
call conda activate outfitwiz_env 

echo Installing Pytorch...
call pip install torch==2.2.1+cu121 -f https://download.pytorch.org/whl/torch_stable.html

echo Installing requirements...
call pip install -r requirements.txt

pause