var S = KISSY;

var DataLazyload = KISSY.DataLazyload;

var lay = new DataLazyload({
	// container: '#test',
	diff: 150,
	placeholder: 'http://mozilla.com.cn/static/images/logo.png'

});

lay.addCallback("#test1", function() {
	S.log("u see me test1,add in selector");
});
lay.addCallback("#test2", function() {
	S.log("u see me test2,add in selector");

});

lay.addCallback(".test3", function() {
	S.log("u see me test3,add in selector");

});

new DataLazyload({
	container: '.box',
	diff: 150,
	placeholder: 'http://mozilla.com.cn/static/images/logo.png'   
});

