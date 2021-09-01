

let readline = require("readline");

let reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let welcome = "Let me validate your password!";
console.log(welcome);
reader.question("Enter your password: ", function (input) {
  if (input.length >= 6) {
    console.log("password is adequate!");
  } else {
    console.log("password is crap");
  }

  reader.close();
});