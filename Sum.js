const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
var a = parseInt(userInput[0]);
 var b = parseInt(userInput[1]);
 
 if(a>=b)
 {
 console.log(a+b);
 }else if(a<=b)
 {
 console.log(a+b);
 }
});
