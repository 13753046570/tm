var neikuan=document.querySelector(".neikuan");
var rongqilis=document.querySelectorAll(".rongqi li");
var lbds=document.querySelectorAll(".lbdh .lbd")
var contai=document.querySelector(".contai")
var num=0;
contai.onmouseover=function(){
    clearInterval(t)
}
contai.onmouseout=function(){
    t=setInterval(move,2000)
}
function move(){
    num++;
    if(num>rongqilis.length-1){
        num=0;
    }
    for(var i=0;i<rongqilis.length;i++){
        rongqilis[i].style.zIndex=0;
        rongqilis[i].style.opacity=0;
        lbds[i].style.background="rgba(0,0,0,.3)"
    }
    rongqilis[num].style.zIndex=1;
    rongqilis[num].style.opacity=1;
    lbds[num].style.background="rgb(255,255,255)"
    contai.style.background=rongqilis[num].getAttribute("color")
}
var t=setInterval(move,2000)

    //轮播点移入事件
    for(var i=0;i<lbds.length;i++){
        lbds[i].index=i;
        lbds[i].onmouseover=function(){
            that=this;
            num=that.index
            console.log(num)
            for(var j=0;j<lbds.length;j++){
                rongqilis[j].style.zIndex=0;
                rongqilis[j].style.opacity=0;
                lbds[j].style.background="rgba(0,0,0,.3)"
            }
            rongqilis[num].style.zIndex=1;
            rongqilis[num].style.opacity=1;
            lbds[num].style.background="rgb(255,255,255)"
            contai.style.background=rongqilis[num].getAttribute("color")
        }
    }

    //顶部溢出事件
    var show=document.querySelector(".show");
    window.onscroll=function(){
        var l=document.documentElement.scrollTop;
        if(l>300){
            show.style.top="0"
        }else{
            show.style.top="-50px"
        }
    }