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
htmlTab.setReadOnly(true);
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
cssTab.setReadOnly(true);
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
jsTab.setReadOnly(true);
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
HtmlHead.setReadOnly(true);
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


run()