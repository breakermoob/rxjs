import { range } from 'rxjs';
import { tap, map } from "rxjs/operators";

const numbers$ = range(1, 5);

numbers$.pipe(
    tap({
        next: (value) => {
            console.log('Before', value);
        },
        complete: () => console.log('complete')
    }),
    map((value) => value * 10),
    tap({
        next: (value) => {
            console.log('After', value);
        },
        complete: () => console.log('complete')
    }),
).subscribe(console.log);
