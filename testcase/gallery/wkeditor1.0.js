var S = KISSY;
var editor = new S.WKeditor({
	ele:"#WKeditor",
	message:'<div class="WKeditor_message"><h3>请输入正文</h3><p>小提示：<br>\
                1. 鼠标选中已输入文字可修改文字样式。<br>\
                2. 支持粘帖截图(chrome firefox)。<br>\
                3. 移动到未居中的图片上出现居中按钮。<br></div>',
	font:[
		"normalFont","largeFont","hugeFont","strongFont","listText"
	],
    plugin:{
        image:{
            
        }
    }
});
editor.init();
