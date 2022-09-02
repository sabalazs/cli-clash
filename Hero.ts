import { abilitiesMap } from "./abilities.js";
import { Ability } from "./type.js";
import Weapon from "./Weapon.js";

export default class Hero {

  constructor(
    public name: string,
    public hp: number,
    public abilities: Ability[] = [],
    public defaultAbility: Ability,
    public armour: number,
    public evasion: number,
    public currentArmour: number = 0,
    public currentEvasion: number = 0,
    public currentDamage: number = 0,
    public weapon: Weapon | null = null
  ) {
    if (!name) throw new Error("Missing parameter: name");
    this.name = name;
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
