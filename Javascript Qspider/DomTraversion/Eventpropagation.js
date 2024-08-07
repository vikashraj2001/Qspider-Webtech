let section=document.querySelector("section")

document.addEventListener("click",(e)=>{
    e.stopPropagation();
   section.style.backgroundColor="green"
})

let card=document.getElementsByClassName("card")

document.addEventListener("click",(e)=>{

    e.stopPropagation();
    card[0].style.backgroundColor="red"
})

let box=document.getElementsByClassName("box")

document.addEventListener("click",(e)=>{
    e.stopPropagation();
    box[0].style.backgroundColor="orange"
})