import Hero from "../Hero.js";

export default class Mage extends Hero {
  constructor(name) {
    super(name);
    this.hp = 70;
    this.armour = 1;
    this.evasion = 5;
    this.abilities.push("firestorm");
    this.defaultAbility = "firestorm";
  }
}
