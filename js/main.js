
function clock(){
    var time=new Date();
    var hours=time.getHours();
    var minutes=time.getMinutes();
    var seconds=time.getSeconds();
    var msg=hours+" : "+minutes+" : "+seconds;
    var el=document.getElementById("wish_text");
    el.innerHTML=msg;
}
setInterval(clock,100);





function navMove() {
    let el=document.getElementById('sidebar');
    el.classList.toggle('active sal');
    let a=document.getElementById('a');
    a.classList.toggle('active');
    let b=document.getElementById('b');
    b.classList.toggle('active');
    let c=document.getElementById('c');
    c.classList.toggle('active');
    let button=document.getElementById("button");
    button.classList.toggle('active');

}

let ek=document.getElementById('button');
ek.addEventListener('click',navMove,false);


function  navSlide() {
    let slide=document.getElementById('sidebar');
    slide.classList.toggle('active');
    let a=document.getElementById('a');
    a.classList.toggle('active');
    let b=document.getElementById('b');
    b.classList.toggle('active');
    let c=document.getElementById('c');
    c.classList.toggle('active');
    let button=document.getElementById("button");
    button.classList.toggle('active');

}

let mi=document.getElementsByClassName('close');
mi.addEventListener("click",navSlide(),false);