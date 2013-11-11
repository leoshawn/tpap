<!--页头公共资源引入-->
<?php include("../common/head-mobile.php"); ?>

<!--
    需要测试的dom结构，注意，最外层<div class="J_TScriptedModule" data-componentid="uniqueSign"> 的class和为属性不可修改
    用户的javascript理论上只可以作用到这个dom下面，不可以"越界"
-->

<style>
    body{
        background: url(http://a.tbcdn.cn/mw/app/lottery/20131111/images/s_bd.jpg);
    }

    .gg-wrap{
        margin:50px auto;
        width: 300px;
    }
    .gg-container{
        position: relative;
        width: 280px;
        height:156px;
        padding:10px;
        background: url('http://a.tbcdn.cn/mw/app/lottery/20131111/images/s_stamp.png') no-repeat;
        background-size: contain;
    }

    .gg-canvas{
        background-position: center;
    }
    .gg-canvas.fail {
        background: url('http://a.tbcdn.cn/mw/app/lottery/20131111/images/s_fail.png') no-repeat;
        background-position: center;
    }
    .gg-canvas.win {
        background: url('http://a.tbcdn.cn/mw/app/lottery/20131111/images/s_red.png') no-repeat;
        background-position: center;
    }
    .gg-title{
        width: 305px;
        height: 120px;
        margin-bottom: -15px;
        margin-top: 40px;
        background: url('http://a.tbcdn.cn/mw/app/lottery/20131111/images/s_title.png') no-repeat;
        background-size: contain;
    }

    .gg-dialog{
        position: absolute;
        left:50%;
        top:50%;
        width: 250px;
        padding:10px;
        background: #fee767;
        border-radius: 10px;
        text-align: center;
    }
    .gg-dialog .bd{
        padding:10px 0;
    }
    .gg-dialog .ft{
        padding:10px 0;
    }
    .gg-dialog .fail{
        width: 80px;
        height: 40px;
        margin: 0 auto 15px;
        background: url('http://a.tbcdn.cn/mw/app/lottery/20131111/images/s_fail.png') no-repeat;
        background-size: contain;
        background-position: center;
    }
    .gg-dialog button{
        width: 100px;
        height: 40px;
        color: white;
        font-weight: bold;
        line-height: 35px;
        border-radius: 4px;
        border-width:0px;
    }
    .gg-dialog button:first-child{
        margin-right:10px;
    }
    .gg-dialog .ok{
        background-color: #cc3a23;
        background-image: -webkit-gradient(linear,left top,left bottom,from(#ef5032),to(#cc3a23));
    }
    .gg-dialog .cancel{
        background-image: -webkit-gradient(linear,left top,left bottom,from(#898988),to(#424242));
        background-color: #424242;
    }
    .gg-dialog-mask {
        width: 100%; left: 0px; top: 0px; height: 100%; position: fixed; -webkit-user-select: none;
        background-color: rgba(0,0,0,.3);
    }



    /* Modules:= overlay基础样式  {{{ */
    .ks-dialog, .ks-overlay {
        position: absolute; /*防止移位带来的闪烁*/
        left: -9999px;
        top: -9999px;
        outline: none;
    }

    .ks-overlay-hidden {
        visibility: hidden;
    }

    .ks-overlay-mask-hidden {
        display: none;
    }


    /* }} */




</style>
<div id="dom-test" data-componentid="uniqueSign" class="J_TScriptedModule">
    <div class="gg-wrap">
        <div class="gg-title"></div>
        <div class="gg-container">
            <canvas id="gg-canvas" class="gg-canvas"> </canvas>
        </div>
    </div>
</div>

<!--模块初始化的包配置，都很熟悉了-->
<script type="text/javascript">

    cajaConfig = {//配置下你需要引入的模块名称，最后会被use到
        modules: "openjs/kissy/1.4.0/core"
    }

</script>

<!--这里是将自己的js让服务端编译一下，配置下服务端的php路径和自己的js即可，注意路径-->
<?php
$jsurl = "testcase/1.4.0/guagua.js"; //注意路径
$jsservice = "../common/cajoled_service.php"; //注意路径
include("../common/foot.php"); //引入foot
?>

