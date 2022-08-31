import Priest from "../hero-types/Priest.js";
import Weapon from "../Weapon.js";
export default class WarHammer extends Weapon {
    constructor() {
        super(null, 10, 15, 0.93, "War Hammer", () => {
            return this.owner instanceof Priest;
        });
    }
}
