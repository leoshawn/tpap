<!--页头公共资源引入-->
<? include("../common/head.php");?>

<!--
    需要测试的dom结构，注意，最外层<div class="J_TScriptedModule" data-componentid="uniqueSign"> 的class和为属性不可修改
    用户的javascript理论上只可以作用到这个dom下面，不可以"越界"
-->
<link rel="stylesheet" href="http://gallery.kissyui.com/kscroll/1.2/assets/scroll.css"/>
<link rel="stylesheet" href="http://gallery.kissyui.com/kscroll/1.2/assets/clear.css"/>
<link rel="stylesheet" href="http://gallery.kissyui.com/kscroll/1.2/assets/nice.css"/>
<div class="J_TScriptedModule" data-componentid="uniqueSign">
<style type="text/css">
    
/*轨道*/
.kscroll-track, .kscroll-track-hover, .kscroll-track-active,
.kscroll-scrollbar,
/*向上箭头*/
.kscroll-arrowup, .kscroll-arrowup-hover, .kscroll-arrowup-active,
/*向下箭头*/
.kscroll-arrowdown, .kscroll-arrowdown-hover, .kscroll-arrowdown-active,
/*拖拽条*/
.kscroll-drag, .kscroll-drag-hover, .kscroll-drag-active,
.kscroll-dragtop, .kscroll-dragbottom , .kscroll-dragcenter {
    width:10px;
}
.kscroll-scrollbar {
    position:absolute;
    top:0;
    right:0;
    bottom:0;
    background-color:#E3E3E3;
}

.kscroll-track-hover {
    background-color:#D9D8D8;
}
.kscroll-track-active {
    background-color:#D9D8D8;
}

.kscroll-track{
    position:absolute;
}


/*上下箭头 */
.kscroll-arrowup, 
.kscroll-arrowdown,
.kscroll-arrowup a, 
.kscroll-arrowdown a {
    display:block;
    text-indent: -1000px;
    width:8px;
    height:8px;
    overflow:hidden;
    border:1px solid #000;
    right:0;
    position:absolute;
}

.kscroll-arrowup a, 
.kscroll-arrowdown a {
    border:none;
}


.kscroll-arrowup {
    background-color:#959695;
    top:0;
}
.kscroll-arrowup-hover {
    background-color:#9CCAE3;
}
.kscroll-arrowup-active {
    background-color:#3C7FB1;
}


.kscroll-arrowdown {
    background-color:#959695;
    bottom:0;
}
.kscroll-arrowdown-hover {
    background-color:#9CCAE3;
}
.kscroll-arrowdown-active {
    background-color:#3C7FB1;
}



/*拖拽条*/
.kscroll-drag{
    background-color:#979797;
    position:absolute;
}

.kscroll-drag .kscroll-dragtop, .kscroll-drag .kscroll-dragbottom{
    display:none;
}

.kscroll-drag .kscroll-dragcenter{
    position:absolute;
    top:50%;
    margin-top:-10px;
    height:20px;
    background-color::#18598A;
}

/*------------*/
.kscroll-drag-hover{
    background-color:#9CCAE3;
}

/*------------*/
.kscroll-drag-active{
    background-color:#3C7FB1;
}

    
</style>
  <div style="width:500px;margin:0 auto;" class="my">
  <div class="s-section">
    <div class="s-demo">
        <div class="box">


            <div class="section">

                <h4>demo1</h4>

                <div class="d1" style="height:300px;overflow:auto;">

                    <h5>111111111111</h5>

                    1111111111111<br>
                    111111111111<br>
                    11111111111111<br>
                    11111111111<br>
                    <P>
                        <input type="text" name="dd" />
                    </p>
                    
                     1111111111111<br>
                    111111111111<br>
                    11111111111111<br>
                    11111111111<br>
                    
                    1111111111111<br>
                    111111111111<br>
                    11111111111111<br>
                    11111111111<br>
                    
                     1111111111111<br>
                    111111111111<br>
                    11111111111111<br>
                    11111111111<br>
                    
                    <p id="p2" style="color:red">11111111111111</p>
                    1111111111111<br>
                    111111111111<br>
                    11111111111111<br>
                    11111111111<br>
                    
                    1111111111111<br>
                    111111111111<br>
                    11111111111111<br>
                    11111111111<br>
                    
                    1111111111111<br>
                    111111111111<br>
                    11111111111111<br>
                    11111111111<br>
                </div>


            </div>

        </div>
    </div>
   </div>
    <div>
            <button id="b2">bottom</button>
            <button id="b1">top</button>
            <button id="b3">50%</button>
            <button id="b4">up50px</button>
            <button id="b5">down50px</button>
            <button id="b6">seek</button>  
            </div>     
<div class="s-section">
    <div class="s-demo">
    
        <div class="box">


            <div class="section">

                <h4>demo2</h4>

                <div class="d_nice" style="height:300px;overflow:auto;">
                
                <h5>222222222222222</h5>

                    222222222222<br>
                    222222222222<br>
                    22222222222<br>
                    2222222222222<br>
                    
                    222222222222<br>
                    222222222222<br>
                    22222222222<br>
                    2222222222222<br>
                    
                    222222222222<br>
                    222222222222<br>
                    22222222222<br>
                    2222222222222<br>
                    
                   222222222222<br>
                    222222222222<br>
                    22222222222<br>
                    2222222222222<br>
                    
                    <p id="p" style="color:red">22222222222</p>
                    222222222222<br>
                    222222222222<br>
                    22222222222<br>
                    2222222222222<br>
                    
                    222222222222<br>
                    222222222222<br>
                    22222222222<br>
                    2222222222222<br>
                    
                   222222222222<br>
                    222222222222<br>
                    22222222222<br>
                    2222222222222<br>
                </div>
                

                
            </div>
        
        </div>

    </div>
</div>

<div class="s-section">
    <div class="s-demo">
    
        <div class="box">


            <div class="section">

                <h4>demo3</h4>
                 <div class="d31" style="height:300px;overflow:auto;">
              
                
                <h5>333333333333</h5>

                    333333333333<br>
                    333333333333<br>
                    333333333333<br>
                    333333333333<br>
                    
                     333333333333<br>
                    333333333333<br>
                    333333333333<br>
                    333333333333<br>
                    
                     333333333333<br>
                    333333333333<br>
                    333333333333<br>
                    333333333333<br>
                    
                    333333333333<br>
                    333333333333<br>
                    333333333333<br>
                    333333333333<br>
                    
                    <p id="p" style="color:red">333333333</p>
                     333333333333<br>
                    333333333333<br>
                    333333333333<br>
                    333333333333<br>
                    
                     333333333333<br>
                    333333333333<br>
                    333333333333<br>
                    333333333333<br>
                    
                   333333333333<br>
                    333333333333<br>
                    333333333333<br>
                    333333333333<br>
                </div>
                

                
            </div>
            
    
    
               
        
        </div>

    </div>
</div>
    </div>
</div>

<!--模块初始化的包配置，都很熟悉了-->
<script type="text/javascript">

    cajaConfig={//配置下你需要引入的模块名称，最后会被use到
        modules:"openjs/kissy/1.3.0/core,openjs/kissy/gallery/kscroll/1.2/index"
    }

</script>

<!--这里是将自己的js让服务端编译一下，配置下服务端的php路径和自己的js即可，注意路径-->
<?
$jsurl="testcase/gallery/kscroll1.2.js";//注意路径
$jsservice="../common/cajoled_service.php";//注意路径
include("../common/foot.php");//引入foot
?>