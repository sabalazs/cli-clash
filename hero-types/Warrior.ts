import Hero from "../Hero.js";

export default class Warrior extends Hero {
  constructor(name: string) {
    super(name, 100, ["armour"], "armour", 5, 0.2);
    this.resetCurrent();
  }
}
