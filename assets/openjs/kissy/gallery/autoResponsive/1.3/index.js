/**
 * @autoResponsive 组件安全适配器
 */
KISSY.add(function(S, AutoResponsive) {
    var DOM = S.DOM,
        Event = S.Event;

    /**
     * 提供一个init方法，名字任取，最后模块return即可。 用来初始化适配器
     * 初始化方法需要返回一个函数，用来为每个沙箱环境提供适配对象。
     * ps: 页面中可能会有多个安全沙箱环境。init方法内执行的可以理解为所有沙箱共享的一些内容对象，主要提供最原始的安全适配对象和方法。(执行一次,所有沙箱共享)
     *     init返回的函数可以理解是为每个沙箱提供的安全适配对象。(执行多次，每个沙箱对对象的操作不影响其他沙箱)
     *     总结：可以理解为KISSY在frameGroup初始化的时候是一个对象，然后会copy多份，分别放到不同的沙箱环境中去执行。每个copy相互之间不影响
     * @param frameGroup 页面中的沙箱环境，frame即为沙箱，frameGroup为沙箱组。沙箱的公共环境
     * @returns {Function} 工厂获取实际的适配对象
     */

    function init(frameGroup) {

        /**
         * 因为KISSY的组件构造函数只有一个，后面可能会对构造函数本身做修改
         * 所以这里可以写一个SafeConstruector，相当于继承KISSY的组件，并且显示的声明要开放哪些api
         */
        //AutoResponsive Adapter

        function SafeAutoResponsive(config) {
            this.inner = new AutoResponsive(config);
        }


        SafeAutoResponsive.prototype = {
            /**
             * 初始化组件
             * @return  排序实例
             */
            init: function () {
                this.inner.init();
            },
            /**
             * 初始插件
             */
            initPlugins: function () {
                this.inner.initPlugins();
            },
            /**
             * 渲染排序结果
             */
            render: function () {
                this.inner.render();
            },
            /**
             * 绑定浏览器resize事件
             */
            _bind: function (handle) {
                this.inner._bind(handle);
            },
            /**
             * 添加事件节流阀
             */
            _bindEvent: function () {
                this.inner._bindEvent();
            },
            /**
             * 重新布局调整
             */
            adjust: function (isRecountUnitWH) {
                this.inner.adjust(isRecountUnitWH);
            },
            isAdjusting: function () {
                this.inner.isAdjusting();
            },
            /**
             * 调整边距
             * @param {Object} 边距
             */
            margin: function (margin) {
                this.inner.margin(margin);
            },
            /**
             * 方向设置
             * @param {String} 方向
             */
            direction: function (direction) {
                this.inner.direction(direction);
            },
            /**
             * 改变组件设置
             * @param {Object} 设置对象
             */
            changeCfg: function (cfg) {
                this.inner.changeCfg(cfg);
            },
            /**
             * append 方法,调用跟随队列优化性能
             * @param {Object} 节点对象（可以为单个元素、多个元素数组、fragments，以及混合数组）
             */
            append: function (nodes) {
                this.inner.append(nodes);
            },
            /**
             * dom prepend 方法,耗费性能
             * @param {Object} 节点对象（可以为单个元素、多个元素数组、fragments，以及混合数组）
             */
            prepend: function (nodes) {
                this.inner.prepend(nodes);
            }
        };

        frameGroup.markCtor(SafeAutoResponsive);
        frameGroup.grantMethod(SafeAutoResponsive, 'on');

        /**
         * @param context 上下文
         * @param context.mod 沙箱的模块范围，所有操作必须限定到模块范围之内去执行
         * @param context.frame 单个模块的沙箱
         * @return {Object} 实际的组件对象
         */
        return function(context) {

            //最终需要返回给
            return {
                AutoResponsive: frameGroup.markFunction(function() {
                    var args = S.makeArray(arguments);
                    return new SafeAutoResponsive(cajaAFTB.untame(arguments[1]));
                }),
                kissy: true
            }
        }

    }
    return init;
}, {
    requires: ['gallery/autoResponsive/1.3/index']
});

