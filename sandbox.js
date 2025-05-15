"use strict";
/*
//variAable types

let character = 'mario';
let age = 30;
let isBlackBelt = false;

//character = 20;
character = 'luigi';

//age = 'mario'
age = 40;

//isBlackBelt = 'yes';
isBlackBelt = true;

const circ = (diameter: number) => {
    return diameter * Math.PI
}

console.log(circ(23));
*/
//arrays
/*
let names = ['luigi', 'maria', 'yoshi'];

names.push('toad');
/* cannot do this
names.push(3);
names[0] = 3;
*/
/*
let mixed = ['minal', 18, 'aryan', 23, 59, 'rohan', 'yashvi'];
mixed.push('rahul');
mixed[0] = 19;


//objects

let ninja = {
    name: 'mario',
    belt: 'black',
    age: 22,
};

ninja.age = 32;
ninja.name = 'ryu';
//ninja.skills = ['fighting', 'racing']

//how to overwrite object
//exact same structure
//same type
//values can differ

ninja ={
    name: 'yoshi',
    belt: 'white',
    age: 34,
    //skills: ['fighting', 'stalking']
};
*/
/*
//explicit types
let character: string;

let age: number;

let isLoggedIn: boolean;

//arrays
let ninja: string[] = [];

ninja.push('shaun');

//union types
let mixed: (string|number|boolean)[] = [];
mixed.push('hello');
mixed.push(13);
mixed.push(false);

console.log(mixed);

let uid: string|number;
uid = '123';
uid = 'minal';

//objects
let ninjaOne: object;
ninjaOne = {name:'minal', age:12};

let ninjaTwo:{
    name: string;
    age: number;
    beltColor: string;
}

ninjaTwo = {name: 'rohan', age: 13, beltColor: 'black'}
*/
/*
//any type
let age: any = 25;
age = true;
console.log(age);
age = 'hello';
console.log(age);
age = {name: 'luigi'};
console.log(age);

let mixed: any[] = [];
mixed.push(5);
mixed.push('mario');
mixed.push(false);
console.log(mixed);

let ninja: {name: any, age: any};

ninja = {name: 'yoshi', age: 13};
console.log(ninja)

ninja = {name: 14, age: 'minal'}
console.log(ninja)
*/
/*
//functions

let greet: Function;

greet = () => {
    console.log('hello');
}

const add = (a: number, b: number, c: number| string = 10) => {
    console.log(a+b);
    console.log(c);
}

add(5,10, '20');

const minus = (a: number, b: number): number => {
    return a + b;
}

let result = minus(19, 10);
*/
const logDetails = (uid, item) => {
    console.log(`${item} has a uid of ${uid}`);
};
const greet = (user) => {
    console.log(`${user.name} says hello`);
};
