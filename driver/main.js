
function main(){

    //Set up state (Just contained in main for now)
   

    var GardenState = {
        population: {
            total: 0,
            worms: 0,
            mice: 0,
            snakes: 0,
            fish: 0,
        },
        cells: [],
        animals: [],
        tools : ["shovel", "seed"],
        currentTool: "shovel",
    }


    //Determine Global Variables 
    const gridSize = 100;
    const height = 600;
    const width = 800;


    //Managers to help with the state and canvas
    const cm = new GameCanvasManager(height, width, gridSize)
    const gm = new GardenStateManager(gridSize)

    //Start up the canvas
    GardenState.cells = gm.generateCells();
    cm.updateCanvas(GardenState)


    //Input Watching Functions
    //Each is of the pattern

    //Upon input
    //Compute new state
    //Update screen
    const canvas = document.getElementById('background')
    canvas.addEventListener('mousedown', function(event) {
        GardenState = gm.handleMouseClick(GardenState, event)
        cm.updateCanvas(GardenState)
    })

    canvas.addEventListener('keydown', function(event) {
        if(event.key == ' '){
            console.log("Space bar pressed")
            GardenState = gm.handleSpaceBar(GardenState)
        }
        cm.updateCanvas(GardenState)
    })
    canvas.addEventListener('keydown', function(event) {
        if(event.key == 's'){
            console.log("s  pressed")
            console.log(GardenState)
            GardenState = gm.handleGameTick(GardenState)
        }
        cm.updateCanvas(GardenState)
    })

    setInterval(function(){ 
        GardenState = gm.handleGameTick(GardenState);
        cm.updateCanvas(GardenState);
     }, 1000);

    

}