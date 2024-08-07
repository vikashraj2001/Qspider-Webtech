/* Event:  An action perform by the  user on web pages known as an event
-> A javascript can be executed when an event occurs , like when a user clicks on a HTML
 we can perform event by two ways
  1.  By using html Attribute
  2. By using addEventListner() Method

1.click
2.mouseover
3.mouseOut
4.mouseDown
5.mouseUp
6.contextmenu: for right click
7.keyPress
8.keyUp : i ma pressing and pressing up
9.keyDown: continusely pressing then it is key down
10.Submit
11. doubleclick
12. preventDefault(): is change the default behavior

*/
   
  // 1. click: 
  
  let div=document.querySelector("div")
 // console.log(div)
    let arr=["blue","black", "orange", "red"]
 

  let fun=arr.forEach((arr, index)=>{
          div.style.backgroundColor=`${arr[index]}`
    })
  //  console.log(fun)
// counter  ============================
   

     let select=document.querySelector(".counter")
     let counter=parseInt(select.innerText);
     console.log(counter)
    function increment(){
    
          counter += 1;
          select.innerText=counter;
    }

    function decrement(){
    
      counter -= 1;
      select.innerText=counter;
}

function reset(){
    
  counter = 0;
  select.innerText=counter;
}

// 2. mouseover:

  let hover=document.querySelector(".hover")

  //   function onmouseHover(){
  //       hover.style.borderRadius="50%"
  //   }
  //  function onmouseLeave(){
  //   hover.style.borderRadius=""   
      
  //     }


// Second Wey addEventListner()
  document.addEventListener("mouseover",()=>{
   hover.style.borderRadius="50%"
  })
document.addEventListener("click",()=>{
   hover.style.borderRadius="20%"
  })






   
