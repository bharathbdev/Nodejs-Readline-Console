const readline = require("readline");
const  AbortController = require("abort-controller")
const ac = new AbortController();
const signal = ac.signal;
var util = require('util');

var RL = readline.createInterface(process.stdin, process.stdout);
RL.question('What is your name? ', (name)=>{
    RL.setPrompt(`${name} How old are you? `);
    RL.prompt();
    RL.on('line', (age)=>{
        if(age<18)
        {
            util.log(`${name.trim()} because you are ${age} years old, you cannot procees`);
            RL.close();
        }
        else
        {
            util.log(`${name.trim()} is great because you are ${age} years old, you can enjoy our services`);
            RL.close();
        }
    })
});

signal.addEventListener(
    "abort",
    () => {
        console.log("The name question timed out!");
    },
    { once: true }
);

setTimeout(() => {
    ac.abort();
    process.exit();
}, 10000); // 10 seconds
