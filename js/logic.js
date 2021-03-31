//define all editors to ace.editor
const htmlTab = ace.edit("html-code");
const cssTab = ace.edit("css-code");
const jsTab = ace.edit("js-code");
const HtmlHead = ace.edit("HtmlHead");

//html editor setup
htmlTab.getSession().setMode("ace/mode/html");
htmlTab.setTheme("ace/theme/idle_fingers");
htmlTab.session.setTabSize(4);
htmlTab.session.setUseWrapMode(false);
htmlTab.setShowPrintMargin(false);
htmlTab.setHighlightActiveLine(true);
htmlTab.setShowInvisibles(true);
htmlTab.setReadOnly(false);
htmlTab.setOptions({
    enableBasicAutocompletion: true,
    enableSnippets: true,
    enableLiveAutocompletion: true
})
//css editor setup
cssTab.getSession().setMode("ace/mode/css");
cssTab.setTheme("ace/theme/idle_fingers");
cssTab.session.setTabSize(4);
cssTab.session.setUseWrapMode(false);
cssTab.setShowPrintMargin(false);
cssTab.setHighlightActiveLine(true);
cssTab.setShowInvisibles(true);
cssTab.setReadOnly(false);
cssTab.setOptions({
    enableBasicAutocompletion: true,
    enableSnippets: true,
    enableLiveAutocompletion: true
})
//js editor setup
jsTab.getSession().setMode("ace/mode/javascript");
jsTab.setTheme("ace/theme/idle_fingers");
jsTab.session.setTabSize(4);
jsTab.session.setUseWrapMode(false);
jsTab.setShowPrintMargin(false);
jsTab.setHighlightActiveLine(true);
jsTab.setShowInvisibles(true);
jsTab.setReadOnly(false);
jsTab.setOptions({
    enableBasicAutocompletion: true,
    enableSnippets: true,
    enableLiveAutocompletion: true
})
// head tag editor
HtmlHead.getSession().setMode("ace/mode/html");
HtmlHead.setTheme("ace/theme/idle_fingers");
HtmlHead.session.setTabSize(4);
HtmlHead.session.setUseWrapMode(false);
HtmlHead.setShowPrintMargin(false);
HtmlHead.setHighlightActiveLine(true);
HtmlHead.setShowInvisibles(true);
HtmlHead.renderer.setShowGutter(false);
HtmlHead.setReadOnly(false);
HtmlHead.setOptions({
    enableBasicAutocompletion: false,
    enableSnippets: false,
    enableLiveAutocompletion: false
})

//change events for all editor to run app:
htmlTab.session.addEventListener('change', e=>{run()});
cssTab.session.addEventListener('change', e=>{run()});
jsTab.session.addEventListener('change', e=>{run()});
HtmlHead.session.addEventListener('change', e=>{run()});


// OnClick Events:
$("#menuSettings").click(e=>{$("#menuWindow").show()});
$("#navHtml").click(e=>{HtmlTab()});
$("#navCss").click(e=>{CssTab()});
$("#navJs").click(e=>{JsTab()});
$("#navResult").click(e=>{ResultTab()});
$("#menuTools").click(e=>{menuTools()});
$("#closeMenuWindow").click(e=>{$("#menuWindow").hide()});
$("#closeMenuWindowDiv").click(e=>{$("#menuWindow").hide()});
$("#htmlMenuNav").click(e=>{HtmlMenuTab()});
$("#cssMenuNav").click(e=>{CssMenuTab()});
$("#jsMenuNav").click(e=>{JsMenuTab()});
$("#resultMenuNav").click(e=>{ResultMenuTab()});
$("#EditorMenuNav").click(e=>{EditorMenuTab()});
$("#addStyleSheet").click(e=>{iframeHeadAdd()});
$("#addNewStyleSheet").click(e=>{addNewStyleSheet()});
$("#addScript").click(e=>{iframeHeadAdd()});
$("#addNewScript").click(e=>{addNewScript()});
$("#RunJs").click(e=>{jsRun()});
$("#overlay-2").click(e=>{menuTools()});
$("#toolsSettings").click(e=>{$("#menuWindow").show();menuTools()});
$("#FullScreenView").click(e=>{FullScreenView();menuTools()});
$("#EditorView").click(e=>{ResultTab();menuTools()});
$("#setResultZoom").on("change",e=>{setResultZoom()});
//$("").click(e=>{});

//checkbox event
$("#JSAutoRender").on("change",e=>{if($("#JSAutoRender").is(':checked')){jsAutoRender=true}else{jsAutoRender=false}});           
$("#TextWrapCheck").on("change",e=>{if($("#TextWrapCheck").is(':checked')){htmlTab.session.setUseWrapMode(true);cssTab.session.setUseWrapMode(true);jsTab.session.setUseWrapMode(true);}else{htmlTab.session.setUseWrapMode(false);cssTab.session.setUseWrapMode(false);jsTab.session.setUseWrapMode(false);} });           
$("#InvisibleCharCheck").on("change",e=>{if($("#InvisibleCharCheck").is(':checked')){htmlTab.setShowInvisibles(true);cssTab.setShowInvisibles(true);jsTab.setShowInvisibles(true);}else{htmlTab.setShowInvisibles(false);cssTab.setShowInvisibles(false);jsTab.setShowInvisibles(false);} });           
$("#ReadOnlyModeCheck").on("change",e=>{if($("#ReadOnlyModeCheck").is(':checked')){htmlTab.setReadOnly(true);cssTab.setReadOnly(true);jsTab.setReadOnly(true);}else{htmlTab.setReadOnly(false);cssTab.setReadOnly(false);jsTab.setReadOnly(false);} });           
$("#CodeIntelligenceCheck").on("change",e=>{if($("#CodeIntelligenceCheck").is(':checked')){htmlTab.setOptions({enableBasicAutocompletion:true,enableSnippets:true,enableLiveAutocompletion:true});cssTab.setOptions({enableBasicAutocompletion:true,enableSnippets:true,enableLiveAutocompletion:true});jsTab.setOptions({enableBasicAutocompletion:true,enableSnippets:true,enableLiveAutocompletion:true});}else{htmlTab.setOptions({enableBasicAutocompletion:false,enableSnippets:false,enableLiveAutocompletion:false});cssTab.setOptions({enableBasicAutocompletion:false,enableSnippets:false,enableLiveAutocompletion:false});jsTab.setOptions({enableBasicAutocompletion:false,enableSnippets:false,enableLiveAutocompletion:false});} });           
//$("").on("change",e=>{if($("").is(':checked')){});           

//input event
$("#TabSize").on("change",e=>{
    htmlTab.session.setTabSize($("#TabSize").val());
    cssTab.session.setTabSize($("#TabSize").val());
    jsTab.session.setTabSize($("#TabSize").val());
});

//select event
$("#SetTheme").on("change",e=>{
    htmlTab.setTheme("ace/theme/"+$("#SetTheme").val());
    cssTab.setTheme("ace/theme/"+$("#SetTheme").val());
    jsTab.setTheme("ace/theme/"+$("#SetTheme").val());
    HtmlHead.setTheme("ace/theme/"+$("#SetTheme").val());
});



//run the app for first time
run();