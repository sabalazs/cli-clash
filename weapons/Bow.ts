import Archer from "../hero-types/Archer.js";
import Weapon from "../Weapon.js";

export default class Bow extends Weapon {
  constructor() {
    super(null, 7, 12, 0.89, "Bow", () => {
      return this.owner instanceof Archer;
    });
  }
}
