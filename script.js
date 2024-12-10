// 1. Write a function named calculateDifference that takes two arguments and returns the difference between the first and second arguments.
function calculateDifference(a, b) {
    return a - b;
}
console.log('Inputs: 10, 4 -> Difference:', calculateDifference(10, 4));

// 2. Write a function named isOdd that takes one argument and returns true if the number is odd, and false if it is not.
function isOdd(num) {
    return num % 2 !== 0;
}
console.log('Input: 7 -> Is Odd?:', isOdd(7));
console.log('Input: 4 -> Is Odd?:', isOdd(4));

// 3. Write a function named find Min that takes an array of numbers and returns the smallest number from the array.
function findMin(numbers) {
    return Math.min(...numbers);
}
console.log('Input: [5, 2, 9, 1, 7] -> Minimum:', findMin([5, 2, 9, 1, 7]));

// 4. Write a function named filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers.
function filterEvenNumbers(numbers) {
    return numbers.filter(num => num % 2 === 0);
}
console.log('Input: [5, 2, 9, 1, 6, 8] -> Even Numbers:', filterEvenNumbers([5, 2, 9, 1, 6, 8]));

// 5. Write a function named sortArrayDescending that takes an array of numbers and returns a new array sorted in descending order.
function sortArrayDescending(numbers) {
    return [...numbers].sort((a, b) => b - a);
}
console.log('Input: [5, 2, 9, 1, 6, 8] -> Sorted Descending:', sortArrayDescending([5, 2, 9, 1, 6, 8]));

// 6. Write a function named lowercaseFirstLetter that takes a string and returns the same string with the first letter lowercased.
function lowercaseFirstLetter(str) {
    if (!str) return str;
    return str.toLowerCase();
}
console.log('Input: "Hello World" -> Lowercased String:', lowercaseFirstLetter('Hello World'));

// 7. Write a function named findAverage that takes an array of numbers and returns the average of all elements.
function findAverage(numbers) {
    if (numbers.length === 0) return 0;
    const total = numbers.reduce((sum, num) => sum + num, 0);
    return total / numbers.length;
}
console.log('Input: [5, 2, 9, 1, 6, 8] -> Average:', findAverage([5, 2, 9, 1, 6, 8]));

// 8. Write a function named isLeapYear that takes a year as an argument and returns true if the year is a leap year, and false if it is not.
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
console.log('Input: 2024 -> Is Leap Year?:', isLeapYear(2024));
console.log('Input: 1900 -> Is Leap Year?:', isLeapYear(1900));