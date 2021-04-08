
const resultTab = document.querySelector("#web-result");
const result = resultTab.contentWindow.document;

const navHtml = $("#navHtml")
const navCss = $("#navCss")
const navJs = $("#navJs")
const navResult = $("#navResult")

var curentTab="html",
    resultTabActivate=true,
    jsAutoRender=false,
    styleSheetInput = 1,
    scriptInput = 1,
    menuToolActive = false,
    fullScreenView = false;

//Set Light Theme options
optgL=$("<optgroup/>")
optgL.attr("label","Light Mode")
for(let i=0;i<AvailableThemeLight.length;i++){
    opt=$("<option/>");
    opt.attr("value",AvailableThemeLight[i]);
    opt.text(AvailableThemeLight[i]);
    if(AvailableThemeLight[i]==="idle_fingers"){
        opt.attr("selected","");
    }
    opt.appendTo(optgL);
}
optgL.appendTo($("#SetTheme"));

//Set Dark Theme options
optgD=$("<optgroup/>")
optgD.attr("label","Dark Mode")
for(let i=0;i<AvailableThemeDark.length;i++){
    opt=$("<option/>");
    opt.attr("value",AvailableThemeDark[i]);
    opt.text(AvailableThemeDark[i]);
    if(AvailableThemeDark[i]==="idle_fingers"){
        opt.attr("selected","");
    }
    opt.appendTo(optgD);
}
optgD.appendTo($("#SetTheme"));

