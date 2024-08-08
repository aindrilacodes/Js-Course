var c=300
let a=300
if(true){
    let a=10
    const b=78
    console.log(a);
    
    var c=30
}

console.log(a);
//console.log(b);
//console.log(c);
function one() {
    const username="ad"
    function two() {
        const website="you tube"
        console.log(username);   
    }
    //console.log(website);
    
    two()
}
one()
///**************interesting(hoisting)******** */
console.log(addone(5))
function addone(num){
return num+1
}
console.log(addTwo(15))
const addTwo=function(num){
    return num+2
}

