let thirdCar = {
    type: "truck",
    tireCount: "6",
    capacity: "5 tons"
  };
  
  //console.log(car.type); // Sedan
  //console.log(anotherCar['manufacturer']); // Audi
  //console.log(thirdCar["color"]);
  //console.log(thirdCar["size"]);
  
  // Iterate over properties
  //for (const iterator in thirdCar)
  //{
  //  console.log(prop + ":" + thirdCar[iterator]); //prop + thirdCar[iterator]);
  //}
  
  for (const key in thirdCar)
  {
    console.log(key+"--" + thirdCar[key]);
  }