import { asyncScheduler } from "rxjs";

//asyncScheduler control this funtions
// setTimeout(() => { }, 3000);
// setInterval(() => { }, 3000);

const hello = (state) => console.log(`hello ${state.name}!`)

asyncScheduler.schedule(hello, 3000, { name: 'Lion' });

const subs = asyncScheduler.schedule(function (state) {
    console.log('state', state);

    //Doesn't work for arrow functions'
    this.schedule(state + 1, 1000);
}, 3000, 0);

// setTimeout(() => {
//     subs.unsubscribe();
// }, 6000);

//it's equals to the above setTimeout
asyncScheduler.schedule(() => subs.unsubscribe(), 6000);