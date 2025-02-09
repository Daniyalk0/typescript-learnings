// 1️⃣ Classes & Objects
class Person {
    name: string;
    
    constructor(name: string) {
      this.name = name;
    }
  
    greet() {
      return `Hello, my name is ${this.name}`;
    }
  }
  
  const userr = new Person("John");
  console.log(userr.greet()); // Hello, my name is John
  

// 2️⃣ Public & Private Access Modifiers
class BankAccount {
    public owner: string;
    private balance: number; // Can't be accessed outside the class
  
    constructor(owner: string, balance: number) {
      this.owner = owner;
      this.balance = balance;
    }
  
    getBalance() {
      return this.balance; // Allowed inside the class
    }
  }
  
  const account = new BankAccount("Alice", 1000);
  console.log(account.getBalance()); // ✅ Allowed
  // console.log(account.balance); // ❌ Error: Property 'balance' is private
  

// 3️⃣ Protected Modifier
class Animal {
    protected move() {
      console.log("Moving...");
    }
  }
  
  class Dog extends Animal {
    bark() {
      console.log("Woof!");
      this.move(); // ✅ Allowed inside the subclass
    }
  }
  
  const dog = new Dog();
  dog.bark();
  // dog.move(); // ❌ Error: 'move' is protected


// 4️⃣ Getters & Setters
class human {
    private _age: number;
  
    constructor(age: number) {
      this._age = age;
    }
  
    get age(): number {
      return this._age;
    }
  
    set age(value: number) {
      if (value < 0) throw new Error("Age cannot be negative");
      this._age = value;
    }
  }
  
  const user1 = new human(25);
  console.log(user1.age); // 25
  user1.age = 30; // ✅ Allowed
  // user1.age = -5; // ❌ Throws error
  


// 5️⃣ Static Members
class MyClass {
    static myStaticProperty: string = "Static Property";
  
    static myStaticMethod() {
      console.log("This is a static method.");
    }
  }
  
  console.log(MyClass.myStaticProperty); // Accessing static property
  MyClass.myStaticMethod(); // Calling static method

  
  
// 6️⃣ Abstract Classes
abstract class Car {
    constructor(protected name: string) {}
    
    // Abstract method - must be implemented by subclasses
    abstract makeSound(): void;
    
    // Regular method
    move(): void {
      console.log(`${this.name} is moving`);
    }
  }
  
  class Porche extends Car {
    // Must implement abstract method
    makeSound(): void {
      console.log("Woof!");
    }
  }
  
  // Cannot instantiate abstract class
  // const car = new Car("buggati"); // Error
  const porche = new Porche("Rex");
  porche.makeSound(); // Woof!