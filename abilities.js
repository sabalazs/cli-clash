"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.abilitiesMap = void 0;
const armour = (hero) => {
    hero.currentArmour += 10;
};
const heal = (hero) => {
    //TODO Priest can go above starting HP
    hero.hp += 10;
};
const firestorm = (hero) => {
    hero.currentDamage += 20;
};
const dodge = (hero) => {
    hero.currentEvasion += 1;
};
const headshot = (hero) => {
    hero.currentDamage += 15;
};
const abilitiesMap = {
    armour: armour,
    heal: heal,
    firestorm: firestorm,
    dodge: dodge,
    headshot: headshot,
};
exports.abilitiesMap = abilitiesMap;
