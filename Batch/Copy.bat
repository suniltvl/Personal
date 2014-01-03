@echo off
set includeDll=*.dll
set includeExe= *.exe
set includeXml= *.xml 
set includeXlsx=*.xlsx 
set excludeFile=chilk* 
set purge=/purge


set sourceSLRoot=E:\Inforius-SVN\Inforius.V9\trunk\02SL\
set sourceRoot="%sourceSLRoot%\WinService"
set destinationRoot=D:\InforiusV9Tools_Test\


set srClDataSync="%sourceRoot%DataSync\Client\Inforius.DataSyncService.Client\bin"
set srClDataSyncServer="%sourceRoot%DataSync\Server\Inforius.DataSyncService.Server\bin"
set srClDataSyncServerLocal="%sourceRoot%DataSync\Server\Inforius.DataSyncService.ServerLocal\bin"
set srClAcWebApi="%sourceSLRoot%WebApi\AC\Inooga.AC.WebApi\bin"
set srClInfWebApi="%sourceSLRoot%WebApi\Inforius\Inforius.WebApi\bin"


set drClDataSync="%destinationRoot%Client\ServicesForClient\InforiusDataSync"
set drClDataSyncServer="%destinationRoot%Client\ServicesForClient\InforiusDataSyncServer"
set drClDataSyncServerLocal="%destinationRoot%Server\ServicesForServer"
set drClAcWebApi="%destinationRoot%Server\AcWebApi"
set drClInfWebApi="%destinationRoot%Client\WebApi"



call:copyFunction %srClDataSync% %drClDataSync% %excludeFile%
call:copyFunction %srClDataSyncServer% %drClDataSyncServer% %excludeFile%
call:copyFunction %srClDataSyncServerLocal% %drClDataSyncServerLocal% %excludeFile%
call:copyFunction %srClAcWebApi% %drClAcWebApi% %excludeFile%
call:copyFunction %srClInfWebApi% %drClInfWebApi% %excludeFile%



echo.&pause&goto:eof

:copyFunction

robocopy "%~1" "%~2" %includeDll% %includeExe% /xf %~3 %purge%

goto:eof

