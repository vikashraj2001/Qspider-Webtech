const arr1 = [10, 20, 30, 40, 50, 60];
const arr2 = [10, 20, 70, 80, 50, 90];

function MergeArray() {
  
 let result = arr1.concat(arr2);
 console.log(result)
 
  const mergeArray = [];

  result.forEach((item) => {
    if (!mergeArray.includes(item)) {
      mergeArray.push(item);
    }
    mergeArray.sort((a, b) => a - b);
    console.log(mergeArray)
  });
 
  
}

MergeArray();
