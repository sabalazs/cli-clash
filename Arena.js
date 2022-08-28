export default class Arena {
  winner;
  loser;
  roundCount = 0;

  constructor(hero1, hero2) {
    this.hero1 = hero1;
    this.hero2 = hero2;
  }

  fight = () => {
    console.log(
      `\x1b[32mStarting a new fight! ${this.hero1.name} has ${
        this.hero1.hp
      } HP${
        this.hero1.weapon ? `, and a(n) ${this.hero1.weapon.name}` : ""
      }, while ${this.hero2.name} has ${this.hero2.hp} HP${
        this.hero2.weapon ? `, and a(n) ${this.hero2.weapon.name}` : ""
      }.\x1b[0m`
    );
    while (!this.winner && this.roundCount < 100) this.fightOneRound();
    if (this.roundCount >= 100) {
      console.log(
        `The fight is over! \x1b[32mThe jury got bored, it's a draw.`
      );
    } else {
      console.log(
        `The fight is over! \x1b[32mThe winner is: ${this.winner.name}`
      );
    }
  };

  fightOneRound = () => {
    this.roundCount++;
    this.hero1.resetCurrent();
    this.hero2.resetCurrent();
    console.log(
      `\x1b[32mStarting round ${this.roundCount}. ${this.hero1.name} has ${this.hero1.hp} HP, while ${this.hero2.name} has ${this.hero2.hp} HP.\x1b[0m`
    );

    //activate abilities
    this.hero1.useAbility();
    this.hero2.useAbility();

    //calculate striking order
    const random = Math.random() < 0.5;

    //strikes
    if (random) {
      this.strike(this.hero1, this.hero2);
      this.strike(this.hero2, this.hero1);
    } else {
      this.strike(this.hero2, this.hero1);
      this.strike(this.hero1, this.hero2);
    }
  };

  strike = (attacker, defender) => {
    if (attacker.hp <= 0) return;

    console.log(`${attacker.name} is striking ${defender.name}.`);

    const isEvasionSuccessful = Math.random() < defender.currentEvasion;
    if (isEvasionSuccessful) {
      console.log(`${defender.name} evaded the strike!`);
    } else {
      const finalDamage = this.calculateFinalDamage(attacker, defender);
      defender.hp -= finalDamage;
      console.log(
        `${defender.name} has lost ${finalDamage} HP, he/she has ${defender.hp} HP left.`
      );
    }

    if (defender.hp <= 0) {
      this.winner = attacker;
      this.loser = defender;
    }
  };

  calculateFinalDamage = (attacker, defender) => {
    let initialDamage = attacker.currentDamage;
    if (attacker.weapon?.canOwnerUseIt()) {
      if (Math.random() < attacker.weapon.accuracy) {
        const { maxDamage, minDamage } = attacker.weapon;
        const weaponDamage = Math.round(
          Math.random() * (maxDamage - minDamage) + minDamage
        );
        initialDamage += weaponDamage;
      } else {
        console.log(`The ${attacker.weapon.name} missed!`);
      }
    } else {
      if (attacker.weapon)
        console.log(`${attacker.name} can't use the ${attacker.weapon.name}.`);
    }
    console.log(
      `Attacker's damage is ${initialDamage}, the defender's armour is ${defender.currentArmour}.`
    );
    let finalDamage = initialDamage - Math.floor(defender.currentArmour / 3);
    if (finalDamage < 0) finalDamage = 0;
    return finalDamage;
  };
}
