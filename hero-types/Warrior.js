"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Hero_js_1 = __importDefault(require("../Hero.js"));
class Warrior extends Hero_js_1.default {
    constructor(name) {
        super(name, 100, ["armour"], "armour", 5, 0.2);
        this.resetCurrent();
    }
}
exports.default = Warrior;
