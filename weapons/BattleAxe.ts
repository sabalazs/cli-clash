import Warrior from "../hero-types/Warrior.js";
import Weapon from "../Weapon.js";

export default class BattleAxe extends Weapon {
  constructor() {
    super(null, 12, 15, 0.92, "Battle Axe", () => {
      return this.owner instanceof Warrior;
    });
  }
}
