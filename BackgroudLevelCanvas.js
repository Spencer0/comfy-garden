

class BackgroundLevelCanvas {
    constructor(height, width) {
      this.height = height;
      this.width = width;
      this.canvas = document.getElementById('background');
      if (this.canvas.getContext){
					this.ctx = this.canvas.getContext('2d');
					fix_dpi(this.canvas);
					this.draw()
			}
    }

    draw(){
      this.drawBoard();
    }

    drawBoard(){
        for (var x = 0; x <= this.width; x += this.width / 10) {
					this.ctx.moveTo(0.5 + x, 0);
					this.ctx.lineTo(0.5 + x, this.height);
        }
    
        for (var x = 0; x <= this.height; x += this.height / 10) {
					this.ctx.moveTo(0, 0.5 + x);
					this.ctx.lineTo(this.width, 0.5 + x);
        }
        this.ctx.strokeStyle = "grey";
        this.ctx.stroke();
    }
}