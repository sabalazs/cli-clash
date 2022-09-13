# cli-clash

-work in progress-

## Getting started

```
npm install
npm run start
```

Send a POST request to http://localhost:3000/fight with the following body:
```
{
    "hero1": {
        "name": "Godzilla",
        "category": "priest",
        "weapon": "warHammer"
    },
    "hero2": {
        "name": "MechaGodzilla",
        "category": "warrior",
        "weapon": "sword"
        }
}
```
Check the results of the fight in the server console.

Available hero categories: `archer, warrior, priest, rouge, mage`

Available weapons: `sword, dagger, warHammer, bow, wand, battleAxe`

## Known issues
The Priest can go above it's starting HP with the healing ability.
