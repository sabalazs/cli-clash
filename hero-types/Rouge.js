import Hero from "../Hero.js";

export default class Rouge extends Hero {
  constructor(name) {
    super(name);
    this.hp = 80;
    this.armour = 3;
    this.evasion = 30;
    this.abilities.push("dodge");
    this.defaultAbility = "dodge";
  }
}
