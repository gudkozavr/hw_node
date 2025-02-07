type Admin = {
  name: string;
  permissions: string[];
};
type User = {
  name: string;
  email: string;
};

type AdminUser = User & Admin;

const newAdminUser: AdminUser = {
  name: "Anastasiia",
  email: "anastasiia@mail",
  permissions: ["admin"],
};

type Engine = {
  type: string;
  horsepower: number;
};
type Car = {
  make: string;
  model: string;
  engine: Engine;
};

const newCar = {
  make: "Mercedes-Benz",
  model: "C-class",
  engine: {
    type: "diesel",
    horsepower: 500,
  },
};

function infoCar(car: Car): void {
  console.log(
    `its car: ${car.make}, ${car.model}, ${car.engine.type}, ${car.engine.horsepower}`
  );
}

infoCar(newCar);

//3

interface IProduct {
  name: string;
  price: number;
}
const newProduct: IProduct = {
  name: "bread",
  price: 5,
};
function calculateDiscount(product: IProduct, discount: number): number {
  return product.price * (1 - discount / 100);
}

console.log(
  ` new price for ${newProduct.name}: ${calculateDiscount(newProduct, 5)}`
);

//4

interface IEmployee {
  name: string;
  salary: number;
}

const employees: IEmployee[] = [
  { name: "bob", salary: 1400 },
  { name: "charly", salary: 1450 },
  { name: "christin", salary: 1200 },
];

function onlySalary(arrEmployees: IEmployee[]): number[] {
  return arrEmployees.map((employee) => {
    return employee.salary;
  });
}
console.log(onlySalary(employees));

//5
interface IPerson {
  firstName: string;
  lastName: string;
}

interface IStudent extends IPerson {
  grade: number;
}

const newStudent: IStudent = {
  firstName: "Masha",
  lastName: "Morosova",
  grade: 4,
};

function studentsInfo(student: IStudent): void {
  console.log(
    ` Student: ${student.firstName} ${student.lastName}, grade: ${student.grade}`
  );
}
studentsInfo(newStudent);

//6

interface ConcatFunction {
  (str1: string, str2: string): string;
}

const concatStrings: ConcatFunction = (str1, str2) => {
  return str1 + str2;
};

console.log(concatStrings("Hello, ", "teacher!"));
