console.log("hello mousab")

// tsc main.ts && node main.js
// tsc --init use for tsconfig file
// new project in class 3

let numberOfFaculty = 4
let numberOfManagement = 3
let numberOfAbsentFaculty = 2
let numberOftotalFaculty = 21
let kgofbiryani = 20

let totalResult = numberOfFaculty * numberOftotalFaculty;
let totalkgofbiryani = kgofbiryani / totalResult
console.log(totalkgofbiryani);

// first project
let num1 =5
--num1;
--num1;
--num1;
--num1;
--num1;
console.log(num1);

// second project
let num2 = 10
let result = ++num2 + ++num2 + 6 - --num2 + 2
console.log(result);


// third project
let firstname = 'fahad'
let secondname = 'mousab'
console.log(`my name is ${firstname} and my friend name is ${secondname}`);

// assignment operator
let num3 = 4
num3 += 9 
console.log(num3);

// comparsion operator
let z = 5
let zz = 5
console.log(z == zz);
console.log(z != zz);
console.log(z === zz);
console.log(z !== zz); 
console.log(z >= zz);
console.log(z <= zz);
 
// logical operator
let fahadBudget = 800000
let havegirl = true

let result1 = fahadBudget >= 900000 && havegirl == true
let result2 = fahadBudget >= 900000 || havegirl == true

console.log(`Sorry Mousab bhai ${result1}`);
console.log(`Sorry Mousab bhai ${result2}`);

// if else statement
let rain = 1 == 1
if (rain) {
    console.log("wear raincoat");
} else if(rain){
    console.log("wear sunglasses");  
} else{
    console.log("you are pagal");
}

let ishungry = false
let snack = ishungry ? "water" : "apple"
console.log(`have some ${snack}`);

function mousabchaiewalla() {
    return "hello world"
}
 
function sum(num4:number,num5:number){
   return num4 +num5;
}
let result6 = sum(5,5);
console.log(result6);

function sum1(num6:number,num7:number){
    return num6 +num7;
}

let result8 = sum(5,5);
console.log(result8);

function greet(message:string = "hello mousabchaiewalla") {
    return message;
}
console.log(greet());

let obj = {
    name: "mousab",
    rollnumber: 1234,
    subject: "computer",
}

console.log(obj);

let fahadcar = {
    carName: "Porsche911Turbors",
    CarModel: 2023,
    CarImport: 2023,
    CarRegisteriation: 2024,
    carPerformance:"stage 2 tuned with pops and bangs",
    carTyre:"22inch rims ",
    CarPrice: 300000,
    CarEngine: "V8 6.7litre twin-turbo f"
}

console.log(fahadcar);



//object
let user1 : {
    name1: string,
    age: number,
    role: string,
} = {
    name1:"mousab",
    age:20,
    role:"son"
};
console.log(user1);


type user2 = {
    Name2: string,
    age2: number;
    role: string;
    childern:{
        name2:string;
        age:number;
    };
};

let user3:user2 = {
    Name2: 'mousab',
    age2: 20,
    role: 'son of fahad',
    childern: {
        name2: "mousab",
        age: 56
    }
}

console.log(user3);

//template literal
let trafficjam: "red" | "white" | "purple" = "red";
console.log(trafficjam);

// tpye union
let mixedbag: number | string;

mixedbag = "sunglass",
mixedbag = 20

// Type Interaction
type picnicbeach = {
    waterbottle: boolean,
    cap: boolean
}

type mountainpicnic = {
    knife: boolean,
    map: boolean,
}

type combinepicnic = picnicbeach & mountainpicnic

let combine:combinepicnic = {
    waterbottle: true,
    cap: true,
    knife: true,
    map: true
}

console.log(combine);

