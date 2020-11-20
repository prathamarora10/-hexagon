class Box
{
    constructor(x,y,width,height){

        var option = {
            'restitution':0.8,
            'friction':1.0,
            'density':0.7
        }
        this.body = Bodies.rectangle(x,y,width,height,option)
        this.width = width
        this.height = height
        World.add(world,this.body)
        this.Visiblity = 255
        //console.log(this.body)
    }
    display()
    {
        var pos = this.body.position
        var angle = this.body.angle
        if(this.body.speed < 2){
            push();
            translate(pos.x,pos.y);
            rotate(angle);
           fill('blue')
            rectMode(CENTER)
            rect(0,0,this.width,this.height)
            pop();
          }else {
            World.remove(world,this.body)
            push()
            this.Visiblity = this.Visiblity - 5
            tint(255,this.Visiblity)
            fill('blue')
            rectMode(CENTER)
            rect(pos.x,pos.y,this.width,this.height)
            pop()
          }

       
    }
}
