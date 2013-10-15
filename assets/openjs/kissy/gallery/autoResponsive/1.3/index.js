/**
 * @autoResponsive 组件安全适配器
 */
KISSY.add(function(S, AutoResponsive,Hash,Drag,Loader,Sort) {
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
            console.log(this.inner);
        }

        S.augment(SafeAutoResponsive, {
            /**
             * 初始化组件
             * @return  排序实例
             */
            init: function () {
                this.inner.init();
            },
            /**
             * 渲染排序结果
             */
            render: function () {
                this.inner.render();
            },
            /**
             * 重新布局调整
             */
            adjust: function (isRecountUnitWH) {
                this.inner.adjust(isRecountUnitWH);
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
            },
            on:function(type,fn){
                this.inner.on(type, frameGroup.markFunction(function(ev){
                    if(ev.autoResponsive.items){
                        
                    }
                    fn.call(this,ev);
                }));
            }
        });

        frameGroup.markCtor(SafeAutoResponsive);

        S.each(['init', 'render', 'adjust', 'margin', 'direction', 'changeCfg', 'append', 'prepend', 'on'], function(fn) {
            frameGroup.grantMethod(SafeAutoResponsive, fn);
        });

        //Hash Adapter

        function SafeAutoResponsiveHash(config) {
            this.inner = new AutoResponsive.hash();
        }

        S.augment(SafeAutoResponsiveHash, {
           
            hasHash: function () {
                this.inner.hasHash();
            },
            parse: function () {
                this.inner.parse();
            },
            /**
             * 解析hash
             * priority,filter
             */
            getParam: function () {
                this.inner.getParam();
            },
            getPriority: function (str) {
                this.inner.getPriority(str);
            },
            getFilter: function (str) {
                this.inner.getFilter(str);
            }
        
        });

        frameGroup.markCtor(SafeAutoResponsiveHash);

        S.each(['hasHash', 'parse', 'getParam', 'getPriority', 'getFilter'], function(fn) {
            frameGroup.grantMethod(SafeAutoResponsiveHash, fn);
        });

        //Drag Adapter

        function SafeAutoResponsiveDrag(config) {
            this.inner = new AutoResponsive.Drag();
        }

        S.augment(SafeAutoResponsiveDrag, {
            /**
             * 动态改变配置
             */
            changCfg:function(cfg){
                this.inner.changeCfg(cfg);
            },
            stop:function(){
                this.inner.stop();
            },
            restore:function(){
                this.inner.restore();
            } 
        
        });

        frameGroup.markCtor(SafeAutoResponsiveDrag);

        S.each(['changCfg', 'stop', 'restore'], function(fn) {
            frameGroup.grantMethod(SafeAutoResponsiveDrag, fn);
        });


        //Loader Adapter

        function SafeAutoResponsiveLoader(config) {
            this.inner = new AutoResponsive.loader();
        }

        S.augment(SafeAutoResponsiveLoader, {

            /**
             * 暴露成外部接口，主要目的是让使用者可以动态改变loader某些配置（如mod），而不需要重新实例化
             * 修改的配置会立即生效
             * @param cfg
             */
            changeCfg: function(cfg){
                this.inner.changeCfg(cfg);
            },
            /**
             * 使用用户自定义load函数对数据进行loading
             * @public 在手动模式时可以供外部调用
             */
            load: function () {
                this.inner.load();
            },
            /**
             * 启动loader数据load功能
             * @public
             */
            start: function () {
                this.inner.start();
            },
            /**
             * 停止loader数据load功能
             * @public
             */
            stop: function () {
                this.inner.stop();
            },
            /**
             * 暂停loader数据load功能
             * @public
             */
            pause: function () {
                this.inner.pause();
            },
            /**
             * 恢复（重新唤醒）loader数据load功能
             * @public
             */
            resume: function () {
                this.inner.resume();
            },
            /**
             * 停止loader所有工作，销毁loader对象
             * @deprecated 该功能暂时未完善
             * @public
             */
            destroy: function () {
                this.inner.destroy();
            }
        });

        frameGroup.markCtor(SafeAutoResponsiveLoader);

        S.each(['changeCfg', 'load', 'start', 'stop', 'pause', 'resume', 'destroy'], function(fn) {
            frameGroup.grantMethod(SafeAutoResponsiveLoader, fn);
        });


        //Sort Adapter

        function SafeAutoResponsiveSort(config) {
            this.inner = new AutoResponsive.sort();
        }

        S.augment(SafeAutoResponsiveSort, {
            /**
             * 暴露成外部接口
             * 修改的配置会立即生效
             * @param cfg
             */
            changeCfg: function(cfg){
                this.inner.changeCfg(cfg);
            },
            /**
             * 随机排序
             */
            random:function(cfg){
                this.inner.random(cfg);
            },
            /**
             * 优先排序
             */
            priority:function(cfg){
                this.inner.priority(cfg);
            },
            /**
             * 倒序
             */
            reverse:function(){
                this.inner.reverse();
            },
            /**
             * 过滤排序
             */
            filter:function(cfg){
                this.inner.filter(cfg);
            },
            /**
             * 用户自定义算法
             */
            custom:function(action){
                this.inner.custom(action);
            },
            /**
             * 清除规则
             */
            clear:function(){
                this.inner.clear();
            },
            /**
             * 撤销操作
             */
            restore:function(){
                this.inner.restore();
            }
        });

        frameGroup.markCtor(SafeAutoResponsiveSort);

        S.each(['changeCfg', 'random', 'priority', 'reverse', 'filter', 'custom', 'clear', 'restore'], function(fn) {
            frameGroup.grantMethod(SafeAutoResponsiveSort, fn);
        });

        /**
         * @param context 上下文
         * @param context.mod 沙箱的模块范围，所有操作必须限定到模块范围之内去执行
         * @param context.frame 单个模块的沙箱
         * @return {Object} 实际的组件对象
         */
        return function(context) {
            //最终需要返回给
            return {
                AutoResponsive:{
                    Base:frameGroup.markFunction(function() {
                        var config = S.makeArray(arguments)[0];    
                        config = cajaAFTB.untame(config);
                        config.container = S.get(config.container, context.mod);
                        return new SafeAutoResponsive(config);
                    }),
                    Plugin:{
                        hash:frameGroup.markFunction(function(){
                            var config = S.makeArray(arguments)[0];    
                            config = cajaAFTB.untame(config);
                            return new SafeAutoResponsiveHash();
                        }),
                        drag:frameGroup.markFunction(function(){
                            var config = S.makeArray(arguments)[0];    
                            config = cajaAFTB.untame(config);
                            return new SafeAutoResponsiveDrag();
                        }),
                        loader:frameGroup.markFunction(function(){
                            var config = S.makeArray(arguments)[0];    
                            config = cajaAFTB.untame(config);
                            return new SafeAutoResponsiveLoader();
                        }),
                        sort:frameGroup.markFunction(function(){
                            var config = S.makeArray(arguments)[0];    
                            config = cajaAFTB.untame(config);
                            return new SafeAutoResponsiveSort();
                        })
                    }
                },
                kissy: true
            }
        }
    }
    return init;
}, {
    requires: [
        'gallery/autoResponsive/1.3/base',
        'gallery/autoResponsive/1.3/plugin/hash', 
        'gallery/autoResponsive/1.3/plugin/drag',
        'gallery/autoResponsive/1.3/plugin/loader', 
        'gallery/autoResponsive/1.3/plugin/sort'
    ]
});

