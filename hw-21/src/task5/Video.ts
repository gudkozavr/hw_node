import { Media } from "./Media";

export class Video extends Media {
  constructor() {
    super();
  }
  play(): void {
    console.log("playing video");
  }
}
