// 1.

function getUser(userName: string): void {
  console.log(`hello ${userName}`);
}

getUser("Sasha");

// 2.

interface IPerson {
  name: string;
  age: number;
  city: string;
}

function printPerson(person: IPerson): void {
  console.log(`name: ${person.name}, age: ${person.age},city: ${person.city}`);
}

const newPerson: IPerson = {
  name: "Anastasiia",
  age: 22,
  city: "Berlin",
};
printPerson(newPerson);

// 3.

function squareNumber(num: number): number {
  return num * num;
}

console.log(squareNumber(4));

//4.

function isEven(num: number): boolean {
  return num % 2 === 0 ? true : false;
}

console.log(isEven(3));

// 5.

interface IStudent {
  name: string;
  grade: number;
}

function printStudentInfo(student: IStudent): void {
  console.log(`name: ${student.name}, grade: ${student.grade}`);
}
const student = {
  name: "Marina",
  grade: 5,
};
printStudentInfo(student);

//6.

function logMessage(message: string): void {
  console.log(message);
}
logMessage("its end homework");
