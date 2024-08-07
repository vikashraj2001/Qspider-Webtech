const main=document.querySelectorAll("main")
console.log(main)

const fetchData=async ()=>{
    const response=await fetch('https://freetestapi.com/api/v1/movies')
    let data=await response.json();
    console.log(data)
    data.forEach((ele,ind) => {
        
    });
}
fetchData();

let displayUser=()=>{
    let card=document.createElement("div");
    card.setAttribute=("class","cards");
    card.innerHTML=`<h4>id: ${data.id}</h4>
                    <h2>Title: ${data.title}</h2>
                     <p>Genre :${data.genre}</p>`
  main.append(card);

}