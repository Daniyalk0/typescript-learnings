// // 1️⃣ Rest Parameters in Functions
function sum(...numbers: number[]): number {
    return numbers.reduce((acc, num) => acc + num, 0);
  }

  console.log(sum(10, 20, 30)); // 60
  

// // 2️⃣ Function Overloading
function greet(person: string): string;
function greet(persons: string[]): string;
function greet(person: string | string[]): string {
  return Array.isArray(person) ? `Hello, ${person.join(", ")}` : `Hello, ${person}`;
}

console.log(greet("Alice")); // Hello, Alice
console.log(greet(["Alice", "Bob"])); // Hello, Alice, Bob


// // 3️⃣ Generics in Functions
function identity<T>(arg: T): T {
    return arg;
  }

  console.log(identity<number>(42)); // 42
  console.log(identity<string>("TypeScript")); // TypeScript


// 4️⃣ Generics in Classes
class Box<T> {
  constructor(public value: T) {}

  getValue(): T {
    return this.value;
  }
}

const numberBox = new Box<number>(100);
console.log(numberBox.getValue()); // 100

const stringBox = new Box<string>("Hello");
console.log(stringBox.getValue()); // Hello


// 5️⃣ Generics in Interfaces
interface Box2<T> {
    value: T;
  }
  
  const numBox: Box2<number> = { value: 100 };
  const strBox: Box2<string> = { value: "Hello" };
  
  console.log(numberBox.value); // 100
  console.log(stringBox.value); // "Hello"
  