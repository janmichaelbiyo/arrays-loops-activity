/**
 * #1 Hobbies
 * ----------
 * 1. Create an array of group member hobbies
 * 2. Write a loop that logs out each hobby
 * 3. After the loop, log out the total number of
 *    hobbies
 */


var hobbies = ["walking", "hiking", "basketball", "videogames"];

for (let i =0; i<hobbies.length; i++) {console.log(hobbies[i])}

console.log(hobbies.length);



// Example output
// 1. swimming
// 2. board games
// 3. painting
// Total hobbies: 3

/**
 * #2 Colors
 * ---------
 * 1. Create an array of colors as strings
 *    (include the color 'teal' at least once)
 * 2. Create a variable tealCount
 * 3. Write a loop that counts the number of times teal 
 *    is in the array
 * 4. Output the array and number of times teal was found
 */
// Example output
// green, red, teal, orange, teal
// Teal was found 2 times

let colors = ["red", "blue", "teal", "silver", "teal"];
//console.log(colors);
var tealCount = 0;
for (let i =0; i<colors.length; i++) {
     //console.log(colors[i])
    
     if (colors[i] == "teal")
     {tealCount++}
}

console.log('teal was found' + tealCount);







/**
 * #3 Even & Odd
 * -------------
 * 1. Create an array of numbers (at least 5 numbers)
 * 2. Create variables oddNumbers and evenNumbers (empty arrays)
 * 3. Write a loop that puts all the odd numbers in the oddNumbers 
 *    array and even numbers in the evenNumbers array.
 * 4. Output the original array, odd number array and even number array
 */


// Example output
// 3, 7, 2, 8, 11, 4, 2
// Odd 3, 7, 11
// Even 2, 8, 4, 2

let numbers = [3, 5, 7, 74, 67, 13];
var oddNumbers = [];
var evenNumbers = [];

for (let i =0; i < numbers.length; i++) {
     
     if (numbers[i] % 2===1) 
          {oddNumbers.push(numbers[i]);}
}
//let numbers1 = [3, 5, 7, 74, 67, 13];
for (let i =0; i < numbers.length; i++) {
     
     if (numbers[i] % 2===0) 
          {evenNumbers.push(numbers[i]);}
}


console.log("Odds" + " " + oddNumbers);
console.log("Even" + " " + evenNumbers);

/**
 * #4 Flipping Switches
 * --------------------
 * 1. Create an array of boolean values (some true and some false)
 * 2. Create a variable toggled (empty array)
 * 3. Write a loop that adds the opposite value to the toggled array
 * 4. Output both arrays
 */

let boo = ["true", "false", "true", "true"];
var toggled = [];

for (let i = 0; i < boo.length; i++) {
          console.log(boo[i]);
}

for (let i = 4; i >=0; i--) {
     {toggled.push(boo[i]);}
}

for (let i = 0; i<toggled.length; i++)
{console.log(toggled[i])};





// Example output
// true, false, true, true
// Toggled false, true, false, false


/**
 * #5 (STRETCH) Remove 0's
 * --------------------
 * 1. Create an array of numbers which has one or more 0's
 *    at the end (e.g. 3, 0, 2, 8, 0, 0, 0)
 * 2. Write a loop that removes 0 from the end of the array
 *    NOTE: You should not need a second array here.
 * 3. Output the array
 *
 * Hint: Try using a while loop for this one.
 */


// Example output
// Before loop 3, 0, 2, 8, 0, 0, 0
// After loop 3, 0, 2, 8


/**
 * #6 (STRETCH) Highest & Lowest
 * --------------------
 * 1. Create a largish array of numbers (e.g. 2, 2, -3, 7, 4, 1, 7, 12, 8)
 * 2. Create two variables high & low.
 * 3. Loop over all numbers in the array keeping track of the highest
      and lowest numbers.
 * 3. Log the highest and lowest number to the console
 */


// Example output
// 2, 2, -3, 7, 4, 1, 7, 12, 8
// High: 12
// Low: -3
