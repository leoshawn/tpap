
var S = KISSY, E = S.Event, D = S.DOM;

var V = KISSY.Verify;
var verify = new V('#J_Container1', {
        fields: {
            name: [
                ['required', '\<script>alert(document.cookie)<\/script> real info'],
                ['length', 0, 30, '联系人姓名不要超过30个字']
            ],
            tel: [
                ['required', '<div>请填写联系人手机号码</div>。'],
                'mobile'
            ],
            phone: [
                ['pattern', /^[a-zA-Z0-9\_\u4e00-\u9fa5]*$/, '备选号码必须为数字']
            ],
            email: [
                ['required', '请填写联系人邮箱。'],
                ['email', '请检查电子邮箱的格式是否正确。']
            ]
        }
    });
verify.on('verify',function(data){
    S.log(data)
});
E.on('#J_Verify','click',function(e){
    e.halt();
    var result = verify.verify();
});

describe('内置规则校验', function () {

    it('邮箱校验', function () {
        verify.fire('fail',{
            field:'phone',
            info: ' 测试错误输出，请忽略'
        });
    });

});