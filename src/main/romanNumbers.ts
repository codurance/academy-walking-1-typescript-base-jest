interface numberConversor {
  M: number;
  CM: number;
  D: number;
  CD: number;
  C: number;
  XC: number;
  L: number;
  XL: number;
  X: number;
  IX: number;
  V: number;
  IV: number;
  I: number;
}

const romanTable: numberConversor = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

export const convertToRoman = (decimalNumber: number): string => {
  checkNegativeNumber(decimalNumber);

  let romanNumber: string = "";

  for (const [key, value] of Object.entries(romanTable)) {
    while (decimalNumber >= value) {
      romanNumber += key;
      decimalNumber -= value;
    }
  }

  return romanNumber;
};

const checkNegativeNumber = (decimalNumber: number): void => {
  const isNegativeNumber = decimalNumber < 0;
  if (isNegativeNumber) {
    throw new Error("negative numbers not allowed");
  }
};
