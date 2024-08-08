const prompt=require("prompt-sync")(); 
/*create a faulty calculator using javascript
This faulty calculator does the following:
1.It takes two numbers as input form the user
2.It performs wrong operations as follows only 10% of the times
+->-
*->+
-->/
/->**
*/
console.log("Calculator")
 let a=5;
while(a!=0)
    {
        r=Math.random()
        
            addition(r)
       
            Difference(r)
            multiplication(r)

            Division(r)
        a--;
    }
function addition(r) {
    console.log(r)
    const a=parseInt(prompt("Enter First Number"))
    const b=parseInt(prompt("Enter First Number"))
    if(r<0.1)
    {
        console.log("Ans"+":"+(a-b))
    }
    else
    console.log("Ans"+":"+(a+b))
}
function multiplication(r) {
    const a=parseInt(prompt("Enter First Number"))
    const b=parseInt(prompt("Enter First Number"))
    if(r<0.1)
    {
        console.log("Ans"+":"+(a+b))
    }
    else
    console.log("Ans"+":"+(a*b))
}
function Difference(r) {
    const a=parseInt(prompt("Enter First Number"))
    const b=parseInt(prompt("Enter First Number"))
    if(r<0.1)
    {
        console.log("Ans"+":"+(a/b))
    }
    else
    console.log("Ans"+":"+(a-b))
}
function Division(r) {
    const a=parseInt(prompt("Enter First Number"))
    const b=parseInt(prompt("Enter First Number"))
    if(r<0.1)
    {
        console.log("Ans"+":"+(a**b))
    }
    else
    console.log("Ans"+":"+(a/b))
}