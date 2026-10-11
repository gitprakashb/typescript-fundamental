let score: number=100; // TypeScript infers the type of 'score' as number

console.log("Score type is: ", typeof(score))

// score = "hundred"
console.log("Score type is after reassignment: ", typeof(score))