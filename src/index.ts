let age: number = 5;
const name: string = "Felpe";
const isValid: boolean = true;
let idk: any = 5;

idk = "Hello";
idk = true;

const ids: number[] = [1,2,3,4,5];
const booleans: boolean[] = [true, false, true];
const names: string[] = ["Felpe", "John", "Doe"];

//tuple

const person:[number, string, boolean] = [1, "Felpe", true];

//lista de tulples

const people:[number,string][] = [

    [1,"Alisson"],
    [2,"Felipe"]

]

// insterections

const productID: string | number = '2';

//enum

enum Direction1{
    up = 1,
    down = 2
}

const direction = Direction1.up;

console.log(direction);