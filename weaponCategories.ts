const weapons = Object.freeze({
  battleAxe: {
    minDamage: 12,
    maxDamage: 15,
    accuracy: 0.92,
    name: "Battle Axe",
  },
  bow: {
    minDamage: 7,
    maxDamage: 12,
    accuracy: 0.89,
    name: "Bow",
  },
  dagger: {
    minDamage: 4,
    maxDamage: 5,
    accuracy: 0.98,
    name: "Dagger",
  },
  sword: {
    minDamage: 8,
    maxDamage: 12,
    accuracy: 0.9,
    name: "Sword",
  },
  wand: {
    minDamage: 9,
    maxDamage: 15,
    accuracy: 0.97,
    name: "Wand",
  },
  warHammer: {
    minDamage: 10,
    maxDamage: 15,
    accuracy: 0.93,
    name: "War Hammer",
  },
});

export default weapons;
