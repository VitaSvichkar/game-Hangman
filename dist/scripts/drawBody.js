"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function draw(ctx) {
    ctx.beginPath();
    ctx.moveTo(300, 100);
    ctx.lineTo(300, 10);
    //  /
    ctx.lineTo(100, 10); // /
    ctx.lineTo(10, 130); // /
    ctx.lineTo(100, 10); // _
    // |
    ctx.lineTo(10, 10);
    ctx.lineTo(10, 450);
    //  __
    ctx.lineTo(20, 450);
    ctx.lineTo(350, 450);
    ctx.lineWidth = 10;
    ctx.strokeStyle = ' rgb(249, 245, 241';
    ctx.stroke();
    return function (count) {
        switch (count) {
            case 1:
                // head
                ctx.beginPath();
                ctx.arc(300, 133, 33, 0, 2 * Math.PI);
                ctx.lineWidth = 6;
                ctx.strokeStyle = '#fa962b';
                ctx.stroke();
                break;
            case 2:
                // body
                ctx.beginPath();
                ctx.moveTo(300, 163);
                ctx.lineTo(300, 290);
                ctx.stroke();
                break;
            case 3:
                // left hand
                ctx.beginPath();
                ctx.moveTo(300, 190);
                ctx.lineTo(250, 260);
                ctx.stroke();
                break;
            case 4:
                // right hand
                ctx.beginPath();
                ctx.moveTo(300, 190);
                ctx.lineTo(350, 260);
                ctx.stroke();
                break;
            case 5:
                // left leg
                ctx.beginPath();
                ctx.moveTo(300, 288);
                ctx.lineTo(250, 370);
                ctx.stroke();
                break;
            case 6:
                // right leg
                ctx.beginPath();
                ctx.moveTo(300, 288);
                ctx.lineTo(340, 370);
                ctx.stroke();
                break;
            default:
                return;
        }
    };
}
exports.default = draw;
