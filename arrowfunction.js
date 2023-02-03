var iseven=(Element)=>{
    return Element%2==0;
}
console.log(iseven(8))
let result=[2,4,6,8,22,42]. every((e)=>(e%2==0));
console.log(result);

//fill and fillter 
const testarray=[4,2,5,8,9];
console.log(testarray.fill("empty",2))

var number=[55,33,66,22,11,68,44,];
var res=number.filter((num)=>num<55);
console.log(res);