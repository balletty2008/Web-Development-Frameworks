// Bonus Exercise 1.1: Create an object to describe a person. The object should have the necessary properties to contain information
// name, sex, birthday and profession. Create a function, which prints out the information of a person object.

//Bonus Exercise 1.2: Modify you person object so that it can contain information of the parents of the person – mother and father. Create a function, which takes a person object as a parameter and prints out information of the parents. 


function person(name, sex, Birthday, Profession)
{
  this.name = name;
  this.sex = sex;
  this.Birthday = Birthday;
  this.Profession = Profession;
}

if (this.name = "Hua")
{
  let person = {
    name: "Hua",
    sex: "Female",
    Birthday: "June 5th",
    Profession: "Web Developer",
  }
  for(const prop in person)
  {
    console.log(prop +"-" + person[prop]);
  }
  console.log("----------------------");
  console.log("Hua's parents are:");
  console.log("Father: Prof. Chen");
  console.log("Mother: Teacher. Li");
}



