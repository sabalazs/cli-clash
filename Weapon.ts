import Hero from "./Hero";

export default class Weapon {
  constructor( 
    public owner: null | Hero,
    public minDamage: number,
    public maxDamage: number,
    public accuracy: number,
    public name: string,
    public canOwnerUseIt: () => boolean) {
  }
}
