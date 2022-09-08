import { abilities } from "./abilities";
import heroCategories from "./heroCategories";
import weapons from "./weaponCategories";

export type Ability = keyof typeof abilities;
export type WeaponCategory = keyof typeof weapons;
export type HeroCategory = keyof typeof heroCategories;

export type FightRequest = { hero1: NewHeroDetails; hero2: NewHeroDetails };

export type NewHeroDetails = {
  name: string;
  category: HeroCategory;
  weapon: undefined | WeaponCategory;
};
