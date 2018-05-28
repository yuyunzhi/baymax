
var styleCode = `/*
 *余咖咖今天准备画一只大白*/

 *{
    transition:all 1s;
 }
 html{
    background: rgb(222,222,222);
    font-size:13px;
 }

/*我想要一个边框,给边框加个padding*/

#code{
    border:1px solid red;
    padding:15px;
}

/*有个边框还不够，我想再给代码做个高亮*/

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

/*是不是很好玩，来一个七彩页面闪一闪*/

html{
    background:red;
    background:orange;
    background:yellow;
    background:green;
    background:blue;
    background:purple;
    background: rgb(222,222,222);
 }

 /*好了，现在开始画一只大白了*/

 /*我需要一张红底的纸*/

 .paper{
    position:fixed;
    top:0;
    right:0;
    height:100vh;
    width:60%;
    background:red;
    border:1px solid blue;
 
}


.wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  
  .head {
    position: absolute;
    top: -40px;
    left: 50%;
    width: 80px;
    height: 55px;

    transform: translate(-50%, 0);
    border-radius: 100%;
    background-color: white;
    background: linear-gradient(100deg, white, rgb(220, 220, 220));
    z-index: 9999;
    box-shadow: -6px -6px 20px 0 rgb(150, 150, 150) inset;
  }
  
  .eye {
    position: absolute;
    width: 10px;
    height: 10px;
    background: black;
    border-radius: 50%;
  }
  
  .left-eye {
    top: 40%;
    left: 65%;
  }
  
  .right-eye {
    top: 40%;
    left: 23%;
  }
  
  .eye-connect {
    position: absolute;
    top: 50%;
    left: 35%;
    width: 30px;
    height: 1px;
    background: black;
  }
  
  .torso {
    position: relative;
    display: block;
    width: 200px;
    height: 270px;
    background-color: white;
    background: linear-gradient(100deg, white, rgb(220, 220, 220));
    border-radius:         50%  50%  50%  50%  / 60%   60%   40%  40%;
    overflow: hidden;
    box-shadow: -15px -15px 40px 0 rgb(150, 150, 150) inset;
    z-index: 999
  }
  
  .access-port {
    position: absolute;
    top: 47px;
    left: 62%;
    width: 18px;
    height: 18px;
    background: rgb(245, 245, 245);
    background: linear-gradient(to right, rgb(245, 245, 245), rgb(235, 235, 235));
    border-right: 1px solid rgb(210, 210, 210);
    border-bottom: 1px solid rgb(210, 210, 210);
    border-radius: 50%;
  }
  
  .access-port-seam {
    position: relative;
    top: 50%;
    left: 0;
    width: 100%;
    height: 1px;
    background: rgb(220, 220, 220);
  }
  
  .torso-pad {
    position: absolute;
    top: 80px;
    width: 20px;
    height: 70px;
    background: rgba(210, 180, 180, .3);
    border-radius: 100%;
  }
  
  .right-torso-pad {
    left: -5px;
    transform: rotateZ(8deg);
  }
  
  .left-torso-pad {
    right: -5px;
    transform: rotateZ(8deg);
  }
  
  .right-leg {
    position: absolute;
    top: 60%;
    left: 20px;
    width: 80px;
    height: 170px;
    background-color: white;
    background: linear-gradient(100deg, white, rgb(220, 220, 220));
    z-index: 9999;
    box-shadow: -6px -6px 20px 0 rgb(150, 150, 150) inset;
    border-bottom-left-radius: 60%;
    border-bottom-right-radius: 25%;
    z-index: 0;
    overflow: hidden;
  }
  
  .left-leg {
    position: absolute;
    top: 60%;
    left: 50%;
    width: 80px;
    height: 170px;
    background-color: white;
    background: linear-gradient(100deg, white, rgb(220, 220, 220));
    z-index: 9999;
    box-shadow: -6px -6px 20px 0 rgb(150, 150, 150) inset;
    border-bottom-left-radius: 25%;
    border-bottom-right-radius: 60%;
    z-index: 0;
    overflow: hidden;
  }
  
  .thigh-pad {
    position: absolute;
    top: 38%;
    width: 25px;
    height: 60px;
    border-radius: 100%;
    background: rgba(210, 180, 180, .3);
  }
  
  .right-thigh-pad {
    left: -10px;
  }
  
  .left-thigh-pad {
    right: -10px;
  }
  
  .foot-pad {
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 20px;
    background: rgba(210, 180, 180, .3);
    border-radius: 100%;
  }
  
  .foot-pad::before {
    content: '';
    position: absolute;
    bottom: 10px;
    left: 50%;
    width: 65%;
    height: 10px;
    transform: translate(-50%, 0);
    background: rgba(210, 180, 180, .3);
    border-radius: 10px;
  }
  
  .right-arm {
    position: absolute;
    top: 8px;
    left: -30px;
    width: 70px;
    height: 220px;
    transform: rotateZ(30deg);
    background-color: white;
    background: linear-gradient(100deg, white, rgb(220, 220, 220));
    box-shadow: -6px -6px 20px 0 rgb(150, 150, 150) inset;
    border-top-left-radius: 75%;
    border-bottom-left-radius: 80%;
    border-bottom-right-radius: 65%;
    z-index: 99;
  }
  
  .right-thumb {
    position: absolute;
    bottom: 0;
    left: 52px;
    width: 15px;
    height: 30px;
    transform: rotateZ(-43deg);
    border-top-left-radius: 60%;
    border-top-right-radius: 30%;
    border-bottom-right-radius: 40%;
    border-bottom-left-radius: 40%;
    background-color: white;
    background: linear-gradient(100deg, white, rgb(220, 220, 220));
    box-shadow: -6px -6px 20px 0 rgb(150, 150, 150) inset;
  }
  
  .left-arm {
    position: absolute;
    top: 8px;
    left: 160px;
    width: 70px;
    height: 220px;
    transform: rotateZ(-30deg);
    background-color: white;
    background: linear-gradient(100deg, white, rgb(220, 220, 220));
    box-shadow: -6px -6px 20px 0 rgb(150, 150, 150) inset;
    border-top-right-radius: 75%;
    border-bottom-right-radius: 80%;
    border-bottom-left-radius: 65%;
  }
  
  .left-thumb {
    position: absolute;
    bottom: 0;
    left: 0px;
    width: 15px;
    height: 30px;
    transform: rotateZ(43deg);
    border-top-left-radius: 30%;
    border-top-right-radius: 60%;
    border-bottom-right-radius: 40%;
    border-bottom-left-radius: 40%;
    background-color: white;
    background: linear-gradient(100deg, white, rgb(220, 220, 220));
    box-shadow: 0px -8px 20px 0 rgb(180, 180, 180) inset;
  }
  
 
`


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
        fn2()   
    }
},0)

function fn2(){


}
