import { Appliance } from "./Appliance";

export class Refrigerator extends Appliance {
  constructor() {
    super();
  }
  turnON(): void {
    console.log("refrigerator is on");
  }
  turnOff(): void {
    console.log("refrigerator is off");
  }
}
