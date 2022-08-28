import Hero from "../Hero.js";
import Weapon from "../Weapon.js";

export default class Sword extends Weapon {
  constructor(owner) {
    super(owner);
    this.minDamage = 8;
    this.maxDamage = 12;
    this.accuracy = 0.9;
  }
  canOwnerUseIt = () => {
    return this.owner instanceof Hero;
  };
}
