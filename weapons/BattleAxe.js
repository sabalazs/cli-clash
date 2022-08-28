import Warrior from "../hero-types/Warrior.js";
import Weapon from "../Weapon.js";

export default class BattleAxe extends Weapon {
  constructor(owner) {
    super(owner);
    this.minDamage = 12;
    this.maxDamage = 15;
    this.accuracy = 0.92;
  }
  canOwnerUseIt = () => {
    return this.owner instanceof Warrior;
  };
}
