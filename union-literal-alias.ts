type Combine = number | string;   // Union Type, Alias Type
type ConversionDescription = 'as-number' | 'as-text'; // Literal, Alias Type
function combine(input1: Combine, input2: Combine, resultConversion: ConversionDescription) {
    let result;
    if(typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString()
    }
    return result;
    // if(resultConversion === 'as-number') {
    //     return +result;
    // } else {
    //     return result.toString();
    // }
}

const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);  

const combinedStringAges = combine('30', '26', "as-number");
console.log(combinedStringAges)

const combinedNames = combine('Max', 'Anna', "as-text")
console.log(combinedNames)
