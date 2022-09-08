import express, { Express, Request, Response } from "express";
import Arena from "./Arena.js";
import Hero from "./Hero.js";
import heroCategories from "./heroCategories.js";
import { FightRequest, HeroCategory, WeaponCategory } from "./type";
import Weapon from "./Weapon.js";

const app: Express = express();
const port = 3000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.post("/fight", (req: Request<{}, {}, FightRequest>, res: Response) => {
  if (!req.body) {
    res.status(400).send("Missing request body");
    return;
  }
  if (!req.body.hero1) {
    res.status(400).send("Missing hero1");
    return;
  }
  if (!req.body.hero2) {
    res.status(400).send("Missing hero2");
    return;
  }

  const allowedHeroCategories = Object.keys(heroCategories);
  if (!allowedHeroCategories.includes(req.body.hero1.category)) {
    res
      .status(400)
      .send(
        `Error: "${req.body.hero1.category}" hero category for hero1 doesn't exist.`
      );
    return;
  }
  if (!allowedHeroCategories.includes(req.body.hero2.category)) {
    res
      .status(400)
      .send(
        `Error: "${req.body.hero2.category}" hero category for hero2 doesn't exist.`
      );
    return;
  }
  const { body } = req;

  const createHero = (
    name: string,
    category: HeroCategory,
    weapon: undefined | WeaponCategory
  ): Hero => {
    const hero = new Hero(name, category);
    if (weapon) hero.equipWeapon(new Weapon(weapon));
    return hero;
  };

  const hero1 = createHero(
    body.hero1.name,
    body.hero1.category,
    body.hero1.weapon
  );
  const hero2 = createHero(
    body.hero2.name,
    body.hero2.category,
    body.hero2.weapon
  );

  const arena = new Arena(hero1, hero2);
  arena.fight();

  res.status(200).send(req.body);
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
