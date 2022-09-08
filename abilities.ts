import Hero from "./Hero";

const armour = (hero: Hero) => {
  hero.currentArmour += 10;
};
const heal = (hero: Hero) => {
  //TODO Priest can go above starting HP
  hero.hp += 10;
};
const firestorm = (hero: Hero) => {
  hero.currentDamage += 20;
};
const dodge = (hero: Hero) => {
  hero.currentEvasion += 1;
};
const headshot = (hero: Hero) => {
  hero.currentDamage += 15;
};

const abilitiesMap = {
  armour: armour,
  heal: heal,
  firestorm: firestorm,
  dodge: dodge,
  headshot: headshot,
};

const abilities = Object.freeze({
  armour: "armour",
  heal: "heal",
  firestorm: "firestorm",
  dodge: "dodge",
  headshot: "headshot",
});

export { abilities, abilitiesMap };
