import { interval } from "rxjs";
import { reduce, take, tap } from "rxjs/operators";

const numbers = [1, 2, 3, 4, 5];

const totalFunction = (accumulator: number, actuaValue: number) => {
    return accumulator + actuaValue
};

const total = numbers.reduce(totalFunction, 0);
console.log('total', total);

interval(500).pipe(
    take(6),
    tap(console.log),
    reduce(totalFunction, 0)
).subscribe({
    next: (val) => console.log('next: ', val),
    complete: () => console.log('complete')
});