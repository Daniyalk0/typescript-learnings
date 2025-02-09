// 1️⃣ Basic Types
var username = "John";
var age = 25;
var isActive = true;
var anything = "Could be anything";
var notSure = 42;
function logMessage() {
    console.log("This function returns nothing!");
}
function throwError() {
    throw new Error("This function never returns!");
}
// 2️⃣ Type Inference & Type Annotations
var message = "Hello, TypeScript!"; // inferred as string  
var count = 10; // explicit annotation
// 4️⃣ Enums
var Status;
(function (Status) {
    Status["Success"] = "SUCCESS";
    Status["Error"] = "ERROR";
    Status["Pending"] = "PENDING";
})(Status || (Status = {}));
var currentStatus = Status.Success;
console.log(currentStatus); // "SUCCESS"
var user = { name: "Alice", age: 30 };
var person = { name: "Bob", age: 25 };
// 5️⃣ Literal Types
var statuss;
statuss = "success"; // ✅ Valid  
// 7️⃣ Tuples
var userInfo = ["Alice", 25, true];
console.log(userInfo[0]); // "Alice"
