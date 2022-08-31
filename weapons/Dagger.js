import Rouge from "../hero-types/Rouge.js";
import Weapon from "../Weapon.js";
export default class Dagger extends Weapon {
    constructor() {
        super(null, 4, 5, 0.98, "Dagger", () => {
            return this.owner instanceof Rouge;
        });
    }
}