// add elements to the head tag
function iframeHeadAdd(){
    var iframeHead = HtmlHead.getValue();
    iframeHead=iframeHead+"<style type='text/css'>"+cssTab.getValue()+"</style>";
    resultTab.contentDocument.head.innerHTML = iframeHead;
}
// run app
function run(){
    var htmlCode = htmlTab.getValue();
    var webCode = htmlCode+"<script src='js/console.js'></script><script>eruda.init({tool: ['console','elements']});</script>";
    if(jsAutoRender==true){webCode=webCode+"<scri"+"pt>"+jsTab.getValue()+"</scri"+"pt>"}
    result.open();
    result.write(webCode);
    result.close();
    iframeHeadAdd();
}
// run javascript
function jsRun(){
    var htmlCode = htmlTab.getValue();
    let jsCode = "<scri"+"pt>"+jsTab.getValue()+"</scri"+"pt>";
    consoleFrame = "<script src='js/console.js'></script><script>eruda.init({tool: ['console','elements']});</script>";
    webCode = htmlCode+consoleFrame+jsCode;
    result.open();
    result.write(webCode);
    result.close();
    iframeHeadAdd();
}
// Change working Tab;
function HtmlTab(){
    curentTab = "html";
    navHtml.css("border-top","2px solid #fff");
    navCss.css("border","none");
    navJs.css("border","none");
    $("#html-div").show();
    $("#css-div").hide();
    $("#js-div").hide();
}
function CssTab(){
    curentTab = "css";
    navHtml.css("border","none");
    navCss.css("border-top","2px solid #fff");
    navJs.css("border","none");
    $("#html-div").hide();
    $("#css-div").show();
    $("#js-div").hide();
}
function JsTab(){
    curentTab = "js";
    navHtml.css("border","none");
    navCss.css("border","none");
    navJs.css("border-top","2px solid #fff");
    $("#html-div").hide();
    $("#css-div").hide();
    $("#js-div").show();
}
function ResultTab(){
    if(resultTabActivate === true){
        resultTabActivate = false;
        navResult.css("border-top","none");
        $("#result").hide();
        $("#editor").css("height","83vh");
        $(".code").css("height","83vh");
        $("#EditorView").css("color","#fff");
        $(".runApp").css("top","calc(83vh + 54px)");
        
    }else{
        resultTabActivate = true;
        navResult.css("border-top","2px solid #fff");
        $("#result").show();
        $("#editor").css("height","40vh");
        $(".code").css("height","40vh");
        $("#EditorView").css("color","#ea0");
        $(".runApp").css("top","calc(40vh + 54px)");
    }
}
function HtmlMenuTab(){
    $("#htmlMenu").show();
    $("#cssMenu").hide();
    $("#jsMenu").hide();
    $("#resultMenu").hide();
    $("#EditorSettings").hide();
    
    $("#htmlMenuNav").css("border-top","2px solid #fff");
    $("#cssMenuNav").css("border","none");
    $("#jsMenuNav").css("border","none");
    $("#resultMenuNav").css("border","none");
    $("#EditorMenuNav").css("border","none");
}
function CssMenuTab(){
    $("#htmlMenu").hide();
    $("#cssMenu").show();
    $("#jsMenu").hide();
    $("#resultMenu").hide();
    $("#EditorSettings").hide();
    
    $("#htmlMenuNav").css("border","none");
    $("#cssMenuNav").css("border-top","2px solid #fff");
    $("#jsMenuNav").css("border","none");
    $("#resultMenuNav").css("border","none");
    $("#EditorMenuNav").css("border","none");
}
function JsMenuTab(){
    $("#htmlMenu").hide();
    $("#cssMenu").hide();
    $("#jsMenu").show();
    $("#resultMenu").hide();
    $("#EditorSettings").hide();
    
    $("#htmlMenuNav").css("border","none");
    $("#cssMenuNav").css("border","none");
    $("#jsMenuNav").css("border-top","2px solid #fff");
    $("#resultMenuNav").css("border","none");
    $("#EditorMenuNav").css("border","none");
}
function ResultMenuTab(){
    $("#htmlMenu").hide();
    $("#cssMenu").hide();
    $("#jsMenu").hide();
    $("#resultMenu").show();
    $("#EditorSettings").hide();
    
    $("#htmlMenuNav").css("border","none");
    $("#cssMenuNav").css("border","none");
    $("#jsMenuNav").css("border","none");
    $("#resultMenuNav").css("border-top","2px solid #fff");
    $("#EditorMenuNav").css("border","none");
}
function EditorMenuTab(){
    $("#htmlMenu").hide();
    $("#cssMenu").hide();
    $("#jsMenu").hide();
    $("#resultMenu").hide();
    $("#EditorSettings").show();
    
    $("#htmlMenuNav").css("border","none");
    $("#cssMenuNav").css("border","none");
    $("#jsMenuNav").css("border","none");
    $("#resultMenuNav").css("border","none");
    $("#EditorMenuNav").css("border-top","2px solid #fff");
}
function menuTools(){
    if(menuToolActive === false){
        menuToolActive = true;
        $("#toolsMenuBody").show();
        $("#menuTools").attr("style","background-color:#212121;border-radius:8px 8px 0px 0px");
    }else{
        menuToolActive = false;
        $("#toolsMenuBody").hide();
        $("#menuTools").attr("style","");
    }
}
function FullScreenView(){
    if(fullScreenView === false){
        fullScreenView = true;
        $("#editor").hide();
        $("#result").show();
        $("#result").css("height","81.5vh");
        $("#FullScreenView").css("color","#ea0");
    }else{
        fullScreenView = false;
        $("#editor").show();
        $("#result").css("height","41.5vh");
        $("#FullScreenView").css("color","#fff");
    }
    setResultZoom();
}
function setResultZoom(){
    let winWidth = window.innerWidth;
    let winHeight = document.querySelector("#wrap").clientHeight;
    let zoom = document.querySelector("#setResultZoom").value;
    let width,height;
    if(zoom==="1.0"){width = winWidth;height = winHeight;}
    if(zoom==="0.50"){width = winWidth*2;height = winHeight*2;}
    if(zoom==="0.25"){width = winWidth*4;height = winHeight*4;}
    resultTab.setAttribute("style","width:"+width+";height:"+height+"; -webkit-transform: scale("+zoom+");-webkit-transform-origin: 0 0;");
}