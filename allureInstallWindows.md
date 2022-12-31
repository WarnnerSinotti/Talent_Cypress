site -> https://docs.qameta.io/allure-report/

2.1.3. Windows
For Windows, Allure is available from the Scoop commandline-installer.

To install Allure, download and install Scoop and then execute in the Powershell:

scoop install allure
Also Scoop is capable of updating Allure distribution installations. To do so navigate to the Scoop installation directory and execute

\bin\checkver.ps1 allure -u
This will check for newer versions of Allure, and update the manifest file. Then execute

scoop update allure
to install a newer version. (documentation)
