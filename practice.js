"use strict";
// 1️⃣ Basic Types
let username = "John";
let age = 25;
let isActive = true;
let anything = "Could be anything";
let notSure = 42;
function logMessage() {
    console.log("This function returns nothing!");
}
function throwError() {
    throw new Error("This function never returns!");
}
// 2️⃣ Type Inference & Type Annotations
let message = "Hello, TypeScript!"; // inferred as string  
let count = 10; // explicit annotation
// 4️⃣ Enums
var Status;
(function (Status) {
    Status["Success"] = "SUCCESS";
    Status["Error"] = "ERROR";
    Status["Pending"] = "PENDING";
})(Status || (Status = {}));
let currentStatus = Status.Success;
console.log(currentStatus); // "SUCCESS"
const user = { name: "Alice", age: 30 };
const person = { name: "Bob", age: 25 };
// 5️⃣ Literal Types
let statuss;
statuss = "success"; // ✅ Valid  
// 7️⃣ Tuples
let userInfo = ["Alice", 25, true];
console.log(userInfo[0]); // "Alice"
