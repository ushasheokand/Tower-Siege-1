class Box
{
    constructor(x,y,w,h , color)
    {
        var options= {
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
        }
        this.body = Bodies.rectangle(x,y,w,h,options);
        this.width = w;
        this.height= h; 
        this.color = color;
        World.add(world , this.body);
        this.visibility = 255;
    }

    display()
    {
        var pos= this.body.position;
        var angle= this.body.angle;
       
 
       
            push(); 
            strokeWeight(0);        
             
            translate(pos.x,pos.y)
            rotate(angle);
            rectMode(CENTER);
            strokeWeight(2);
            stroke("white");
            fill(this.color);
            rect(0,0,this.width,this.height);
                      
            pop();
       

    }

}