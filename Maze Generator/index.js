var cols,rows;
var w = 14;
var cells = [];
var current;
var stack = [];
var opening = false;
function setup(){

   createCanvas(600,600);
   rows = 40;
   cols = 40;
   //frameRate(5);
   for(var i=0;i<rows;i++){
       for(var ii=0;ii<cols;ii++){
           cells.push(new Cell(ii,i));
       }
   }

   current = cells[0];
}

function draw(){
   background(51);
   translate(20,20);
   for(var i=0;i<cells.length;i++){
      cells[i].show();
      if(cells[i]==current){
        cells[i].showAsCurrent();
    }
   }
   
   current.visited = true;
   current.show();
   var neighbours = [];
   var right = current.x == (cols-1) ? undefined : cells[current.y*cols+current.x+1];
   var left = current.x == 0 ? undefined : cells[current.y*cols+current.x-1];
   var top = current.y == 0 ? undefined : cells[(current.y-1)*cols+current.x];
   var bottom = current.y == (cols-1) ? undefined : cells[(current.y+1)*cols+current.x];

   if(right && !right.visited)
      neighbours.push(right);
   if(left && !left.visited)
      neighbours.push(left);
   if(top && !top.visited)
      neighbours.push(top);
   if(bottom && !bottom.visited)
      neighbours.push(bottom);
    if(neighbours.length>0){

      var selected = neighbours[Math.floor(random(neighbours.length))];
      if(selected === right){
          current.walls[1]=false;
          selected.walls[3]=false;
          if(selected.x == cols-1 && !opening && selected.y%3==0){
              selected.walls[1]=false;
              opening = true;
          }
      }else if(selected === left){
          current.walls[3]=false;
          selected.walls[1]=false;
      }else if(selected === top){
          current.walls[0]=false;
          selected.walls[2]=false;
      }else{
          current.walls[2]=false;
          selected.walls[0]=false;
      }
      current = selected;
      stack.push(current);
    }else{
      current = stack.pop();
    }
}
