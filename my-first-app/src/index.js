import React from 'react';
import ReactDOM from 'react-dom/client';

function Hello(){
  const username="brajesh";
  return<h1>Hello {username}!</h1>;

}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Hello/>);

