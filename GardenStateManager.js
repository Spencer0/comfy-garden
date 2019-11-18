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

    handleGameTick(state){
        //Search the ground for nodes (defined as squares of one type)

        for(var i = 0; i < this.gridSize**2; i++){
            if(i >= this.gridSize + 2 ){
                var north = state.cells[i - this.gridSize];
                var animalNorth = state.animals[i - this.gridSize];
                var northwest = state.cells[i - this.gridSize - 1];
                var animalNorthwest = state.animals[i - this.gridSize - 1];
                var northeast = state.cells[i - this.gridSize + 1];
                var animalNortheast = state.animals[i - this.gridSize + 1];
                var east = state.cells[i + 1];
                var animalEast = state.animals[i + 1];
                var west = state.cells[i - 1];
                var animalWest = state.animals[i - 1];
            }else{
                continue 
            }
            if(i < this.gridSize**2 - (this.gridSize + 2)){
                var south = state.cells[i + this.gridSize];
                var animalSouth = state.animals[i + this.gridSize];
                var southwest = state.cells[i + this.gridSize - 1];
                var animalSouthwest = state.animals[i + this.gridSize - 1];
                var southeast = state.cells[i + this.gridSize +  1];
                var animalSoutheast = state.animals[i + this.gridSize +  1];
            }else{
                continue
            }
            let compass = [north, northeast, northwest, south, southeast, southwest, east , west]
            let animalCompass = [animalNorth, animalNortheast, animalNorthwest, animalSouth, animalSoutheast, animalSouthwest, animalEast , animalWest]
            if(compass.every( (val, i, arr) => val === arr[0] )){
                if(north == "dirt"){
                    if(Math.random() >= .99 && state.wormPopulation < this.gridSize){
                        state.wormPopulation++;
                        state.animals[i] = "worm";
                    }
                }
                if(north == "grass"){
                    if(Math.random() >= .90){
                        if(state.animals[i] !== "snake"){
                            state.animals[i] = "mouse";
                        }
                    }
                }
                if(north == "water"){
                    if(Math.random() >= .80){
                        state.animals[i] = "fish";
                    }
                }
            }
            if(animalCompass.every( (val, i, arr) => val === arr[0] && (val !== "x" && val))){
                console.log("Snake Spawned..", animalCompass)
                state.animals[i] = "snake";
                let neigbors = [i - this.gridSize, i + this.gridSize, i + this.gridSize + 1, i + this.gridSize - 1, i - this.gridSize + 1, i - this.gridSize - 1, i-1, i+1]
                neigbors.map(function(elem){
                    state.animals[elem] = "x";
                })
            }
        }
        return state
        
    }

    //For an inital game state
    generateCells(){  
        let cells = [];
        let animals = [];
        for(var i = 0; i <= this.gridSize - 1; i++){
            for(var j = 0; j <= this.gridSize - 1;  j++){
                if(Math.random() >= .2){
                   cells.push("dirt")
                   animals.push("x")
                }
                else{
                    cells.push('grass');
                    animals.push("x")
                }
            }
        }
        return cells
    }
}

