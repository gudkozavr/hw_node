import { ColoredShape } from "./ColoredShape";
export class ColoredRectangle extends ColoredShape {
  name: string;
  color: string;
  l: number;
  w: number;
  constructor(name: string, color: string, l: number, w: number) {
    super();
    this.name = name;
    this.color = color;
    this.l = l;
    this.w = w;
  }
  calculateArea(): number {
    return this.l * this.w;
  }
}
