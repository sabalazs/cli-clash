// import Arena from "./Arena.js";
// import Mage from "./hero-types/Mage.js";
// import Warrior from "./hero-types/Warrior.js";
// import BattleAxe from "./weapons/BattleAxe.js";
// import Sword from "./weapons/Sword.js";

// const warrior = new Warrior("Mars");
// warrior.equipWeapon(new BattleAxe());

// const mage = new Mage("Jupiter");
// mage.equipWeapon(new Sword());

// const arena = new Arena(warrior, mage);

// arena.fight();

import express, { Express, Request, Response } from 'express';

const app: Express = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});