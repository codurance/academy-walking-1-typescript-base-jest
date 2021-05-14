export const sum = (input: string): number => {
  if (input === "") {
    return 0;
  }

  var newLineCharacter = "\n";
  var regex = new RegExp(newLineCharacter, "g");
  const inputWithCommasOnly = input.replace(regex, ",");
  const inputNumbers = inputWithCommasOnly.split(",");
  const numberArray = inputNumbers.map((item) => parseInt(item));
  const sum = numberArray.reduce((a, b) => a + b, 0);
  return sum;
};
