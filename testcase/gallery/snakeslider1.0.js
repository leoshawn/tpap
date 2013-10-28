var S = KISSY, DOM = S.DOM, Event = S.Event;

var slider = new S.SnakeSlider(
{
    switchInterval: 8,  // 自动切换间隔时间（单位：秒）
    switchOnIndicator: "click",  // 切片切换时机
    activeIndicatorStyle: "actived", // 激活的指示器DOM节点样式（选择符）
    slices: // 选项卡列表
    [
        {
            sliceNode: "#slice1",  // 切片DOM节点
            indicatorNode: "#nav1",  // 指示器DOM节点
            activeEffect:  // 切片激活效果
            [
                {
                    node: "#slice1",
                    from:
                    {
                        scale: 1.5,
                        opacity: 0,
                        autoAlpha: 0
                    },
                    to:
                    {
                        scale: 1,
                        opacity: 1,
                        autoAlpha: 1,
                        transformOrigin: "center center"
                    },
                    easing: "Power2.easeInOut",
                    duration: 0.6
                },
                {  // 左上叶子右移
                    node: "#slice1 .leaf1",
                    from:
                    {
                        left: -234
                    },
                    to:
                    {
                        left: 10
                    },
                    overwrite: "all",
                    align: "sequence",
                    duration: 0.4
                },
                {  // 左下叶子上移
                    node: "#slice1 .leaf2",
                    from:
                    {
                        top: 380
                    },
                    to:
                    {
                        top: 180
                    },
                    overwrite: "all",
                    duration: 0.4
                },
                {  // 右上叶子下移
                    node: "#slice1 .leaf3",
                    from:
                    {
                        top: -480
                    },
                    to:
                    {
                        top: -210
                    },
                    overwrite: "all",
                    duration: 0.4
                },
                {  // 主标题
                    node: "#slice1 h1",
                    from:
                    {
                        textShadow: "0px 0px 0px #FFF",
                        opacity: 0
                    },
                    to:
                    {
                        textShadow: "2px 4px 3px #546223",
                        opacity: 1
                    },
                    delay: 0.1,
                    easing: "Power2.easeInOut",
                    //overwrite: "all",
                    duration: 0.8
                },
                [
                    {  // 副标题1左移
                        node: "#slice1 .subtitle1",
                        from:
                        {
                            left: 420,
                            opacity: 0
                        },
                        to:
                        {
                            left: 360,
                            opacity: 1
                        },
                        align: "sequence",
                        overwrite: "all",
                        easing: "Power3.easeOut",
                        duration: 1
                    },
                    {  // 副标题2左移
                        node: "#slice1 .subtitle2",
                        from:
                        {
                            left: 420,
                            opacity: 0
                        },
                        to:
                        {
                            left: 360,
                            opacity: 0.8
                        },
                        align: "sequence",
                        delay: -0.4,
                        overwrite: "all",
                        easing: "Power3.easeOut",
                        duration: 1
                    }
                ]
            ],
            inactiveEffect:  // 切片闲置效果
            [
                {
                    node: "#slice1",
                    from:
                    {
                        scale: 1,
                        opacity: 1,
                        autoAlpha: 1
                    },
                    to:
                    {
                        scale: 1.5,
                        opacity: 0,
                        autoAlpha: 0
                    },
                    easing: "Power2.easeInOut",
                    duration: 0.6
                }
            ]
        },
        {
            sliceNode: "#slice2",  // 切片DOM节点
            indicatorNode: "#nav2",  // 指示器DOM节点
            activeEffect:  // 切片激活效果
            [
                {
                    node: "#slice2",
                    from:
                    {
                        scale: 1.5,
                        opacity: 0,
                        autoAlpha: 0
                    },
                    to:
                    {
                        scale: 1,
                        opacity: 1,
                        autoAlpha: 1
                    },
                    easing: "Power2.easeInOut",
                    duration: 0.6
                },
                {  // 主标题
                    node: "#slice2 h1",
                    from:
                    {
                        width: 0
                    },
                    to:
                    {
                        width: 310
                    },
                    align: "sequence",
                    easing: "Power0.easeOut",
                    overwrite: "all",
                    duration: 0.4
                },
                [
                    {
                        node: "#slice2 .subtitle1",
                        from:
                        {
                            top: 270,
                            opacity: 0
                        },
                        to:
                        {
                            top: 210,
                            opacity: 1
                        },
                        align: "sequence",
                        overwrite: "all",
                        easing: "Power3.easeOut",
                        duration: 1
                    },
                    {
                        node: "#slice2 .subtitle2",
                        from:
                        {
                            top: 320,
                            opacity: 0
                        },
                        to:
                        {
                            top: 260,
                            opacity: 0.8
                        },
                        align: "sequence",
                        delay: -0.4,
                        overwrite: "all",
                        easing: "Power3.easeOut",
                        duration: 1
                    }
                ]
            ],
            inactiveEffect:  // 切片闲置效果
            [
                {
                    node: "#slice2",
                    from:
                    {
                        scale: 1,
                        opacity: 1,
                        autoAlpha: 1
                    },
                    to:
                    {
                        scale: 1.5,
                        opacity: 0,
                        autoAlpha: 0
                    },
                    easing: "Power2.easeInOut",
                    duration: 0.6
                },
                {  // 主标题
                    node: "#slice2 h1",
                    to:
                    {
                        width: 0
                    },
                    align: "sequence",
                    duration: 0.1
                }
            ]
        },
        {
            sliceNode: "#slice3",  // 切片DOM节点
            indicatorNode: "#nav3",  // 指示器DOM节点
            activeEffect:  // 切片激活效果
            [
                {
                    node: "#slice3",
                    from:
                    {
                        scale: 1.5,
                        opacity: 0,
                        autoAlpha: 0
                    },
                    to:
                    {
                        scale: 1,
                        opacity: 1,
                        autoAlpha: 1
                    },
                    easing: "Power2.easeInOut",
                    duration: 0.6
                },
                {  // 主标题
                    node: "#slice3 h1",
                    from:
                    {
                        rotation: 0,
                        opacity: 0
                    },
                    to:
                    {
                        rotation: 720,
                        opacity: 1
                    },
                    align: "sequence",
                    easing: "Power2.easeOut",
                    overwrite: "all",
                    duration: 0.6
                },
                [
                    {
                        node: "#slice3 .subtitle1",
                        from:
                        {
                            left: 300,
                            opacity: 0
                        },
                        to:
                        {
                            left: 360,
                            opacity: 1
                        },
                        align: "sequence",
                        overwrite: "all",
                        easing: "Power3.easeOut",
                        duration: 1
                    },
                    {
                        node: "#slice3 .subtitle2",
                        from:
                        {
                            left: 420,
                            opacity: 0
                        },
                        to:
                        {
                            left: 360,
                            opacity: 0.8
                        },
                        overwrite: "all",
                        easing: "Power3.easeOut",
                        duration: 1
                    }
                ]
            ],
            inactiveEffect:  // 切片闲置效果
            [
                {
                    node: "#slice3",
                    from:
                    {
                        scale: 1,
                        opacity: 1,
                        autoAlpha: 1
                    },
                    to:
                    {
                        scale: 1.5,
                        opacity: 0,
                        autoAlpha: 0
                    },
                    easing: "Power2.easeInOut",
                    duration: 0.6
                }
            ]
        }
    ]
});

