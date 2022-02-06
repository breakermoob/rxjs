import { interval, timer } from "rxjs";

//interval is async default

const observer = {
    next: (val) => { console.log('next', val); },
    error: (err) => { console.log('error', err) },
    complete: () => { console.log('complete') }
}

const interval$ = interval(1000);
// const timer$ = timer(2000);

//timer has a interval
const timer$ = timer(2000, 1000);

console.log('AsyncStart');
interval$.subscribe(observer);
console.log('AsyncEnd');

console.log('AsyncStart');
timer$.subscribe(observer);
console.log('AsyncEnd');

//Using Dates
const todayIn5 = new Date();
todayIn5.setSeconds(todayIn5.getSeconds() + 5);
const timerPeriod$ = timer(todayIn5);

timerPeriod$.subscribe(observer);

