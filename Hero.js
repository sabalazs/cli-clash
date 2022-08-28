import { abilitiesMap } from "./abilities.js";

export default class Hero {
  name;
  hp;
  abilities = [];
  defaultAbility;
  armour;
  evasion;

  constructor(name) {
    if (!name) throw new Error("Missing parameter: name");
    this.name = name;
  }

  useAbility = (abilityName = this.defaultAbility) => {
    const canUseAbility = this.abilities.find(
      (ability) => ability.toString() === abilityName.toString()
    );

    if (canUseAbility) {
      const ability = abilitiesMap[abilityName];
      ability();
    } else {
      throw new Error(
        `${this.name} can't use the ${abilityName} ability. Available abilities are: ${this.abilities}`
      );
    }
  };
}
