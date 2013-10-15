<!--页头公共资源引入-->
<? include("../common/head.php");?>

<!--
    需要测试的dom结构，注意，最外层<div class="J_TScriptedModule" data-componentid="uniqueSign"> 的class和为属性不可修改
    用户的javascript理论上只可以作用到这个dom下面，不可以"越界"
-->
<style>
.ks-autoResponsive-container{
    position: relative;
    overflow: hidden;
    background: #000;
    font-size: 3.8em;
    line-height: 100px;
    color: #fff0f0;
    text-align: center;
    vertical-align: middle;
    font-family:Futura,'Century Gothic',"Microsoft Yahei",sans-serif;
    font-weight: bold;
}
.ks-autoResponsive-container div{
    position: absolute;
}
.ks-autoResponsive-container .block{
    width: 100px;
    height: 100px;
    border-radius: 10px;
    box-shadow: 1px 2px 1px  #666;
    opacity: 0.7;
}
.ks-autoResponsive-container .circle{
    border-radius: 100px;
}
.ks-autoResponsive-container .red{
    background: red;
}
.ks-autoResponsive-container .yellow{
    background: yellow;
}
.ks-autoResponsive-container .blue{
    background: blue;
}
.ks-autoResponsive-container .green{
    background: green;
}
.ks-waterfall {
    position: absolute;
    left:-9999px;
    top:-9999px;
}
.dragging{
 
    opacity: 0.5;
    z-index:999;
}
.ks-autoResponsive-container  div{
    /*left: 9999px\9;*/
    /*top: 9999px\9;*/
    /*-webkit-transform: translate(1000px, 9999px);*/
    /*-moz-transform: translate(9999px, 9999px);*/
    /*-ms-transform: translate(9999px, 9999px);*/
    /*-o-transform: translate(9999px, 9999px);*/
    /*transform: translate(9999px, 9999px);*/
    -webkit-transition-duration:0.2s;
    -moz-transition-duration: 0.2s;
    -ms-transition-duration: 0.2s;
    -o-transition-duration: 0.2s;
    transition-duration: 0.2s;
}
.J_container_drag div{
    -webkit-transition-duration:0s;
    -moz-transition-duration: 0s;
    -ms-transition-duration: 0s;
    -o-transition-duration: 0s;
    transition-duration: 0s;
}
.ks-autoResponsive-dd-placeHolder{
    outline: 2px dashed #4169e1;
    background: none!important;
}
.ks-autoResponsive-dd-dragging{
    -ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=50)"; /* ie8  */
    filter:alpha(opacity=50);    /* ie5-7  */
    opacity: 0.5;
    z-index: 99999;
}
</style>
<div class="J_TScriptedModule" data-componentid="uniqueSign">
    
    <div class="container">
        <div class="row">
            <div class="span3 bs-docs-sidebar">
                <ul class="nav nav-list bs-docs-sidenav affix-top">
                    <li><a href="#priority"><i class="icon-chevron-right"></i>priority</a></li>
                    <li><a href="#filter"><i class="icon-chevron-right"></i>filter</a></li>
                    <li><a href="#unitMargin"><i class="icon-chevron-right"></i>unitMargin</a></li>
                    <li><a href="#direction"><i class="icon-chevron-right"></i>direction</a></li>
                    <li><a href="#drag"><i class="icon-chevron-right"></i>drag</a></li>
                </ul>
            </div>
            <div class="span9">
                <section id="priority" data-title="priority">
                    <!--动画：<div class="btn-group" data-toggle="buttons-radio">-->
                        <!--<button type="button" class="J_button_animate_on btn">ON</button>-->
                        <!--<button type="button" class="J_button_animate_on btn btn-primary">OFF</button>-->
                    <!--</div>-->
                    <h2>priority</h2>

                    <ul>
                        <li>优先排序</li>
                    </ul>
                    <div class="btn-group" data-toggle="buttons-radio">
                        <button type="button" class="J_button_priority btn btn-primary red">red</button>
                        <button type="button" class="J_button_priority btn btn-primary yellow">yellow</button>
                        <button type="button" class="J_button_priority btn btn-primary blue">blue</button>
                        <button type="button" class="J_button_priority btn btn-primary green">green</button>
                        <button type="button" class="J_button_priority btn btn-primary circle">circle</button>
                        <button type="button" class="J_button_priority btn btn random">random</button>
                    </div>
                    <p></p>
                    <div class="ks-autoResponsive-container J_container_priority">
                        <div class="block red">1</div>
                        <div class="block yellow">2</div>
                        <div class="block blue circle">3</div>
                        <div class="block green">4</div>
                        <div class="block red">5</div>
                        <div class="block yellow">6</div>
                        <div class="block blue circle">7</div>
                        <div class="block green">8</div>
                        <div class="block red">9</div>
                        <div class="block yellow">10</div>
                        <div class="block blue">11</div>
                        <div class="block green">12</div>
                        <div class="block red">13</div>
                        <div class="block yellow circle">14</div>
                        <div class="block blue">15</div>
                        <div class="block green">16</div>
                    </div>
                    <p></p>
                    <a href="http://mountaindew.com/" target="_blank">效果demo</a>
                </section>
                <section id="filter" data-title="filter">

                    <h2>filter</h2>

                    <ul>
                        <li>排序过滤</li>

                    </ul>
                    <div class="btn-group" data-toggle="buttons-radio">
                        <button type="button" class="J_button_filter btn btn-primary red">red</button>
                        <button type="button" class="J_button_filter btn btn-primary yellow">yellow</button>
                        <button type="button" class="J_button_filter btn btn-primary blue">blue</button>
                        <button type="button" class="J_button_filter btn btn-primary green">green</button>
                        <button type="button" class="J_button_filter btn btn-primary circle">circle</button>
                    </div>
                    <p></p>
                    <div class="ks-autoResponsive-container J_container_filter">
                        <div class="block red">1</div>
                        <div class="block yellow">2</div>
                        <div class="block blue circle">3</div>
                        <div class="block green">4</div>
                        <div class="block red">5</div>
                        <div class="block yellow">6</div>
                        <div class="block blue circle">7</div>
                        <div class="block green">8</div>
                        <div class="block red">9</div>
                        <div class="block yellow">10</div>
                        <div class="block blue">11</div>
                        <div class="block green">12</div>
                        <div class="block red">13</div>
                        <div class="block yellow circle">14</div>
                        <div class="block blue">15</div>
                        <div class="block green">16</div>
                    </div>
                </section>
                <section id="unitMargin" data-title="unitMargin">

                    <h2>unitMargin</h2>

                    <ul>
                        <li>边距设置</li>

                    </ul>
                    <div class="btn-group" data-toggle="buttons-radio">
                        <button type="button" class="J_button_margin btn btn-primary margin-0">0</button>
                        <button type="button" class="J_button_margin btn btn-primary margin-10">10px</button>
                        <button type="button" class="J_button_margin btn btn-primary  margin-20">10px-20px</button>
                    </div>
                    <p></p>
                    <div class="ks-autoResponsive-container J_container_margin">
                        <div class="block red">1</div>
                        <div class="block yellow">2</div>
                        <div class="block blue circle">3</div>
                        <div class="block green">4</div>
                        <div class="block red">5</div>
                        <div class="block yellow">6</div>
                        <div class="block blue circle">7</div>
                        <div class="block green">8</div>
                        <div class="block red">9</div>
                        <div class="block yellow">10</div>
                        <div class="block blue">11</div>
                        <div class="block green">12</div>
                        <div class="block red">13</div>
                        <div class="block yellow circle">14</div>
                        <div class="block blue">15</div>
                        <div class="block green">16</div>
                    </div>
                </section>

                <section id="direction" data-title="direction">

                    <h2>direction</h2>

                    <ul>
                        <li>方向设置</li>

                    </ul>
                    <div class="btn-group" data-toggle="buttons-radio">
                        <button type="button" class="J_button_direction btn btn-primary left">left</button>
                        <button type="button" class="J_button_direction btn btn-primary right">right</button>
                    </div>
                    <p></p>
                    <div class="ks-autoResponsive-container J_container_direction">
                        <div class="block red">1</div>
                        <div class="block yellow">2</div>
                        <div class="block blue circle">3</div>
                        <div class="block green">4</div>
                        <div class="block red">5</div>
                        <div class="block yellow">6</div>
                        <div class="block blue circle">7</div>
                        <div class="block green">8</div>
                        <div class="block red">9</div>
                        <div class="block yellow">10</div>
                        <div class="block blue">11</div>
                        <div class="block green">12</div>
                        <div class="block red">13</div>
                        <div class="block yellow circle">14</div>
                        <div class="block blue">15</div>
                        <div class="block green">16</div>
                    </div>
                </section>
                <section id="drag" data-title="drag">

                    <h2>drag</h2>

                    <ul>
                        <li>拖拽功能</li>

                    </ul>
                    <div class="btn-group" data-toggle="buttons-radio">
                        <button type="button" class="J_button_drag btn btn-primary on">On</button>
                        <button type="button" class="J_button_drag btn btn off">Off</button>
                    </div>
                    <p></p>
                    <div class="ks-autoResponsive-container J_container_drag">
                        <div class="block red">1</div>
                        <div class="block yellow">2</div>
                        <div class="block blue circle">3</div>
                        <div class="block green">4</div>
                        <div class="block red">5</div>
                        <div class="block yellow">6</div>
                        <div class="block blue circle">7</div>
                        <div class="block green">8</div>
                        <div class="block red">9</div>
                        <div class="block yellow">10</div>
                        <div class="block blue">11</div>
                        <div class="block green">12</div>
                        <div class="block red">13</div>
                        <div class="block yellow circle">14</div>
                        <div class="block blue">15</div>
                        <div class="block green">16</div>
                    </div>
                </section>
            </div>
        </div>
    </div>
        
</div>

<!--模块初始化的包配置，都很熟悉了-->
<script type="text/javascript">
    cajaConfig={//配置下你需要引入的模块名称，最后会被use到
        modules:"openjs/kissy/1.3.0/core,openjs/kissy/gallery/autoResponsive/1.3/index"
    }
</script>

<!--这里是将自己的js让服务端编译一下，配置下服务端的php路径和自己的js即可，注意路径-->
<?
$jsurl="testcase/gallery/autoResponsive1.3.js";//注意路径
$jsservice="../common/cajoled_service.php";//注意路径
include("../common/foot.php");//引入foot
?>
