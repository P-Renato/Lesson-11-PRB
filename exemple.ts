// declaring variables of types: string, number, boolean abd assiging values to them

const msg: string = "Hello World";
const num: number = 123;
const isLoggedIn: boolean = false;

// Declaring AArays variables of types: string, number, boolean abd assiging values to them

const strArr: string[] = ["apple", "watermelon", "ananas"]
const numArray: number[] = [234, 5, 78, 0]
const booArr: boolean[] = [true, true, false, true, false]

// a simple sum function with types

function sum(a: number, b: number): number {
    return a + b
}

const msgLength: number = msg.length
console.log(msgLength)

const strArrLength: number = strArr.length
console.log(strArrLength)