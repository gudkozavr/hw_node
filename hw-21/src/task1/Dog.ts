import { Animal } from "./Animal";

export class Dog extends Animal {
  constructor() {
    super();
  }
  makeSound(): void {
    console.log("bark");
  }
}
