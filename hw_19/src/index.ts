// 1
const sumEvenNumbers = (arr: number[]): number => {
  return arr.reduce((acc, number) => {
    if (number % 2 === 0) {
      return acc + number;
    }
    return acc;
  }, 0);
};
const numbers: number[] = [3, 5, 7, 8, 9, 4, 3, 334, 2];
console.log(sumEvenNumbers(numbers));

//2
interface IStringToBooleanFunction {
  (str: string): boolean;
}

const isStringEmpty: IStringToBooleanFunction = (str) => {
  return str === "";
};

console.log(isStringEmpty(""));

//3
type CompareString = {
  (str1: string, srt2: string): boolean;
};

const isStringEqual: CompareString = (str1, str2) => {
  return str1.length === str2.length;
};

console.log(isStringEqual("qwer", "ehkk"));

//4

const getLastElement = <T>(arr: T[]): T => {
  return arr[arr.length - 1];
};

console.log(getLastElement(numbers));
console.log(getLastElement(["jf", "fk"]));

const makeTriple = <T>(a: T, b: T, c: T): T[] => [a, b, c];

console.log(makeTriple("gg", "", "jjj"));
console.log(makeTriple(true, false, false));
