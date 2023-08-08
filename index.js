const root=document.querySelector('body');
const cursor=document.querySelector('.cursor');
const blue=document.querySelector('.blue');
const green=document.querySelector('.green');
const orange=document.querySelector('.orange');

root.addEventListener("mousemove",(f)=>{
    position(cursor, f);
    position(blue, f);
    position(green, f);
    position(orange, f);
})

let position=(element, e)=>{
    element.style.transform=`translate3d(${e.clientX}px,${e.clientY}px,0)`;
}