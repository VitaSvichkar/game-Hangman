export default function draw(ctx) {
  ctx.beginPath();
  ctx.moveTo(360, 160);
  ctx.lineTo(360, 100);
  //  /
  ctx.lineTo(170, 100); // /
  ctx.lineTo(90, 200); // /
  ctx.lineTo(170, 100); // _
  // |
  ctx.lineTo(90, 100);
  ctx.lineTo(90, 500);
  //  __
  ctx.lineTo(20, 500);
  ctx.lineTo(490, 500);
  ctx.lineWidth = 10;
  ctx.strokeStyle = ' rgb(249, 245, 241';
  ctx.stroke();

  return function (count) {
    switch (count) {
      case 1:
        // head
        ctx.beginPath();
        ctx.arc(360, 192, 33, 0, 2 * Math.PI);
        ctx.lineWidth = 5;
        ctx.strokeStyle = '#fa962b';
        ctx.stroke();
        break;
      case 2:
        // body
        ctx.beginPath();
        ctx.moveTo(360, 224);
        ctx.lineTo(360, 340);
        ctx.stroke();
        break;
      case 3:
        // left hand
        ctx.beginPath();
        ctx.moveTo(360, 250);
        ctx.lineTo(310, 310);
        ctx.stroke();
        break;
      case 4:
        // right hand
        ctx.beginPath();
        ctx.moveTo(360, 250);
        ctx.lineTo(410, 310);
        ctx.stroke();
        break;
      case 5:
        // left leg
        ctx.beginPath();
        ctx.moveTo(360, 338);
        ctx.lineTo(300, 390);
        ctx.stroke();
        break;
      case 6:
        // right leg
        ctx.beginPath();
        ctx.moveTo(360, 338);
        ctx.lineTo(420, 390);
        ctx.stroke();
        break;
      default:
        return;
    }
  };
}
