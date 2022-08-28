export default class Weapon {
  minDamage;
  maxDamage;
  accuracy;
  canOwnerUseIt = () => {};

  constructor(owner) {
    if (!owner) throw new Error("Sorry, weapons must have an owner.");
    this.owner = owner;
  }
}
