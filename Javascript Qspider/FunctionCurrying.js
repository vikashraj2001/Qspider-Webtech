function parent(){
    let a=10;
   return  function child(){
            let b=20;
           

            return function gchild(){

                let c=30;
                console.log(a,b,c);
            }
     }
      
    
}

parent()()();