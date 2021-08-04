// function doubleIt(num){
//     return num * 2;
// }

// const doubleIt = function myFun(num){
//     return num * 2;
// }

const doubleIt = num => num * 2 //Arrow function

const add = (x, y) => x + y;

const give5 = () => 5;

const bishalFunction = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result
}

const result = bishalFunction(5, 7);
console.log(result);