function stringCalculator(numbers: string) {
    return numbers.replace('\n', ',').split(',').reduce((total, number) => Number(number) + total, 0)
}

describe("stringCalculator", () => {
    it.each([
        ["", 0],
        ["1", 1],
        ["2",2],
        ["3", 3],
    ])('takes %s and returns %d', (input, expected) => {
        expect(stringCalculator(input)).toBe(expected)
    })

    it.each([
        ["0,1", 1],
        ["0,2", 2],
        ["0,3",3],
        ["1,1", 2],
        ["1,2", 3],
        ["1,3", 4],
        ["2,1", 3],
        ["10,10", 20]
    ])("takes %s and returns %d", (input, expected) => {
        expect(stringCalculator(input)).toBe(expected)
    })

    it.each([
        ["0\n1", 1],
        ["0\n2", 2],
        ["0\n3", 3],
    ])("takes %s and returns %d", (input, expected) =>{
        expect(stringCalculator(input)).toBe(expected)
    })
})
