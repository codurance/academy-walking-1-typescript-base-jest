export class Example {
    fib(a: number): number {
        if (a === 1) {
            return 1;
        }
        if (a > 1 && a < 5) {
            return a - 1;
        }
        if (a === 0) {
            return 0;
        }

        return this.fib(a - 1) + this.fib(a - 2);
    }
}