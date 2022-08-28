const armour = (hero) => {
  hero.currentArmour += 10;
};
const heal = (hero) => {
  hero.hp += 10;
};
const firestorm = (hero) => {
  hero.currentDamage += 20;
};
const dodge = (hero) => {
  hero.currentEvasion += 100;
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

export { abilitiesMap };
