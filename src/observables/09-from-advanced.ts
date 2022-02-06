import { of, from } from "rxjs";

/**
 * of: generate a sequence from the arguments
 * from: array, promise, iterable, observable, etc.
 */

const observer = {
    next: (value: any) => console.log(value),
    error: (err: any) => console.warn(err),
    complete: () => console.log('complete'),
};

// const source$ = of(...[1,2,3,4,5,6]);
// const source$ = from('Lion');

const source$ = from(fetch('https://api.github.com/users/breakermoob'));

source$.subscribe(async (result: any) => {
    console.log(result);

    const dataResponse = await result.json();
    console.log(dataResponse);
});


const myGenerator = function* () {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
};

const myIterable = myGenerator();

//Vanilla
for (let id of myIterable) {
    console.log(id);
}
//Using RXJS
from(myIterable).subscribe(observer);