/**
 * @fileOverview snake-slider组件caja适配（封装组件：http://gallery.kissyui.com/snake-slider/1.0/guide/index.html）
 * @author 阿古<agu.hc@taobao.com>
 * @version 1.0
 * @date 2013-10-24
 */
KISSY.add(function(S, SnakeSlider)
{
    /**
     * 初始化适配器
     * 初始化方法需要返回一个函数, 用来为每个js模块提供适配对象
     * @param frameGroup 页面中的沙箱环境，frameGroup为沙箱组（页面中所有模块的公共环境）
     * @returns {Function} 获取实际的适配对象
     */
    function init(frameGroup)
    {
        /**
         * 轮播组件封装
         * 对原始构造函数做一层封装，然后暴露给第三方环境（相当于继承KISSY的组件）
         */
        function SafeSnakeSlider(config, mod)
        {
            var cfg = cajaAFTB.untame(config), slices, slice, node, i;
            cfg.container = S.get(cfg.container, mod);
            if (slices = cfg.slices)
            {
                for (i = slices.length; -- i > -1;)
                {
                    if (slice = slices[i])
                    {
                        slice.sliceNode = S.get(slice.sliceNode, mod);
                        slice.indicatorNode = S.get(slice.indicatorNode, mod);
                        slice.lazyRenderNode = S.get(slice.lazyRenderNode, mod);
                    }
                }
            }
            cfg.container = S.get(slices.container, mod);
            this.inner = new SnakeSlider(cfg);
        }
        
        SafeSnakeSlider.prototype =
        {
            switchTo: function(slice)
            {
                this.inner.switchTo(cajaAFTB.untame(slice));
            },

            nextSlice: function(recurring)
            {
                return frameGroup.tame(this.inner.nextSlice(recurring));
            },

            previousSlice: function(recurring)
            {
                return frameGroup.tame(this.inner.nextSlice(recurring));
            },

            getActiveSlice: function()
            {
                return frameGroup.tame(this.inner.getActiveSlice());
            },
            
            getSliceByIndex: function(index)
            {
                return frameGroup.tame(this.inner.getSliceByIndex(index));
            },
            
            getSliceById: function(id)
            {
                return frameGroup.tame(this.inner.getSliceById(id));
            },
            
            bindSliceEvent: function(name, listener, context)
            {
                var self = this;
                this.inner.bindSliceEvent(name, function(e)
                {
                    listener.call(cajaAFTB.untame(context) || self, e);
                });
            },

            bindIndicatorEvent: function(name, listener, context)
            {
                var self = this;
                this.inner.bindIndicatorEvent(name, function(e)
                {
                    listener.call(cajaAFTB.untame(context) || self, e);
                });
            },

            startAutoSwitch: function(switchInterval)
            {
                this.inner.startAutoSwitch(switchInterval);
            },

            appendSlice: function(slice)
            {
                return frameGroup.tame(this.inner.appendSlice(cajaAFTB.untame(slice)));
            },
            
            insertSlice: function(slice, index)
            {
                return frameGroup.tame(this.inner.insertSlice(cajaAFTB.untame(slice), index));
            },
            
            removeSlice: function(slice)
            {
                return frameGroup.tame(this.inner.removeSlice(cajaAFTB.untame(slice)));
            },

            clearSlices: function()
            {
                this.inner.clearSlices();
            },

            on: function(type, listener, context)
            {
                var self = this;
                this.inner.on(type, function(e)
                {
                    listener.call(cajaAFTB.untame(context) || self, frameGroup.tame(e));
                });
            }
        };
        // 无参数方法
        var methods = ["stopAutoSwitch", "pauseAutoSwitch", "resumeAutoSwitch", "isAutoSwitchStarted"], i;
        for (i = methods.length; -- i > -1;)
        {
            SafeSnakeSlider.prototype[methods[i]] = function()
            {
                return this.inner[methods[i]]();
            };
        }
        
        frameGroup.markCtor(SafeSnakeSlider);  // 标记构造函数
        // 构造函数实例的方法
        methods = ["switchTo", "nextSlice", "previousSlice", "getActiveSlice", "getSliceByIndex", "getSliceById", "bindSliceEvent", "bindIndicatorEvent", "startAutoSwitch", "appendSlice", "insertSlice", "removeSlice", "clearSlices", "stopAutoSwitch", "pauseAutoSwitch", "resumeAutoSwitch", "isAutoSwitchStarted", "on"], i;
        for (i = methods.length; -- i > -1;)
        {
            frameGroup.grantMethod(SafeSnakeSlider, methods[i]);
        }

        /**
         * 轮播组件-切片封装
         */
        function SafeSlice(config, mod)
        {
            var cfg = cajaAFTB.untame(config);
            cfg.sliceNode = S.get(cfg.sliceNode, mod);
            cfg.indicatorNode = S.get(cfg.indicatorNode, mod);
            cfg.lazyRenderNode = S.get(cfg.lazyRenderNode, mod);
            this.inner = new SnakeSlider.CHILD_WIDGET(cfg);
        }

        SafeSlice.prototype =
        {
            bindSliceEvent: function(name, listener, context)
            {
                var self = this;
                this.inner.bindSliceEvent(name, function(e)
                {
                    listener.call(cajaAFTB.untame(context) || self, e);
                });
            },

            bindIndicatorEvent: function(name, listener, context)
            {
                var self = this;
                this.inner.bindIndicatorEvent(name, function(e)
                {
                    listener.call(cajaAFTB.untame(context) || self, e);
                });
            },

            appendTo: function(slider)
            {
                return frameGroup.tame(this.inner.appendTo(cajaAFTB.untame(slider)));
            },
            
            insertTo: function(slider, index)
            {
                return frameGroup.tame(this.inner.insertTo(cajaAFTB.untame(slider), index));
            },
            
            on: function(type, listener, context)
            {
                var self = this;
                this.inner.on(type, function(e)
                {
                    listener.call(cajaAFTB.untame(context) || self, frameGroup.tame(e));
                });
            }
        };
        // 无参数方法
        methods = ["activate", "deactivate", "displayActiveSliceStyle", "displayInactiveSliceStyle", "displayActiveIndicatorStyle", "displayInactiveIndicatorStyle", "renderLazily", "remove"], i;
        for (i = methods.length; -- i > -1;)
        {
            SafeSlice.prototype[methods[i]] = function()
            {
                return this.inner[methods[i]]();
            };
        }

        frameGroup.markCtor(SafeSlice);  // 标记构造函数
        // 构造函数实例的方法
        methods = ["bindSliceEvent", "bindIndicatorEvent", "appendTo", "insertTo", "activate", "deactivate", "displayActiveSliceStyle", "displayInactiveSliceStyle", "displayActiveIndicatorStyle", "displayInactiveIndicatorStyle", "renderLazily", "remove", "on"], i;
        for (i = methods.length; -- i > -1;)
        {
            frameGroup.grantMethod(SafeSlice, methods[i]);
        }

        return function(context)
        {
            // 最终返回给ISV使用的API
            var result =
            {
                SnakeSlider: frameGroup.markFunction(function()
                {
                    var cfg = cajaAFTB.untame(arguments[0]);
                    return new SafeSnakeSlider(cfg, context.mod);
                }),
                kissy: true  // 是KISSY这个对象的一个属性
            };
            result.SnakeSlider.CHILD_WIDGET = frameGroup.markFunction(function()
            {
                var cfg = cajaAFTB.untame(arguments[0]);
                return new SafeSlice(cfg, context.mod);
            });
            return result;
        };
    }
},
{
    requires: ["gallery/snake-slider/1.0/index", "gallery/layer-anim/1.1/index"]
});
