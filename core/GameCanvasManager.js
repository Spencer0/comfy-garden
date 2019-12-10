
class GameCanvasManager{
    constructor(height, width, gridSize) {
        this.gridSize = gridSize;
        this.height = height;
        this.width = width;
        this.canvasBox = document.getElementById("gameLayer");
        this.floorLayer = new SquareLevelCanvas(height, width, gridSize)
        this.backgroundLayer = new BackgroundLevelCanvas(height, width)
        this.animalLayer = new AnimalLevelCanvas(height, width, gridSize)
        this.toolAssets = {seed: "url(../assets/seedSmall.png), auto",
                           shovel: "url(../assets/ShovelSmall.png), auto"}
    }

    updateCanvas(state){
        this.floorLayer.updateState(state);
        this.animalLayer.updateState(state);
        this.updateIcon(state.currentTool)
        this.updateStats(state)
    }

    updateIcon(tool){
        this.canvasBox.style.cursor = this.toolAssets[tool];
    }

    updateStats(state){
        //This function will change population and current tool on the right side
        var statsElem = document.getElementById("stats")
        statsElem.innerHTML = "population: " + state.population.total + "<br>" + " current tool: " + state.currentTool;
    }
}