
var pageWidth=window.innerWidth  //获取屏幕宽度
document.documentElement.style.fontSize= `${pageWidth/60}px`

var styleCode = `/*
*hello,我叫余咖咖

*今天准备画一只大白*/

*{
transition:all 1s;
}

html{
background: rgb(222,222,222);
}

/*我想要一个边框,给边框加个padding*/

#code{
border:2px solid black;
padding:1rem;
}

/*可是有个边框还不够*/

/*我想再给代码做个高亮*/

.token.comment{
color :slategray; 
}

.token.selector{
color :#690;
}

.token.punctuation{
color :#905;   
}

.token.property{
color :#DD4A68;    
}

/*好玩吗？*/

/*来一个七彩页面闪一闪*/

html{
background:red;
background:orange;
background:yellow;
background:green;
background:blue;
background:purple;
background-color: rgb(222,222,222);
}

/*让页面旋转360度 */

#code{
    transform:rotate(360deg);
}

/*好了,不玩了*/

/*开始画大白……*/

/*我需要一张红图纸*/

/*变、变、变*/

#code{
height:30vh;
}

.paper{
position:relative;
top:0;
right:0;
height:70vh;
width:100%;
background:rgb(255,0,0);
}

/*我打算把大白放在红纸中央 */

/*所以居中定个位*/

.wrapper{
height:14rem;
width:10rem;
position: absolute;
top:50%;
left:50%;
transform: translate(-50%, -50%);
}

/*先画一个头吧~*/

.head{
height:3rem;
width:4rem;
background:white;
border-radius:50%;
position: absolute;
top:-18%;
left:50%;
transform: translateX(-50%);
z-index: 6;
}

/*加点阴影*/
/*因为需要立体感*/

.head{
background:linear-gradient
    (135deg, #ffffff 0%,#d2d2d2 100%);
box-shadow:-0.2rem -0.2rem 0.84rem 0 
    rgb(150, 150, 150) inset;
}

/*然后画左眼睛*/

.left-eye{
position: absolute;
width:0.6rem;
height:0.6rem;
background:black;
border-radius:50%;
top:40%;
left:20%;
}

/*右眼睛*/

.right-eye{
position: absolute;
background:black;
width:0.6rem;
height:0.6rem;
border-radius:50%;
top:40%;
right:20%;
}

/*(●—●)的眼睛有条杠*/
/*一起实现一下吧*/

.eye-line{
position: absolute;
border-top:1px solid black;
width:2rem;
top:1.48rem;
left:20%;
}

/*好了，头画完了*/
/*现在画身体*/

.baymax-body{
position: absolute;
height:14rem;
width:10rem;
background:white;
border-radius:50% 50% 50% 50% 
    / 60% 60% 40% 40%;
z-index: 5;
}

/*需要点立体感*/

.baymax-body{
background:linear-gradient
    (135deg, #ffffff 0%,#d2d2d2 100%);
box-shadow:-0.6rem -0.6rem 1.6rem 0 
    rgb(150, 150, 150) inset;
}

/*然后画什么呢？ */
/*让我想想…… */


/*大白的胸章*/

.badge{
position: absolute;
height:1rem;
width:1rem;
border-radius:50%;
background: white;
z-index:7;
top:20%;
right:30%;
box-shadow:1px 0px 1px 
    rgb(210,210,210);
}

.badge-line{
border-top:1px solid 
    rgb(210,210,210);
position: absolute;
width:100%;
top:50%;
left:0%
}

/*还差四肢，先画双臂 */

.left-arm{
position: absolute;
height:11.2rem;
width:3.4rem;
background:white;
border-radius:50%;
background:linear-gradient
    (135deg, #ffffff 0%,#d2d2d2 100%);
box-shadow:-0.2rem -0.2rem 0.84rem 0 
    rgb(150, 150, 150) inset;
top:0%;
left:-13%;
transform: rotate(29deg);
}

.right-arm{
position: absolute;
height:11.2rem;
width:3.4rem;
background:white;
border-radius:50%;
background:linear-gradient
    (135deg, #ffffff 0%,#d2d2d2 100%);
box-shadow:-0.2rem -0.2rem 0.84rem 0 
    rgb(150, 150, 150) inset;
top:0%;
right:-13%;
transform: rotate(-29deg);
}

/*再画双腿 */

.left-foot{
position:absolute;
height:6.4rem;
width:4rem;
background:white;
background:linear-gradient
    (135deg, #ffffff 0%,#d2d2d2 100%);
box-shadow:-0.2rem -0.2rem 0.84rem 0 
    rgb(150, 150, 150) inset;
top:72%;
left:10%;
border-radius:0% 0% 30% 50%
    /0% 0% 42% 72%;
}

.right-foot{
position:absolute;    
height:6.4rem;
width:4rem;
background:white;
background:linear-gradient
    (135deg, #ffffff 0%,#d2d2d2 100%);
box-shadow:-0.2rem -0.2rem 0.84rem 0 
    rgb(150, 150, 150) inset;
top:72%;
right:10%;
border-radius:0% 0% 50% 30%
    /0% 0% 72% 42%;
}

/*一只大白画完了*/

/*喜不喜欢？*/
/*对了，我叫余咖咖*/

`
/*
var n = 0 
var id = setInterval(()=>{
    n=n+1   
    //添加显示的内容
    code.innerHTML = styleCode.substring(0,n)
    code.innerHTML = Prism.highlight(code.innerHTML, Prism.languages.css, 'css');
    //添加样式内容
    styleTag.innerHTML = styleCode.substring(0,n)
    code.scrollTop = 10000
    if(n>styleCode.length){
        window.clearInterval(id) 
    }
},30)*/


var n = 0 
var during = 100
var id = setTimeout(function fn(){
    n=n+1   
    //添加显示的内容
    code.innerHTML = styleCode.substring(0,n)
    code.innerHTML = Prism.highlight(code.innerHTML, Prism.languages.css, 'css');
    //添加样式内容
    styleTag.innerHTML = styleCode.substring(0,n)
    code.scrollTop = 10000
    if(n<styleCode.length){
        setTimeout(fn,during)
    }else{
        window.clearTimeout(id) 
    }
},during)

var $buttons = $(".buttons")

$buttons.on('click','button',function(e){
    var $button =$(e.currentTarget)
    var speed = $button.attr('class')
    $button.addClass('active').siblings('.active').removeClass('active')
    switch(speed){
        case 'slow':
            during = 150
            break;
        case 'normal':
            during = 80
            break;
        case 'fast':
            during = 20
            break;
    }

})
