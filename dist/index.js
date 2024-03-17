"use strict";
// // let a:string="Hello World"; #1 way
// // let b = <string>"Hello World"; //another way
// // let nambo: number;
// // let isTrue: boolean;
const getData = (product) => {
    console.log(product.price, product.name);
};
const productOne = {
    id: 1,
    name: "laptop",
    price: 1000
};
getData(productOne);
