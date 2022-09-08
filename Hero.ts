import { abilitiesMap } from "./abilities.js";
import heroCategories from "./heroCategories.js";
import { Ability, HeroCategory, WeaponCategory } from "./type.js";
import Weapon from "./Weapon.js";

const allowedHeroCategories = Object.keys(heroCategories);

export default class Hero {
  hp: number;
  abilities: Ability[] = [];
  defaultAbility: Ability;
  armour: number;
  evasion: number;
  currentArmour: number = 0;
  currentEvasion: number = 0;
  currentDamage: number = 0;
  allowedWeapons: WeaponCategory[];

  constructor(
    public name: string,
    public category: HeroCategory,
    public weapon: Weapon | undefined = undefined
  ) {
    if (!name) throw new Error("Missing parameter: name");
    if (!category) throw new Error("Missing parameter: category");
    if (!allowedHeroCategories.includes(category))
      throw new Error(
        `${category} hero category doesn't exist. Allowed categories are: ${allowedHeroCategories}`
      );

    this.name = name;
    this.category = category;
    this.hp = heroCategories[category].hp;
    this.abilities = heroCategories[category].abilities;
    this.defaultAbility = heroCategories[category].defaultAbility;
    this.armour = heroCategories[category].armour;
    this.evasion = heroCategories[category].evasion;
    this.allowedWeapons = heroCategories[category].allowedWeapons;

    this.resetCurrent();
  }

  useAbility = (abilityName = this.defaultAbility) => {
    const canUseAbility = this.abilities.find(
      (ability) => ability.toString() === abilityName.toString()
    );

    if (canUseAbility) {
      const ability = abilitiesMap[abilityName];
      ability(this);
      console.log(`${this.name} has used the ability: ${abilityName}`);
    } else {
      throw new Error(
        `${this.name} can't use the ${abilityName} ability. Available abilities are: ${this.abilities}`
      );
    }
  };

  equipWeapon = (weapon: Weapon) => {
    this.weapon = weapon;
    weapon.owner = this;
    console.log(`${this.name} was equipped with ${weapon.name}`);
  };

  resetCurrent = () => {
    this.currentArmour = this.armour;
    this.currentEvasion = this.evasion;
    this.currentDamage = 0;
  };
}
