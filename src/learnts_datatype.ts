let flag: boolean=true

let name01: string="Prakash"

let age: number=30


let city: string="Pune"

let score01: number=100

let hasError: boolean = false

let search_words: string[] = ["Pune", "Delhi", "Mumbai"]
let quantities = [10, 20, 30, 40, 'as']
quantities.push('aa')
console.log("Quantities: ", quantities)

let user={
    name: "Prakash",
    age: 30,
    city: "Pune"
}

let user1: {name: string, age: number, city: string, isLoggedin: boolean} = {
    name: "Prakash",
    age: 30,
    city: "Pune",
    isLoggedin: true
}

let config: {readonly baseURL: string, timeout: number}={
    baseURL: "https://example.com",
    timeout: 5000
}

console.log("Config: ", config)

let testuser: {
    name: string,
    role: string[]
}={
    name: "Prakash",
    role: ["admin", "user"]
}
console.log("Test User: ", testuser)