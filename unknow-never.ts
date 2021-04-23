let userInput: unknown;  // Unknown Type
let userName: string;

userInput = 5;
userInput = 'Sahil';
//userName = userInput; // unknown won't allow it, but any would
if(typeof userInput === 'string') {
   userName = userInput;
}

function generateError(message: string, code: number): never { // never return anything
   throw { message: message, errorCode: code }  // Cancel our script pr crash and never return anything
   //return '10'
}

const result = generateError('An Error occurred!', 500);

//console.log(result) // Nothing logs