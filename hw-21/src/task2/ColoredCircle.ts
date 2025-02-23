import { ColoredShape } from "./ColoredShape";

export class ColoredCircle extends ColoredShape {
  name: string;
  color: string;
  radius: number;
  constructor(name: string, color: string, radius: number) {
    super();
    this.name = name;
    this.color = color;
    this.radius = radius;
  }
  calculateArea(): number {
    return Math.PI * this.radius ** 2;
  }
}
