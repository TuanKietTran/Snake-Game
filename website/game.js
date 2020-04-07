var c = document.getElementById("myCanvas");
var snake = new Snake(50,50);

if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    // drawing code here
    snake.show();
    snake.update();
  } else {
    // canvas-unsupported code here
  }

