import Hero from "../Hero.js";
import Weapon from "../Weapon.js";

export default class Sword extends Weapon {
  constructor() {
    super();
    this.minDamage = 8;
    this.maxDamage = 12;
    this.accuracy = 0.9;
    this.name = "Sword";
  }
  canOwnerUseIt = () => {
    return this.owner instanceof Hero;
  };
}
