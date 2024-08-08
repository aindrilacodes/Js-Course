//Array
 const myArray=[0,1,15,98,45]
 const myhero=['Batman','Thor',"harley Queen"]
 const arr=new Array(1,2,3,4)
 myhero.join()

//  console.log(arr[2]);
//  myArray.push(96);

//  console.log(myArray);
//  myArray.unshift(9);
//  console.log(myArray);
//  myArray.shift();
//  console.log(myArray);
console.log(myArray.includes(15));
//slice and splice
console.log("A",myArray);
const myn1= myArray.slice(1,3)
console.log(myn1);
console.log("B",myArray);
const myn2= myArray.splice(1,3)
//changes the original array
console.log("C",myArray);
console.log(myn2); 
