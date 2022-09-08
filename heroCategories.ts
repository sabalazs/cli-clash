import { Ability, WeaponCategory } from "./type";

export type HeroCategorySpecs = {
  hp: number;
  abilities: Ability[];
  defaultAbility: Ability;
  armour: number;
  evasion: number;
  allowedWeapons: WeaponCategory[];
};

const heroCategories: {
  archer: HeroCategorySpecs;
  mage: HeroCategorySpecs;
  priest: HeroCategorySpecs;
  rouge: HeroCategorySpecs;
  warrior: HeroCategorySpecs;
} = Object.freeze({
  archer: {
    hp: 80,
    abilities: ["headshot"],
    defaultAbility: "headshot",
    armour: 2,
    evasion: 0.15,
    allowedWeapons: ["sword", "bow"],
  },
  mage: {
    hp: 70,
    abilities: ["firestorm"],
    defaultAbility: "firestorm",
    armour: 1,
    evasion: 0.5,
    allowedWeapons: ["sword", "wand"],
  },
  priest: {
    hp: 90,
    abilities: ["heal"],
    defaultAbility: "heal",
    armour: 4,
    evasion: 0.2,
    allowedWeapons: ["sword", "warHammer"],
  },
  rouge: {
    hp: 80,
    abilities: ["dodge"],
    defaultAbility: "dodge",
    armour: 3,
    evasion: 0.3,
    allowedWeapons: ["sword", "dagger"],
  },
  warrior: {
    hp: 100,
    abilities: ["armour"],
    defaultAbility: "armour",
    armour: 5,
    evasion: 0.2,
    allowedWeapons: ["sword", "battleAxe"],
  },
});

export default heroCategories;
