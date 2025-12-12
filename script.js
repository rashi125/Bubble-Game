var timer=60;
var score=0;
var hrn=0;
function incscore()
{
    score+=10;
    document.querySelector("#score").textContent=score;
}
function runtime()
{
 
 var t=setInterval(function(){
    if(timer>0)
    {
timer--;
document.querySelector("#timer").innerHTML=timer;
    }
else
{
clearInterval(t);
document.querySelector("#pbottom").innerHTML=`<h2>GAME OVER</h2>`
}
},1000)
}
function makebubble()
{var ch=""
for(var i=1;i<=184;i++)
{
    var rn=Math.floor(Math.random()*10);
   ch+= `<div class="bubble">${rn}
                </div>`
}
document.querySelector("#pbottom").innerHTML=ch;
}
function newhit()
{
     hrn=Math.floor(Math.random()*10);
    document.querySelector("#hval").textContent=hrn;
}
runtime();
makebubble();
newhit();
document.querySelector("#pbottom").addEventListener("click",function(det)
{
var ent=Number(det.target.textContent);
if(ent===hrn)
{
    incscore();
    newhit();
    makebubble();
}
})
