
var S = KISSY, E = S.Event, D = S.DOM;

var V = KISSY.Verify;
var verify = new V('#J_Container', {
    fields: {
        name: [
            ['required', '\<script>alert(document.cookie)<\/script> real info'],
            ['length', 0, 30, '联系人姓名不要超过30个字']
        ],
        tel: [
            ['required', '<div>请填写联系人手机号码</div>。'],
            'mobile'
        ],
        email: [
            ['required', '请填写联系人邮箱。'],
            ['email', '请检查电子邮箱的格式是否正确。']
        ]
    }
});

E.on('#J_Verify','click',function(e){
    e.halt();
    var result = verify.verify();
});

describe('表单域操作', function () {

    it('add、remove、modify方法测试',function(){
        verify.add('phone',['required','mobile']);
        verify.modify('email',[['email', '请检查电子邮箱的格式是否正确。']]);
        verify.remove('name');
    });

    it('fire、on方法测试', function () {
        verify.on('verify',function(data){
            S.log(data)
        });
        verify.fire('fail',{
            field:'phone',
            info: ' 测试错误输出，请忽略'
        });
    });

});