import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css';
import * as serviceWorker from './serviceWorker';


const myelement = (
<div>
  <h1>Hello World!</h1>
  <div class="optionclump">
    <h4>Alt Chat</h4>
    <button class="smallbutton">test</button>
  </div>
  <div class="optionclump"><h4>Alt Chat</h4></div>
  <div class="optionclump"><h4>Alt Chat</h4></div>
  <div class="optionclump"><h4>Alt Chat</h4></div>
  
  <iframe width="420" height="315"
    src="https://www.youtube.com/embed/tgbNymZ7vqY">
  </iframe>
</div>
);

ReactDOM.render(myelement, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
