import { asyncScheduler, observeOn, of, range } from "rxjs";

//Sync
const src$ = of(1, 2, 3, 4, 5);
console.log('Start');
src$.subscribe(console.log)
console.log('End');

//Default start is 0 for range
const srcRangeSync$ = range(1, 5);
console.log('StartSync');
srcRangeSync$.subscribe(console.log)
console.log('EndSync');

//Async

//Deprecated
// const srcRangeAsync$ = range(1, 5, asyncScheduler);
// console.log('Start');
// srcRangeAsync$.subscribe(console.log)
// console.log('End');

const srcRangeAsync$ = range(1, 5).pipe(observeOn(asyncScheduler));
console.log('StartAsync');
srcRangeAsync$.subscribe(console.log)
console.log('EndAsync');