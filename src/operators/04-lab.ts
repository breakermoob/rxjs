import { fromEvent } from "rxjs";
import { map, tap } from "rxjs/operators";

const text = document.createElement('div');

text.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus lectus nec libero fermentum rutrum non id augue. Phasellus ut ipsum vel elit fringilla tristique ac ut leo. Aenean posuere volutpat ipsum ac elementum. Suspendisse eget placerat nulla, in varius sem. Nam porttitor non nunc ut tincidunt. Curabitur ullamcorper quis dolor nec mollis. Sed diam mi, auctor auctor metus mollis, ullamcorper tincidunt tellus. Proin sit amet sodales nisl, sit amet lacinia nunc. Maecenas lacinia nisl et gravida tristique. Ut malesuada risus id dui placerat, sed volutpat velit scelerisque. Nulla vehicula, diam quis pharetra malesuada, velit orci maximus neque, vel tempor nisi risus sed ex. Phasellus tempus volutpat facilisis. Donec dui metus, finibus aliquam viverra eu, tristique sed arcu. Fusce ut neque vitae metus tempor luctus dapibus nec dui.
<br/><br/>
Phasellus felis lacus, euismod sit amet fermentum non, vehicula at augue. Nullam dictum auctor nisi lacinia varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus vehicula sollicitudin turpis sed congue. Nam sed erat at urna gravida blandit. Pellentesque felis nibh, finibus vel vulputate eget, pharetra et ipsum. Vivamus ac enim eget nibh suscipit commodo id vitae mi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam tristique gravida finibus. Ut pretium mollis leo, in rhoncus neque bibendum at.
<br/><br/>
Cras vitae velit ut ex dignissim euismod ac vel justo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris aliquet ac ligula non cursus. Nunc non interdum arcu. Mauris sagittis sagittis odio, et fringilla justo blandit vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas venenatis neque eget nulla commodo, sed viverra augue venenatis. Curabitur a turpis hendrerit ligula auctor iaculis. Nam posuere, risus eget lobortis rutrum, purus dolor vestibulum sem, et cursus massa est vel felis. Donec vulputate orci eget orci molestie, nec ornare turpis tincidunt. Curabitur dictum sodales mauris, molestie imperdiet nisi ornare sed. Suspendisse quis lectus quis lacus molestie luctus quis a massa. Phasellus tincidunt consectetur tellus, egestas suscipit ex rutrum in. Donec interdum imperdiet augue, eu consectetur nunc condimentum ac. Proin elementum, nibh non auctor posuere, mi sem bibendum lectus, sed cursus est metus vel metus.
<br/><br/>
Sed in ultricies eros, non tincidunt ipsum. Donec semper sem convallis elit facilisis placerat. Curabitur eu erat eu magna tempus porttitor. Quisque non ex magna. Sed erat tellus, tempor ut rhoncus quis, pulvinar vel purus. Pellentesque enim arcu, euismod eget fringilla in, mattis at lacus. Mauris diam elit, condimentum ac laoreet vel, ultricies in leo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis diam quam, porttitor a sodales a, dapibus nec dui. Duis porttitor risus sed elementum semper. Curabitur aliquam metus ut felis ornare, sed maximus nisl condimentum. Ut fermentum laoreet metus, ac molestie velit eleifend sed. Aenean rutrum dolor nec magna gravida posuere. Suspendisse id justo vehicula, fringilla massa ut, tincidunt elit. Nullam fringilla feugiat imperdiet.
<br/><br/>
Quisque sed varius massa, sit amet luctus dui. Etiam tempus non diam id bibendum. Etiam in dapibus ex, at malesuada mi. Suspendisse mauris arcu, malesuada ac ante nec, scelerisque tincidunt ipsum. Fusce felis libero, gravida eu ultrices ut, lobortis id erat. Nullam pulvinar felis magna, nec consectetur orci imperdiet ut. Ut in sapien eu eros laoreet tempor. Pellentesque eu erat vitae eros aliquam sodales ut a ipsum. Proin id placerat enim. Donec dictum id tellus non eleifend. Nulla efficitur lacinia urna nec pharetra. Sed maximus eleifend interdum. Nullam cursus est at turpis hendrerit sagittis. Etiam aliquet bibendum nulla id tincidunt.
<br/><br/>
`;

const body = document.querySelector('body');
body.append(text);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);

const scroll$ = fromEvent(document, 'scroll');
scroll$.subscribe(console.log);

const calcPercentageScroll = (event) => {
    const {
        scrollTop,
        scrollHeight,
        clientHeight,
    } = event.target.documentElement;
    return (scrollTop / (scrollHeight - clientHeight)) * 100;
};

const progress$ = scroll$.pipe(
    map(calcPercentageScroll),
    tap(console.log)
);

progress$.subscribe(percentage => {
    progressBar.style.width = `${percentage}%`;
});