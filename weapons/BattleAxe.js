"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Warrior_js_1 = __importDefault(require("../hero-types/Warrior.js"));
const Weapon_js_1 = __importDefault(require("../Weapon.js"));
class BattleAxe extends Weapon_js_1.default {
    constructor() {
        super(null, 12, 15, 0.92, "Battle Axe", () => {
            return this.owner instanceof Warrior_js_1.default;
        });
    }
}
exports.default = BattleAxe;
