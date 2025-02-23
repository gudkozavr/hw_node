import { Animal } from "./Animal";

export class Cat extends Animal {
  constructor() {
    super();
  }
  makeSound(): void {
    console.log("Meow");
  }
}
