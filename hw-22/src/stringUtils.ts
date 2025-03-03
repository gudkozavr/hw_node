export function capitalize(string: string): string {
  return string[0].toUpperCase() + string.slice(1);
}

export function reverseString(str: string): string {
  return str.split("").reverse().join("");
}
