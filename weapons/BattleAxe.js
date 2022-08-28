import Warrior from "../hero-types/Warrior.js";
import Weapon from "../Weapon.js";

export default class BattleAxe extends Weapon {
  constructor() {
    super();
    this.minDamage = 12;
    this.maxDamage = 15;
    this.accuracy = 0.92;
    this.name = "Battle Axe";
  }
  canOwnerUseIt = () => {
    return this.owner instanceof Warrior;
  };
}
