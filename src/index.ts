// // let a:string="Hello World"; #1 way
// // let b = <string>"Hello World"; //another way
// // let nambo: number;
// // let isTrue: boolean;

// // union types
// // let surname: string | number;
// // surname = 117;

// // // function

// // type funcType= (n:number,m:number)=>number;
// // const func:funcType = (n,m) => {
// //   console.log(n, m);
// //   return n * m;
// // };

// // // type
// // type username = string | number;
// // let a:username=13

// // array
// let arr:number[] = [12,24,36,48,60];
// let arr2:string[] = ["Hello", "World"];
// let arr3:Array<number | string > = [1,2,3,4,5,"hello"];

// // tuple
// // const arr4:[number, string, boolean] = [1, "hello", true];

// // object
// // using type
// // type objType = {
// //     width:number,
// //     height:number,
// //     gender:boolean
// // }

// // const obj:objType = {
// //     width:3434,
// //     height:3434,
// //     gender:true
// // }

// // interfact type
// interface objType2 {
//     width:number,
//     height:number,
//     gender?:boolean
// }
// const obj2:objType2 = {
//     width:3434,
//     height:3434,

// }

// type funTyp = (n:number,m:number)=>void;

// interface newObj extends objType2 {
//     color:string,
//     func?:funTyp
// }

// const obj3:newObj ={
//     width:3434,
//     height:3434,
//     color:"red"
// }
// const kendal:newObj ={
//     width:3434,
//     height:3434,
//     color:"red",
//     func:(n,m)=>{
//         console.log("n*m");
//     }
// }

// Functions in typescript
// optional parameter
// type funcType = (n: number, m: number, l?: number) => number | string;
// const func: funcType = (n, m, l) => {
//     if(typeof l=== "undefined") return "L is not provided";
//   return n * m * l;
// };

// func(2, 3, 4);

// default parameter

// type funcType = (n: number, m: number, l?: number) => number
// const func: funcType = (n, m, l=20) => {
//     if(typeof l=== "undefined") return n*m;
//   return n * m * l;
// };

// func(2, 3);

// rest parameter
// type funcType = (...m:number[]) => number[];
// const func:funcType = (...m) => {
//   return m;
// };

// func(2, 3, 4);

// Function with objects
// type funcType = (...m:number[]) => number;

// const numb:funcType = function numb (n){
//   return n;
// }

// interface product {
//   name:string;
//   price:number;
//   readonly id:number
// }

// type getDataType = (product:product)=>void;
// const getData:getDataType = (product) => {
//   console.log(product.price, product.name);
// }

// const productOne:product = {
//   id:1,
//   name:"laptop",
//   price:1000

// }

// getData(productOne);

// // Never Type
// const errorHandler = ():never =>{
//   throw new Error("An Error Occured");
// }

// // theme mode
// type thememode = "light" | "dark";
// let theme:thememode = "light";
// ----------------------------------------------

// classes in typescript
// class Player {
//   constructor(
//     private height: number,
//     public weight: number,
//     protected power?: number
//   ) {}
//   myHeight() {
//     return this.height;
//   }
// }

// class player2 extends Player {
//   special: boolean;
//   constructor(height: number, weight: number, power: number,special:boolean) {
//     super(height, weight, power);
//     this.special = special;
//   }
//   getMyPower (){
//     return this.power;
//   }
  
// }
// const nayon = new player2(6, 60, 100, true);
// console.log(nayon.getMyPower());

// Type Assertion
// const a = document.getElementById("btn") as HTMLElement
// const btn =<HTMLElement> document.getElementById("btn")  
const btn =<HTMLElement> document.getElementById("btn")!  
btn.onclick;

// const img = document.getElementById("myimg") as HTMLImageElement;
// img.src;

const img = document.querySelector("img")!
img.src;