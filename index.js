import Arena from "./Arena.js";
import Archer from "./hero-types/Archer.js";
import Mage from "./hero-types/Mage.js";
import Priest from "./hero-types/Priest.js";
import Rouge from "./hero-types/Rouge.js";
import Warrior from "./hero-types/Warrior.js";
import BattleAxe from "./weapons/BattleAxe.js";
import Bow from "./weapons/Bow.js";
import Sword from "./weapons/Sword.js";
import WarHammer from "./weapons/WarHammer.js";

const warrior = new Warrior("Mars");
warrior.equipWeapon(new BattleAxe());
console.log(warrior);
const priest = new Priest("Jupiter");
priest.equipWeapon(new Sword());
console.log(warrior);

const arena = new Arena(warrior, priest);

arena.fight();

/* const priest = new Priest("Jupiter");
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
console.log(warhammer.canOwnerUseIt()); */
