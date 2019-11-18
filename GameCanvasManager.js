
class GameCanvasManager{
    constructor(height, width, gridSize) {
        this.gridSize = gridSize;
        this.height = height;
        this.width = width;
        this.canvasBox = document.getElementById("Page");
        this.floorLayer = new SquareLevelCanvas(height, width, gridSize)
        this.backgroundLayer = new BackgroundLevelCanvas(height, width)
        this.toolAssets = {seed: "url(assets/seedSmall.png), auto",
                           shovel: "url(assets/ShovelSmall.png), auto"}
    }

    updateCanvas(state){
        this.floorLayer.updateState(state);
        this.updateIcon(state.currentTool)
    }

    updateIcon(tool){
        this.canvasBox.style.cursor = this.toolAssets[tool];
    }
}