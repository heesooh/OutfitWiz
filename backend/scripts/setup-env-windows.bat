@echo off

cd ..

call C:\ProgramData\miniconda3\Scripts\activate.bat

conda create -n outfitwiz_env --file environment.yml -y

call conda activate outfitwiz_env

pause