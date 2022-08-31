import Hero from "../Hero.js";

export default class Rouge extends Hero {
  constructor(name: string) {
    super(name, 80, ["dodge"], "dodge", 3, 0.3);
    this.resetCurrent();
  }
}
