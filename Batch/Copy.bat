@echo off
set includeDll=*.dll
set includeExe= *.exe
set includeJs=*.js *.map
set includeHtml=*.html *.config
set includeStyle=*.png *.jpg *.gif *.css *.less 
set includeXml= *.xml 
set includeXlsx=*.xlsx 
set excludeFile=chilk* 
set purge=/purge

set trunkPath=E:\Inforius-SVN\Inforius.V9\trunk
set sourceSLRoot=%trunkPath%\02SL
set sourceRoot=%sourceSLRoot%\WinService
set destinationRoot=D:\InforiusV9Tools\


set srClDataSync="%sourceRoot%\DataSync\Client\Inforius.DataSyncService.Client\bin"
set srClDataSyncServer="%sourceRoot%\DataSync\Server\Inforius.DataSyncService.Server\bin"
set srClInfWebApi="%sourceSLRoot%\WebApi\Inforius\Inforius.WebApi"
set srSrDataSyncServerLocal="%sourceRoot%\DataSync\Server\Inforius.DataSyncService.ServerLocal\bin"
set srSrAcWebApi="%sourceSLRoot%\WebApi\AC\Inooga.AC.WebApi"
set srSrAcCDN="%trunkPath%\01PL\CDN\AC.CDN"
set srSrAcWeb="%trunkPath%\01PL\Web\Html\AC\AC.Web.Kendo"


set drClDataSync="%destinationRoot%Client\ServicesForClient\InforiusDataSync"
set drClDataSyncServer="%destinationRoot%Client\ServicesForClient\InforiusDataSyncServer"
set drClInfWebApi="%destinationRoot%Client\WebApi"
set drSrDataSyncServerLocal="%destinationRoot%Server\ServicesForServer"
set drSrAcWebApi="%destinationRoot%Server\AcWebApi"
set drSrAcCdn="%destinationRoot%Server\AcCdn"
set drSrAcWeb="%destinationRoot%Server\AcWeb"




call:copyFunction %srClDataSync% %drClDataSync% %excludeFile%
call:copyFunction %srClDataSyncServer% %drClDataSyncServer% %excludeFile%
call:copyFunctionWeb %srClInfWebApi% %drClInfWebApi% %excludeFile%
call:copyFunction %srSrDataSyncServerLocal% %drSrDataSyncServerLocal% %excludeFile%
call:copyFunctionWeb %srSrAcWebApi% %drSrAcWebApi% %excludeFile%
call:copyFunctionWeb %srSrAcCDN% %drSrAcCdn% %excludeFile%
call:copyFunctionWeb %srSrAcWeb% %drSrAcWeb% %excludeFile%




echo.&pause&goto:eof

:copyFunction

robocopy "%~1" "%~2" %includeDll% %includeExe% /xf %~3 %purge%

goto:eof

:copyFunctionWeb

robocopy /E "%~1" "%~2" %includeDll% %includeJs% %includeHtml% %includeStyle% /xf %~3 /xd *"obj" *"Properties" *"Service References" *"Resx" %purge%

goto:eof

