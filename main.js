var canvas = new fabric.Canvas("myCanvas");

var player_x = 10;
var player_y = 10;

var block_x = 30;
var block_y = 30;

var player_object = "";
var block_object = "";

function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
      player_object= Img;
      player_object.scaleToWidth(150);
      player_object.scaleToHeight(140);
      player_object.set({top:player_x, left:player_y
      });
      canvas.add(player_object);
    });
}

function block_update(get_block){
    fabric.Image.fromURL(get_block, function(Img){
      block_object= Img;
      block_object.scaleToWidth(block_x);
      block_object.scaleToHeight(block_y);
      block_object.set({top:player_x, left:player_y
      });
      canvas.add(block_object);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
 var keypressed = e.keyCode;
 if(keypressed == '38'){
   up();
   console.log("up")
 } 
 if(keypressed == '40'){
  down();
  console.log("down")
} 
if(keypressed == '37'){
  left();
  console.log("left")
} 
if(keypressed == '39'){
  right();
  console.log("right")
} 
if(keypressed == '67'){
  block_update("cloud.jpg")
  console.log("c")
} 
if(keypressed == '68'){
  block_update("dark_green.png")
  console.log("d")
} 
if(keypressed == '71'){
  block_update("ground.png")
  console.log("g")
} 
if(keypressed == '76'){
  block_update("light_green.png")
  console.log("l")
} 
if(keypressed == '82'){
  block_update("roof.jpg")
  console.log("r")
} 
if(keypressed == '84'){
  block_update("trunk.jpg")
  console.log("t")
} 
if(keypressed == '85'){
  block_update("unique.png")
  console.log("u")
} 
if(keypressed == '87'){
  block_update("wall.jpg")
  console.log("w")
} 
if(keypressed == '89'){
  block_update("yellow_wall.png")
  console.log("y")
}
if(e.shiftKey == true && keypressed == '80'){
  block_x=block_x+10;
  block_y = block_y + 10;
  document.getElementById("current_width").innerHTML = block_x;
  document.getElementById("current_height").innerHTML = block_y;
} 
if(e.shiftKey == true && keypressed == '77'){
  block_x=block_x-10;
  block_y = block_y - 10;
  document.getElementById("current_width").innerHTML = block_x;
  document.getElementById("current_height").innerHTML = block_y;
} 
}


function up(){
  if(player_y>=0){
    player_y = player_y - block_y;
    canvas.remove(player_object);
    player_update();
    console.log("up")
  }
}
function down(){
  if(player_y<=600){
    player_y = player_y + block_y;
    canvas.remove(player_object);
    player_update();
    console.log("down")
  }
}

function left(){
  if(player_x>=0){
    player_x = player_x - block_x;
    canvas.remove(player_object);
    player_update();
    console.log("left")
  }
}

function right(){
  if(player_x<=600){
    player_x = player_x - block_x;
    canvas.remove(player_object);
    player_update();
    console.log("right")
  }
}