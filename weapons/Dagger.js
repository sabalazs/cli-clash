import Rouge from "../hero-types/Rouge.js";
import Weapon from "../Weapon.js";

export default class Dagger extends Weapon {
  constructor() {
    super();
    this.minDamage = 4;
    this.maxDamage = 5;
    this.accuracy = 0.98;
    this.name = "Dagger";
  }
  canOwnerUseIt = () => {
    return this.owner instanceof Rouge;
  };
}
