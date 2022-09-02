import Hero from "../Hero.js";

export default class Priest extends Hero {
  constructor(name: string) {
    super(name, 90, ["heal"], "heal", 4, 0.2);
    this.resetCurrent();
  }
}
