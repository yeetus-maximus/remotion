// This is your entry file! Refer to it when you render:
// npx remotion render <entry-file> HelloWorld out/video.mp4

import {registerRoot} from 'remotion';
import {RemotionVideo} from './Video';

registerRoot(RemotionVideo);
var lo = prompt("What you want on the first line of Fixing Good Video");
var lt = prompt("Whats on second line of fixing good generator");

const lol = document.createElement("p");
lol.innerText = "This is a paragraph";
document.body.appendChild(lol);

