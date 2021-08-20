let img;
function preload() {
  img = loadImage("image.jpeg");
}

function setup() {
  // The size of our starting canvas: 400px width, 400px height
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  // The same as doing: background(220); or --> background(220,220,220);
  background(250);
  translate(width / 2, height / 2);
  circle(0, 0, 380);
  let sec = second();
  let min = minute();
  let hr = hour();
  let secAngle = map(sec, 0, 60, 0, 360);
  let minAngle = map(min, 0, 60, 0, 360) + map(sec, 0, 60, 0, 6);
  let hrAngle = map(hr % 12, 0, 12, 0, 360) + map(min, 0, 60, 0, 6);
  image(img, -15, 15, 30, 30);
  rotate(-90);
  noFill();
  strokeWeight(4);

  //////////min
  stroke("#495057");
  arc(0, 0, 250, 250, 0, minAngle);
  //////////hr
  stroke("#212529");
  arc(0, 0, 200, 200, 0, hrAngle);

  push();
  noStroke();
  rotate(90);
  textSize(15);
  fill("#212529");
  text("𝐊𝟗 𝐄-𝐬𝐩𝐨𝐫𝐭𝐬", -40.5, 55);
  text(hr + ":" + min + ":" + sec, -28, 73);
  pop();

  push();
  stroke("#495057");
  rotate(minAngle);
  line(0, 0, 75, 0);
  pop();

  push();
  stroke("#212529");
  rotate(hrAngle);
  line(0, 0, 50, 0);
  pop();

  push();
  stroke("#495057");
  strokeWeight(3);
  fill(255);
  ellipse(0, 0, 7, 7);
  pop();

  ///////////////////////////////
  push();
  rotate(90);
  stroke("#212529");
  strokeWeight(1.5);
  textSize(30);
  text("12", -20, -160);
  line(0, -155, 0, -140);
  pop();

  push();
  rotate(90);
  stroke("#212529");
  strokeWeight(1.5);
  textSize(30);
  text("3", 160, 9);
  line(155, 0, 140, 0);
  pop();

  push();
  rotate(90);
  stroke("#212529");
  strokeWeight(1.5);
  textSize(30);
  text("6", -8, 180);
  line(0, 155, 0, 140);
  pop();

  push();
  stroke("#212529");
  strokeWeight(1.5);
  textSize(30);
  rotate(90);
  text("9", -175, 8);
  line(-155, 0, -140, 0);
  pop();
  ///////////////////////////////
}
