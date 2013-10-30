/**
 * fluidLayout 组件的安全适配器
 */
KISSY.add(function (S, FluidLayout) {
    var D = S.DOM,
        E = S.Event;

    function init(frameGroup) {
        function SafeFluidLayout(config) {
            this.inner = new FluidLayout(config);
        }

        //一般方法，无参数的直接内部调用原生方法即可
        SafeFluidLayout.prototype.maxArr = function (arr) {
            this.inner.maxArr(cajaAFTB.untame(arr));
        };
        SafeFluidLayout.prototype.getMar = function (node) {
            this.inner.getMar(cajaAFTB.untame(cajaAFTB.tameNode(node)));
        };
        SafeFluidLayout.prototype.getMinCol = function (arr) {
            this.inner.getMinCol(cajaAFTB.untame(arr));
        };
        frameGroup.markCtor(SafeFluidLayout);
        frameGroup.grantMethod(SafeFluidLayout, "maxArr");
        frameGroup.grantMethod(SafeFluidLayout, "getMar");
        frameGroup.grantMethod(SafeFluidLayout, "getMinCol");
        return function (context) {
            //最终需要返回给 ISV使用的API，这是真正第三方调用的API，kissy:true意思是这是KISSY这个对象的一个属性
            return {
                FluidLayout: frameGroup.markFunction(function () {
                    var config = arguments[0];
                    var container = typeof config.container == 'string' ? D.get("#" + config.container) : config.container;
                    config = cajaAFTB.untame(config);
                    config.container = D.get(container, context.mod);
                    return new SafeFluidLayout(config);

                }),//暴露构造函数给caja环境
                kissy: true
            }
        }
    }

    return init;
}, {requires: ['gallery/fluidLayout/1.0/index']});