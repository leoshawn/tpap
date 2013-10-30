<!--页头公共资源引入-->
<?php include("../common/head.php");?>

<!--
    需要测试的dom结构，注意，最外层<div class="J_TScriptedModule" data-componentid="uniqueSign"> 的class和为属性不可修改
    用户的javascript理论上只可以作用到这个dom下面，不可以"越界"
-->
<script type="text/javascript" src="http://a.tbcdn.cn/s/kissy/1.3.0/kissy.js"></script>
<link rel="stylesheet" href="http://g.tbcdn.cn/kissy/k/1.3.0/css/dpl/base-min.css">
<style type="text/css">
    body{
        background: #eee;
        font:12px/1.5 "微软雅黑";
        margin: 0px;
        padding: 0px;
    }
    #wankePost {
        width: 700px;
        margin: auto;
        background: #fff;
        padding: 10px;
        border-radius: 5px;
        border: 1px solid green;
        _left:20%;
        position: relative;

    }
    .title{
        font-size: 24px;
        color: #666;
        padding: 10px 10px 10px 20px;
        border-bottom: 1px solid #eee;

    }
    .copyright{
        width: 800px;
        margin: auto;
        border-top: 1px solid #ccc;
        padding: 20px;
        margin-top: 50px;
        text-align: center;

    }
    .top{
        background:#336699;padding:20px;color:#fff;
    }
    .top .bb{
        width:800px;margin:auto
    }
    #WKeditor .FontColor{
        background: #333;
        font-weight: bold;
    }
    #WKeditor .FontColor:hover{
        background: #141414;
    }
    .list_color{
        height: 0px;
        box-shadow: 0px 2px 3px #333;
    }
    .list_color button{
        width: 32px;
        height: 32px;
        float: left;
    }
    .list_color button:hover{
        background: #141414;
    }
    .config{
        width: 800px;
        margin: auto;
        background: #ccc;
        margin-bottom: 20px;
    }
    .config label{
        margin-right: 10px;
    }
    .link{
        float: right;
        color: #ccc;
    }
    .link:hover{
        color: #fff;
    }
    .mini{
        font-size: 12px;
    }
    .div{
        display: block!important;
        text-align: center;
    }
    .J_TScriptedModule{
        border: 1px solid green;

    }
</style>
<div class="J_TScriptedModule" data-componentid="uniqueSign">
  <h2 class="top">
      <div class="bb">WKeditor 1.0 <a class="link" href="http://gallery.kissyui.com/WKeditor/1.0/guide/index.html" target="_blank">API：http://gallery.kissyui.com/WKeditor/1.0/guide/index.html</a></div>

  </h2>

  <div id="wankePost">
      <div class='title'>标题 <span class='mini'>（建议开启控制台查看console.log）</span></div>    
      <div id="WKeditor"></div>
  </div>

</div>

<!--模块初始化的包配置，都很熟悉了-->
<script type="text/javascript">

    cajaConfig={//配置下你需要引入的模块名称，最后会被use到
        modules:"openjs/kissy/gallery/wkeditor/1.0/index"
    }

</script>   

<!--这里是将自己的js让服务端编译一下，配置下服务端的php路径和自己的js即可，注意路径-->
<?php
$jsurl="testcase/gallery/wkeditor1.0.js";//注意路径
$jsservice="../common/cajoled_service.php";//注意路径

include("../common/foot.php");//引入foot
?>