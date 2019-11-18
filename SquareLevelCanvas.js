class SquareLevelCanvas {
    constructor(height, width, gridSize) {
      this.dirtColor = "rgba(40, 51, 40, 0.95)";
      this.grassColor = "rgba(85, 226, 156, 1)";
      this.gridSize = gridSize;
      this.height = height;
      this.width = width;
      this.grassImg = document.getElementById('grass');
      this.dirtImg = document.getElementById('dirt');
      this.waterImg = document.getElementById('water');
      this.wormImg = document.getElementById('worm');
      this.mouseImg = document.getElementById('mouse');
      this.fishImg = document.getElementById('fish');
      this.snakeImg = document.getElementById('snake');
      this.prep()
    }

    prep(){
        this.canvas = document.getElementById('squares');
        if (this.canvas.getContext){
                      this.ctx = this.canvas.getContext('2d');
                      fix_dpi(this.canvas);
                      this.draw()
              }
    }

    draw(){
        this.setUpGrid();
    }

    setUpGrid(){
        this.cells = [];
        this.animals = []
        this.dx = this.width / this.gridSize;
        this.dy = this.height / this.gridSize;
        var x = 0;
        var y = 0;
        for(var i = 0; i <= this.gridSize - 1; i++){
            for(var j = 0; j <= this.gridSize - 1;  j++){
                if(Math.random() >= .2){
                    this.ctx.drawImage(this.dirtImg, x, y, this.dx, this.dy);
                    this.cells.push("dirt")
                    this.animals.push("none")
                }
                else{
                    this.ctx.drawImage(this.grassImg, x, y, this.dx, this.dy);
                    this.cells.push('grass');
                    this.animals.push("none")
                }
                x += this.dx;
            }
            x=0;
            y += this.dy;
        }
        this.redraw()
    }

    updateState(state){
        this.cells = state.cells;
        this.animals = state.animals
        this.redraw();
    }

    updateCell(index){

        this.cells[index] = this.cells[index] == 'grass' ? this.cells[index] = 'dirt' : this.cells[index] = 'grass';
        this.redraw();
    }

    redraw(){
        this.ctx.clearRect(0, 0, this.width, this.height);
        var x = 0;
        var y = 0;
        var count = 0;
        for(var i = 0; i <= this.gridSize - 1; i++){
            for(var j = 0; j <= this.gridSize - 1;  j++){
                if(this.cells[count]=="dirt"){
                    this.ctx.drawImage(this.dirtImg, x, y, this.dx, this.dy);
                    if(this.animals[count] == "worm"){
                        this.ctx.drawImage(this.wormImg, x, y, this.dx, this.dy);
                    }
                }
                else if(this.cells[count]=="grass"){
                    this.ctx.drawImage(this.grassImg, x, y, this.dx, this.dy);
                    if(this.animals[count] == "mouse"){
                        this.ctx.drawImage(this.mouseImg, x, y, this.dx, this.dy);
                    }
                    if(this.animals[count] == "snake"){
                        this.ctx.drawImage(this.snakeImg, x, y, this.dx, this.dy);
                    }
                }
                else if(this.cells[count]=="water"){
                    this.ctx.drawImage(this.waterImg, x, y, this.dx, this.dy);
                    if(this.animals[count] == "fish"){
                        this.ctx.drawImage(this.fishImg, x, y, this.dx, this.dy);
                    }
                }
                count++;
                x += this.dx;
            }
            x=0;
            y += this.dy;
        }
    }

}