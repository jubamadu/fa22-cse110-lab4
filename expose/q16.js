let object = {
  redCars: 21,
  blueCars: 45,
  greenCars: 12,
  raceCars: 5,
  blackCars: 40,
  rareCars: 2
};
for (property in object) {
  console.log(`${property}: ${object[property]}`);
}