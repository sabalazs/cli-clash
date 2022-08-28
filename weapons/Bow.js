import Archer from "../hero-types/Archer.js";
import Weapon from "../Weapon.js";

export default class Bow extends Weapon {
  constructor(owner) {
    super(owner);
    this.minDamage = 7;
    this.maxDamage = 12;
    this.accuracy = 0.89;
  }
  canOwnerUseIt = () => {
    return this.owner instanceof Archer;
  };
}
