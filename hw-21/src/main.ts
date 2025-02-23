import { Animal } from "./task1/Animal";
import { Dog } from "./task1/Dog";
import { Cat } from "./task1/Cat";
import { ColoredCircle } from "./task2/ColoredCircle";
import { ColoredRectangle } from "./task2/ColoredRectangle";
import { WashingMachine } from "./task3/WashingMachine";
import { Refrigerator } from "./task3/Refrigerator";
import { Appliance } from "./task3/Appliance";
import { Media } from "./task5/Media";
import { Video } from "./task5/Video";
import { SavingAccount } from "./task4/SavingAccount";
import { Audio } from "./task5/Audio";

//1
const cat1 = new Cat();
const dog1 = new Dog();
const animals: Animal[] = [cat1, dog1, cat1, cat1];

animals.forEach((animal) => {
  animal.makeSound();
});
console.log("-----");
//2
const circle = new ColoredCircle("circlr1", "blue", 10);
const rectangle = new ColoredRectangle("rectandle", "red", 10, 10);

console.log(circle.calculateArea());
console.log(rectangle.calculateArea());
console.log("-----");
//3

const appliances: Appliance[] = [new Refrigerator(), new WashingMachine()];
appliances.forEach((e) => {
  e.turnON(), e.turnOff();
});
console.log("-----");

//4
const saving = new SavingAccount(100);
saving.deposit(677);
saving.withdraw(10);
saving.getBalance();
saving.withdraw(900);
saving.getBalance();
console.log("-----");
//5
const medias: Media[] = [new Audio(), new Video()];

medias.forEach((e) => e.play());
