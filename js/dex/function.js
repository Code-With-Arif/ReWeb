const resultTab = document.querySelector("#web-result");


function iframeHeadAdd(){
    var iframeHead = HtmlHead.getValue();
    let styleSheet = $(".customStyleSheet");
    let script = $(".customScript");
    consoleFrame = "<script src='js/console.js'></script><script>eruda.init({tool: ['console','element']});</script>";
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
    consoleFrame = "<script src='js/console.js'></script><script>eruda.init({tool: ['console','elements']});</script>";
    webCode = htmlCode+consoleFrame;
    //if(jsAutoRender==true){webCode=webCode+jsCode}
    result = resultTab.contentWindow.document;
    result.open();
    result.write(webCode);
    result.close();
    iframeHeadAdd();
}