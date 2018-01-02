window.onload =(function run(){
    var canvas = document.querySelector('canvas'),
    ctx = canvas.getContext('2d'),
    width = window.innerWidth,
    height = window.innerHeight,
    bubbles = [],
    bubblesNum = 100;  
  
    canvas.width=width;
 canvas.height=height;
  
    function Bubble(){
      this.x = width * Math.random();
      this.y = height;
      this.speedY = Math.random() * 5;
      this.speedX = Math.random() * 2;
      this.accX = Math.random() * -0.1;
      this.r = Math.random() * 8 + 2;
      this.opa = Math.random() - 0.1;
    }
    Bubble.prototype.float = function(){
      this.y -= this.speedY;
      this.x += this.speedX - 1;
      if(this.speedX < 0 || this.speedX >1) this.accX *= -1;
      this.speedX+= this.accX;
      if(this.y < 0){
        this.y = height;
        this.x = width * Math.random();
      }
    }
  
    ctx.strokeStyle = "rgba(255,255,255,1)";
    ctx.lineWidth = 3;
    for(let i=0;i<bubblesNum;i++){
           bubbles.push(new Bubble());
    }
  
    function draw(){
  ctx.clearRect(0,0,width,height);

 bubbles.forEach(function(bubble){ 
          ctx.fillStyle = "rgba(255,255,255,"+bubble.opa+")";
          bubble.float();
          ctx.beginPath();
 ctx.arc(bubble.x,bubble.y,bubble.r,0,2*Math.PI);
          ctx.fill();
          ctx.stroke();
        });
      
        requestAnimationFrame(draw);
    }
    
    requestAnimationFrame(draw);
    
    function resize(){
        width=window.innerWidth;
        height=window.innerHeight;
        canvas.width=width;
        canvas.height=height;
        ctx.strokeStyle = "rgba(255,255,255,1)";
        ctx.lineWidth = 3;
    }
    
    window.addEventListener('resize',resize);
    
})();