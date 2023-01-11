import React from 'react';
import ReactDOM from 'react-dom/client';


let hello='Hello, World';

function SayHi(name){
  return <h1>Hello, {name}</h1>
}
let greeting = SayHi("Ahmet")

function add(a, b) {
  return <h2>{a + b}</h2>
}

let sum = add(2, 3)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<div>
  <h1>{hello}</h1>
  <h1>{greeting}</h1>
  <h2>{sum}</h2>

     
</div>);





