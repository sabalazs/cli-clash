"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Weapon {
    constructor(owner, minDamage, maxDamage, accuracy, name, canOwnerUseIt) {
        this.owner = owner;
        this.minDamage = minDamage;
        this.maxDamage = maxDamage;
        this.accuracy = accuracy;
        this.name = name;
        this.canOwnerUseIt = canOwnerUseIt;
    }
}
exports.default = Weapon;
