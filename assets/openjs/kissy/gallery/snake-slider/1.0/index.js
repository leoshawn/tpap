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
        var i;

        /**
         * 轮播组件封装
         * 对原始构造函数做一层封装，然后暴露给第三方环境（相当于继承KISSY的组件）
         */
        function SafeSnakeSlider(config, mod)
        {
            this.mod = mod;
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
            this.inner = new SnakeSlider(cfg);
        }
        
        function untameSlice(slice)
        {
            if (slice && typeof slice == "object" && slice.constructor != SnakeSlider.CHILD_WIDGET)
            {
                try
                {
                    slice = cajaAFTB.untame(slice);
                }
                catch (e)
                {
                }
                var value = slice.sliceNode;
                if (value)
                {
                    slice.sliceNode = typeof value == "string" ? S.get(value, this.mod) : value;
                }
                value = slice.indicatorNode;
                if (value)
                {
                    slice.indicatorNode = typeof value == "string" ? S.get(value, this.mod) : value;
                }
                value = slice.lazyRenderNode;
                if (value)
                {
                    slice.lazyRenderNode = typeof value == "string" ? S.get(value, this.mod) : value;
                }
            }
            return slice;
        }
        
        S.augment(SafeSnakeSlider,
        {
            switchTo: function(slice)
            {
                this.inner.switchTo(slice);
            },

            nextSlice: function(recurring)
            {
                return this.inner.nextSlice(recurring);
            },

            previousSlice: function(recurring)
            {
                return this.inner.previousSlice(recurring);
            },

            getActiveSlice: function()
            {
                return this.inner.getActiveSlice();
            },
            
            getSliceByIndex: function(index)
            {
                return this.inner.getSliceByIndex(index);
            },
            
            getSliceById: function(id)
            {
                return this.inner.getSliceById(id);
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
                return this.inner.appendSlice(untameSlice(slice));
            },
            
            insertSlice: function(slice, index)
            {
                return this.inner.insertSlice(untameSlice(slice), index);
            },
            
            removeSlice: function(index)
            {debugger;
                return this.inner.removeSlice(index);
            },

            clearSlices: function() {
                this.inner.clearSlices();
            },

            stopAutoSwitch: function()
            {
                this.inner.stopAutoSwitch();
            },
            
            pauseAutoSwitch: function()
            {
                this.inner.pauseAutoSwitch();
            },

            resumeAutoSwitch: function()
            {
                this.inner.resumeAutoSwitch();
            },

            isAutoSwitchStarted: function()
            {
                return this.inner.isAutoSwitchStarted();
            },

            on: function(type, listener, context)
            {
                var self = this;
                this.inner.on(type, function(e)
                {
                    listener.call(cajaAFTB.untame(context) || self, frameGroup.tame(e));
                });
            },
            
            get: function(name)
            {
                var result = this.inner.get(name);
                return result.hasOwnProperty("nodeType") ? cajaAFTB.tameNode(result, true) : frameGroup.tame(result);
            }
        });

        frameGroup.markCtor(SafeSnakeSlider);  // 标记构造函数
        // 构造函数实例的方法
        methods = ["switchTo", "nextSlice", "previousSlice", "getActiveSlice", "getSliceByIndex", "getSliceById", "bindSliceEvent", "bindIndicatorEvent", "startAutoSwitch", "appendSlice", "insertSlice", "removeSlice", "clearSlices", "stopAutoSwitch", "pauseAutoSwitch", "resumeAutoSwitch", "isAutoSwitchStarted", "on", "get"], i;
        for (i = methods.length; -- i > -1;)
        {
            frameGroup.grantMethod(SafeSnakeSlider, methods[i]);
        }

        // 对切片类封装，进行适配
        var SnakeSlice = SnakeSlider.CHILD_WIDGET, bindSliceEvent = SnakeSlice.bindSliceEvent, bindIndicatorEvent = SnakeSlice.bindIndicatorEvent, appendTo = SnakeSlice.appendTo, insertTo = SnakeSlice.insertTo, getFn = SnakeSlice.get;
        SnakeSlice.bindSliceEvent = function(name, listener, context)
        {
            var self = this;
            bindSliceEvent.call(this, name, function(e)
            {
                listener.call(cajaAFTB.untame(context) || self, e);
            });
        };
        SnakeSlice.bindIndicatorEvent = function(name, listener, context)
        {
            var self = this;
            bindIndicatorEvent.call(this, name, function(e)
            {
                listener.call(cajaAFTB.untame(context) || self, e);
            });
        };
        SnakeSlice.appendTo = function(slider)
        {
            return frameGroup.tame(appendTo.call(this, cajaAFTB.untame(slider)));
        };
        SnakeSlice.insertTo = function(slider, index)
        {
            return frameGroup.tame(insertTo.call(this, cajaAFTB.untame(slider), index));
        };
        SnakeSlice.get = function(name)
        {
            var result = getFn.call(this, name);
            return result.hasOwnProperty("nodeType") ? cajaAFTB.tameNode(result, true) : frameGroup.tame(result);
        };

        frameGroup.markCtor(SnakeSlice);  // 标记构造函数
        // 构造函数实例的方法
        methods = ["bindSliceEvent", "bindIndicatorEvent", "appendTo", "insertTo", "activate", "deactivate", "displayActiveSliceStyle", "displayInactiveSliceStyle", "displayActiveIndicatorStyle", "displayInactiveIndicatorStyle", "renderLazily", "remove", "on", "get"], i;
        for (i = methods.length; -- i > -1;)
        {
            frameGroup.grantMethod(SnakeSlice, methods[i]);
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
            return result;
        };
    }
    return init;
},
{
    requires: ["gallery/snake-slider/1.0/index"]
});
