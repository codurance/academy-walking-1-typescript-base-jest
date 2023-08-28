import {Example} from "../main/example"


describe('example test', () => {
    const generator = new Example();
    it.each([[0, 0],
        [1, 1],
        [2, 1],
        [3, 2],
        [4, 3],
        [5, 5],
        [6, 8],
        [7, 13],
        [8, 21]
    ])
    ('For index %d return %d', (index, returnValue) => {
        expect(generator.fib(index)).toBe(returnValue);
    })
})


//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811

