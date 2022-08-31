import Mage from "../hero-types/Mage.js";
import Weapon from "../Weapon.js";
export default class Wand extends Weapon {
    constructor() {
        super(null, 9, 15, 0.97, "Wand", () => {
            return this.owner instanceof Mage;
        });
    }
}
