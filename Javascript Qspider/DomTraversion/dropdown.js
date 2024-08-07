
let option=document.querySelector("select")
// create  a city of array
let cities=["London","Paris","Tokyo","New York","Beijing","Sydney"]
cities.forEach((ele,i,arr)=>{
    option.innerHTML +=`<option>${ele}</option>`
}) 