import Archer from "../hero-types/Archer.js";
import Weapon from "../Weapon.js";

export default class Bow extends Weapon {
  constructor() {
    super();
    this.minDamage = 7;
    this.maxDamage = 12;
    this.accuracy = 0.89;
    this.name = "Bow";
  }
  canOwnerUseIt = () => {
    return this.owner instanceof Archer;
  };
}
