let city = "Pune";
city = "Delhi";
console.log("City is: ", city);

const name = "Prakash";

// name = "Borkar"; // This will throw an error because 'name' is a constant and cannot be reassigned.

console.log("Name is: ", name);

// deciding variable type based on the value assigned to it
let score = 100; // TypeScript infers the type of 'score' as number

console.log("Score type is: ", typeof(score))

score = "hundred"
console.log("Score type is after reassignment: ", typeof(score)) // TypeScript will throw an error here because 'score' was initially inferred as a number, and now it's being assigned a string.