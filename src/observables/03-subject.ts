import { Observable, Observer, Subject } from "rxjs";

const observer: Observer<any> = {
    next: (res) => console.log('num', res),
    error: (err: any) => console.warn(err),
    complete: () => console.log('Complete'),
};

const intervalo$ = new Observable<number>(subs => {
    const intervalId = setInterval(
        () => { subs.next(Math.random()) }
        , 1000);
    return () => {
        clearInterval(intervalId)
        console.log('The interval has been destroyed');
    };
});
// const subs1 = intervalo$.subscribe( rnd => console.log('subs1' , rnd));
// const subs2 = intervalo$.subscribe( rnd => console.log('subs2' , rnd));


/**
 * 1-Multiple Casting
 * 2- Observable
 * Next, error and complete options
 */
const subject$ = new Subject();
const subscription = intervalo$.subscribe(subject$);

const subs1 = subject$.subscribe(rnd => console.log('subs1', rnd));
const subs2 = subject$.subscribe(rnd => console.log('subs2', rnd));

setTimeout(() => {
    subject$.next(10);
    subject$.complete();
    subscription.unsubscribe();
}, 3500)

