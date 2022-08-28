import Priest from "../hero-types/Priest.js";
import Weapon from "../Weapon.js";

export default class WarHammer extends Weapon {
  constructor() {
    super();
    this.minDamage = 10;
    this.maxDamage = 15;
    this.accuracy = 0.93;
    this.name = "War Hammer";
  }
  canOwnerUseIt = () => {
    return this.owner instanceof Priest;
  };
}
