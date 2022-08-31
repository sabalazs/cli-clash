import Hero from "../Hero.js";
export default class Mage extends Hero {
    constructor(name) {
        super(name, 70, ["firestorm"], "firestorm", 1, 0.5);
        this.resetCurrent();
    }
}
