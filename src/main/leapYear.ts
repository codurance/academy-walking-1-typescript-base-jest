const leapYear = (year: number): boolean => {
  let isDivisibleBy400: boolean = year % 400 === 0;
  let isDivisibleBy4: boolean = year % 4 === 0;
  let isDivisibleBy100: boolean = year % 100 === 0;

  return isDivisibleBy400 || (isDivisibleBy4 && !isDivisibleBy100);
};

export default leapYear;
