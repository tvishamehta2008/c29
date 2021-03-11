class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.img1=loadImage("sprites/sling1.png");
        this.img2=loadImage("sprites/sling2.png");
        this.img3=loadImage("sprites/sling3.png");
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            stroke(48,22,8);
            if(pointA.x<220){
                line(pointA.x-25, pointA.y, pointB.x, pointB.y);
                line(pointA.x-25, pointA.y, pointB.x+25, pointB.y);
                image(this.img3,pointA.x-25, pointA.y-10,15,30);
            }
            else{
                line(pointA.x+25, pointA.y, pointB.x, pointB.y);
                line(pointA.x+25, pointA.y, pointB.x+25, pointB.y-10);
                image(this.img3,pointA.x+25, pointA.y-10,15,30);  
            }
           
        }
        image(this.img1,200,25);
        image(this.img2,175,25);
    }
    
}