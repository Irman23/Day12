var myPetsArray = [

    dog = {
        "animalType": "Dog",
        "name": "Pujdo"
    },
    maca = {
        "animalType": "Cat",
        "name": "Maca"
    },
    bird = {
        "animalType": "Bird",
        "name": "Tweety"
    }
]
function myPetsFunction(pets){
    pets = myPetsArray[1].name
    return pets
}
console.log(myPetsFunction());
module.exports = myPetsFunction;
module.exports = myPetsArray;
