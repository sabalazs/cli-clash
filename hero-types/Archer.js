import Hero from "../Hero.js";
export default class Archer extends Hero {
    constructor(name) {
        super(name, 80, ["headshot"], "headshot", 2, 0.15);
        this.resetCurrent();
    }
}
