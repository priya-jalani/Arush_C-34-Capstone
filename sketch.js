var ball
var board_1, board_2
var score
    
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
    
	var ball_options= {
		isStatc:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ball = Bodies.circle(200,400,20,ball_options)
	World.add(world,ball)
	
    ground = new Ground (width/2, 670, width, 20)
    
	board1 = new Board(width - 300, 330, 50, 200);
    board2 = new Board(width - 550, height - 300, 50, 200);

     


	Engine.run(engine);
   
	board1.display();
    board2.display();

    var board1Collision = Matter.SAT.collides(
        board1.body,
        ball[i].body
      );
 
      var board2Collision = Matter.SAT.collides(
        board2.body,
        ball[i].body
      );

	  if (board1Collision.collided || board2Collision.collided) {
        score += 5;
      }
 
      fill("#FFFF");
  textAlign("center");
  textSize(30);
  text("Score " + score, width - 200, 100);

 



}

function draw() {
  rectMode(CENTER);
  background(0);
  
  ellipse(ball.position.x, ball.position.y,20,20); 
  ground.display()
  
}

function keyPressed () {
	if (keyCode === UP_ARROW) {
    Matter.Body.applyForce (ball, ball.position, {x:85,y:-85})
	}
    
	if (keyCode === DOWN_ARROW) {
	Matter.Body.applyForce (ball,ball.position, {x:-85,y:-85})
	}

	
}
