@echo off

cd ..

call C:\ProgramData\miniconda3\Scripts\activate.bat

echo Creating Conda environment...
conda create -n outfitwiz_env python=3.8

echo Activating Conda environment...
call conda activate outfitwiz_env 

echo Installing requirements...
pip install -r requirements.txt

pause