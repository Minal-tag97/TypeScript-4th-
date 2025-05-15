//ques1
let firstName: string = "John";
let age: number = 25;
console.log(`Name: ${firstName}, Age: ${age} `);
console.log('Name:'+ firstName +', Age: ' + age);

//ques2
let carName: string = "Punch";
carName = "Jeep";
console.log(`Name (let): ${carName}`);

var city: string = "New York";
city = "Delhi";
console.log(`City (var): ${city}`);

const col: string = "blue";
//color = "green"; shows error
console.log(`Color (const): ${col}`);

if (true) {
    let localVariable = "I'm a local variable"; // 'let' is block-scoped
    var globalVariable = "I'm a global variable"; // 'var' is function-scoped (or global if declared outside a function)
    console.log(localVariable); // Will work inside the block
}

console.log(globalVariable);

//ques3
//basic addition and multiplication
let num1: number = 10;
let num2: number = 12;

let sum: number = num1 + num2;
let product: number = num1 * num2;

console.log(`Sum: ${sum}`);
console.log(`Product: ${product}`);

//string concatenation
let greeting: string = "good";
let greeting1: string = "morning!"

let message1: string = greeting + " " + greeting1;
console.log(message1);

//boolean
let isLoggedIn: boolean = true;
let havePermission: boolean = false;

let canAccess: boolean = isLoggedIn && havePermission;
let canView: boolean = isLoggedIn || havePermission;

console.log(`Can Access: ${canAccess}`);
console.log(`Can view: ${canView}`);

//ques4
let myNum: number = 18;
//myNum = "Hello"; causes error
console.log(myNum);

//ques5
let myName = "Minal";
//myName = 22; Creates ERROR
console.log(myName);

//ques6
//number to string
let num: number = 123;
let numToString: string = num.toString();
console.log(`Number as String: ${numToString}`);

//string to number
let str: string = "456";
let strToNumber: number = Number(str);
let strToNumber1: number = +str;
console.log(`String as Number: ${strToNumber}`);

//type assertion
let someVal: any = "hello";
let strValue: string = someVal as string;
console.log(strValue);

let anotherVal: any = 789;
let numVal: number = <number>anotherVal;
console.log(numVal);

//ques7
type User = {
    id: number | string;
    name: string;
    mobile: number;
    age: number;
    email: string;
}
let user1: User = {
    id: 1,
    name: "John Doe",
    mobile: 1234567890,
    age: 30,
    email: "johndoe@example.com"
};
console.log(`ID: ${user1.id}`);
console.log(`Name: ${user1.name}`);
console.log(`Mobile: ${user1.mobile}`);
console.log(`Age: ${user1.age}`);
console.log(`Email: ${user1.email}`);

//ques 8
let colors: string[] = ["red", "green", "blue", "orange"];
colors.push("yellow");
console.log(`Array after pushing yellow`, colors);
colors.pop();
console.log(`Array after popping last element`, colors);
colors.unshift("purple");
console.log(`Array after adding element at beginning`, colors);
colors.shift();
console.log(`Array after removing element from start`, colors);

console.log("iterating theough the array:");
for (let color of colors) {
    console.log(color);
}

const blueIndex = colors.indexOf("blue");
if (blueIndex !== -1) {
    console.log('Index of "Blue":', blueIndex);
} else {
    console.log('"Blue" is not in the array.');
}

//ques9
enum Color {
    red ="Red",
    green = "Green",
    blue = "Blue",
    white = "White"
}

let selectedColor: Color = Color.blue;
console.log(`The selected color is`, selectedColor);

//ques10
let isNull: null = null;
let isUndefined: undefined = undefined;
console.log(`Value of null is`, isNull);
console.log(`Value of undefined is`, isUndefined);

//ques11
const array1 = [1,2,3];
const array2 = [4,5,6];

//const mergedArray = array1.concat(array2);
const mergedArray1 = [...array1, ...array2];
console.log(mergedArray1);

//ques12
const name1 = [{id: 1, name:'Aryan', mobile:1248748936}];
const name2 = [{id: 2, name:'Shubhi', mobile: 2233773388}];

const merArray = name1.concat(name2);
console.log(merArray);

//ques13
const list = [
    {
        id: 1,
        name: "Shree"
    },
    {
        id: 2,
        name: "Nishant"
    }
]
const next_item = {
    id: 3,
    name: "Raman"
}
const final = [...list,next_item];
console.log(final);

//ques14
let person: string = "Alice";
let City: string = "Mumbai";

let whereLives: string = `My name is ${person} and i live in ${City}`;
console.log(whereLives);

//ques15
function greetUser(name: string, callback: (message: string)=>void){
    const message = `Hello, ${name}!`;
    callback(message);
}
function printMessage(message: string): void{
    console.log(message);
}
greetUser('Alice', printMessage);

//ques16
interface User1{
    id: number;
    name: string;
}

const people: User1[] = [
    {id:1, name: 'Nupur'},
    {id:2, name: 'Rohan'},
    {id:3, name: 'Nupur'},
    {id:4, name: 'Sanchita'},
    {id:5, name: 'Meshva'},
    {id:6, name: 'Nupur'}
];
const firstNupur = people.find(User1 => User1.name === "Nupur");
console.log(firstNupur?.name); 

const allNupur = people.filter(User1 => User1.name === "Nupur");
console.log(allNupur.length);

//ques17
interface Employee{
    id: number;
    name: string;
    age: number;
    salary: number;
    mobile: string;
}
const employees: Employee[] = [
    { id: 101, name: 'John Doe', age: 30, salary: 50000, mobile: '123-456-7890' },
    { id: 102, name: 'Alex Mathew', age: 42, salary: 49000, mobile: '22-55-8765-43'},
    { id: 103, name: 'Lina Jonathan', age: 26, salary: 63000, mobile: '52-58-8965-43'},
    { id: 104, name: 'Tom Abhrams', age: 33, salary: 47000, mobile: '99-65-8735-41'},
    { id: 105, name: 'Max Caroline', age: 25, salary: 40000, mobile: '92-43-4725-63'},
    { id: 106, name: 'Alina Mathew', age: 28, salary: 30000, mobile: '12-95-9705-73'},
];

let totalSalary = employees.reduce((sum,employee) =>sum + employee.salary,0)
console.log(`Total Salary is ${totalSalary}`);

//ques18
//sorting by name
const sortedByName = [...employees].sort((a,b) => a.name.localeCompare(b.name));
const sortedByAge = [...employees].sort((a,b) => a.age - b.age);

console.log(`Sorted by name`);
console.table(sortedByName);
console.log(`Sorted by Age`);
console.table(sortedByAge);