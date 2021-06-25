// Create a variable that contains your name as a value. Name the variable appropriately
let seth = "Seth";

// Create a constant that contains the number of states in the U.S. and name it appropriately
const numOfStates = 50;

// Create a variable that contains a boolean value and name it appropriately
let hasHair = false;

// Compute the result of adding 5 and 4 and store it in an appropriately named variable
let sum = 5 + 4;

// Compute the result of comparing 5 being greater than 4 and store it in an appropriately named variable
let fiveOverFour = 5 > 4;

// Compute the result of multiplying 231 and 4 and store it in an appropriately named variable
let multiply = 231 * 4;

// Write a function called sayHello that displays an alert that says Hello World!
function sayHello() 
{
    alert("Hello fellow humans");
}

//  Call the sayHello function
sayHello();

// Write a function called checkAge that takes two arguments: one for a name and one for an age
function checkAge(name, age) 
{
  // If the age is less than 21, display an alert that says, "Sorry " + name + ", you aren't old enough to view this page!"
  if(age < 21) 
  {
      alert(`Sorry, ${name}. You aren't old enough to view this page!`)
  }
  else 
  {
      alert(`Welcome to the cool kids club, ${name}.`)
  } 
}

// Call the checkAge function 4 times with the following people: Charles who is 21, Abby who is 27, James who is 18, and John who is 17
checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John", 17);

//  Create an array of your favorite vegetables and name it accordingly
let favVeggies = ["carrot", "broccoli", "cucumber", "avocado"];

// Use a loop to print each of your favorite vegetables to the developer console
favVeggies.forEach(veggie => 
{
    console.log(veggie);   
});

// Create an array of 5 objects that contain name and age properties
let people = [
    {
      name: "Seth",
      age: 27
    },
    {
      name: "Breagan",
      age: 24
    },
    {
      name: "Bob",
      age: 80  
    },
    {
        name: "Jimbo",
        age: 33  
      },
      {
        name: "Carl",
        age: 18  
      }]

// Use a loop to call the checkAge function for each object in the array, passing the object's name and age as arguments (parameters)
      people.forEach(person => 
        {
            checkAge(person.name, person.age);   
        });

// Create a function called getLength that takes any word as an argument (parameter)
function getLength(str) 
{
    return str.length;   
}

// - The function should return the number of characters in the string.
// - Call the getLength function, passing 'Hello World' as the argument (parameter).
let lengthOfString = getLength("Hello world!");
if(lengthOfString % 2 == 0) 
{
    console.log("The world is nice and even!");
}
else 
{
    console.log("The world is an odd place!");
}

// - Store the returned result of that function in a variable. If the number is even, 
// Display 'The world is nice and even!' in the developer console. 
// Otherwise if the number is odd, display 'The world is an odd place!' in the developer console.

    