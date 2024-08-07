
const values = [false, 0, -0, 0n, "", null, undefined, NaN, 1, "hello", [], {}];



   const truevalue=values.filter(value=>Boolean(value))


  console.log(truevalue)