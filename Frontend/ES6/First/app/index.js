import React from 'react';
import ReactDOM from 'react-dom';
import Global from './components/Global';

ReactDOM.render(
<Global />, document.getElementById('root')
);





/*
console.log("Hello webpack");
console.log("THis is the browser");

var string = 'qwerpquoiwerpuoqweñxc.jvñlzjcxñvljkñadlfkajñsdljfñqpweoirqpowerupqoe.n,mkn.,npoaijñsdlfkj';
var letters = new Map();

for (var i=0; i<string.length; i++){
    var letter = string[i];
    if(!letters.has(letter)){
        letters.set(letter, 1);
    }else{
        letters.set(letter, letters.get(letter) + 1);
    }
}

console.log(letters);

var product = x => y => y*x;
var mult5 = product(5);
var doubl = product(2);
console.log(mult5(5));*/
