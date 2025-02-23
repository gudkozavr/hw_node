import { Appliance } from "./Appliance";
export class WashingMachine extends Appliance {
  constructor() {
    super();
  }
  turnON(): void {
    console.log("washingMachine is on");
  }
  turnOff(): void {
    console.log("washingMachine is off");
  }
}
