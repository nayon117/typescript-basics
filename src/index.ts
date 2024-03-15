// let a:string="Hello World"; #1 way
let b = <string>"Hello World"; //another way
let nambo: number;
let isTrue: boolean;

// union types
let surname: string | number;
surname = 117;

// function
const func = (n: number, m: number): number => {
  console.log(n, m);
  return n * m;
};
