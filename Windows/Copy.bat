@echo off
set includeDll=*.dll 
set includeXml= *.xml 
set includeXlsx=*.xlsx 
set excudeFile=chilk* 
set purge=/purge

set sourceRoot=D:\Temp\
set destinationRoot=D:\Temp\

set sr="%sourceRoot%Folder 2"
set dr="%destinationRoot%Folder 1"
set dr1="New Folder"


call:copyFunction %sr% %dr%

echo.&pause&goto:eof

:copyFunction

robocopy /E "%~1" "%~2" %includeDll% %includeXml% %includeXlsx% /xf %excudeFile% %purge%

goto:eof

