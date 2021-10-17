const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world,backgroundimg,man,manimg1;




function preload() {
    backgroundimg=loadImage("images/background.png");
    manimg1=loadImage("images/man1.png.png");
   
}

function setup(){
     canvas = createCanvas(displayWidth,displayHeight-200);
    man=createSprite(displayWidth-200,displayHeight-350,30,700);
    man.addImage(manimg1);
   
}

function draw(){
    background(backgroundimg);
   

    drawSprites();
   
}

