// 1️⃣ Type Assertions
let value: unknown = "TypeScript";
let strLength: number = (value as string).length;
console.log(strLength); // 10

let data: unknown = [1, 2, 3, 4];
let firstElement: number = (data as number[])[0];
console.log(firstElement); // 1


// 2️⃣ Type Guards
function isString(value: unknown): value is string {
    return typeof value === "string";
  }
  
  function printLength(value: unknown) {
    if (isString(value)) {
      console.log(value.length);
    } else {
      console.log("Not a string");
    }
  }
  
  printLength("Hello"); // 5
  printLength(100); // Not a string
  