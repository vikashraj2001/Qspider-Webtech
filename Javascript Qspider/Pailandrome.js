
let a=parseInt(prompt("Enter a Number: "))


function palindrome(a){
    let b=a;
    let temp=0;
    while(a>0){
        temp=temp*10+a%10;
        a=Math.floor(a/10);
        }
        if(temp==b){
            console.log("The number is palindrome")
        }
        else{
            console.log("The number is not palindrome")
        }
    }
  palindrome(a);                                                                          