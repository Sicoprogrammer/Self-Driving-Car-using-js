class Car{
    constructor(x,y,width,height){//defining parameters
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;//storing the parameters as attributes 

        this.controls=new Controls();
    }
    draw(ctx){
        ctx.beginPath();
        ctx.rect(
            this.x-this.width/2,
            this.y-this.height/2,
            this.width,
            this.height
        );//making a car
        ctx.fill();
    }
}
