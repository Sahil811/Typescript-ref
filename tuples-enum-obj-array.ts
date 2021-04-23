// const person: {
//     name: string;
//     age: number;
//     hobbies: string[],
//     role: [number, string]  // Tuples
// } = {

//person.role.push('admin'); will work
//person.role[1] = 10;  will not work

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role { ADMIN = 'ADMIN', READ_ONLY = 10, AUTHOR }

const person = {
    name: 'Sahil',
    age: 25,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
}


if (person.role === Role.AUTHOR) {
    console.log("is Admin")
}

let favActivities: string[];  // anu[]; avoid it, remove typescript advantage
favActivities = ['Sports']

for (const hobby of person.hobbies) {
    console.log(hobby.toLocaleLowerCase())
}

console.log(person.name)