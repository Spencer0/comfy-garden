

//Dev log - 11/17/2019

//My game should have three things.
//A state.
//A screen.
//A user input watcher thing.



//The screen should listen for the state to change.
//It should redraw then, or every 60s check state and draw yourself
//The user inputer watches for various inputs, and relays that to the state

//Right now my user inputter 




function main(){

    //Set up state (Just contained in main for now)
   

    var GardenState = {
        cells: [],
        tools : ["shovel", "seed"],
        currentTool: "shovel",
    }

    //Determine Global Variables 
    const gridSize = 10;
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

    

}