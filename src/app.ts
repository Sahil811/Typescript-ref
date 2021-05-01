type Admin = {
    name: string;
    privileges: string[];
}

// interface Admin = {
//     name: string;
//     privileges: string[];
// }

type Employee = {
    name: string;
    startDate: Date;
}

// interface Employee = {
//     name: string;
//     startDate: Date;
// }

//interface ElevatedEmployee extends Employee, Admin {}

type ElevatedEmployee = Admin & Employee;  // Intersection Types

const e1: ElevatedEmployee = {
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date(),
}

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;  // Intersection Types

///////// Function Overloads //////////

//function add(n: number): number;              // have to add 'b as optional then
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: number, b: string): string;
function add(a: string, b: number): string;
function add(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') {  // Type Guard
       return a.toString() + b.toString()
    }
    return a + b;
}

const result = add('Sahil', ' Siddiqui')  // will return string
//const result = add(5, 5)                  // will return number
result.split(' ')                         // string method

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
    console.log('Name: ' + emp.name);
    if ('privileges' in emp) {          // Type Guard in a sense
        console.log('Privileges: ' + emp.privileges)
    }
    if ('startDate' in emp) {
        console.log('Start Date: ' + emp.startDate);
    }
}

printEmployeeInformation(e1);
//printEmployeeInformation({name: 'Sahil', startDate: new Date()});

class Car {
    drive() {
        console.log('Driving...')
    }
}

class Truck {
    drive() {
        console.log('Driving a truck...')
    } 

    loadCargo(amount: number) {
        console.log('Loading cargo...' + amount)
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
    vehicle.drive();
    //if ('loadCargo' in vehicle) {
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}

useVehicle(v1);
useVehicle(v2);

interface Bird {
    type: 'bird';         // Literal type
    flyingSpeed: number;
}

interface Horse {
    type: 'horse';        // Literal type
    runningSpeed: number;
}

type Animal = Bird | Horse;  // Discriminated Union

function moveAnimal(animal: Animal) {
    let speed;
    switch(animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;    
    }
    console.log('Moving st speed: ' + speed)
}

///// Type Casting //////

//const paragraph = document.getElementById('message-output');
//const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;
//const userInputElement = <HTMLInputElement>document.getElementById('user-input')! as HTMLInputElement; // mainly for React
//userInputElement.value = 'Hi there!'

const userInputElement = <HTMLInputElement>document.getElementById('user-input')

if (userInputElement) {
  (userInputElement as HTMLInputElement).value = 'Hi there!'
}


/////////// Index property //////////

interface ErrorContainer {    // { email: 'Not a valid email', username: 'Must start with a character' }
   //id: string;              // id can not be number
   [props: string]: string;   
   //[props: number]: string; // email: 'Not a valid email' will not work
}

const errorBag: ErrorContainer = {
    //id: 1,                     // will not work
    //1: 'Not a valid email',      // will work too.
    email: 'Not a valid email',
    username: 'Must start with a capital character!'
};

