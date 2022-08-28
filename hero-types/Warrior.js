import Hero from "../Hero.js";

export default class Warrior extends Hero {
  constructor(name) {
    super(name);
    this.hp = 100;
    this.armour = 5;
    this.evasion = 20;
    this.abilities.push("armour");
    this.defaultAbility = "armour";
  }
}
