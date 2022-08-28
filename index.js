import Archer from "./hero-types/Archer.js";
import Mage from "./hero-types/Mage.js";
import Priest from "./hero-types/Priest.js";
import Rouge from "./hero-types/Rouge.js";
import Warrior from "./hero-types/Warrior.js";
import Sword from "./weapons/Sword.js";
import WarHammer from "./weapons/WarHammer.js";

const warrior = new Warrior("Mars");
console.log(warrior);
warrior.useAbility();

const priest = new Priest("Jupiter");
console.log(priest);
priest.useAbility();

const mage = new Mage("Neptun");
console.log(mage);
mage.useAbility();

const rouge = new Rouge("Venus");
console.log(rouge);
rouge.useAbility();

const archer = new Archer("Saturn");
console.log(archer);
archer.useAbility();

const warhammer = new WarHammer(warrior);
console.log(warhammer);
console.log(warhammer.canOwnerUseIt());
