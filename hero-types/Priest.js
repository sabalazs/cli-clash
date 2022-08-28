import Hero from "../Hero.js";

export default class Priest extends Hero {
  constructor(name) {
    super(name);
    this.hp = 90;
    this.armour = 4;
    this.evasion = 0.20;
    this.abilities.push("heal");
    this.defaultAbility = "heal";
    this.resetCurrent();
  }
}
