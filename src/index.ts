import { from } from 'rxjs';
import { scan, map } from 'rxjs/operators';


const numbers = [1, 2, 3, 4, 5];

const totalFunction = (accumulator, actuaValue) => accumulator + actuaValue


from(numbers).pipe(
    scan(totalFunction, 0)
).subscribe(console.log);

//scan emit each change

//redux

// interface User {
//     id?: string;
//     auth?: boolean;
//     token?: string;
//     age?: number;
// };

// const user: User[] = [
//     { id: 'a', auth: false, token: null },
//     { id: 'b', auth: true, token: 'ABC' },
//     { id: 'c', auth: true, token: 'BCD' },
// ];

// const state$ = from(user).pipe(
//     scan<User>((acc, cur) => {
//         return { ...acc, ...cur }
//     }, { age: 25 })
// );

// const id$ = state$.pipe(
//     map(state => state.id)
// );

// id$.subscribe(console.log)