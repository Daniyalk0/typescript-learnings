var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 1️⃣ Classes & Objects 
var insan = /** @class */ (function () {
    function insan(name) {
        this.name = name;
    }
    insan.prototype.greet = function () {
        return "Hello, my name is ".concat(this.name);
    };
    return insan;
}());
var userr = new insan("John");
console.log(userr.greet()); // Hello, my name is John
// 2️⃣ Public & Private Access Modifiers
var BankAccount = /** @class */ (function () {
    function BankAccount(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }
    BankAccount.prototype.getBalance = function () {
        return this.balance; // Allowed inside the class
    };
    return BankAccount;
}());
var account = new BankAccount("Alice", 1000);
console.log(account.getBalance()); // ✅ Allowed
// console.log(account.balance); // ❌ Error: Property 'balance' is private
// 3️⃣ Protected Modifier
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.move = function () {
        console.log("Moving...");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.bark = function () {
        console.log("Woof!");
        this.move(); // ✅ Allowed inside the subclass
    };
    return Dog;
}(Animal));
var dog = new Dog();
dog.bark();
// dog.move(); // ❌ Error: 'move' is protected
// 4️⃣ Getters & Setters
var human = /** @class */ (function () {
    function human(age) {
        this._age = age;
    }
    Object.defineProperty(human.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (value) {
            if (value < 0)
                throw new Error("Age cannot be negative");
            this._age = value;
        },
        enumerable: false,
        configurable: true
    });
    return human;
}());
var user1 = new human(25);
console.log(user1.age); // 25
user1.age = 30; // ✅ Allowed
// user1.age = -5; // ❌ Throws error
// 5️⃣ Static Members
var MyClass = /** @class */ (function () {
    function MyClass() {
    }
    MyClass.myStaticMethod = function () {
        console.log("This is a static method.");
    };
    MyClass.myStaticProperty = "Static Property";
    return MyClass;
}());
console.log(MyClass.myStaticProperty); // Accessing static property
MyClass.myStaticMethod(); // Calling static method
// 6️⃣ Abstract Classes
var Car = /** @class */ (function () {
    function Car(name) {
        this.name = name;
    }
    // Regular method
    Car.prototype.move = function () {
        console.log("".concat(this.name, " is moving"));
    };
    return Car;
}());
var Porche = /** @class */ (function (_super) {
    __extends(Porche, _super);
    function Porche() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Must implement abstract method
    Porche.prototype.makeSound = function () {
        console.log("Woof!");
    };
    return Porche;
}(Car));
// Cannot instantiate abstract class
// const car = new Car("buggati"); // Error
var porche = new Porche("Rex");
porche.makeSound(); // Woof!
