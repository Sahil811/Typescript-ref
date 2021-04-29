abstract class Department {
    static fiscalYear = 2020; // static property as detached from instances
    // private id: string;
    // public name: string;   // Default PUBLIC
    //private employees: string[] = [];  // Typescript thing
    protected employees: string[] = [];  // Typescript thing  // available in all extended classes now

    constructor(protected readonly id: string, public name: string) {
      // this.name = n;
      // this.id = id;
      //console.log(this.fiscalYear)  // won't work
      //console.log(Department.fiscalYear) 
    }

    static createEmployee(name: string) {
      return { name: name };
    }

    abstract describe(this: Department): void 
    // {    // Only Instance of Department check
    //     console.log(`Department (${this.id}: ${this.name})`)
    // }

    addEmployee(employee: string) {
       this.employees.push(employee);
    }

    printEmployeeInformation() {
       console.log(this.employees.length);
       console.log(this.employees);
    }
}

const employee1 = Department.createEmployee('Mai')
console.log(employee1, Department.fiscalYear)

class ITDepartment extends Department {   //only can inherent from one class;
  admins: string[];
   constructor(id: string, admins: string[]) {
     super(id, 'IT')                              // super calls constructor of base class and take        argument for it;
     this.admins = admins;
   }

   describe() {
     console.log('IT Department - ID: ' + this.id);
   }
}

const it = new ITDepartment('d1', ['Sahil']);

it.addEmployee('Sahil');
it.addEmployee('Max');
//accounting.employees[2] = 'Anna';

it.printEmployeeInformation();
console.log(it)

class AccountingDepartment extends Department {   //only can inherent from one class;
  private lastReports: string;
  private static instance: AccountingDepartment;

  get mostRecentReport() {
    if (this.lastReports) {
      return this.lastReports
    }
    throw new Error('No report Found!');
  }

  set mostRecentReport(value: string) {
    if(!value) {
      throw new Error('Please pass in a valid value!')
    }
    this.addReport(value)
  }

   private constructor(id: string, private reports: string[]) {
     super(id, 'Accounting') ;                             // super calls constructor of base class and take        argument for it;
     this.lastReports = reports[0]
   }

   static getInstance() {
     if (AccountingDepartment.instance) {
       return this.instance;
     }
     this.instance = new AccountingDepartment('d2', []);
     return this.instance;
   }

   describe() {
     console.log('Accounting Department - ID: ' + this.id);
   }

   addEmployee(name: string) {
     if (name === 'Sahil') {
       return;
     }
     this.employees.push(name);
   }

   addReport(text : string) {
     this.reports.push(text);
     this.lastReports = text;
   }

   printReports() {
     console.log(this.reports)
   }
}

const accounting = AccountingDepartment.getInstance();
// const accounting2 = AccountingDepartment.getInstance();
// console.log(accounting, accounting2) // same
//const accounting = new AccountingDepartment('d2', []);

accounting.describe()

//accounting.mostRecentReport = '';
accounting.addReport('We are in 100 Billion dollars in profit.');
console.log(accounting.mostRecentReport)

accounting.addEmployee('Max');
accounting.addEmployee('Anna');
accounting.printReports();
console.log(accounting)
// console.log(accounting);
// accounting.describe();

//const accountingCopy = { describe: accounting.describe };
//const accountingCopy = { name: 'DUMMY', describe: accounting.describe };
//accountingCopy.describe();
