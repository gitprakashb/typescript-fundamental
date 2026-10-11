let myStr= "Hello World"
console.log("String length is: ", myStr.length)
console.log("String in Uppercase: ", myStr.toUpperCase())
console.log("String in Lowercase: ", myStr.toLowerCase())
console.log("String starts with 'Hello': ", myStr.startsWith("Hello"))
console.log("String ends with 'World': ", myStr.endsWith("World"))
console.log("String includes 'lo Wo': ", myStr.includes("lo Wo"))
console.log("Index of 'World' in string: ", myStr.indexOf("World"))
console.log("Substring from index 6 to 11: ", myStr.substring(6, 11))
myStr = myStr.replace("World", "TypeScript")
console.log("String after replacement: ", myStr)
myStr.concat(" is awesome!")
console.log("String after concatenation: ", myStr)

myStr.includes("TypeScript") ? console.log("String includes 'TypeScript'") : console.log("String does not include 'TypeScript'")


let fruits: string="Apple,Mangies,Melon"

fruits.split(",").forEach((fruit)=>{
    console.log("Fruit: ", fruit)
})

let my_fruits: string[] = fruits.split(",")
console.log("Fruits: ", my_fruits)

let test: string="   Hello World   "
console.log("String after trim: ", test.trim())


// template strings

let myStr2: string="Hello Prakash!"
let mystr3: string="How are you doing today?"

console.log(`The line to print is ${myStr2} and ${mystr3}`)



// using backlash in string
console.log("Hi there! \"Tenant is Sachin K\"")


