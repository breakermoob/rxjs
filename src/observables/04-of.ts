import { of } from 'rxjs';

//Equals
// const obs$ = of(1, 2, 3, 4, 5, 6);
// const obs$ = of(...[1, 2, 3, 4, 5, 6]);
// const obs$ = of(...[1, 2, 3, 4, 5, 6],7,8,9,10);

const obs$ = of<any>([1, 2], { a: 1, b: 2 }, () => { }, true, Promise.resolve(true));

obs$.subscribe({
    next: (subs) => console.log(subs),
    error: (err) => console.log(err),
    complete: () => console.log('completed'),
});