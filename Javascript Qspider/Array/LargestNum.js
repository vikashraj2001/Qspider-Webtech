const arr=[12, 34, 56, 78, 89, 90, 80, 70, 60];

 let graterelement=[];
    arr.forEach((item,index)=>{
          let nextItem=arr[index+1]
       
        if (nextItem!==undefined && item > nextItem) {
            graterelement.push(item)
          
        }
        
      })
console.log(graterelement)