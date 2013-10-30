console.log(KISSY.DOM.t());
console.log(KISSY.DOM.t().a.tagName);
console.log(KISSY.DOM.t().b);


var Calendar = KISSY.Calendar;//日历组件默认在KISSY的命名空间下
var cal = new Calendar('.calendar', {
        popup: true,
        minDate: new Date()
    }
);
KISSY.DOM.get('input').setAttribute('class','shenme');
KISSY.DOM.get('input').setAttribute('onclick','KISSY.alert(1);');