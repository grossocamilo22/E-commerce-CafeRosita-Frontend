interface ProductImg{
id:number,
src:string
}

export interface Product{
name:string;
img:string;
price:number;
amount:string;
description:string,
images:ProductImg[]
}