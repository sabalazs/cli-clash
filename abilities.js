const armour = () => {
  console.log("using armuor");
};
const heal = () => {
  console.log("using heal");
};
const firestorm = () => {
  console.log("using firestorm");
};
const dodge = () => {
  console.log("using dodge");
};
const headshot = () => {
  console.log("using headshot");
};

const abilitiesMap = {
  armour: armour,
  heal: heal,
  firestorm: firestorm,
  dodge: dodge,
  headshot: headshot,
};

export { abilitiesMap };
