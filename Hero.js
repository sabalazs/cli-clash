import { abilitiesMap } from "./abilities.js";
export default class Hero {
    constructor(name, hp, abilities = [], defaultAbility, armour, evasion, currentArmour = 0, currentEvasion = 0, currentDamage = 0, weapon = null) {
        this.name = name;
        this.hp = hp;
        this.abilities = abilities;
        this.defaultAbility = defaultAbility;
        this.armour = armour;
        this.evasion = evasion;
        this.currentArmour = currentArmour;
        this.currentEvasion = currentEvasion;
        this.currentDamage = currentDamage;
        this.weapon = weapon;
        this.useAbility = (abilityName = this.defaultAbility) => {
            const canUseAbility = this.abilities.find((ability) => ability.toString() === abilityName.toString());
            if (canUseAbility) {
                const ability = abilitiesMap[abilityName];
                ability(this);
                console.log(`${this.name} has used the ability: ${abilityName}`);
            }
            else {
                throw new Error(`${this.name} can't use the ${abilityName} ability. Available abilities are: ${this.abilities}`);
            }
        };
        this.equipWeapon = (weapon) => {
            this.weapon = weapon;
            weapon.owner = this;
            console.log(`${this.name} was equipped with ${weapon.name}`);
        };
        this.resetCurrent = () => {
            this.currentArmour = this.armour;
            this.currentEvasion = this.evasion;
            this.currentDamage = 0;
        };
        if (!name)
            throw new Error("Missing parameter: name");
        this.name = name;
    }
}
