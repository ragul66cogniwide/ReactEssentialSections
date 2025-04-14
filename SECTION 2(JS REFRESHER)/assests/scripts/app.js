// import { apikey ,abc as power} from "./util.js";
// import * as util from "./util.js";
// import apikey from "./util.js";

// console.log(apikey);
// console.log(power);

// console.log(util.apikey);
// console.log(util.abc);

// function greet(userName, message = "What's up?") {
//   console.log(userName);
//   console.log(message);
// }

// greet("John");
// greet("Ragul", "Good to see you!!");

// const hobbies = ["cricket", "football", "tennis"];

// hobbies.push("badminton");
// console.log(hobbies);

// const hobbieses = hobbies.findIndex((item) => item === "cricket");

// const hobbieses1 = hobbies.map((item) => ({text: item}));
// console.log(hobbieses1);

// console.log(hobbieses);

// const password = prompt("Enter your password: ");

// if (password === "1234") {
//   console.log("Welcome to the site!");
// } else if (password === "admin") {
//   console.log("Welcome admin!");
// } else {
//   console.log("Access denied!");
// }

function handletimeout() {
  console.log("Timed out!");
}

const handeletimeout2 = () => {
  console.log("Timed out ...again!");
};

setTimeout(handletimeout, 2000);
setTimeout(handeletimeout2, 3000);
setTimeout(() => {
  console.log("More Timed out");
}, 4000);
