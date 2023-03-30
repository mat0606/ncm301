"use strict";(self.webpackChunkncm_301=self.webpackChunkncm_301||[]).push([[3165],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),s=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},k="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},N=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),k=s(a),N=r,d=k["".concat(o,".").concat(N)]||k[N]||c[N]||i;return a?n.createElement(d,p(p({ref:t},m),{},{components:a})):n.createElement(d,p({ref:t},m))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,p=new Array(i);p[0]=N;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[k]="string"==typeof e?e:r,p[1]=l;for(var s=2;s<i;s++)p[s]=a[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}N.displayName="MDXCreateElement"},26221:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const i={title:"Calm: Windows Workloads"},p=void 0,l={unversionedId:"calm_windows_track/calm_windows_app/calm_windows_app.rst",id:"calm_windows_track/calm_windows_app/calm_windows_app.rst",title:"Calm: Windows Workloads",description:"The estimated time to complete this lab is 60 minutes.",source:"@site/docs/calm_windows_track/calm_windows_app/calm_windows_app.rst.md",sourceDirName:"calm_windows_track/calm_windows_app",slug:"/calm_windows_track/calm_windows_app/calm_windows_app.rst",permalink:"/ncm301/calm_windows_track/calm_windows_app/calm_windows_app.rst",draft:!1,editUrl:"https://github.com/mat0606/ncm301/edit/main/docs/calm_windows_track/calm_windows_app/calm_windows_app.rst.md",tags:[],version:"current",frontMatter:{title:"Calm: Windows Workloads"}},o={},s=[],m={toc:s},k="wrapper";function c(e){let{components:t,...i}=e;return(0,r.kt)(k,(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"The estimated time to complete this lab is 60 minutes.")),(0,r.kt)("h1",{id:"overview"},"Overview"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"In this exercise you will explore the basics of working with Windows\nworkloads in Nutanix Calm by building and deploying a blueprint that\ninstalls and configures a multi-tier")," ",(0,r.kt)("a",{parentName:"p",href:"http://bugnetproject.com/documentation/"},"bug\ntracker")," ",(0,r.kt)("strong",{parentName:"p"},"web app using\nMicrosoft SQL Server database & IIS webserver. This lab assumes you are\nfamiliar with basic Calm functionality or have completed the"),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"calm_linux"),'{.interpreted-text role="ref"} ',(0,r.kt)("strong",{parentName:"p"},"lab.")),(0,r.kt)("h1",{id:"creating-the-blueprint"},"Creating the Blueprint"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Within Calm, create a new ",(0,r.kt)("strong",{parentName:"p"},"Multi VM/Pod Blueprint"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Fill out the following fields and click ",(0,r.kt)("strong",{parentName:"p"},"Proceed")," to launch the\nBlueprint Editor:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Name")," - ",(0,r.kt)("em",{parentName:"li"},"Initials"),"-CalmWindowsIntro"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Description")," - ","[","BugNET","]","(http://@@{MSIIS.address}@@/bugnet)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Project")," - ",(0,r.kt)("em",{parentName:"li"},"Initials"),"-Calm")),(0,r.kt)("p",{parentName:"li"},"::: note\n::: title\nNote\n:::"),(0,r.kt)("p",{parentName:"li"},"Using the description value provided will create a hyperlink to the\nBugNET application to launch once deployment has completed.\n:::")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Credentials")," and create the following two credentials:"),(0,r.kt)("hr",{parentName:"li"}),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("strong",{parentName:"p"},"Credential Name"),"   WIN_VM_CRED           SQL_CRED"),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("strong",{parentName:"p"},"Username"),"          Administrator         Administrator"),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("strong",{parentName:"p"},"Secret Type"),"       Password              Password"),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("strong",{parentName:"p"},"Password"),"          nutanix/4u            Str0ngSQL/4u\\$"),(0,r.kt)("hr",{parentName:"li"}),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(43153).Z,width:"604",height:"404"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Save")," and return back to the Blueprint Editor.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"::: note\n::: title\nNote\n:::\n:::"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"This step illustrated the ability to download the image\ndynamically. This iso file was more than 3 GB and would take some\ntime to load. Skip this step because the iso file was already\nuploaded in the image in Prism Central.")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Configuration")," and create the following ",(0,r.kt)("strong",{parentName:"p"},"Downloadable Image\nConfiguration"),":"),(0,r.kt)("blockquote",{parentName:"blockquote"},(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Package Name")," - MSSQL2014_ISO"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Description")," - Microsoft SQL 2014 Installation ISO"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Image Name")," - MSSQL2014.iso"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Image Type")," - ISO Image"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Architecture")," - X86_64"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Source URI")," -\n",(0,r.kt)("a",{parentName:"li",href:"http://download.microsoft.com/download/7/9/F/79F4584A-A957-436B-8534-3397F33790A6/SQLServer2014SP3-FullSlipstream-x64-ENU.iso"},"http://download.microsoft.com/download/7/9/F/79F4584A-A957-436B-8534-3397F33790A6/SQLServer2014SP3-FullSlipstream-x64-ENU.iso")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Product Name")," - MSSQL"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Product Version")," - 2014"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Checksum Algorithm")," - ",(0,r.kt)("em",{parentName:"li"},"Leave blank")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Checksum Value")," - ",(0,r.kt)("em",{parentName:"li"},"Leave blank"))),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("img",{src:a(36329).Z,width:"319",height:"692"})))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Save")," and return back to the Blueprint Editor.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Using the ",(0,r.kt)("strong",{parentName:"p"},"Default")," Application Profile, specify the following\n",(0,r.kt)("strong",{parentName:"p"},"Variables")," in the ",(0,r.kt)("strong",{parentName:"p"},"Configuration Panel"),":"),(0,r.kt)("hr",{parentName:"li"}),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("strong",{parentName:"p"},"Name"),"          ",(0,r.kt)("strong",{parentName:"p"},"Data Type")," ",(0,r.kt)("strong",{parentName:"p"},"Value")," ","|","   ",(0,r.kt)("strong",{parentName:"p"},"Secret"),"   ",(0,r.kt)("strong",{parentName:"p"},"Runtime")),(0,r.kt)("hr",{parentName:"li"}),(0,r.kt)("p",{parentName:"li"},"  DbName            String        BugNET ","|","      No           Yes"),(0,r.kt)("p",{parentName:"li"},"  DbUsername        String        BugNETUser ","|","  No           Yes"),(0,r.kt)("p",{parentName:"li"},"  DbPassword        String        Nutanix/4u\\$   Yes          Yes\n","|","                          "),(0,r.kt)("p",{parentName:"li"},"  User_initials     String        ",(0,r.kt)("em",{parentName:"p"},"Leave blank"),"  No           Yes\n","|","                          "),(0,r.kt)("hr",{parentName:"li"}),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(3879).Z,width:"659",height:"616"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Save"),"."))),(0,r.kt)("h1",{id:"adding-services"},"Adding Services"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Under ",(0,r.kt)("strong",{parentName:"p"},"Application Overview ",">"," Services"),", click\n",(0,r.kt)("inlineCode",{parentName:"p"},"plus-circle"),'{.interpreted-text role="fa"} twice to add two new\nServices.'),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(12675).Z,width:"247",height:"261"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Use the table below to complete the ",(0,r.kt)("strong",{parentName:"p"},"VM")," fields for each service:"),(0,r.kt)("hr",{parentName:"li"}),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("strong",{parentName:"p"},"Service Name"),"          ",(0,r.kt)("strong",{parentName:"p"},"MSSQL"),"                   ",(0,r.kt)("strong",{parentName:"p"},"MSIIS")),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("strong",{parentName:"p"},"Name"),"                  MSSQL2014                   MSIIS8"),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("strong",{parentName:"p"},"Cloud"),"                 Nutanix                     Nutanix"),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("strong",{parentName:"p"},"Operating System"),"      Windows                     Windows"),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("strong",{parentName:"p"},"VM Name"),"               @@{User_initials}@@-MSSQL   @@{User_initials}@@-MSIIS"),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("strong",{parentName:"p"},"Number of Images"),"      2                           1"),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("strong",{parentName:"p"},"Image 1"),"               Windows2016                 Windows2016"),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("strong",{parentName:"p"},"Device Type 1"),"         DISK                        DISK"),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("strong",{parentName:"p"},"Device Bus 1"),"          SCSI                        SCSI"),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("strong",{parentName:"p"},"Bootable 1"),"            Yes                         Yes"),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("strong",{parentName:"p"},"Image 2"),"               MSSQL2014_ISO               N/A"),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("strong",{parentName:"p"},"Device Type 2"),"         CD-ROM                      N/A"),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("strong",{parentName:"p"},"Device Bus 2"),"          IDE                         N/A"),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("strong",{parentName:"p"},"Bootable 2"),"            No                          N/A"),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("strong",{parentName:"p"},"vCPUs"),"                 2                           2"),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("strong",{parentName:"p"},"Cores per vCPU"),"        2                           2"),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("strong",{parentName:"p"},"Memory (GiB)"),"          6                           6"),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("strong",{parentName:"p"},"Guest Customization"),"   Yes                         Yes"),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("strong",{parentName:"p"},"Type"),"                  Sysprep                     Sysprep"),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("strong",{parentName:"p"},"Install Type"),"          Prepared                    Prepared"),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("strong",{parentName:"p"},"Script"),"                ",(0,r.kt)("em",{parentName:"p"},"Copy script below table"),"   ",(0,r.kt)("em",{parentName:"p"},"Copy script below table")),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("strong",{parentName:"p"},"Additional vDisks"),"     1                           1"),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("strong",{parentName:"p"},"Device Type"),"           DISK                        DISK"),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("strong",{parentName:"p"},"Device Buse"),"           SCSI                        SCSI"),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("strong",{parentName:"p"},"Size (GiB)"),"            100                         100"),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("strong",{parentName:"p"},"VGPUs"),"                 None                        None"),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("strong",{parentName:"p"},"Categories"),"            None                        None"),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("strong",{parentName:"p"},"Network Adapters"),"      1                           1"),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("strong",{parentName:"p"},"NIC 1"),"                 Rx-Automation-Network       Rx-Automation-Network"),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("strong",{parentName:"p"},"Check log-in upon       Yes                         Yes\ncreate"),"                                              "),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("strong",{parentName:"p"},"Credential"),"            WIN_VM_CRED                 WIN_VM_CRED"),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("strong",{parentName:"p"},"Address"),"               NIC 1                       NIC 1"),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("strong",{parentName:"p"},"Connection Type"),"       Windows (Powershell)        Windows (Powershell)"),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("strong",{parentName:"p"},"Connection Port"),"       5985                        5985"),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("strong",{parentName:"p"},"Delay (in seconds)"),"    Increase to ",(0,r.kt)("strong",{parentName:"p"},"90"),"          Increase to ",(0,r.kt)("strong",{parentName:"p"},"90")),(0,r.kt)("hr",{parentName:"li"}),(0,r.kt)("p",{parentName:"li"},"Take a minute to review the Sysprep script, a short description\nfollows after."),(0,r.kt)("p",{parentName:"li"},'::: {.literalinclude language="xml"}\nSysprep-unattended.xml\n:::'),(0,r.kt)("p",{parentName:"li"},"You can see the VMs being configured to autologon to the local\nAdministrator account using the WIN_VM_CRED password. While this\nexercise will not join the VMs to an Active Directory domain, you\ncould use either Sysprep or a Package Install task script to\nautomate the joining of a domain."),(0,r.kt)("p",{parentName:"li"},"Additionally, the firewall is configured to allow port 5985 which\nCalm uses to execute PowerShell scripts against the host."),(0,r.kt)("p",{parentName:"li"},"::: note\n::: title\nNote\n:::"),(0,r.kt)("p",{parentName:"li"},"Since Calm 2.5, the ",(0,r.kt)("strong",{parentName:"p"},"Karan")," service VM is no longer required to\nproxy PowerShell commands to the service VMs. Instead, Calm has\nintroduced native support for running PowerShell scripts on remote\nhosts.\n:::"),(0,r.kt)("p",{parentName:"li"},"Similar to the Task Manager application in the\n",(0,r.kt)("inlineCode",{parentName:"p"},"calm_linux"),'{.interpreted-text role="ref"} lab, you want to ensure\nthe database is available prior to the IIS web server setup.')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the Blueprint Editor, select the ",(0,r.kt)("strong",{parentName:"p"},"MSIIS")," service and create a\ndependency on the ",(0,r.kt)("strong",{parentName:"p"},"MSSQL")," service."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(21244).Z,width:"494",height:"179"})))),(0,r.kt)("h1",{id:"defining-package-install"},"Defining Package Install"),(0,r.kt)("p",null,"For ",(0,r.kt)("strong",{parentName:"p"},"each")," of the following 7 scripts (3 for MSSSQL and 4 for MSIIS),\nthe ",(0,r.kt)("strong",{parentName:"p"},"Type"),", ",(0,r.kt)("strong",{parentName:"p"},"Script Type"),", and ",(0,r.kt)("strong",{parentName:"p"},"Credential")," fields will be the\nsame:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Type")," - Execute"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Script Type")," - PowerShell"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Credential")," - WIN_VM_CRED")),(0,r.kt)("p",null,"::: note\n::: title\nNote\n:::"),(0,r.kt)("p",null,"If you were working with domain joined VMs, you would require a separate\ndomain credential to execute PowerShell scripts following the VM being\njoined to the domain.\n:::"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select the ",(0,r.kt)("strong",{parentName:"p"},"MSSQL")," service and open the ",(0,r.kt)("strong",{parentName:"p"},"Package")," tab in the\n",(0,r.kt)("strong",{parentName:"p"},"Configuration Panel"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Name the package and click ",(0,r.kt)("strong",{parentName:"p"},"Configure install")," to begin adding\ninstallation tasks."),(0,r.kt)("p",{parentName:"li"},"You will add multiple scripts to complete each installation. Working\nwith multiple scripts allows for easier maintenance and application\nof code across multiple services or blueprints using the Calm ",(0,r.kt)("strong",{parentName:"p"},"Task\nLibrary"),". The Task Library allows you to create modularized scripts\nto achieve certain common functions such as joining a domain or\nconfiguring common OS settings.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Under ",(0,r.kt)("strong",{parentName:"p"},"MSSQL ",">"," Package Install"),", click ",(0,r.kt)("strong",{parentName:"p"},"+ Task")," and fill out\nthe following fields:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Task Name")," - InitializeDisk1"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Script")," -")),(0,r.kt)("p",{parentName:"li"},'::: {.literalinclude language="posh"}\nInitializeDisk1.ps1\n:::'),(0,r.kt)("p",{parentName:"li"},"The above script simply performs an initialization and format of the\nextra 100GB VDisk added during VM configuration of the service.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Publish To Library ",">"," Publish")," to save this task script to\nthe Task Library for future use.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Repeat clicking ",(0,r.kt)("strong",{parentName:"p"},"+ Task")," to add the remaining two scripts:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Task Name")," - InstallMSSQL"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Script")," -")),(0,r.kt)("p",{parentName:"li"},'::: {.literalinclude language="posh"}\nInstallMSSQL.ps1\n:::'),(0,r.kt)("p",{parentName:"li"},"Reviewing the above script you can see it is performing an automated\ninstallation of SQL Server, using the SQL_CRED credential details\nand using the extra 100GB VDisk for the SQL data files."),(0,r.kt)("p",{parentName:"li"},"According to Nutanix best practices for production database\ndeployments, what else would need to be added to the\nVM/installation?"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Task Name")," - FirewallRules"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Script")," -")),(0,r.kt)("p",{parentName:"li"},'::: {.literalinclude language="posh"}\nFirewallRules.ps1\n:::'),(0,r.kt)("p",{parentName:"li"},"Reviewing the above script you can see it is allowing inbound access\nthrough the Windows Firewall for key SQL services."),(0,r.kt)("p",{parentName:"li"},"Once complete, your MSSQL service should look like this:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(60496).Z,width:"228",height:"311"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select the ",(0,r.kt)("strong",{parentName:"p"},"MSIIS")," service and open the ",(0,r.kt)("strong",{parentName:"p"},"Package")," tab in the\n",(0,r.kt)("strong",{parentName:"p"},"Configuration Panel"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Name the package and click ",(0,r.kt)("strong",{parentName:"p"},"Configure install")," to begin adding\ninstallation tasks.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Under ",(0,r.kt)("strong",{parentName:"p"},"MSIIS ",">"," Package Install"),", click ",(0,r.kt)("strong",{parentName:"p"},"+ Task"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Similar to the first step of the MSSQL service installation, you\nwill need to initialize and format the additional 100GB VDisk.\nRather than manually specifying the same script for this task, click\n",(0,r.kt)("strong",{parentName:"p"},"Browse Library"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select the ",(0,r.kt)("strong",{parentName:"p"},"InitializeDisk1")," task you had previously published and\nclick ",(0,r.kt)("strong",{parentName:"p"},"Select ",">"," Copy"),"."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(60545).Z,width:"987",height:"618"})),(0,r.kt)("p",{parentName:"li"},"::: note\n::: title\nNote\n:::"),(0,r.kt)("p",{parentName:"li"},"The Task Library also gives you the ability to provide variable\ndefinitions if there are Calm macros present in the published task.\n:::")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Specify the ",(0,r.kt)("strong",{parentName:"p"},"Name")," and ",(0,r.kt)("strong",{parentName:"p"},"Credential"),", then repeat clicking ",(0,r.kt)("strong",{parentName:"p"},"+\nTask")," to add the remaining three scripts:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Task Name")," - InstallWebPI"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Script")," -")),(0,r.kt)("p",{parentName:"li"},'::: {.literalinclude language="posh"}\nInstallWebPI.ps1\n:::'),(0,r.kt)("p",{parentName:"li"},"The above script installs the Microsoft Web Platform Installer\n(WebPI), which is used to download, install, and update components\nof the Microsoft Web Platform, including Internet Information\nServices (IIS), IIS Media Platform technologies, SQL Server Express,\n.NET Framework, and Visual Web Developer."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Task Name")," - InstallNetFeatures"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Script")," -")),(0,r.kt)("p",{parentName:"li"},'::: {.literalinclude language="posh"}\nInstallNetFeatures.ps1\n:::'),(0,r.kt)("p",{parentName:"li"},"The above script installs .NET Framework 4.5 on the VM."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Task Name")," - InstallBugNetApp"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Script")," -")),(0,r.kt)("p",{parentName:"li"},'::: {.literalinclude language="posh"}\nInstallBugNetApp.ps1\n:::'),(0,r.kt)("p",{parentName:"li"},"The above script uses the Application Profile variables you defined\nat the beginning of the exercise to populate the configuration file\nof the Bug Tracker app. It then leverages WebPI to install the\napplication from the ",(0,r.kt)("a",{parentName:"p",href:"https://webgallery.microsoft.com/gallery"},"Microsoft Web App\nGallery"),". With minimal\nchanges, you could leverage many popular applications from the\nGallery, including apps for CMS, eCommerce, Wiki, ticketing, and\nmore."),(0,r.kt)("p",{parentName:"li"},"Once complete, your MSIIS service should look like this:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(30633).Z,width:"232",height:"347"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Save"),"."))),(0,r.kt)("h1",{id:"launching-the-blueprint"},"Launching the Blueprint"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"From the upper toolbar in the Blueprint Editor, click ",(0,r.kt)("strong",{parentName:"p"},"Launch"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Specify a unique ",(0,r.kt)("strong",{parentName:"p"},"Application Name")," (e.g. ",(0,r.kt)("em",{parentName:"p"},"Initials"),"-BugNET) and\nyour ",(0,r.kt)("strong",{parentName:"p"},"User_initials")," Runtime variable value for VM naming.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Create"),"."),(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("strong",{parentName:"p"},"Audit")," tab can be used to monitor the deployment of the\napplication. The application should take approximately 20 minutes to\ndeploy.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Once the Create action completes, and the application is in a\n",(0,r.kt)("strong",{parentName:"p"},"Running")," state, open the ",(0,r.kt)("strong",{parentName:"p"},"BugNET")," link in a new tab."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(86775).Z,width:"1633",height:"548"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You\\'ll be presented with an ",(0,r.kt)("strong",{parentName:"p"},"Installation Status Report")," page.\nWait for it to report ",(0,r.kt)("strong",{parentName:"p"},"Installation Complete"),", and then click the\nlink at the bottom to access the application."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(51544).Z,width:"509",height:"468"})),(0,r.kt)("p",{parentName:"li"},"Congratulations! You now have a fully functional bug tracking\napplication automatically provisioned leveraging Microsoft SQL\nServer and IIS."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(8597).Z,width:"1257",height:"530"})))),(0,r.kt)("h1",{id:"optional-scale-out-iis-tier"},"(Optional) Scale Out IIS Tier"),(0,r.kt)("p",null,"Leveraging the same approach from the ",(0,r.kt)("inlineCode",{parentName:"p"},"calm_linux"),'{.interpreted-text\nrole="ref"} lab of having multiple web server replicas, can you add a\nCentOS based HAProxy service to this blueprint to allow for load\nbalancing across multiple IIS servers?'),(0,r.kt)("h1",{id:"takeaways"},"Takeaways"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Calm provides the same application deployment and lifecycle\nmanagement benefits for Windows workloads as it does for Linux\nworkloads."),(0,r.kt)("li",{parentName:"ul"},"Calm can natively execute remote PowerShell scripts on Windows\nendpoints without the need for a Windows-based proxy.")))}c.isMDXComponent=!0},8597:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/bugnet_app-463087d6b153831460c6a1d6b13f50d5.png"},86775:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/bugnet_link-aef7c1fd232ce3be10d919f15841537f.png"},51544:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/bugnet_setup-61f1b09b099da34d04573ec75c56d32c.png"},12675:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,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"},43153:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/credentials-f9a83b2ec5b22ed47df9521dde16f1bb.png"},36329:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/downloadable_image_config-562c921f929c12a17b9f2a79bb2c77f0.png"},30633:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/msiis_package_install-f09df7ee408bfb419c6fdcded43262a2.png"},60496:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/mssql_package_install-ca9aeab0ebc9736c004c16971c3b233c.png"},21244:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/services-515a9c18144c07eeddbfabd168ec43fa.png"},60545:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/task_library-88b451a130aef7050c55073c3233bde8.png"},3879:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/variables-24fe8e69e4704e326228803ff825a29a.png"}}]);