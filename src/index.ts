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
type funcType = (...m:number[]) => number[];
const func:funcType = (...m) => {
  return m;
};

func(2, 3, 4);
