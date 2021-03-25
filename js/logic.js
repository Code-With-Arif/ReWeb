//define all editors to ace.editor
const htmlTab = ace.edit("html-code");
const cssTab = ace.edit("css-code");
const jsTab = ace.edit("js-code");

//html editor setup
htmlTab.getSession().setMode("ace/mode/html");
htmlTab.setTheme("ace/theme/idle_fingers");
htmlTab.session.setTabSize(4);
htmlTab.session.setUseWrapMode(false);
htmlTab.setHighlightActiveLine(true);
htmlTab.setReadOnly(false);
htmlTab.setOptions({
    enableBasicAutocompletion: true,
    enableSnippets: true,
    enableLiveAutocompletion: true,
    tooltipFollowsMouse: false
})
//css editor setup
cssTab.getSession().setMode("ace/mode/css");
cssTab.setTheme("ace/theme/idle_fingers");
cssTab.session.setTabSize(4);
cssTab.session.setUseWrapMode(false);
cssTab.setHighlightActiveLine(true);
cssTab.setReadOnly(false);
cssTab.setOptions({
    enableBasicAutocompletion: true,
    enableSnippets: true,
    enableLiveAutocompletion: true,
    tooltipFollowsMouse: false
})
//js editor setup
jsTab.getSession().setMode("ace/mode/javascript");
jsTab.setTheme("ace/theme/idle_fingers");
jsTab.session.setTabSize(4);
jsTab.session.setUseWrapMode(false);
jsTab.setHighlightActiveLine(true);
jsTab.setReadOnly(false);
jsTab.setOptions({
    enableBasicAutocompletion: true,
    enableSnippets: true,
    enableLiveAutocompletion: true,
    tooltipFollowsMouse: false
})

//change events for all editor to run app:
htmlTab.session.on('change', function(delta) {run()});
cssTab.session.on('change', function(delta) {run()});
jsTab.session.on('change', function(delta) {run()});


// OnClick Events:
document.getElementById("menuSettings").addEventListener("click",function(){openMenuWindow()});
document.getElementById("navHtml").addEventListener("click",function(){HtmlTab()});
document.getElementById("navCss").addEventListener("click",function(){CssTab()});
document.getElementById("navJs").addEventListener("click",function(){JsTab()});
document.getElementById("navResult").addEventListener("click",function(){ResultTab()});
document.getElementById("menuTools").addEventListener("click",function(){menuTools()});
document.getElementById("closeMenuWindow").addEventListener("click",function(){closeMenuWindow()});
document.getElementById("closeMenuWindowDiv").addEventListener("click",function(){closeMenuWindow()});
document.getElementById("htmlMenuNav").addEventListener("click",function(){HtmlMenuTab()});
document.getElementById("cssMenuNav").addEventListener("click",function(){CssMenuTab()});
document.getElementById("jsMenuNav").addEventListener("click",function(){JsMenuTab()});
document.getElementById("addStyleSheet").addEventListener("click",function(){iframeHeadAdd()});
document.getElementById("addNewStyleSheet").addEventListener("click",function(){addNewStyleSheet()});
document.getElementById("addScript").addEventListener("click",function(){iframeHeadAdd()});
document.getElementById("addNewScript").addEventListener("click",function(){addNewScript()});
document.getElementById("RunJs").addEventListener("click",function(){jsRun()});
document.getElementById("overlay-2").addEventListener("click",function(){menuTools()});
document.getElementById("toolsSettings").addEventListener("click",function(){openMenuWindow();menuTools()});
document.getElementById("FullScreenView").addEventListener("click",function(){FullScreenView();menuTools()});
document.getElementById("EditorView").addEventListener("click",function(){ResultTab();menuTools()});
//document.getElementById("").addEventListener("click",function(){});





//run the app for first time
run();