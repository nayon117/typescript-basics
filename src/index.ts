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
// let arr:number[] = [12,24,36,48,60];
// let arr2:string[] = ["Hello", "World"];
// let arr3:Array<number | string > = [1,2,3,4,5,"hello"];

// tuple
// const arr4:[number, string, boolean] = [1, "hello", true];

// object
// using type
type objType = {
    width:number,
    height:number,
    gender:boolean
}

const obj:objType = {
    width:3434,
    height:3434,
    gender:true
}

// interfact type
interface objType2 {
    width:number,
    height:number,
    gender?:boolean
}
const obj2:objType2 = {
    width:3434,
    height:3434,

}

interface newObj extends objType2 {
    color:string
}

const obj3:newObj ={
    width:3434,
    height:3434,
    color:"red"
}