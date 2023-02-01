const MAX_NUMBER: number = 1000;

const regexCharacters: string[] = ["*", "+", "?", ".", "^", "$", "|", "(", ")"];

export const add = (numbers: string): number => {
  const isSpecialDelimeter = numbers.includes("//");

  if (isSpecialDelimeter) {
    return addNumbersWithSpecialDelimeter(numbers);
  }

  const basicDelimiter: RegExp = /,|\n/;
  return addNumbersByDelimiter(numbers, basicDelimiter);
};

const addNumbersWithSpecialDelimeter = (numbers: string): number => {
  const [delimeterString, numbersstring] = numbers.split("\n");

  let delimeterList = getDelimeterList(delimeterString);

  const isMultipleDelimeters = delimeterList.length > 1;

  if (isMultipleDelimeters) {
    return addNumbersWithMiltipleDelimeters(delimeterList, numbersstring);
  }

  return addNumbersByDelimiter(numbersstring, delimeterList[0]);
};

const getDelimeterList = (delimeterString: string): string[] => {
  const delimeterWithoutSlash = delimeterString.replace("//", "");

  return delimeterWithoutSlash.split(/[\[\]]/).filter((d) => d !== "");
};

const addNumbersWithMiltipleDelimeters = (
  delimeterList: string[],
  numbersstring: string
) => {
  delimeterList = delimeterList.map(allowRegexCharacters);

  const delimeterRegExp: RegExp = new RegExp(delimeterList.join("|"));
  return addNumbersByDelimiter(numbersstring, delimeterRegExp);
};

const allowRegexCharacters = (delimeter: string): string => {
  const isRegexCharacters = isDelimeterWithRegexCharacters(delimeter);

  if (isRegexCharacters) {
    return escapeRegexCharacters(delimeter);
  }

  return delimeter;
};

const escapeRegexCharacters = (delimeter: string): string => {
  return Array.from(delimeter)
    .map((char) => {
      const isRegexCharacter = regexCharacters.includes(char);
      if (isRegexCharacter) {
        return `\\${char}`;
      }
      return char;
    })
    .join("");
};

const isDelimeterWithRegexCharacters = (delimeter: string): boolean => {
  return regexCharacters.some((char) => delimeter.includes(char));
};

const addNumbersByDelimiter = (
  numbers: string,
  delimiter: string | RegExp
): number => {
  const numbersArray: number[] = numbers.split(delimiter).map(Number);

  checkForNegatives(numbersArray);

  const result = numbersArray.reduce((accumulator, currentValue) => {
    if (currentValue > MAX_NUMBER) return accumulator;
    return accumulator + currentValue;
  }, 0);

  return result;
};

const checkForNegatives = (numbers: number[]): void => {
  const negatives: number[] = numbers.filter((number) => number < 0);

  if (negatives.length > 0) {
    throw new Error(`negatives not allowed: ${negatives.join(", ")}`);
  }
};
