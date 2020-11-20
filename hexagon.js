class Hexagon
{
    constructor(x,y){
       
        var option = {
            isStatic: false,
                'restitution':0.8,
                'friction':1.0,
                'density':1.0
            
        }

        this.body = Bodies.rectangle(x,y,20,20,option)
        this.image = loadImage("download.png")
        World.add(world,this.body)
    }
    display(){

        var pos = this.body.position

        //this.body.position.x = mouseX;
        //this.body.position.y = mouseY;
        
        imageMode(CENTER)
        image(this.image,pos.x,pos.y,50,50)
    }
}