import "./BFS.css"

class Queue
{ 
    // Array is used to implement a Queue 
    constructor(){
        this.items = []; 

        this.visited = new Array(21) //array of 0 to 20 declared
        for (let i = 1; i <= 20; i++) { 
            this.visited[i] = new Array(51); //each array will have an array of size 51( 0 to 50) 
        } 

        for (let i = 1; i <= 20; i++) { 
            for (var j = 1; j <= 50; j++) { 
                this.visited[i][j] = false; 
            } 
        } 
    }
    
    checkVisited(elementId)
    {
        let [rowInInt, colInInt] = getRowCol(elementId) 

        return this.visited[rowInInt][colInInt];
    }

    markVisited(elementId)
    {
        let [rowInInt, colInInt] = getRowCol(elementId) 

        this.visited[rowInInt][colInInt] = true;
    }
    enqueue(element)
    {    
        this.items.push(element); 
    } 

   dequeue()
    { 
        if(this.isEmpty()) 
            return "Underflow"; 
        return this.items.shift(); 
    } 
    
    front() 
    { 
    // returns the Front element of  
    // the queue without removing it. 
        if(this.isEmpty()) 
            return "No elements in Queue"; 
        return this.items[0]; 
    } 
       
    isEmpty() 
    { 
        // return true if the queue is empty. 
        return this.items.length === 0; 
    } 

} 

let queue = new Queue();

let parent = new Array(21) //array of 0 to 20 declared
for (let i = 1; i <= 20; i++) { 
    parent[i] = new Array(51); //each array will have an array of size 51( 0 to 50) 
} 

async function BFS(homeId, destId){

    //id is in string format like '1-2'
    queue.enqueue(homeId);

    queue.markVisited(homeId);

    let pathFound = false;
    while(!queue.isEmpty()){

        let current = queue.dequeue();

        await new Promise( (resolve, reject) => { setTimeout( () => {
            resolve()
        }, 10) })

        document.getElementById(current).classList.add("visitedStartNodeBlue")

        if(current === destId)
        {
            pathFound = true
            queue.items = [];//empty the queue
            break;
        }
        
        let neighbours = getNeighbour(current);
    
        for(let i = 0; i < 4; i++)
        {
                if(neighbours[i] !== null && ( !queue.checkVisited(neighbours[i]) ) ){
                        queue.enqueue( neighbours[i] );
                        queue.markVisited( neighbours[i] );
                        
                        markParent(neighbours[i], current)
                        //  parentID[parseInt(neighbours[i])] = current; //index is number and id is stored as string
                }
                    
        }
        
    }

    if(pathFound)
    printPath(homeId, destId)
    else
    alert("Destination node not found")
}

function getNeighbour(elementId){

    let [rowInInt, colInInt] = getRowCol(elementId) //"1-2" will be passesand we'll get 1 and 2 in number format

    let prev = null;
    let next = null;
    let up = null;
    let down = null;
    
    //if element has a left neighbour and it is not a wall
    if(colInInt - 1 > 0 && !document.getElementById(rowInInt.toString()+'-'+(colInInt-1).toString()).classList.contains("wall")) 
    prev = rowInInt.toString() + "-" + (colInInt-1).toString()

    if(colInInt + 1 < 51 && !document.getElementById(rowInInt.toString()+'-'+(colInInt+1).toString()).classList.contains("wall"))
    next = rowInInt.toString() + "-" + (colInInt + 1).toString()

    if(rowInInt - 1 > 0 && !document.getElementById((rowInInt-1).toString()+'-'+(colInInt).toString()).classList.contains("wall"))
    up = (rowInInt - 1).toString() + "-" + colInInt.toString()

    if(rowInInt + 1  < 21 && !document.getElementById((rowInInt+1).toString()+'-'+(colInInt).toString()).classList.contains("wall"))
    down = (rowInInt + 1).toString() + "-" + colInInt.toString()
        
    return [prev, next, up, down];

}

function getRowCol(elementId) {
    
    let parsed = elementId.split('-')
    let row = parsed[0]
    let col = parsed[1]
    let rowInInt = parseInt(row)
    let colInInt = parseInt(col)

    return [rowInInt, colInInt]
}

function markParent(childId, parentID){
    //if childid is '20-5', we will get 20 & 5 as o/p
   const [childRowInInt, childColInInt] = getRowCol(childId)

   //in 20th row and 5th col of parent array, store passed parentId as parent
   parent[childRowInInt][childColInInt] = parentID
}

async function printPath(homeId, destId){

    while(destId !== homeId){
        console.log(destId, homeId)
        const [rowInInt, colInInt] = getRowCol(destId)
        const parentOfCurrentNode = parent[rowInInt][colInInt]
        console.log("parent of current", parentOfCurrentNode)

        await new Promise( (resolve, reject) => { setTimeout( () => {resolve()}, 50) })
        document.getElementById(destId).classList.remove("visitedStartNodeBlue")
        document.getElementById(destId).classList.add("visitedYellowPath")
        destId = parentOfCurrentNode
    }
    // document.getElementById(destId).classList.remove("visitedStartNodeBlue")
    // document.getElementById(destId).classList.add("visited")
}
export {BFS, getNeighbour, getRowCol, markParent, printPath} 
export default BFS