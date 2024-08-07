// function hoc(a){

//   console.log(a);

// }

// function head(){

// console.log("hello");

// }
// hoc(head);

//    class fun {
//     constructor() {

//         console.log(this.a = 10);

//     }
// }
//    fun()

let a = () => {
  console.log(this);
};
a();
let b = function () {
  console.log(this);
};
b();
function fun(){
    console.log(this);
}
fun()