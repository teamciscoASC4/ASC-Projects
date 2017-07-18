function setup(){
    createCanvas(500, 500);
    //background(R (value: 0-255), G (value: 0-255))
    background(225);
    //Making the Background
    fill('yellow');
    ellipse(width / 2, height / 2, 400);
    //every shape below this line is black
    fill('black');
    //BEASTLY
    //thicker lines
    strokeWeight(10);
    //Top sunglass line
    line(80, 150, 420, 150);
    //Mouth line
    line(150, 350, width - 150, 350);
    //RECTANGLES
    rect(150, 150, 80, 40);
    rect(width - (150 + 80), 150, 80, 40);
}

function mousePressed(){
    fill('red');
    noStroke();
    ellipse(mouseX, mouseY, 50, 50);
}