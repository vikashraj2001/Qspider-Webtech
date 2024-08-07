/*  Dom: Traversing: we can perform crud operation using dom traversing

some method of dom Traversing
 1. createElement()
 2. createTextNode()
 3. appendChild()
 4. remove()
 5.setAttribute()

 properties in dom
 1. innerHTML
 2. innerText
 3. outerHTML

*/
/*

let section=document.createElement('section')//you can create element by using createElement()method
let h1=document.createElement('h1')//you can create element by using createElement()method
console.log(section);

section.setAttribute("class","container,box1,box2")// setAttribute() method is use to setAttribute in the element, if you want to pass multiple
// element you can pass multiple attribute using comma(,)
//console.log(section);
section.setAttribute("class","container,box1,box2")// setAttribute() method is use
// to setAttribute in the element, if you want to pass multiple
// element you can pass multiple attribute using comma(,)
//console.log(section);

section.innerText='Vikash singh'

// if you want to show  a text on html Web pages show u can use append() method then it will show on html web pages

let body=document.querySelector("body");
body.append(section);// this is a first way 
// to show the element on html web pages we can append multiple element  using comma(,)


document.querySelector("body").appendChild(section);//append() method is use to append the element in the body
  by using append child  u can append only one element 

*/
let h=document.createElement('h1')
h.setAttribute("class","headingone")
h.innerText="Vikash singh"
let body=document.querySelector("body");



let hh=document.createElement('h2')
hh.setAttribute("class","headingtwo")
hh.innerText="Vikash singh raj"

//body.append(h,hh);// this is a first way

//body.appendChild(h,hh);// only one element can append  in appendChild(h)
//body.appendChild(h);// only one element can append  in appendChild(h)
hh.innerHTML='<h1>heloo</h1>'
body.appendChild(hh);// only one element can append  in appendChild(h)

// =========================== remove element using dom method==============


 //  let container=document.querySelector("#demo");
   //container.remove();
   //container.removeChild(h);// this is a first way

   // you want to delete collection show  you can use
   let container1=document.getElementsByClassName("demo")
 
     //console.log(container1)
     container1[1].remove();

// i want to show child element how can do
     let container=document.getElementById("demo1");

     let inhtml=  container.innerHTML;
     console.log(inhtml)
       inhtml.remove();
        
    
    