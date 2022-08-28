import Mage from "../hero-types/Mage.js";
import Weapon from "../Weapon.js";

export default class Wand extends Weapon {
  constructor() {
    super();
    this.minDamage = 9;
    this.maxDamage = 15;
    this.accuracy = 0.97;
    this.name = "Wand";
  }
  canOwnerUseIt = () => {
    return this.owner instanceof Mage;
  };
}
