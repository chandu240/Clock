var hr,mn,sc
var hrAngle,mnAngle, scAngle
function setup() {
  createCanvas(800,800);
  
}

function draw() {
  background(255,255,255);
  angleMode(DEGREES)
  hr = hour()
  mn = minute()
  sc = second()
  hrAngle = map(hr,0,24,0,360);
  mnAngle = map(mn,0,60,0,360);
  scAngle = map(sc,0,60,0,360)
  stroke(255,0,0)
  strokeWeight(7);
  line(400,400,hrAngle,hr)
  line(400,400,mnAngle,mn)
  line(400,400,scAngle,sc)
  //translate();
  drawSprites();
}