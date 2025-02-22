import { Library } from "./Library";
import { Vehicle } from "./Vehicle";
import { Motorcycle } from "./Motorcycle";
//1
class Animal {
  name: string;
  species: string;

  constructor(name: string, species: string) {
    this.name = name;
    this.species = species;
  }
  sound() {
    console.log("the animal makes ");
  }
}

class Dog extends Animal {
  breed: string;
  constructor(name: string, species: string, breed: string) {
    super(name, species);
    this.breed = breed;
  }
  sound(): void {
    console.log("The dog barks");
  }
}

//2
const lib1 = new Library();
lib1.addBook();
lib1.addBook();
lib1.addBook();
console.log(Library.getTotalBook());

//3
const car = new Vehicle("audi", "x1");
const motorcycle1 = new Motorcycle("audi", "x10833", "electro");

console.log(`make: ${car.make}, model: ${car.model}`);

console.log(
  `make: ${motorcycle1.make}, model: ${motorcycle1.model}, type : ${motorcycle1.type}`
);
