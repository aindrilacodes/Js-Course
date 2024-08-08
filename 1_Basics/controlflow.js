const isloggedIn=true
if (isloggedIn) {
    console.log("congrats");
    
}
else
{
    console.log("sorryyyy");
    
} //shift +alt+down arrow for duplication
const month=5
switch (month) {
    case 1:
        console.log("January");
        
        break;
    case 2:
        console.log("February");
        
        break;
    case 3:
        console.log("March");
        
        break; 

    default:
        console.log("default case matched");
        
        break;
}
const userEmail=[]
/* falsy values
false,0,-0,bigint(0n),null,undefined,NAN
else all are truthy values "0",'false'," ",[],{},function(){}*/
if(userEmail.length===0)
{
    console.log("array is empty");
    
}
const emptyObject={}
if(Object.keys(emptyObject).length===0)
{
    console.log("object is empty");
    
}
//Nullish Coalescing Operator(??):null undefined
let val1;
//val1=23 ?? 10
// val1=null ?? 10
// console.log(val1);
// val=undefined ?? 15
// console.log(val);
val1=null ?? 10 ?? 15
console.log(val1);
//   Ternary operator
//conditon?val1:val2
let score=(4>5)?false:true
console.log(score);


