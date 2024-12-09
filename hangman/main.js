import renderPage from './scripts/render-page.js';
import { questions } from './scripts/questions.js';
import getRandomIndex from './scripts/get-random-index.js';
getRandomIndex(questions);
console.log(questions);
renderPage(questions);

// const canvas = document.getElementById('canvas');
// const ctx = canvas.getContext('2d');

// ctx.fillStyle = 'red';
// ctx.fillRect(0, 0, 400, 400);

//  |
// ctx.beginPath();
// ctx.moveTo(360, 80);
// ctx.lineTo(360, 20);
// //  /
// ctx.lineTo(170, 20);
// ctx.lineTo(90, 100);
// ctx.lineTo(170, 20);
// // |
// ctx.lineTo(90, 20);
// ctx.lineTo(90, 480);
// //  __
// ctx.lineTo(20, 480);
// ctx.lineTo(490, 480);
// ctx.lineWidth = 10;
// ctx.stroke();
// // head
// ctx.beginPath();
// ctx.arc(360, 115, 35, 0, 2 * Math.PI);
// ctx.lineWidth = 5;
// ctx.stroke();
// // body
// ctx.beginPath();
// ctx.moveTo(360, 150);
// ctx.lineTo(360, 260);
// ctx.stroke();
// // left hand
// ctx.beginPath();
// ctx.moveTo(360, 170);
// ctx.lineTo(290, 230);
// ctx.stroke();
// // right hand
// ctx.beginPath();
// ctx.moveTo(360, 170);
// ctx.lineTo(430, 230);
// ctx.stroke();
// // left leg
// ctx.beginPath();
// ctx.moveTo(360, 260);
// ctx.lineTo(290, 330);
// ctx.stroke();
// // right leg
// ctx.beginPath();
// ctx.moveTo(360, 260);
// ctx.lineTo(430, 330);
// ctx.stroke();
