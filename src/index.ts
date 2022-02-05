import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
    next: (res) => console.log('num', res),
    error: (err: any) => console.warn(err),
    complete: () => console.log('Complete'),
};

