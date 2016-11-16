/* A. Make a Promise, using One button in promise.html then log status there in another element.
You need to show all states of promise, for example on first time click on that button:
1) Started (Sync code started)
1) Promise started (Async code started)
1) Promise made (Sync code terminated)
1) Promise fulfilled (Async code terminated) and so on
So create one js file write your promise code into promise.js and show output in html. */


(function () {

let promise = new Promise(resolve => resolve(HTMLButtonElement));
promise.then(value => console.log(value));

let Promise2 = Promise.resolve(TMLButtonElement);
promise.then(value => console.log(value));

let promise3 = Promise.reject ('fail');
promise3.catch(reson => console.log(reason));

}) ();
