"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Hero_js_1 = __importDefault(require("../Hero.js"));
const Weapon_js_1 = __importDefault(require("../Weapon.js"));
class Sword extends Weapon_js_1.default {
    constructor() {
        super(null, 8, 12, 0.9, "Sword", () => {
            return this.owner instanceof Hero_js_1.default;
        });
    }
}
exports.default = Sword;
