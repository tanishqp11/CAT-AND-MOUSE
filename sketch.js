var ground, groundImg;
var jerry, jerry_run;
var tom, tom_running;

function preload() {
    //load the images here

    groundImg = loadImage("garden.png");
    jerryImg = loadAnimation("mouse1.png");
    jerryImage4 = loadAnimation("mouse4.png");
    jerry_run = loadAnimation("mouse2.png", "mouse3.png");
    tomImg1 = loadAnimation("cat1.png");
    tomImg4 = loadAnimation("cat4.png");
    tom_running = loadAnimation("cat2.png", "cat3.png");

}

function setup(){
    createCanvas(1000,800);
    
    ground = createSprite(500, 300);
    ground.addImage("groundImg", groundImg);
    //ground.scale = 0.7;

    tom = createSprite(670, 550, 20, 100);
    tom.addAnimation("tomImg1", tomImg1);
    tom.scale = 0.1;

    jerry = createSprite(150, 550, 10, 40);
    jerry.addAnimation("jerryImg", jerryImg);
    jerry.scale = 0.1;

}

function draw() {

    background(255);

if (tom.x - jerry.x < tom.width / 2 - jerry.width / 2) {
       tom.velocityX = 0;
       tom.addAnimation("tomImg4", tomImg4);
       tom.changeAnimation("tomImg4");
       tom.x = 300;

       jerry.addAnimation("jerryImage4", jerryImage4);
       jerry.changeAnimation("jerryImage4");
       tom.bounce(jerry);
    }

    drawSprites();
}

function keyPressed() {
    
    if (keyCode === LEFT_ARROW) {

        tom.velocityX = -5;
        tom.addAnimation("tom_running", tom_running);
        tom.changeAnimation("tom_running");

        jerry.addAnimation("jerry_run", jerry_run);
        jerry.changeAnimation("jerry_run");
    }
    
}


