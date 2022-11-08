let animals = [
    "baboon",
    "kangaroo",
    "rhino",
    "frog",
    "beaver",
    "horse",
    "basalisk",
  ];
  
let bListAnimals = animals.filter(animalReducer); // Your 'filter' code here.

function animalReducer(animal) {
  return animal[0] === 'b'
}