import { from, range } from 'rxjs';
import { filter, pluck } from "rxjs/operators";

range(1, 10).pipe(
    filter(val => val % 2 === 0)
).subscribe(console.log);

const character = [
    {
        name: 'Flash',
        role: 'hero'
    },
    {
        name: 'Arrow',
        role: 'hero'
    },
    {
        name: 'Joker',
        role: 'villian'
    },
];

from(character).pipe(
    filter(character => character.role === 'villian'),
    pluck('name')
).subscribe(console.log);