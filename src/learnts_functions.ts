// normal function
function openDemoShop(){
    console.log("Demo Shop is opened")
}

openDemoShop()  


// function with parameters
function openDemoShopWithParams(shopName: string, shopLocation: string): number {
    console.log("Demo Shop is opened with name: ", shopName, " and location: ", shopLocation)
    console.log("Demo Shop is opened with name: " + shopName + " and location: " + shopLocation)
    console.log(`Demo Shop is opened with name: ${shopName} and location: ${shopLocation}`)
    return 1;
}

openDemoShopWithParams("Demo Shop", "Pune") 

function my_func(Pname: string): void{
    console.log("My name is: ", Pname)
}

my_func("Prakash")

function my_func1(discount: number= 10): void{
    console.log("Discount passed is: ", discount)
}

my_func1(20)
my_func1()

// variable parameters - give ... and should be a array of some type and then pass normally diff values

function my_func2(...args: number[]): void{
    console.log("Arguments passed are: ", args)
}

my_func2(1, 2, 3, 4, 5)
my_func2(1, 2, 3, 4)
my_func2(1, 2, 3)

function calculateTotalPrices(...prices: number[]): number{
    let total = 0;
    for(let price of prices){
        total+=price
    }
    return total;
}

console.log(calculateTotalPrices(100,200,300))


// passing object to a function

type pb_product = {name: string, price: number, quantity: number}


function displayProductInfo(my_product: pb_product){
    console.log("Product name: ", my_product.name)
    console.log("Product price: ", my_product.price)
    console.log("Product quantity: ", my_product.quantity)
}

displayProductInfo({name:"Product 1011", price: 10000, quantity: 100})


function displayProductInfo1(my_product: pb_product){
    console.log("Product name: ", my_product.name)
}


displayProductInfo1({   
    name: "Product 1", 
    price: 100, 
    quantity: 10
})


let testpb:{name: string,role: string[]}={
    name: "Prakash",
    role: ["admin", "user"]
}

//======= calling function in a function

function toLower(str: string): string{
    return str.toLowerCase()
}

console.log(toLower("HELLO BOSS"))

function my_own_function(name: string){
    console.log("My name is lower case is : ", toLower(name))
}


// Anonymous functions

setTimeout(function(){
    console.log("This is an anonymous function")
}, 2000)

let logmessage = function(){
    console.log("This is an anonymous function assigned to a variable")
}

logmessage()


// Arrow functions
let logmessageArrow = () => {
    console.log("This is an arrow function assigned to a variable")
}

logmessageArrow()

//-------
//Normal function
function test_arrow(category: string): string{

    return category.toUpperCase()

}

// Arrow function
let getStr = (category: string): string => {
    return category.toUpperCase()
}

getStr("test category")

//-------
//single line arrow function
let getStrSingleLine = (category: string): string => category.toUpperCase()

getStrSingleLine("test category")


// callback function

function processProduct(name: string, action: Function): void{
    console.log(name)
    action(name)
}

processProduct("Product 1", function(){
    console.log("This is a callback function using anonymous function")
})

processProduct("Product 2", () => {
    console.log("This is a callback function using arrow function")
})

processProduct("Product 3", () => console.log("This is a callback function using arrow function in single line"))

//----------------------

function processingProduct(name: string, action: Function): void{
    console.log(name)
    action(name)
}

function toUC(str: string): string{
    return str.toUpperCase()
}

function toLC(str: string): string{
    return str.toLowerCase()
}

console.log(processingProduct("Product 4", toUC))
console.log(processProduct("Product 5", toLC))

// -----------------------

function processPrice(price: number, operation: Function): number{
    console.log("Price is: ", price)
    return operation(price)
}

let result = processPrice(100, function(price: number){
    return price * 0.9
}) 
console.log("Result is: ", result)

//-----------------------