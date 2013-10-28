<!--页头公共资源引入-->
<?php include("../common/head.php");?>

<link rel="stylesheet" href="http://g.tbcdn.cn/kissy/k/1.3.0/css/dpl/base-min.css">
<style>
.hidden{
display:none;
}
</style>
<h2>validation的demo</h2>
<div id="dom-test" data-componentid="uniqueSign" class="J_TScriptedModule">
<form action="index.php">
<fieldset class="mod mod-contacter" id="J_Container1">
    <header class="hd">点击之后，移除姓名校验，电子邮箱不必填，并添加了备选号码的校验</header>
    <div class="bd ">
        <div class="contacter-frequently-used clearfix" ></div>
        <ul class="contacter-info">
            <li>
                <label class="label" for="name">姓名： </label>
                <em class="required">*</em>
                <span class="verify-wrap">
                <input type="text" class="input-text" id="name" name="relationName"/>
            </span>
            </li>
            <li>
                <label class="label" for="tel"> 手机号码： </label>
                <em class="required">*</em>
                <span class="verify-wrap">
                    <input type="text" class="input-text" id="tel" placeholder="通知机票出票状态和航班信息"
                           name="relationMobile"/>
                </span>
            </li>
            <li>
                <label class="label" for="phone"> 备选号码： </label>
                <em class="required">&nbsp;</em>
                <span class="verify-wrap">
                    <input type="text" class="input-text" id="phone" placeholder="" name="relationPhone"/>
                </span>
            </li>
            <li>
                <label class="label" for="email"> 电子邮箱： </label>
                <em class="required">*</em>
                <span class="verify-wrap">
                    <input type="text" class="input-text" id="email" placeholder="通知机票出票状态和航班信息"
                           name="relationEmail"/>
                </span>
            </li>
            <li><label class="label"  >   </label><input  class="input-button" value="校验" type="submit" id="J_Verify"></li>
        </ul>
    </div>
</fieldset>

</form>
</div>
<!--模块初始化的包配置，都很熟悉了-->
<script type="text/javascript">
    cajaConfig={//配置下你需要引入的模块名称，最后会被use到
        modules:"openjs/kissy/1.3.0/core,openjs/kissy/gallery/verify/1.3/index"
    }
</script>




<!--这里是将自己的js让服务端编译一下，配置下服务端的php路径和自己的js即可，注意路径-->
<?php
$jsurl="testcase/gallery/verify1.3.js";//注意路径
$jsservice="../common/cajoled_service.php";//注意路径
include("../common/foot.php");//引入foot
?>
