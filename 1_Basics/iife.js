//Immediately invoked function expressions(IIFE)
(function chai() {
    console.log("DB CONNECTED")
})();//this semicolon is important
//to solve the global pollution a function that is immediately called
((name) => {
    console.log(`DB CONNECTED ${name}`)
})("Aindrila");