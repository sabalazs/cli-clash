import Hero from "../Hero.js";

export default class Archer extends Hero {
  constructor(name) {
    super(name);
    this.hp = 80;
    this.armour = 2;
    this.evasion = 0.15;
    this.abilities.push("headshot");
    this.defaultAbility = "headshot";
    this.resetCurrent();
  }
}
