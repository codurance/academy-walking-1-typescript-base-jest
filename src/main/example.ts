export class Example {
    fib(a: number) {
        if (a === 1) {
            return 1;
        }
        if (a > 1) {
            return a - 1;
        }
        return 0;
    }
}