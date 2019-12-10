class AnimalLevelCanvas {
    constructor(height, width, gridSize) {
      this.dirtColor = "rgba(40, 51, 40, 0.95)";
      this.grassColor = "rgba(85, 226, 156, 1)";
      this.gridSize = gridSize;
      this.height = height;
      this.width = width;
      this.wormImg = document.getElementById('worm');
      this.mouseImg = document.getElementById('mouse');
      this.fishImg = document.getElementById('fish');
      this.snakeImg = document.getElementById('snake');
      this.prep()
    }

    prep(){
        this.canvas = document.getElementById('animals');
        if (this.canvas.getContext){
                      this.ctx = this.canvas.getContext('2d');
                      fix_dpi(this.canvas);
                      this.setUpGrid()
              }
    }

    setUpGrid(){
        this.cells = new Array(this.gridSize**2);
        this.animals = new Array(this.gridSize**2);
    }

    updateState(state){
        this.cells = state.cells;
        this.animals = state.animals
        this.redraw();
    }

    redraw(){
        this.ctx.clearRect(0, 0, this.width, this.height);
        var x = 0;
        var y = 0;
        this.dx = this.width / this.gridSize;
        this.dy = this.height / this.gridSize;
        var count = 0;
        for(var i = 0; i <= this.gridSize - 1; i++){
            for(var j = 0; j <= this.gridSize - 1;  j++){
                if(this.animals[count] == "worm"){
                    var ran = Math.random() * 10
                    this.ctx.drawImage(this.wormImg, x+ran, y-ran, this.dx, this.dy);
                }
                else if(this.animals[count] == "mouse"){
                        this.ctx.drawImage(this.mouseImg, x, y, this.dx, this.dy);
                }
                else if(this.animals[count] == "snake"){
                        this.ctx.drawImage(this.snakeImg, x, y, this.dx, this.dy);
                }
                else if(this.animals[count] == "fish"){
                        this.ctx.drawImage(this.fishImg, x, y, this.dx, this.dy);
                }
                count++;
                x += this.dx;
            }
            x=0;
            y += this.dy;
        }
    }

}