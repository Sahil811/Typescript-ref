//type addFn = (a: number, b: number) => number

interface addFn {   /// function type using Interface
    (a: number, b: number): number;
}

let add: addFn;

add = (n1: number, n2: number) => {
    return n1 + n2;
}

interface Named { 
    readonly name?: string;  // only readyonly available set once after that read only
    outputName?: string;
    addOptional?(n1: number, n2: number): number
}

interface Greetable extends Named {
    greet(phrase: string): void;
}

 
class Person implements Greetable {    //, Named {   // can implement multi interface Greetable,Named, etc;
   name?: string;
   age = 30;

   constructor(n?: string) {  // default value of n will be null
       if (n) {
           this.name = n;
       }
   }

   greet(phrase: string) {
       if(this.name) {
           console.log(phrase + ' ' + this.name)
       } else {
           console.log('Hi!')
       }
    }
}


let user1: Greetable;

//user1 = new Person('Sahil') // Can not anything in user1 that does not have greet method Interface force as to do so
// user1 =  {
//     name: 'Sahil',
//     age: 1000000000000,
//     greet(phrase) {
//        console.log(phrase + ' ' + this.name)
//     }
// };

//user1.name = 'Anna';

user1 = new Person()

user1.greet('Hi there - I am')