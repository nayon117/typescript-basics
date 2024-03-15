// let a:string="Hello World"; #1 way
// let b = <string>"Hello World"; //another way
// let nambo: number;
// let isTrue: boolean;

// union types
// let surname: string | number;
// surname = 117;

// // function

// type funcType= (n:number,m:number)=>number;
// const func:funcType = (n,m) => {
//   console.log(n, m);
//   return n * m;
// };

// // type
// type username = string | number;
// let a:username=13

// array
let arr:number[] = [12,24,36,48,60];
let arr2:string[] = ["Hello", "World"];
let arr3:Array<number | string > = [1,2,3,4,5,"hello"];

// tuple
const arr4:[number, string, boolean] = [1, "hello", true];