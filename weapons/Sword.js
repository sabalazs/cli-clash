import Hero from "../Hero.js";
import Weapon from "../Weapon.js";
export default class Sword extends Weapon {
    constructor() {
        super(null, 8, 12, 0.9, "Sword", () => {
            return this.owner instanceof Hero;
        });
    }
}
