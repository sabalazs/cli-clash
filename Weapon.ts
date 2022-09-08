import Hero from "./Hero";
import { WeaponCategory } from "./type";
import weapons from "./weaponCategories.js";

export default class Weapon {
  owner: undefined | Hero = undefined;
  minDamage: number;
  maxDamage: number;
  accuracy: number;
  
  constructor(public category: WeaponCategory, public name: string = category) {
    this.minDamage = weapons[category].minDamage;
    this.maxDamage = weapons[category].maxDamage;
    this.accuracy = weapons[category].accuracy;
  }

  canOwnerUseIt = () => {
    if (this.owner) {
      return this.owner.allowedWeapons.includes(this.category);
    } else {
      throw new Error("This weapon doesn't have an owner.");
    }
  };
}
