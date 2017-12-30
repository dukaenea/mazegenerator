function Cell(x,y){
    this.x = x;
    this.y = y;
    this.visited = false;
    //this.neighbours = [];
    this.walls = [true,true,true,true];

    this.show = function(){
        stroke(255);
        noFill();
        if(this.walls[0])
            line(x*w,y*w,x*w+w,y*w);
        if(this.walls[1])    
            line(x*w+w,y*w,x*w+w,y*w+w);
        if(this.walls[2])
            line(x*w+w,y*w+w,x*w,y*w+w);
        if(this.walls[3])    
            line(x*w,y*w+w,x*w,y*w);

        //if(this.visited){
          //  noStroke();
           // fill(255,0,50);
           // rect(x*w,y*w,w-5,w-5);
        //}
        
    }

    this.showAsCurrent = function(){
        noStroke();
        fill(255,255,255);
        rect(x*w,y*w,w,w);
    }
}