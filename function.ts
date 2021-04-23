function add(n1: number, n2: number) {
    return n1 + n2;
}

function printResult(num: number): void {   // Void: no return statement  // undefined: return undefined  // Are function return type
    console.log('Result: ' + num)
}

printResult(add(5, 12));

let combineValues: (a: number, b: number) => number;  // Function Type

combineValues = add;
//combineValues = printResult;
//combineValues = 5

console.log(combineValues(8, 8));

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {  // Function Types & callback
    const result = n1 + n2;
    const value = cb(result);
    console.log(value)  // will log the return value
}

addAndHandle(8, 10, (result) => {
    console.log(result);
    return result;
})
