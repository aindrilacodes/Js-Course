function saymyname() {
    console.log("Aindrila");
    console.log("dutta");
    
}
//saymyname()
function ADD(num1,num2) {
    // console.log(num1+num2);
  const result=num1+num2
    return result;
    
}
const res=ADD(4,5)
console.log(res);

//ADD(2,null)
function loginUsermsg(username="Sam") {
    //  if (username===undefined ) {
    if(!username){
        //console.log("please enter username");
        
    } else {
        return(`${username} just logged in`)
    }
}
//console.log(loginUsermsg());
//rest operator for multiple values
function calculateCartPrice(val1,val2,...num1) {
    return num1
}
console.log(calculateCartPrice(1,400,500,2000));

const user1={
    username:"hitesh12",
    price: 999
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
handleObject(user1)
const newArray=[22,45,87,9,552]
function returnSecondValue(getArray) {
    return getArray[2]
    
}
console.log(returnSecondValue(newArray));
