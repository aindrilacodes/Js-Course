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
        console.log("please enter username");
        
    } else {
        return(`${username} just logged in`)
    }
}
console.log(loginUsermsg());
