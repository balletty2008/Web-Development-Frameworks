//Exercise 2 (objects/exercises/2-constructor-function.js): Create a car object definition and then create two instances of it
// – one for Audi and one for Mercedes. In addition use the for..in loop to list print all the properties to the console. 

function car (brand, type, isGood)
{
    this.brand = brand;
    this.type = type;
    this.isGood = isGood;
}

if (this.brand = "Audi")
{
    let car = {
        Brand: "Audi",
        type: "family",
        isGood: "nice" ,
    } 
    for(const prop in car)
    {
        console.log(prop +"-" + car[prop]);
    }
}

console.log ("--------------------");


if (this.brand = "Mercedes")
{
    let car = {
        Brand: "Mercedes",
        type: "sport",
        isGood: "super" ,
    };
    for(const prop in car)
    {
        console.log(prop +"-" + car[prop]);
    };
};


//function Animal(type, speed, isCute)
//{
//  this.type = type;
//  this.speed = speed;
//  this.isCute = isCute;
//  this.makeSound = function() {
//   if (this.type === 'cat')
//   {
//    console.log ("meoww")
//  }
//   if (this.type ==='Alligator')
//   {
//    console.log ('roar')
//   }
//  }
//}

//let alligator = new Animal('alligator', 'slow', false);
//let cat = new Animal('cat', 'fast', true);

//console.log(alligator.type);
//console.log(cat.type);
//alligator.makeSound();
//cat.makeSound();
