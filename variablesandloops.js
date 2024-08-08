/*console.log("this is conditional tutorial")
let age= 45;
let grace=2
var a=25
var b=8
console.log(age+grace)
console.log(age ** grace)
if((age+grace)>18){
    console.log("you can drive")
}
else
{
    console.log("You cannot drive")
}
c=a>b?(a-b):(a-2*b)
console.log(c)*/
console.log("loops tutorial")
// For Loop
let a=1
for(let i=1;i<5;i++)
{
    console.log(a++)
}
// For in
let obj={
    name:"Harry",
    role:"Programmer",
    company:"XYZ"
}
for (const key in obj) {
 {
        const element = obj[key];
        console.log(key,element)
    }
}
//For of
for (const c of "Harry") {
    console.log(c)
    
}
//While loop
let a1=1
while (a1<=5) {
    console.log(a1)
    a1++;
}
// do while loop
let j=5;
do {
    console.log(j)
    j--;
} while (j>5);
