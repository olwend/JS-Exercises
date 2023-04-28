// Classes and Inheritance

// a) setters and getters. Set name and age

class Animal {
    constructor(name, age, type) {
      this._name = name;
      this._age = age;
      this._type = type;
    }
    get name() {
      return this._name;
    }

    get age() {
      return this._age;

    }

    get type() {
      return this._type;
    }

    set name(newName) {
      this._name = newName;
    }

  // Code here...
}

// Uncomment to test
const animal = new Animal("Rex", 8, "Collie");
console.log("Name: " + animal.name);
console.log("Age: " + animal.age);
console.log("Type: " + animal.type);
animal.name = "Oura";
console.log("New Name: " + animal.name);

// b) Inheritance

class Dog extends Animal{
  constructor(name, age) {
      super(name,age,"Dog");
    }

  woof() {
    return "Woof!";
  }
}

class Cat extends Animal{
  constructor(name, age) {
    super(name,age,"Cat");
  }

  meow() {
    return "Meow!";
  }

}

// Uncomment to test

const dog = new Dog("Axe", 6, "collie");
console.log("Dog Name: " + dog.name);
console.log("Dog Age: " + dog.age);
console.log("Dog Type: " + dog.type);
dog.name = "New Axe";
console.log("New Dog Name: " + dog.name);
console.log(dog.woof());

const cat = new Cat("Napster", 3, "Siamese");
console.log("Cat Name: " + cat.name);
console.log("Cat Age: " + cat.age);
console.log("Cat Type: " + cat.type);
cat.name = "New Nap";
console.log("New Cat Name: " + cat.name);
console.log(cat.meow());
