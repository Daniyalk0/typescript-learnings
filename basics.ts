// 1️⃣ Basic Types

let username: string = "John";  
let age: number = 25;  
let isActive: boolean = true;  
let anything: any = "Could be anything";  
let notSure: unknown = 42;  

function logMessage(): void {
  console.log("This function returns nothing!");
}

function throwError(): never {
  throw new Error("This function never returns!");
}


// 2️⃣ Type Inference & Type Annotations

let message = "Hello, TypeScript!"; // inferred as string  
let count: number = 10; // explicit annotation


// 4️⃣ Enums

enum Status {
  Success = "SUCCESS",
  Error = "ERROR",
  Pending = "PENDING",
}

let currentStatus: Status = Status.Success;
console.log(currentStatus); // "SUCCESS"



// 3️⃣ Type Aliases & Interfaces

type User = {
  name: string;
  age: number;
};

interface Person {
  name: string;
  age: number;
}

const user: User = { name: "Alice", age: 30 };
const person: Person = { name: "Bob", age: 25 };


// 5️⃣ Literal Types

let statuss: "success" | "error";
statuss = "success"; // ✅ Valid  
// status = "pending"; // ❌ Error: "pending" is not allowed


// 6️⃣ Union & Intersection Types

type Admin = { role: "admin"; permissions: string[] };
type User1 = { role: "user"; name: string };

type Person1 = Admin | User; // Union
type Employee = Admin & { department: string }; // Intersection


// 7️⃣ Tuples

let userInfo: [string, number, boolean] = ["Alice", 25, true];  
console.log(userInfo[0]); // "Alice"
