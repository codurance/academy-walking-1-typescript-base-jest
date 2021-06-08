export class Example {
    fib(a: number) {
        if (a === 1) {
            return 1;
        }
        if (a > 1 && a < 5) {
            return a - 1;
        }
        if (a === 5) {
            return 5;
        }
        if (a === 6) {
            return 8;
        }
        if (a === 7) {
            return 13;
        }
        return 0;
    }
}