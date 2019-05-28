import fruits from "./foods";
import {choice, remove} from "./helpers";

console.log("I am hungry. I would like some fruits.");
console.log("We have " + fruits.length + " options.");
let myChoice = choice(fruits);
console.log("I'd like one " + myChoice + ", please.");
console.log("Here you go: " + myChoice);
console.log("Delicious! May I have another ?");
remove(fruits, myChoice);
console.log("I'm sorry, we're all out. We have " + fruits.length + " left.");
console.log(fruits);

