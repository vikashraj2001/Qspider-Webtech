

function* fun(b){
   yield b+10;
   yield b+20;
   yield b+30;
   yield b+40;
   yield b+50;
}
   let ab=fun(10);
      
   console.log(ab.next().value);
   console.log(ab.next().value);
   console.log(ab.next().value);
   console.log(ab.next().value);
   console.log(ab.next().value);
