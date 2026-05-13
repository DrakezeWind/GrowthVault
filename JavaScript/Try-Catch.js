// This is a error handling example using try-catch in JavaScript

try {
    // code that may throw an error
} catch (error) {
    console.error("An error occurred:", error);

    // that is just the statement of the catch block
    // you can add more code here to handle the error appropriately
}
//  this is a example of a undefined object without a  try-catch block

let obj;
console.log(obj.property); // This will throw an error

console.log('This message will never be reached.');

// this is a example of a undefined object with a try-catch block

try {
    console.log(obj.property);
    // what was added was the try-catch block to handle the error
} catch (error) {
    console.log('An error occurred:', error);
}
console.log('This message will be reached.');

