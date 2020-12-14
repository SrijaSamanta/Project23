class walls{
    constructor(x,y,width,height){
        var options={
            'isStatic':true,
            'friction':1.8,
            'density':1.0
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        rectMode(CENTER);
        fill("red");
        console.log(pos.x);
        rect(pos.x,pos.y,this.width,this.height);

    }
}