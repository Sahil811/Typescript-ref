/////////// Generic Type ///////////

//const names: Array<string | number> = []   
const names: Array<string> = []    // string[]

const promise: Promise<string> = new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve('This is done!')
        //resolve(10)
    }, 2000)
})

promise.then(data => {
    data.split(' ');
})

/////////// Generic Function ////////

// function merge(objA: object, objB: object) {
//     return Object.assign(objA, objB)
// }

//const mergeObj = merge({ name: 'Sahil'}, { age: 30 }) as { name: string, age: number } // Type casting

function merge<T, U>(objA: T, objB: U) {
    return Object.assign(objA, objB)
}

const mergeObj = merge({ name: 'Sahil', hobbies: ['Sports']}, { age: 30 })
console.log(mergeObj.age)
//const mergeObj = merge({ name: 'Sahil'}, { age: 30 })
//const mergeObj = merge<{ name: string, hobbies: string[] }, { age: number }>({ name: 'Sahil', hobbies: ['Sports']}, { age: 30 })
//console.log(mergeObj2.age) // error

function merge2< T extends object, U extends object>(objA: T , objB: U) {  // can use any type in place of object
    return Object.assign(objA, objB)
}

//const mergeObj2 = merge2({ name: 'Sahil', hobbies: ['Sports']}, 30)
const mergeObj2 = merge2({ name: 'Sahil', hobbies: ['Sports']}, { age: 30 })  // force to pass Object

console.log(mergeObj2)

interface lengthy {
    length: number;
}

function countAndDescribe<T extends lengthy>(element: T) : [T, string] {
    let descriptionText = 'Got no value';
    if(element.length === 1) {
       descriptionText = 'Got 1 element.';
    } else if(element.length > 1) {
       descriptionText = 'Got ' + element.length + ' elements.'
    }
    return [element, descriptionText];
}

console.log(countAndDescribe('Hi there!'))
console.log(countAndDescribe(['Hi there!', 'Wosh!']))

/////////// The Keyof constrain /////////////

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return 'Value: ' + obj[key];
}

extractAndConvert({name: 'Sahil'}, 'name')

////////// Generic Classes ////////////////

class DataStorage<T extends string | number | boolean> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        if(this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);   // -1,1 remove last element of array
    }

    getItems() {
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>()

//textStorage.addItem(10)  // Error
textStorage.addItem('Sahil') 
textStorage.addItem('Anna') 
textStorage.removeItem('Anna')
console.log(textStorage.getItems())

const numberStorage = new DataStorage<number>()

// const objectStorage = new DataStorage<object>()
// const sahilObj =  { name: 'Sahil' }
// objectStorage.addItem(sahilObj)
// objectStorage.addItem({ name: 'Anna' })
// objectStorage.removeItem(sahilObj)
// console.log(objectStorage.getItems())

////////////////  Generic Utility Types (See list in Docs) ////////////

interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

function createCourseGoal(title: string, description: string, date: Date): CourseGoal {
    //return { title: title, description: description, completeUntil: date}
    let courseGoal: Partial<CourseGoal> = {};     // (1) Partial Type Utility
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal as CourseGoal;              // Type Casting
}

const nameArray: Readonly<string[]> = ['Sahil', 'Anna'];  // (2) Readonly Type Utility
//nameArray.push('Raph')
//nameArray.pop()