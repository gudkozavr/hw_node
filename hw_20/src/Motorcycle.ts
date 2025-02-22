import { Vehicle } from "./Vehicle";

export class Motorcycle extends Vehicle {
  type: string;
  constructor(make: string, model: string, type: string) {
    super(make, model);
    this.type = type;
  }
}
