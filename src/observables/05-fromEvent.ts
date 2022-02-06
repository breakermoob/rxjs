import { fromEvent } from "rxjs";

/**Events
 * 
 */

const src1$ = fromEvent<MouseEvent>(document, "click");
const src2$ = fromEvent<KeyboardEvent>(document, "keyup");

const observer = {
    next: (val) => console.log('next', val),
    error: (err: any) => console.warn(err),
    complete: () => console.log('complete')
}


src1$.subscribe(({ x, y }) => {
    console.log('x', x);
    console.log('y', y);
});
src2$.subscribe(event => {
    console.log(event.key);
});