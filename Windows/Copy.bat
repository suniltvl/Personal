@echo off
set includeDll=*.dll
set includeExe= *.exe
set includeXml= *.xml 
set includeXlsx=*.xlsx 
set excludeFile=chilk* 
set purge=/purge


set sourceRoot=E:\Inforius-SVN\Inforius.V9\trunk\02SL\WinService\
set destinationRoot=D:\InforiusV9Tools_Test\


set srClDataSync="%sourceRoot%DataSync\Client\Inforius.DataSyncService.Client\bin"
set srClDataSyncServer="%sourceRoot%DataSync\Server\Inforius.DataSyncService.Server\bin"
set srClDataSyncServerLocal="%sourceRoot%DataSync\Server\Inforius.DataSyncService.ServerLocal\bin"


set drClDataSync="%destinationRoot%Client\ServicesForClient\InforiusDataSync"
set drClDataSyncServer="%destinationRoot%Client\ServicesForClient\InforiusDataSyncServer"
set drClDataSyncServerLocal="%destinationRoot%Server\ServicesForServer"



call:copyFunction %srClDataSync% %drClDataSync% %excludeFile%
call:copyFunction %srClDataSyncServer% %drClDataSyncServer% %excludeFile%
call:copyFunction %srClDataSyncServerLocal% %drClDataSyncServerLocal% %excludeFile%



echo.&pause&goto:eof

:copyFunction

robocopy "%~1" "%~2" %includeDll% %includeExe% /xf %~3 %purge%

goto:eof

