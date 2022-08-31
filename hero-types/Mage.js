"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Hero_js_1 = __importDefault(require("../Hero.js"));
class Mage extends Hero_js_1.default {
    constructor(name) {
        super(name, 70, ["firestorm"], "firestorm", 1, 0.5);
        this.resetCurrent();
    }
}
exports.default = Mage;
