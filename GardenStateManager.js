class GardenStateManager{
     
    constructor(gridSize){
        this.canvas = document.getElementById('background')
        this.gridSize = gridSize
    }


    handleMouseClick(state, event){
        //Compute which square they selected
        let rect = this.canvas.getBoundingClientRect()
        let x = event.clientX - rect.left
        let y = event.clientY - rect.top
        let px = Math.floor((x - 15) / (width / this.gridSize));
        let py = Math.floor((y - 15) / (height / this.gridSize)) * this.gridSize;
        console.log("Guessing ", px , " plus ", py)

        //Update that square 
        
        //Check the users tool
        if(state.currentTool === "seed"){
            if(state.cells[px+py] !== 'water'){
                state.cells[px+py] = 'grass'
            }
        }
        else{
            if(state.cells[px+py] ==='dirt'){
                state.cells[px+py] = 'water'
            }else if(state.cells[px+py] !== 'water'){
                state.cells[px+py] = 'dirt'
            }
        }
        return state
    }

    handleSpaceBar(state){
        if(state.currentTool == "shovel"){
            state.currentTool = "seed"
        }else{
            state.currentTool = "shovel"
        }
        return state
    }

    //For an inital game state
    generateCells(){  
        let cells = [];
        for(var i = 0; i <= this.gridSize - 1; i++){
            for(var j = 0; j <= this.gridSize - 1;  j++){
                if(Math.random() >= .2){
                   cells.push("dirt")
                }
                else{
                    cells.push('grass');
                }
            }
        }
        return cells
    }
}

