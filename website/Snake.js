

Snake = function(x, y){
    this.velocity = 1;
    this.x = x;
    this.y = y;
    this.length = 1;
}

Snake.prototype.show = function(){
    fillRect(x, y, 100, 100);
}

Snake.prototype.update = function(){
    
}

Snake.prototype.dead = function(){

}