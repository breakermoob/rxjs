import { fromEvent, range } from "rxjs";
import { map, pluck, mapTo } from "rxjs/operators";

range(1, 5)
    .pipe(
        //input number, output string
        map<number, string>(val => (val * 10).toString())
    )
    .subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, "keyup");
const keyupCodde$ = keyup$.pipe(
    map(val => val.code));

const keyupPluck$ = keyup$.pipe(
    pluck('key'));

const keyupPluckInternalObjects$ = keyup$.pipe(
    pluck('target', 'baseURI'));

const keyupMapTo$ = keyup$.pipe(
    mapTo('Key Pressed'));

keyupCodde$.subscribe(val => console.log('map', val));
keyupPluck$.subscribe(val => console.log('pluck', val));
keyupPluckInternalObjects$.subscribe(val => console.log('pluckInternal', val));
keyupMapTo$.subscribe(val => console.log('mapTo', val));


