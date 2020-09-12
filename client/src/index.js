import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css';
import * as serviceWorker from './serviceWorker';

/*TODO: add option to input custom link for a custom altchat*/

const myelement = (
<div>
  <h1>Custom Commentary</h1>
  <div class="altchat">
    <h4>Alt Chat</h4>
    <button class="smallbutton">None</button>
    <button class="smallbutton">Stream1</button>
    <button class="smallbutton">Stream2</button>
  </div>
  <div class="streamerchat">
    <h4>Streamer Chat</h4>
    <button class="smallbutton">On</button>
    <button class="smallbutton">Off</button>
  </div>
  <div class="widthoptions">
    <h4>Youtube Video Width</h4>
    <button class="smallbutton" id="560btn">560px</button>
    <button class="smallbutton" id="640btn">640px</button>
    <button class="smallbutton" id="720btn">720px</button>
    <button class="smallbutton" id="1280btn">1280px</button>
    <button class="smallbutton" id="fillbtn">fill</button>
    <button class="smallbutton" id="fillwithchatbtn">fill with chat</button>
  </div>
  <div class="twitchoptions">
    <h4>Twitch Video Style</h4>
    <button class="smallbutton">Separate</button>
    <button class="smallbutton">Mini Player</button>
    <button class="smallbutton">Above chat</button>
  </div>
  <div class="miniplayeroptions">
    <h4>Mini Player Position</h4>
    <button class="smallbutton">left</button>
    <button class="smallbutton">center</button>
    <button class="smallbutton">right</button>
  </div>
  
  <div>
   <iframe width="1280" height="720" src="http://www.youtube.com/embed/n_dZNLr2cME?rel=0&hd=1" frameborder="0" allowfullscreen id="mainstream"></iframe>
  </div>
</div>
);


ReactDOM.render(myelement, document.getElementById('root'));

document.getElementById("560btn").onclick = function() {resizeVideo(560)};
document.getElementById("640btn").onclick = function() {resizeVideo(640)};
document.getElementById("720btn").onclick = function() {resizeVideo(720)};
document.getElementById("1280btn").onclick = function() {resizeVideo(1280)};
/*fill button??*/


function resizeVideo(size)
{
    var newSize = size
    var theVideo = document.getElementById('mainstream');
    theVideo.width = size
    theVideo.height = size * (9/16)
}


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
