
const resultTab = document.querySelector("#web-result");

const navHtml = document.getElementById("navHtml")
const navCss = document.getElementById("navCss")
const navJs = document.getElementById("navJs")
const navResult = document.getElementById("navResult")

var curentTab="html",
    resultTabActivate=true,
    jsAutoRender=true,
    styleSheetInput = 1,
    scriptInput = 1,
    menuToolActive = false,
    fullScreenView = false;

// setAttributes function
function setAttributes(el, attrs) {for(var key in attrs) {el.setAttribute(key, attrs[key]);}}
Element.prototype.remove = function() {this.parentElement.removeChild(this);}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {for(var i = this.length - 1; i >= 0; i--) {if(this[i] && this[i].parentElement) {this[i].parentElement.removeChild(this[i]);}}}

// add elements to the head tag
function iframeHeadAdd(){
    var iframeHead = document.getElementById("HtmlHead").value;
    let styleSheet = document.getElementsByClassName("customStyleSheet");
    let script = document.getElementsByClassName("customScript");
    consoleFrame = "<script src='js/console.js'></script><script>eruda.init({tool: ['console']});</script>";
    let cssCode = "<style type='text/css'>"+cssTab.getValue()+"</style>";
    iframeHead=iframeHead+cssCode+consoleFrame;
    for(let i=0;i<styleSheet.length;i++){
        iframeHead = iframeHead+"<link rel='stylesheet' href='"+ styleSheet[i].childNodes[1].value +"'>";
    }
    for(let i=0;i<script.length;i++){
        iframeHead = iframeHead+"<script type='text/javascript' src='"+ script[i].childNodes[1].value +"'></script>";
    }
    resultTab.contentDocument.head.innerHTML = iframeHead;
}
// run app
function run(){
    var htmlCode = htmlTab.getValue();
    let jsCode = "<scri"+"pt>"+jsTab.getValue()+"</scri"+"pt>";
    webCode = htmlCode;
    if(jsAutoRender===true){webCode=webCode+jsCode}
    result = resultTab.contentWindow.document;
    result.open();
    result.write(webCode);
    result.close();
    iframeHeadAdd();
}
// run javascript
function jsRun(){
    var htmlCode = htmlTab.getValue();
    let jsCode = "<scri"+"pt>"+jsTab.getValue()+"</scri"+"pt>";
    webCode = htmlCode+jsCode;
    result = resultTab.contentWindow.document;
    result.open();
    result.write(webCode);
    result.close();
    iframeHeadAdd();
}
// Change working Tab;
function HtmlTab(){
    curentTab = "html";
    navHtml.setAttribute("style","border-top: 2px solid #fff");
    navCss.setAttribute("style","border:none");
    navJs.setAttribute("style","border:none");
    document.getElementById("html-div").style.display = "block";
    document.getElementById("css-div").style.display = "none";
    document.getElementById("js-div").style.display = "none";
}
function CssTab(){
    curentTab = "css";
    navHtml.setAttribute("style","border:none");
    navCss.setAttribute("style","border-top: 2px solid #fff");
    navJs.setAttribute("style","border:none");
    document.getElementById("html-div").style.display = "none";
    document.getElementById("css-div").style.display = "block";
    document.getElementById("js-div").style.display = "none";
}
function JsTab(){
    curentTab = "js";
    navHtml.setAttribute("style","border:none");
    navCss.setAttribute("style","border:none");
    navJs.setAttribute("style","border-top: 2px solid #fff");
    document.getElementById("html-div").style.display = "none";
    document.getElementById("css-div").style.display = "none";
    document.getElementById("js-div").style.display = "block";
}
function ResultTab(){
    if(resultTabActivate === true){
        resultTabActivate = false;
        navResult.setAttribute("style","border-top: none");
        document.getElementById("result").style.display = "none";
        document.getElementById("editor").style.height = "83vh";
        document.getElementsByClassName("code")[0].style.height = "83vh";
        document.getElementsByClassName("code")[1].style.height = "83vh";
        document.getElementsByClassName("code")[2].style.height = "83vh";
        document.getElementById("EditorView").style.color = "#fff";
        
    }else{
        resultTabActivate = true;
        navResult.setAttribute("style","border-top: 2px solid #fff");
        document.getElementById("result").style.display = "block";
        document.getElementById("editor").style.height = "40vh";
        document.getElementsByClassName("code")[0].style.height = "40vh";
        document.getElementsByClassName("code")[1].style.height = "40vh";
        document.getElementsByClassName("code")[2].style.height = "40vh";
        document.getElementById("EditorView").style.color = "#ea0";
    }
}
function openMenuWindow(){
    document.getElementById("menuWindow").style.display = "block";
}
function closeMenuWindow(){
    document.getElementById("menuWindow").style.display = "none";
}
function HtmlMenuTab(){
    document.querySelector("#htmlMenu").style.display="block";
    document.querySelector("#cssMenu").style.display="none";
    document.querySelector("#jsMenu").style.display="none";
    
    document.querySelector("#htmlMenuNav").setAttribute("style","border-top: 2px solid #fff");
    document.querySelector("#cssMenuNav").setAttribute("style","border:none");
    document.querySelector("#jsMenuNav").setAttribute("style","border:none");
}
function CssMenuTab(){
    document.querySelector("#htmlMenu").style.display="none";
    document.querySelector("#cssMenu").style.display="block";
    document.querySelector("#jsMenu").style.display="none";
    
    document.querySelector("#htmlMenuNav").setAttribute("style","border:none");
    document.querySelector("#cssMenuNav").setAttribute("style","border-top: 2px solid #fff");
    document.querySelector("#jsMenuNav").setAttribute("style","border:none");
}
function JsMenuTab(){
    document.querySelector("#htmlMenu").style.display="none";
    document.querySelector("#cssMenu").style.display="none";
    document.querySelector("#jsMenu").style.display="block";
    
    document.querySelector("#htmlMenuNav").setAttribute("style","border:none");
    document.querySelector("#cssMenuNav").setAttribute("style","border:none");
    document.querySelector("#jsMenuNav").setAttribute("style","border-top: 2px solid #fff");
}
function addNewStyleSheet(){
    let div = document.createElement("div");
    div.classList.add("customStyleSheet");
    div.setAttribute("id","customStyleSheet-"+(styleSheetInput+1));
    let input = document.createElement("input");
    setAttributes(input,{
        "type":"text",
        "name":"stylesheet-"+(styleSheetInput+1),
        "class":"stylesheet",
        "id":"stylesheet-"+(styleSheetInput+1),
        "placeholder":"https://yourdomain.com/style.css"
    });
    let btn = document.createElement("button");
    setAttributes(btn,{
        "class":"stylesheetDel",
        "id":"stylesheetDel-"+(styleSheetInput+1),
        "onclick":"deleteThis('"+'customStyleSheet-'+(styleSheetInput+1)+"')"
    });
    btn.innerText = "×";
    div.appendChild(input);
    div.appendChild(btn);
    document.getElementById("customStyleSheetsBody").appendChild(div);
    styleSheetInput = styleSheetInput+1;
}
function addNewScript(){
    let div = document.createElement("div");
    div.classList.add("customScript");
    div.setAttribute("id","customScript-"+(scriptInput+1));
    let input = document.createElement("input");
    setAttributes(input,{
        "type":"text",
        "name":"script-"+(scriptInput+1),
        "class":"script",
        "id":"script-"+(scriptInput+1),
        "placeholder":"https://yourdomain.com/script.js"
    });
    let btn = document.createElement("button");
    setAttributes(btn,{
        "class":"scriptDel",
        "id":"scriptDel-"+(scriptInput+1),
        "onclick":"deleteThis('"+'customScript-'+(scriptInput+1)+"')"
    });
    btn.innerText = "×";
    div.appendChild(input);
    div.appendChild(btn);
    document.getElementById("customScriptsBody").appendChild(div);
    scriptInput = scriptInput+1;
}
function deleteThis(id){
    let a = document.getElementById(id).remove();
    iframeHeadAdd();
}
function menuTools(){
    if(menuToolActive === false){
        menuToolActive = true;
        document.getElementById("toolsMenuBody").style.display = "block";
        document.getElementById("menuTools").setAttribute("style","background-color:#212121;border-radius:8px 8px 0px 0px");
    }else{
        menuToolActive = false;
        document.getElementById("toolsMenuBody").style.display = "none";
        document.getElementById("menuTools").setAttribute("style","");
    }
}
function FullScreenView(){
    if(fullScreenView === false){
        fullScreenView = true;
        document.getElementById("editor").style.display = "none";
        document.getElementById("result").style.display = "block";
        document.getElementById("result").style.height = "81.5vh";
        document.getElementById("FullScreenView").style.color = "#ea0";
    }else{
        fullScreenView = false;
        document.getElementById("editor").style.display = "block";
        document.getElementById("result").style.height = "41.5vh";
        document.getElementById("FullScreenView").style.color = "#fff";
    }
}