// 继续自动切换
Event.on(".nav-play", "click", function(e)
{
    e.preventDefault();
    slider.startAutoSwitch();  // 启动自动切换
});
// 停止自动切换
Event.on(".nav-stop", "click", function(e)
{
    e.preventDefault();
    slider.stopAutoSwitch();  // 停止自动切换
});
// 切换上一切片
Event.on(".nav-prev", "click", function(e)
{
    e.preventDefault();
    var slice = slider.previousSlice(true);
    if (slice)
    {
        slice.activate();
    }
});
// 切换下一切片
Event.on(".nav-next", "click", function(e)
{
    e.preventDefault();
    var slice = slider.nextSlice(true);
    if (slice)
    {
        slice.activate();
    }
});
// 切换到最后一个切片
Event.on("#BtnSwitchTo", "click", function(e)
{
    var slices = slider.get("slices");
    slider.switchTo(slider.getSliceByIndex(slices.length - 1));
});
// 添加切片
Event.on("#BtnAppendSlice", "click", function(e)
{
    var node = DOM.get(".nav-btn").appendChild(document.createElement("a"));
    node.id = "nav4";
    node.href = "#";
    node.innerHTML = "4";
    var slice = slider.appendSlice(
    {
        id: "newSlice",
        sliceNode: "#slice4",  // 切片DOM节点
        indicatorNode: "#nav4",  // 指示器DOM节点
        activeEffect:  // 切片激活效果
        [
            {
                node: "#slice4",
                from:
                {
                    scale: 1.5,
                    opacity: 0,
                    autoAlpha: 0
                },
                to:
                {
                    scale: 1,
                    opacity: 1,
                    autoAlpha: 1
                },
                easing: "Power2.easeInOut",
                duration: 0.6
            },
            {  // 主标题
                node: "#slice4 h1",
                from:
                {
                    rotation: 0,
                    opacity: 0
                },
                to:
                {
                    rotation: 720,
                    opacity: 1
                },
                align: "sequence",
                easing: "Power2.easeOut",
                overwrite: "all",
                duration: 0.6
            },
            [
                {
                    node: "#slice4 .subtitle1",
                    from:
                    {
                        left: 300,
                        opacity: 0
                    },
                    to:
                    {
                        left: 360,
                        opacity: 1
                    },
                    align: "sequence",
                    overwrite: "all",
                    easing: "Power3.easeOut",
                    duration: 1
                },
                {
                    node: "#slice4 .subtitle2",
                    from:
                    {
                        left: 420,
                        opacity: 0
                    },
                    to:
                    {
                        left: 360,
                        opacity: 0.8
                    },
                    overwrite: "all",
                    easing: "Power3.easeOut",
                    duration: 1
                }
            ]
        ],
        inactiveEffect:  // 切片闲置效果
        [
            {
                node: "#slice4",
                from:
                {
                    scale: 1,
                    opacity: 1,
                    autoAlpha: 1
                },
                to:
                {
                    scale: 1.5,
                    opacity: 0,
                    autoAlpha: 0
                },
                easing: "Power2.easeInOut",
                duration: 0.6
            }
        ]
    });
    Event.on(node, slider.get("switchOnIndicator"), function(e)  // 绑定指示器节点事件
    {
        e.preventDefault();
        slice.activate();  // 激活切片
    });
});
// 删除添加的切片
Event.on("#BtnRemoveSlice", "click", function(e)
{
    slider.removeSlice(slider.getSliceById("newSlice").get("index"));
});
// 删除所有切片
Event.on("#BtnClearSlices", "click", function(e)
{
    slider.clearSlices();
});
// 自动切换是否启动
Event.on("#BtnIsAutoSwitchStarted", "click", function(e)
{
    console.log(slider.isAutoSwitchStarted());
});
