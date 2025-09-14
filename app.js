// Tasks
// Part 1: Setup
// Create a string variable named basketString with this value:
// "Apple, Banana, Grape, Mango, Orange"
// Convert this string into an array of fruits, making sure each fruit has no spaces around it.
// Print the cleaned fruit array.

//იმედი მაქვს რამე სადმე სახელი არეული არ მაქვს. შევეცადე რასაც ვაკეთებდი იმის სახელი მიმეწერა.
//რაღაც მომენტში ძაან დიდი გამოდიოდა და ერთი სიტყვით ავხსენი.
let basketString = "Apple, Banana, Grape, Mango, Orange"

//იმედი მაქვს სწორად გავიგე პირობა
let basketStringArray=basketString.split(", ")
console.log(basketStringArray)

// Part 2: String Operations
// Using the original basketString, do the following:
// Print the length of the string.
// Convert it to uppercase and print.
// Convert it to lowercase and print.
// Replace "Banana" with "Strawberry" and print.
// Check if the string starts with "Apple" and ends with "Orange". Print the results.
// Join the fruit array into a new string separated by " | " (using a loop, not join()) and print it.

let basketStringLength=basketString.length
console.log(basketStringLength)

let basketStringUp=basketString.toUpperCase()
console.log(basketStringUp)

let basketStringLow=basketString.toLowerCase()
console.log(basketStringLow)

let basketStringReplace=basketString.replace("Banana", "Strawberry")
console.log(basketStringReplace)

let startsWithApple = basketString.startsWith("Apple")
let endsWithOrange = basketString.endsWith("Orange")
console.log("Starts with Apple:", startsWithApple)
console.log("Ends with Orange:", endsWithOrange)

let newString= ""
for (let i = 0; i < basketStringArray.length; i++) {
  newString += basketStringArray[i]          
  if (i < basketStringArray.length - 1) {     
    newString += " | "    
  }
}
console.log(newString)

// Part 3: Array Basket Operations
// Using your fruit array, perform these operations:
// Add "Pineapple" to the end of the basket (push).
// Remove the last fruit from the basket (pop).
// Add "Watermelon" to the start of the basket (unshift).
// Remove the first fruit from the basket (shift).
// Print the final state of the basket after all operations.

//ასე რომ დავაკონსოლე უფრო თვალსაჩინო გახდა ცვლილებები
let Add = basketStringArray.push("Pineapple")
console.log(basketStringArray)
let Remove = basketStringArray.pop()
console.log(basketStringArray)
let Unshift = basketStringArray.unshift("Watermelon")
console.log(basketStringArray)
let Shift = basketStringArray.shift()
console.log(basketStringArray)

// Part 4: Searching & Checking
// Use includes() to check if "Grape" is in the basket.
// If yes → print "Grape is available"
// If no → print "Grape is not available"
// Use indexOf() to find the position of "Mango" and print it.
// Use a ternary operator to check if the basket has more than 5 fruits.
// If yes → print "The basket is full"
// If no → print "The basket has space"

if (basketStringArray.includes("Grape")) {
  console.log("Grape is available")
} else {
  console.log("Grape is not available")
}

let mangoIndex = basketStringArray.indexOf("Mango")
console.log(mangoIndex)

let basket = basketStringArray.length > 5 ? "The basket is full" : "The basket has space"
console.log(basket)

// Part 5: Bonus Challenge
// Ask the user for a fruit name using prompt().
// If the fruit exists in the basket → remove it.
// If it doesn’t exist → add it to the end.
// Print the updated basket.
// Reverse the basket and print it.
// Print the basket repeated 2 times as a string (using a loop).

let fruit = prompt("Fruit name: ")

if (basketStringArray.includes(fruit)) {
  let newBasket = []
  for (let i = 0; i < basketStringArray.length; i++) {
    if (basketStringArray[i] !== fruit) {
      newBasket.push(basketStringArray[i])
    }
  }
  basketStringArray = newBasket;
} else {
  basketStringArray.push(fruit)
}
console.log(basketStringArray)

console.log(basketStringArray.reverse())

//ორჯერ რო გაიმეოროს ლუპით აშკარად ჩადგმული ციკლი გვინდა ერთი როცა ნაკლებია ორზე და მეორე თვითონ სიგრძეზე
//(რამდენად სწორია არ ვიცი, მაგრამ რაც ვიფიქრე ასე დავწერდი)
let repeated = ""
for (let i = 0; i < 2; i++) {               
  for (let j = 0; j < basketStringArray.length; j++) { 
    repeated += basketStringArray[j]                  
    if (j < basketStringArray.length - 1) {           
      repeated += ", "                   
    }
  }   
}
console.log(repeated)
