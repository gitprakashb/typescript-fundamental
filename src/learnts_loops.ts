console.log(0)
console.log(1)
console.log(2)
console.log(3)
console.log(4)

for(let i=0; i<5; i++){ 
    console.log(i)
}

let browsers: string[] = ["chrome", "firefox", "safari"]
for(let i=0; i<browsers.length; i++){
    console.log(browsers[i])
}

for(let browser of browsers){
    console.log(browser)
}

let i = 0;
while(i<5){
    console.log(i)
    i++
}

let retries: number=10;

while(retries>0){
    console.log("Retries left: ", retries)
    retries--
}

retries=5
do{
    console.log("Retries left: ", retries)
    retries--
}while(retries>0)

// break 
// continue

