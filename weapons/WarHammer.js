import Priest from "../hero-types/Priest.js";
import Weapon from "../Weapon.js";

export default class WarHammer extends Weapon {
  constructor(owner) {
    super(owner);
    this.minDamage = 10;
    this.maxDamage = 15;
    this.accuracy = 0.93;
  }
  canOwnerUseIt = () => {
    return this.owner instanceof Priest;
  };
}
