
import {getNeighbour, getRowCol, markParent, printPath} from "./BFS"


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


class Stack { 
  
    constructor() 
    { 
        this.elements = []; 
    } 
  
    push(element) 
    { 
        this.elements.push(element); 
    } 
    pop() 
    { 
        if (this.elements.length === 0) 
            return "Underflow"; 
        return this.elements.pop(); 
    } 
    peek() 
    { 
        return this.elements[this.elements.length - 1]; 
    } 
    isEmpty() 
    { 
        return this.elements.length === 0; 
    }       
} 

let stack = new Stack();

let parent = new Array(21) //array of 0 to 20 declared
for (let i = 1; i <= 20; i++) { 
    parent[i] = new Array(51); //each array will have an array of size 51( 0 to 50) 
} 

//let targetFound = false

/*async function DFS(homeId, destId){

    if(homeId === destId){
        targetFound = true;
        return;
    }
   

    else{
    

        document.getElementById(homeId).classList.add("visitedStartNodeBlue")
        queue.markVisited(homeId)
        let neighbours = getNeighbour(homeId)
       
        for(let i = 0; i < 4; i++)
        {
                if(neighbours[i] !== null && ( !queue.checkVisited(neighbours[i]) ) && !targetFound){

                        await new Promise( (resolve, reject) => { setTimeout( () => {
                            resolve()
                        }, 10) }).then( ()=> {DFS(neighbours[i],destId)})
                        // DFS(neighbours[i],destId)
                        // queue.enqueue( neighbours[i] );
                        // queue.markVisited( neighbours[i] );
                        
                        // markParent(neighbours[i], current)
                        //  parentID[parseInt(neighbours[i])] = current; //index is number and id is stored as string
                }
                    
        }
    }

}*/

let pathFound = false;
async function DFS(homeId, destId){
    
    //parentID[homeId] = -1;

    stack.push(homeId); //initially pushing home element on the stack 
    queue.markVisited(homeId)//and marking it as visited

    while(!stack.isEmpty()) { 
         
                let current = stack.pop(); 
                
                await new Promise(done => setTimeout(() => done(), 10));  


                document.getElementById(current).classList.add("visitedStartNodeBlue")

                if(current === destId){
                    pathFound = true
                    queue.items = [];//empty the queue
                    break;
                }

                let neighbours = getNeighbour(current);
    
                for(let i = 0; i < 4; i++)
                {
                    //only valid and unvisited neighbours will be pushed onto the stack
                    if( neighbours[i] !== null && !queue.checkVisited(neighbours[i]) ){
                        stack.push(neighbours[i]);
                        queue.markVisited( neighbours[i] );//mark the pushed neighbours as visited
                        markParent(neighbours[i], current)
                        //parentID[parseInt(neighbours[i])] = current;
                    }
                }
            
            } 

            
            if(pathFound)
            printPath(homeId, destId)
            else
            alert("Destination node not found")   
}


export default DFS