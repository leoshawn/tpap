var S = KISSY;
var D = S.DOM;
var TreeMenu = KISSY.TreeMenu;

var menu = {
	title:'树形菜单',
	value:'root',
	anim:false,
	unfold:true,
	unfoldAll:false,
	unique:false,
	subMenu:[
		{
			title:'测试菜单1',
			value:'value1',
			unfold:true,
			tip:'我是测试菜单1tip',
			subMenu:[
					{
						title:'测试菜单1-1',
						value:'value1-1',
						subMenu:[	{title: '测试菜单1-1-1', value:'value1-1-1'},
									{title: '测试菜单1-1-2', value:'value1-1-2'}, 
									{title: '测试菜单1-1-2', value:'value1-1-3'}]
					},
					{	
						title:'测试菜单1-2',
						value:'value1-2',
						subMenu:[	{title: '测试菜单1-2-1',
									value:'value1-2-1',
									subMenu : [{title: '测试菜单1-2-1-1', value:'value2-1-1'}, 
												{title: '测试菜单1-2-1-2', value:'value2-1-2'},
												{title: '测试菜单1-2-1-3', value:'value2-1-3'},
												{title: '测试菜单1-2-1-4', value:'value2-1-4'}]},
									{title: '测试菜单1-2-2', value:'value1-2-2'}, 
									{title: '测试菜单1-2-3', value:'value1-2-3'}]
					},
					{title:'测试菜单1-3', value:'value1-3'},
					{title:'测试菜单1-4', value:'value1-4'}
				]
		},
		{
			title:'测试菜单2',
			value:'value2',
			unfold:true,
			tip:'我是测试菜单2tip',
			subMenu:[
					{
							title:'测试菜单2-1', 
							value:'value2-1',
							subMenu:[	{title: '测试菜单2-1-1',value:'value2-1-1'},
									{title: '测试菜单2-1-2', value:'value2-1-2'}, 
									{title: '测试菜单2-1-3', value:'value2-1-3'}]
					},
					{title:'测试菜单2-2', value:'value2-2'},
					{title:'测试菜单2-3', value:'value2-3'},
					{title:'测试菜单2-4', value:'value2-4'}
				]
		},
		{title:'测试菜单3',value:'value3'},
		{title:'测试菜单4',value:'value4'}
	]
};

var treemMenu = new TreeMenu(menu);

treemMenu.render();

treemMenu.on('fold', function(evt){
	D.get('#info').innerHTML = evt.entity.title + ' 收起' + '<br>value = ' + evt.entity.value + '<br>idx = ' + evt.entity.index + '<br>level = ' + evt.entity.level + '<br>isLeaf = ' + evt.entity.isLeaf + '<br>unfold = ' + evt.entity.unfold + '<br>selected = ' + evt.entity.selected;
});

treemMenu.on('unfold', function(evt){
	D.get('#info').innerHTML = evt.entity.title + ' 展开' + '<br>value = ' + evt.entity.value + '<br>idx = ' + evt.entity.index + '<br>level = ' + evt.entity.level + '<br>isLeaf = ' + evt.entity.isLeaf + '<br>unfold = ' + evt.entity.unfold + '<br>selected = ' + evt.entity.selected;
});

treemMenu.on('select', function(evt){
	D.get('#info').innerHTML = evt.entity.title + ' 选中' + '<br>value = ' + evt.entity.value + '<br>idx = ' + evt.entity.index + '<br>level = ' + evt.entity.level + '<br>isLeaf = ' + evt.entity.isLeaf + '<br>unfold = ' + evt.entity.unfold + '<br>selected = ' + evt.entity.selected;
});

S.all('#unfoldAll').on('click', function(evt){
	treemMenu.unfoldAll();
});

S.all('#foldAll').on('click', function(evt){
	treemMenu.foldAll();
});

S.all('#resetAll').on('click', function(evt){
	treemMenu.resetAll();
});

S.all('#unique').on('click', function(evt){
	menu.unique = D.get(this).checked;
	treemMenu.reload(menu);
	treemMenu.render();
});

S.all('#anim').on('click', function(evt){
	menu.anim = D.get(this).checked;
	treemMenu.reload(menu);
	treemMenu.render();
});

S.all('#style').on('change', function(evt){
	menu.style = S.all(this).val();
	treemMenu.reload(menu);
	treemMenu.render();
});