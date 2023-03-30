"use strict";(self.webpackChunkncm_301=self.webpackChunkncm_301||[]).push([[7847],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=s(a),d=r,k=u["".concat(p,".").concat(d)]||u[d]||c[d]||l;return a?n.createElement(k,i(i({ref:t},m),{},{components:a})):n.createElement(k,i({ref:t},m))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},60597:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>O,contentTitle:()=>_,default:()=>P,frontMatter:()=>T,metadata:()=>C,toc:()=>E});var n=a(87462),r=a(67294),l=a(3905),i=a(86010),o=a(12466),p=a(16550),s=a(91980),m=a(67392),u=a(50012);function c(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,m.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function k(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:a}=e;const n=(0,p.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=d(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!k({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[p,s]=g({queryString:a,groupId:n}),[m,c]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),h=(()=>{const e=p??m;return k({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{h&&o(h)}),[h]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!k({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),s(e),c(e)}),[s,c,l]),tabValues:l}}var N=a(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:a,selectedValue:l,selectValue:p,tabValues:s}=e;const m=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.o5)(),c=e=>{const t=e.currentTarget,a=m.indexOf(t),n=s[a].value;n!==l&&(u(t),p(n))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=m.indexOf(e.currentTarget)+1;t=m[a]??m[0];break}case"ArrowLeft":{const a=m.indexOf(e.currentTarget)-1;t=m[a]??m[m.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},t)},s.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>m.push(e),onKeyDown:d,onClick:c},o,{className:(0,i.Z)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":l===t})}),a??t)})))}function f(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=h(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",b.tabList)},r.createElement(y,(0,n.Z)({},e,t)),r.createElement(f,(0,n.Z)({},e,t)))}function w(e){const t=(0,N.Z)();return r.createElement(v,(0,n.Z)({key:String(t)},e))}const S={tabItem:"tabItem_Ymn6"};function x(e){let{children:t,hidden:a,className:n}=e;return r.createElement("div",{role:"tabpanel",className:(0,i.Z)(S.tabItem,n),hidden:a},t)}const T={title:"Linux Day 2 Operations"},_="Overview",C={unversionedId:"calm_linux_track/calm_day2_linux/calm_day2_linux",id:"calm_linux_track/calm_day2_linux/calm_day2_linux",title:"Linux Day 2 Operations",description:"In the Calm Linux and Calm Windows labs you explored how Calm can",source:"@site/docs/calm_linux_track/calm_day2_linux/calm_day2_linux.mdx",sourceDirName:"calm_linux_track/calm_day2_linux",slug:"/calm_linux_track/calm_day2_linux/",permalink:"/ncm301/calm_linux_track/calm_day2_linux/",draft:!1,editUrl:"https://github.com/mat0606/ncm301/edit/main/docs/calm_linux_track/calm_day2_linux/calm_day2_linux.mdx",tags:[],version:"current",frontMatter:{title:"Linux Day 2 Operations"},sidebar:"tutorialSidebar",previous:{title:"Windows Workloads",permalink:"/ncm301/calm_windows_ad/"},next:{title:"EScript and Task Library",permalink:"/ncm301/calm_escript/"}},O={},E=[{value:"Lab Setup",id:"lab-setup",level:2},{value:"Scaling Out",id:"scaling-out",level:2},{value:"Scaling In",id:"scaling-in",level:2},{value:"Upgrading",id:"upgrading",level:2},{value:"Takeaways",id:"takeaways",level:2}],I={toc:E},W="wrapper";function P(e){let{components:t,...r}=e;return(0,l.kt)(W,(0,n.Z)({},I,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"overview"},"Overview"),(0,l.kt)("p",null,"In the ",(0,l.kt)("a",{parentName:"p",href:"/ncm301/calm_linux_track/calm_iaas_linux/"},"Calm Linux")," and ",(0,l.kt)("a",{parentName:"p",href:"/ncm301/calm_windows_track/calm_iaas_windows/"},"Calm Windows")," labs you explored how Calm can\nbe used to model and deploy complex applications using a blueprint. NCM Self Service, however, is capable of managing applications throughout their ",(0,l.kt)("strong",{parentName:"p"},"entire")," lifecycle."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},'In this lab you will implement custom actions within Calm to address "Day 2" operations, including scaling out, scaling in, and upgrading your application.')),(0,l.kt)("h2",{id:"lab-setup"},"Lab Setup"),(0,l.kt)("p",null,"This lab depends on the availability of a multi-tier ",(0,l.kt)("strong",{parentName:"p"},"Task Manger")," web application implemented during the ",(0,l.kt)("a",{parentName:"p",href:"/ncm301/calm_linux_track/calm_iaas_linux/"},"Calm Linux")," lab."),(0,l.kt)("h2",{id:"scaling-out"},"Scaling Out"),(0,l.kt)("p",null,"Imagine you're the administrator of the Task Manager application that we've been building, and you\\'re currently unsure of the amount of\ndemand for this application by your end users. Or, potentially, you expect the demand to ebb and flow due to the time of the year. How can\nwe easily scale to meet this changing demand?"),(0,l.kt)("p",null,"During the creation of the Task Manager blueprint, the ",(0,l.kt)("strong",{parentName:"p"},"WebServer")," service was configured with a minimum number of 2 replicas, with a\nmaximum of 4. As a result, Calm will create 2 WebServer VMs during the initial deployment. In the event the 2 replicas are not enough to handle\nthe load of your end users, a ",(0,l.kt)("strong",{parentName:"p"},"Scale Out")," operation is required."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"In the ",(0,l.kt)("strong",{parentName:"p"},"Application Overview > Application Profile")," section, expand the ",(0,l.kt)("strong",{parentName:"p"},"Default")," Application Profile."),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{src:a(43979).Z,width:"234",height:"434"}))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Select ",(0,l.kt)("inlineCode",{parentName:"p"},"+"),"sign  next to ",(0,l.kt)("strong",{parentName:"p"},"Actions")," to add a new, custom action. On the ",(0,l.kt)("strong",{parentName:"p"},"Configuration Pane")," to the right, rename the new Action to be ",(0,l.kt)("strong",{parentName:"p"},"Scale Out"),"."),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{src:a(86116).Z,width:"785",height:"451"}))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"In the box ",(0,l.kt)("strong",{parentName:"p"},"below")," the ",(0,l.kt)("strong",{parentName:"p"},"WebServer")," service tile, click the ",(0,l.kt)("strong",{parentName:"p"},"+ Task")," button to add a scaling task, and fill out the following fields:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Task Name")," - web_scale_out"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Scaling Type")," - Scale Out"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Scaling Count")," - 1")),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{src:a(77593).Z,width:"337",height:"277"})),(0,l.kt)("admonition",{parentName:"li",type:"note"},(0,l.kt)("p",{parentName:"admonition"},"The ",(0,l.kt)("strong",{parentName:"p"},"+ Task")," button that appears below the service tile is only used for scaling the number of replicas up and down, so it is important to select the correct option.")),(0,l.kt)("p",{parentName:"li"},"When a user later runs the ",(0,l.kt)("strong",{parentName:"p"},"Scale Out")," task, a new ",(0,l.kt)("strong",{parentName:"p"},"WebServer")," VM will get created, and the ",(0,l.kt)("strong",{parentName:"p"},"Package Install")," tasks for that\nservice will be executed. However, we do need to modify the ",(0,l.kt)("strong",{parentName:"p"},"HAProxy")," configuration in order to start taking advantage of this new web server.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Within")," the ",(0,l.kt)("strong",{parentName:"p"},"HAProxy")," service tile, click the ",(0,l.kt)("strong",{parentName:"p"},"+ Task")," button, then fill out the following fields:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Task Name")," - add_webserver"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Type")," - Execute"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Script Type")," - Shell"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Credential")," - CENTOS"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Copy and paste the following script into the ",(0,l.kt)("strong",{parentName:"p"},"Script")," field:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'#!/bin/bash\nset -ex\n\nhost=$(echo "@@{WebServer.address}@@" | awk -F "," \'{print $NF}\')\nport=80\necho " server host-${host} ${host}:${port} weight 1 maxconn 100 check" | sudo tee -a /etc/haproxy/haproxy.cfg\n\nsudo systemctl daemon-reload\nsudo systemctl restart haproxy\n')),(0,l.kt)("p",{parentName:"li"},"The script will parse the last IP address in the WebServer address array and append it to the haproxy.cfg file. However, we want to be\nsure that this doesn't happen until ",(0,l.kt)("strong",{parentName:"p"},"after")," the new WebServer is fully up, otherwise the HAProxy server may send requests to a\nnon-functioning WebServer.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"To solve this issue, create an edge to force a dependency on the ",(0,l.kt)("strong",{parentName:"p"},"web_scale_out")," task completing prior to the ",(0,l.kt)("strong",{parentName:"p"},"add_webserver")," task."),(0,l.kt)("p",{parentName:"li"},"Your ",(0,l.kt)("strong",{parentName:"p"},"Workspace")," should now look like this:"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{src:a(70800).Z,width:"818",height:"486"})))),(0,l.kt)("h2",{id:"scaling-in"},"Scaling In"),(0,l.kt)("p",null,"It's the end of your busy season, and you'd like to optimize your resource utilization by scaling back the number of deployed Web Servers."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Select ",(0,l.kt)("inlineCode",{parentName:"p"},"+")," sign to add a custom action named ",(0,l.kt)("strong",{parentName:"p"},"Scale In")," to the Default ",(0,l.kt)("strong",{parentName:"p"},"Application Profile"),"."),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{src:a(41507).Z,width:"783",height:"488"}))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Below")," the ",(0,l.kt)("strong",{parentName:"p"},"WebServer")," service tile, click the ",(0,l.kt)("strong",{parentName:"p"},"+ Task")," button to add a scaling task, and fill out the following fields:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Task Name")," - web_scale_in"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Scaling Type")," - Scale In"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Scaling Count")," - 1")),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{src:a(98970).Z,width:"338",height:"277"})),(0,l.kt)("p",{parentName:"li"},"When a user later runs the ",(0,l.kt)("strong",{parentName:"p"},"Scale In")," task, the last ",(0,l.kt)("strong",{parentName:"p"},"WebServer")," replica will have its ",(0,l.kt)("strong",{parentName:"p"},"Package Uninstall")," task run, the VM will be\nshut down, and then deleted, which will reclaim resources. However,vwe do need to modify the ",(0,l.kt)("strong",{parentName:"p"},"HAProxy")," configuration to ensure that we're no longer sending traffic to the to-be-deleted Web Server.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Within")," the ",(0,l.kt)("strong",{parentName:"p"},"HAProxy")," service tile, click the ",(0,l.kt)("strong",{parentName:"p"},"+ Task")," button, then fill out the following fields:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Task Name")," - del_webserver"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Type")," - Execute"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Script Type")," - Shell"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Credential")," - CENTOS"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Copy and paste the following script into the ",(0,l.kt)("strong",{parentName:"p"},"Script")," field:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'#!/bin/bash\nset -ex\n\nhost=$(echo "@@{WebServer.address}@@" | awk -F "," \'{print $NF}\')\nsudo sed -i "/$host/d" /etc/haproxy/haproxy.cfg\n\nsudo systemctl daemon-reload\nsudo systemctl restart haproxy\n')),(0,l.kt)("p",{parentName:"li"},"Similar to the scale out script, this script will parse the last IP in the WebServer address array and use the\n",(0,l.kt)("a",{parentName:"p",href:"http://www.grymoire.com/Unix/Sed.html"},"sed")," command to remove the corresponding entry from haproxy.cfg."),(0,l.kt)("p",{parentName:"li"},"Again, similar to the scale out script, we want to ensure requests stop being sent to the VM ",(0,l.kt)("strong",{parentName:"p"},"before")," it is removed.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"To solve this issue, create an edge to force a dependency on the ",(0,l.kt)("strong",{parentName:"p"},"del_webserver")," task completing prior to the ",(0,l.kt)("strong",{parentName:"p"},"web_scale_in")," task."),(0,l.kt)("p",{parentName:"li"},"Your ",(0,l.kt)("strong",{parentName:"p"},"Workspace")," should now look like this:"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{src:a(65121).Z,width:"806",height:"519"}))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Click ",(0,l.kt)("strong",{parentName:"p"},"Save")," and ensure no errors or warnings pop-up. If they do, resolve the issue, and ",(0,l.kt)("strong",{parentName:"p"},"Save")," again."))),(0,l.kt)("h2",{id:"upgrading"},"Upgrading"),(0,l.kt)("p",null,"Your company has a mandate to keep all application code up to date, to help minimize security vulnerabilities. Your company also has a strict\nchange control process, meaning you can only update your application during the weekend. You currently spend a significant portion of your\ntime on one Saturday every month completing application update procedures during a maintenance window. Let\\'s look at how you can reclaim your weekend by modeling the application upgrade with Calm."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Select ",(0,l.kt)("inlineCode",{parentName:"p"},"+")," sign to add a custom action named ",(0,l.kt)("strong",{parentName:"p"},"Upgrade")," to the Default ",(0,l.kt)("strong",{parentName:"p"},"Application Profile"),"."),(0,l.kt)("p",{parentName:"li"},"The first thing we're going to need to do is to stop the respective processes on each of our Services.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Within each")," of our 3 Services, click the ",(0,l.kt)("strong",{parentName:"p"},"+ Task")," button to add a new task, and fill in the following information:"),(0,l.kt)("table",{parentName:"li"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Service Name"),(0,l.kt)("th",{parentName:"tr",align:null},"MySQL"),(0,l.kt)("th",{parentName:"tr",align:null},"WebServer"),(0,l.kt)("th",{parentName:"tr",align:null},"HAProxy"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Task Name")),(0,l.kt)("td",{parentName:"tr",align:null},"StopMySQL"),(0,l.kt)("td",{parentName:"tr",align:null},"StopWebServer"),(0,l.kt)("td",{parentName:"tr",align:null},"StopHAProxy")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},"Execute"),(0,l.kt)("td",{parentName:"tr",align:null},"Execute"),(0,l.kt)("td",{parentName:"tr",align:null},"Execute")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Script Type")),(0,l.kt)("td",{parentName:"tr",align:null},"Shell"),(0,l.kt)("td",{parentName:"tr",align:null},"Shell"),(0,l.kt)("td",{parentName:"tr",align:null},"Shell")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Credential")),(0,l.kt)("td",{parentName:"tr",align:null},"CENTOS"),(0,l.kt)("td",{parentName:"tr",align:null},"CENTOS"),(0,l.kt)("td",{parentName:"tr",align:null},"CENTOS")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Script")),(0,l.kt)("td",{parentName:"tr",align:null},"See Below"),(0,l.kt)("td",{parentName:"tr",align:null},"See Below"),(0,l.kt)("td",{parentName:"tr",align:null},"See Below")))))),(0,l.kt)(w,{defaultValue:"sql",values:[{label:"StopMySQL Script",value:"sql"},{label:"StopWebServer Script",value:"web"},{label:"StopHAProxy Script",value:"haproxy"}],mdxType:"Tabs"},(0,l.kt)(x,{value:"sql",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"#!/bin/bash\nset -ex\nsudo systemctl stop mysqld\n"))),(0,l.kt)(x,{value:"web",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"#!/bin/bash\nset -ex\n\nsudo systemctl stop php-fpm\nsudo systemctl stop nginx\n"))),(0,l.kt)(x,{value:"haproxy",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"#!/bin/bash\nset -ex\n\nsudo systemctl stop haproxy\n")))),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Once complete, your ",(0,l.kt)("strong",{parentName:"p"},"Workspace")," should look like this:"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{src:a(21369).Z,width:"1224",height:"611"})),(0,l.kt)("p",{parentName:"li"},"Similar to both scaling and initial deployment operations, we do not want to get into a situation where the WebServer goes down before the HAProxy, nor do we want the MySQL database to go down before the WebServers.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Create edges between services such that HAProxy stops before WebServers, and all WebServers stop before MySQL:"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{src:a(59169).Z,width:"798",height:"486"})),(0,l.kt)("p",{parentName:"li"},"Now that our critical services are stopped, we'll want to perform our upgrades.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Again, ",(0,l.kt)("strong",{parentName:"p"},"within each")," Service, add a new Task. All of the 3 tasks are identical other than the name:"),(0,l.kt)("table",{parentName:"li"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Service Name")),(0,l.kt)("th",{parentName:"tr",align:null},"MySQL"),(0,l.kt)("th",{parentName:"tr",align:null},"WebServer"),(0,l.kt)("th",{parentName:"tr",align:null},"HAProxy"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Task Name")),(0,l.kt)("td",{parentName:"tr",align:null},"UpgradeMySQL"),(0,l.kt)("td",{parentName:"tr",align:null},"UpgradeWebServer"),(0,l.kt)("td",{parentName:"tr",align:null},"UpgradeHAProxy")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},"Execute"),(0,l.kt)("td",{parentName:"tr",align:null},"Execute"),(0,l.kt)("td",{parentName:"tr",align:null},"Execute")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Script Type")),(0,l.kt)("td",{parentName:"tr",align:null},"Shell"),(0,l.kt)("td",{parentName:"tr",align:null},"Shell"),(0,l.kt)("td",{parentName:"tr",align:null},"Shell")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Credential")),(0,l.kt)("td",{parentName:"tr",align:null},"CENTOS"),(0,l.kt)("td",{parentName:"tr",align:null},"CENTOS"),(0,l.kt)("td",{parentName:"tr",align:null},"CENTOS")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Script")),(0,l.kt)("td",{parentName:"tr",align:null},"See Below"),(0,l.kt)("td",{parentName:"tr",align:null},"See Below"),(0,l.kt)("td",{parentName:"tr",align:null},"See Below")))),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Script for all 3 Upgrade Tasks:")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"#!/bin/bash\nset -ex\n\nsudo yum update -y\n")),(0,l.kt)("p",{parentName:"li"},"This script will use the Red Hat/CentOS package management tool, ",(0,l.kt)("a",{parentName:"p",href:"https://access.redhat.com/solutions/9934"},"yum")," to search for and install updates to all installed packages."),(0,l.kt)("p",{parentName:"li"},"Your ",(0,l.kt)("strong",{parentName:"p"},"Workspace")," should now look like this:"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{src:a(60930).Z,width:"830",height:"502"})),(0,l.kt)("p",{parentName:"li"},"From an a task ordering perspective, do we need to draw any orchestration edges? Notice in the screenshot above that Calm automatically draws and edge from the ",(0,l.kt)("strong",{parentName:"p"},"Stop")," task to the ",(0,l.kt)("strong",{parentName:"p"},"Upgrade")," task, which is good as that's required. However, do we need any side to side dependencies?"),(0,l.kt)("p",{parentName:"li"},"If you said \"no\", you're correct. The critical components are starting and stopping of the Services, there\\'s no reason to have each Service upgrade one at a time."),(0,l.kt)("p",{parentName:"li"},"Unless you specify otherwise, Calm will always run tasks in parallel to save time."),(0,l.kt)("p",{parentName:"li"},"Now that our Services have been upgraded, it's time to start them.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Again, we'll add a Task ",(0,l.kt)("strong",{parentName:"p"},"within each")," Service, with the following values:"),(0,l.kt)("table",{parentName:"li"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Service Name"),(0,l.kt)("th",{parentName:"tr",align:null},"MySQL"),(0,l.kt)("th",{parentName:"tr",align:null},"WebServer"),(0,l.kt)("th",{parentName:"tr",align:null},"HAProxy"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Task Name")),(0,l.kt)("td",{parentName:"tr",align:null},"StartMySQL"),(0,l.kt)("td",{parentName:"tr",align:null},"StartWebServer"),(0,l.kt)("td",{parentName:"tr",align:null},"StartHAProxy")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},"Execute"),(0,l.kt)("td",{parentName:"tr",align:null},"Execute"),(0,l.kt)("td",{parentName:"tr",align:null},"Execute")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Script Type")),(0,l.kt)("td",{parentName:"tr",align:null},"Shell"),(0,l.kt)("td",{parentName:"tr",align:null},"Shell"),(0,l.kt)("td",{parentName:"tr",align:null},"Shell")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Credential")),(0,l.kt)("td",{parentName:"tr",align:null},"CENTOS"),(0,l.kt)("td",{parentName:"tr",align:null},"CENTOS"),(0,l.kt)("td",{parentName:"tr",align:null},"CENTOS")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Script")),(0,l.kt)("td",{parentName:"tr",align:null},"See Below"),(0,l.kt)("td",{parentName:"tr",align:null},"See Below"),(0,l.kt)("td",{parentName:"tr",align:null},"See Below")))))),(0,l.kt)(w,{defaultValue:"sql",values:[{label:"StartMySQL Script",value:"sql"},{label:"StartWebServer Script",value:"web"},{label:"StartHAProxy Script",value:"haproxy"}],mdxType:"Tabs"},(0,l.kt)(x,{value:"sql",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"#!/bin/bash\nset -ex\nsudo systemctl start mysqld\n"))),(0,l.kt)(x,{value:"web",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"#!/bin/bash\nset -ex\n\nsudo systemctl start php-fpm\nsudo systemctl start nginx\n"))),(0,l.kt)(x,{value:"haproxy",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"#!/bin/bash\nset -ex\n\nsudo systemctl start haproxy\n")))),(0,l.kt)("ol",{start:5},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Your ",(0,l.kt)("strong",{parentName:"p"},"Workspace")," should now look like this:"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{src:a(24690).Z,width:"839",height:"538"})),(0,l.kt)("p",{parentName:"li"},"This time, we ",(0,l.kt)("strong",{parentName:"p"},"DO")," require additional orchestration edges. As previously discussed, we would not want our HAProxy service up before our WebServers, or our WebServers up before our MySQL database.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Create orchestration edges starting with MySQL, then the WebServers, and lastly the HAProxy:"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{src:a(23480).Z,width:"815",height:"564"}))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Click ",(0,l.kt)("strong",{parentName:"p"},"Save")," and ensure no errors or warnings pop-up. If they do, resolve the issue, and ",(0,l.kt)("strong",{parentName:"p"},"Save")," again."))),(0,l.kt)("h1",{id:"launching-and-managing-the-application"},"Launching and Managing the Application"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"From the upper toolbar in the Blueprint Editor, click ",(0,l.kt)("strong",{parentName:"p"},"Launch"),".")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Specify a unique ",(0,l.kt)("strong",{parentName:"p"},"Application Name")," (e.g. ",(0,l.kt)("em",{parentName:"p"},"Initials"),"-CalmLinuxIntro1) and your ",(0,l.kt)("strong",{parentName:"p"},"User_initials")," Runtime variable value for VM naming.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Click ",(0,l.kt)("strong",{parentName:"p"},"Create"),".")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Once the application reaches a ",(0,l.kt)("strong",{parentName:"p"},"Running")," status, navigate to the ",(0,l.kt)("strong",{parentName:"p"},"Manage")," tab, and run the ",(0,l.kt)("strong",{parentName:"p"},"Scale Out")," action."),(0,l.kt)("p",{parentName:"li"},"Changes to the application can be monitored on the ",(0,l.kt)("strong",{parentName:"p"},"Audit")," tab."),(0,l.kt)("p",{parentName:"li"},"Once the scaling operation has completed, you can log into the HAProxy VM and verify the new Web Server has been added to ",(0,l.kt)("inlineCode",{parentName:"p"},"/etc/haproxy/haproxy.cfg"),".")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Run the ",(0,l.kt)("strong",{parentName:"p"},"Upgrade")," action to update each service.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Finally, run the ",(0,l.kt)("strong",{parentName:"p"},"Scale In")," action to remove the additional Web Server VM."))),(0,l.kt)("h1",{id:"optional-variable-scaling"},"(Optional) Variable Scaling"),(0,l.kt)("p",null,"In this lab you configured scaling operations that expanded or shrunk the WebServer service array by a single VM."),(0,l.kt)("p",null,"When creating a new custom action, additional variables can be defined in the Configuration Pane specific to that action."),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(92450).Z,width:"271",height:"413"})),(0,l.kt)("p",null,"Leveraging a runtime variable, can you modify the scale out or scale in actions to perform a variable scaling operation?"),(0,l.kt)("p",null,"This will require some bash scripting experience to ensure the appropriate number of entries are being added and/or removed from the ",(0,l.kt)("inlineCode",{parentName:"p"},"haproxy.cfg")," file."),(0,l.kt)("h2",{id:"takeaways"},"Takeaways"),(0,l.kt)("p",null,"What are the key things you should know about ",(0,l.kt)("strong",{parentName:"p"},"Nutanix Calm"),"?"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Not only can Calm orchestrate complex application deployments, it can manage applications throughout their entire lifecycle, by\nmodeling complex Day 2 operations."),(0,l.kt)("li",{parentName:"ul"},"Whether it\\'s a built in task, like scaling, or a custom task, like upgrades, Calm can be directed to perform the operations in specific order, or if order doesn\\'t matter, perform them in parallel to save on time."),(0,l.kt)("li",{parentName:"ul"},"What operation are you currently doing on a regular basis? It's likely that it can be modeled in Calm, saving you countless hours. Take back your weekend!")))}P.isMDXComponent=!0},41507:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/510scalein1-fee39c559799ac0b8bbcfa6524412c72.png"},98970:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/510scalein2-d4f9fd55fbd1283d14cf3e7ed7318d3d.png"},65121:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/510scalein3-f8bb90607df2e9cb1f5481b0b248e360.png"},43979:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/510scaleout0-5819c0e9eae5abb453451bc839a2d4a0.png"},86116:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/510scaleout1-15e5a7d468ab43948d83c6e0f63dba01.png"},77593:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/510scaleout2-982570ea6d9e6eca9350c7b80ea0ef65.png"},70800:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/510scaleout3-e4229c8d91c61797a9def9df429af23f.png"},92450:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/optional1-cc0062ef6b33b093d86cf3aef30724cf.png"},21369:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/upgrade1-ae4c3a6751451b3a2e3238c38714377f.png"},59169:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/upgrade2-9cfa88a933b158963837cf356c0eadd4.png"},60930:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/upgrade3-b87175489b8ccb39ed51c240b8b33421.png"},24690:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/upgrade4-6eebc4ba58595c8fce8e8fab041ba523.png"},23480:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/upgrade5-c2eae6b6911df21b7ee1067fb6d7aa9a.png"}}]);