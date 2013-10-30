var S = KISSY;
var editor = new S.WKeditor({
	ele:"#WKeditor",
	message:'<div class="WKeditor_message"><h3>请输入正文</h3><p>小提示：<br>\
                1. 鼠标选中已输入文字可修改文字样式。<br>\
                2. 支持粘帖截图(chrome firefox)。<br>\
                3. 移动到未居中的图片上出现居中按钮。<br></div>',
	font:[
		"normalFont","largeFont","hugeFont","strongFont","listText"
	]
});
editor.init();
console.log('初始化"normalFont","largeFont","hugeFont","strongFont","listText"完成');
console.log("装载自定义按钮 “红”");
editor.addFont({name:"FontColor",command:"FontColor",title:"设置红色",value:"红"},function(){
    console.log("点击----> 红");
});
editor.plug({name:"image",title:"插入图片",value:"图"},function(){
    console.log("点击----> 图");
});
console.log("装载自定义按钮 “图”");
editor.plug({name:"my",title:"自定义模版",value:"模"},function(){
    console.log("点击----> 模")
});
console.log("装载自定义按钮 “模”");
console.log("更多API：http://gallery.kissyui.com/WKeditor/1.0/guide/index.html");