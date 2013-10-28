<!--页头公共资源引入-->
<?php include("../common/head.php");?>

<!--
    需要测试的dom结构，注意，最外层<div class="J_TScriptedModule" data-componentid="uniqueSign"> 的class和为属性不可修改
    用户的javascript理论上只可以作用到这个dom下面，不可以"越界"
-->
<div class="J_TScriptedModule" data-componentid="uniqueSign">
    <style>
        body {margin-top: 40px; font-family: cursive, Microsoft YaHei, SimHei, sans-serif; font-size: 15px; color: #222;}
        a {outline: none; text-decoration: none; cursor: pointer;}
        h1, h2 {overflow: hidden; margin: 0; padding: 0;}
        h1 {font-size: 54px;}
        h2 {font-size: 22px; font-weight: normal;}
        
        .slider {width: 900px; height: 370px; margin: 0 auto; position: relative; padding: 10px; background-color: #FFF; box-shadow: 0px 3px 35px -10px black; border-radius: 6px; -moz-border-radius: 6px; -webkit-border-radius: 6px;}
        .slider-content {width: 900px; height: 370px; position: relative; background-color: #FFF; overflow: hidden;}
        .slider-slice {left: 0; bottom: 0; position: absolute; width: 900px; height: 370px; white-space: nowrap; overflow: hidden; display: inline-block;}
        
        #slice1 {background-color: pink; opacity: 0; visibility: hidden;}
        #slice1 .leaf1 {top: -90px; left: -234px; position: absolute; width: 234px; height: 266px; background-color: aqua; display: inline-block;}
        #slice1 .leaf2 {top: 450px; left: -19px; position: absolute; width: 373px; height: 378px; background-color: black; display: inline-block;}
        #slice1 .leaf3 {top: -441px; left: 493px; position: absolute; width: 480px; height: 473px; background-color: blue; display: inline-block;}
        #slice1 h1 {top: 112px; left: 290px; position: absolute; opacity: 0; color: #ecffb3; text-shadow: 0px 0px 0px #FFF;}
        #slice1 h2 {position: absolute; padding: 0px 10px; height: 36px; line-height: 36px; box-shadow: 0px 4px 10px -6px #000; opacity: 0;}
        #slice1 .subtitle1 {top: 210px; left: 420px; color: #FFF; background: #8bae4e; background: -moz-linear-gradient(left, #8bae4e 0%, #b1c758 100%); background: -webkit-gradient(linear, left top, right top, color-stop(0%, #8bae4e), color-stop(100%, #b1c758)); background: -webkit-linear-gradient(left, #8bae4e 0%, #b1c758 100%); background: -o-linear-gradient(left, #8bae4e 0%, #b1c758 100%); background: -ms-linear-gradient(left, #8bae4e 0%,#b1c758 100%); background: linear-gradient(to right, #8bae4e 0%, #b1c758 100%); filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#8bae4e', endColorstr='#b1c758', GradientType=1);}
        #slice1 .subtitle2 {top: 260px; left: 420px; color: #4f6716; background: #FFF;}
        
        #slice2 {background-color: gray; opacity: 0; visibility: hidden;}
        #slice2 h1 {top: 112px; left: 290px; position: absolute; width: 0; color: #f7ebe2; text-shadow: 2px 2px 6px #000;}
        #slice2 h2 {position: absolute; padding: 0px 10px; height: 36px; line-height: 36px; box-shadow: 0px 4px 10px -6px #000; opacity: 0;}
        #slice2 .subtitle1 {top: 270px; left: 360px; color: #FFF; background: #fda444; background: -moz-linear-gradient(left, #fda444 0%, #c54a00 100%); background: -webkit-gradient(linear, left top, right top, color-stop(0%, #fda444), color-stop(100%, #c54a00)); background: -webkit-linear-gradient(left, #fda444 0%, #c54a00 100%); background: -o-linear-gradient(left, #fda444 0%, #c54a00 100%); background: -ms-linear-gradient(left, #fda444 0%,#c54a00 100%); background: linear-gradient(to right, #fda444 0%, #c54a00 100%); filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#fda444', endColorstr='#c54a00', GradientType=1);}
        #slice2 .subtitle2 {top: 320px; left: 360px; color: #a04a00; background: #FFF;}
        
        #slice3 {background-color: orange; opacity: 0; visibility: hidden;}
        #slice3 h1 {top: 112px; left: 290px; position: absolute; color: #0b2e49; text-shadow: 2px 2px 2px #dfebeb; opacity: 0;}
        #slice3 h2 {position: absolute; padding: 0px 10px; height: 36px; line-height: 36px; box-shadow: 0px 4px 10px -6px #000; opacity: 0;}
        #slice3 .subtitle1 {top: 210px; left: 300px; color: #FFF; background: #00b4ff; background: -moz-linear-gradient(left, #00b4ff 0%, #007199 100%); background: -webkit-gradient(linear, left top, right top, color-stop(0%, #00b4ff), color-stop(100%, #007199)); background: -webkit-linear-gradient(left, #00b4ff 0%, #007199 100%); background: -o-linear-gradient(left, #00b4ff 0%, #007199 100%); background: -ms-linear-gradient(left, #00b4ff 0%,#007199 100%); background: linear-gradient(to right, #00b4ff 0%, #007199 100%); filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00b4ff', endColorstr='#007199', GradientType=1);}
        #slice3 .subtitle2 {top: 260px; left: 420px; color: #007199; background: #FFF;}
        
        .slider-misc {padding: 10px 12px; right: 0; bottom: 0; color: #a2e1d4; font-size: 14px; position: absolute; white-space: nowrap; cursor: default;}
        
        .nav-direction {top: 50%; margin-top: -25px; position: absolute; width: 22px; height: 50px;}
        .nav-prev {left: -22px;}
        .nav-next {right: -22px;}
        
        .nav-wrapper {left: 50%; position: absolute; margin: 10px 0 0 -53px; cursor: default; overflow: hidden;}
        .nav-play {margin-right: 20px; float: left; height: 30px; display: inline-block;}
        .nav-paused .nav-play {}
        .nav-stop {margin-left: 20px; float: left; height: 30px; display: inline-block;}
        .nav-paused .nav-stop {}
        .nav-btn {float: left; height: 30px; display: inline-block; overflow: hidden;}
        .nav-btn a {float: left; width: 20px; height: 30px; display: inline-block;}
    </style>
    <div class="slider">
        <div class="slider-content">
            <div id="slice1" class="slider-slice">
                <span class="leaf1"></span>
                <span class="leaf2"></span>
                <span class="leaf3"></span>
                <h1>SnakeSlider</h1>
                <h2 class="subtitle1">专业的动画轮播组件</h2>
                <h2 class="subtitle2">可随意定制属于自己的切换动画</h2>
            </div>
            <div id="slice2" class="slider-slice">
                <h1>SnakeSlider</h1>
                <h2 class="subtitle1">显示和隐藏动画可分别定义</h2>
                <h2 class="subtitle2">支持延迟加载、定时切换……</h2>
            </div>
            <div id="slice3" class="slider-slice">
                <h1>SnakeSlider</h1>
                <h2 class="subtitle1">即插即用的插件，方便扩展</h2>
                <h2 class="subtitle2">可将DOM直接转换为轮播组件，使用更方便</h2>
            </div>
        </div>
        <a class="nav-direction nav-prev" href="#" hideFocus="true">&lt;</a>
        <a class="nav-direction nav-next" href="#" hideFocus="true">&gt;</a>
        <div class="nav-wrapper">
            <a class="nav-play" href="#" hideFocus="true">play</a>
            <span class="nav-btn">
                <a id="nav1" class="slider-slice-indicator" href="#" hideFocus="true"> 1 </a>
                <a id="nav2" class="slider-slice-indicator" href="#" hideFocus="true"> 2 </a>
                <a id="nav3" class="slider-slice-indicator" href="#" hideFocus="true"> 3 </a>
            </span>
            <a class="nav-stop" href="#" hideFocus="true"> stop</a>
        </div>
    </div>
    
    <button class="run">run</button>
</div>

<!--模块初始化的包配置，都很熟悉了-->
<script type="text/javascript">

    cajaConfig={//配置下你需要引入的模块名称，最后会被use到
        modules:"openjs/kissy/1.3.0/core,openjs/kissy/gallery/snake-slider/1.0/index"
    }

</script>

<!--这里是将自己的js让服务端编译一下，配置下服务端的php路径和自己的js即可，注意路径-->
<?php
$jsurl="testcase/gallery/snakeslider1.0.js";//注意路径
$jsservice="../common/cajoled_service.php";//注意路径
include("../common/foot.php");//引入foot
?>