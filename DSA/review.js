class Graph{
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = new Set();
        }
    }

    addEdge(vertex1,vertex2){
        if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjacencyList[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjacencyList[vertex1].add(vertex2);
        this.adjacencyList[vertex2].add(vertex1);
    }

    display(){
        for(const vertex in this.adjacencyList){
            console.log(vertex + "->" + [...this.adjacencyList[vertex]])
        }
    }

    hasEdge(vertex1,vertex2){
        return (
            this.adjacencyList[vertex1].has(vertex2) &&
            this.adjacencyList[vertex2].has(vertex1)
        )
    }

    removeEdge(vertex1,vertex2){
        this.adjacencyList[vertex1].delete(vertex2);
        this.adjacencyList[vertex2].delete(vertex1);
    }

    removeVertex(vertex){
        if(!this.adjacencyList[vertex]){
            return
        }
        for(let adjacentVertex of this.adjacencyList[vertex]){
            this.removeEdge(vertex,adjacentVertex)
        }

        delete this.adjacencyList[vertex]
    }

    bfs(startVertex){
        const visited = new Set();
        const queue = [startVertex];
        visited.add(startVertex);

        while(queue.length > 0){
            const vertex = queue.shift();
            console.log(vertex);

            this.adjacencyList[vertex].forEach(neighbor=>{
                if(!visited.has(neighbor)){
                    visited.add(neighbor);
                    queue.push(neighbor)
                }
            })
        }
    }

    dfs(startVertex){
        const visited = new Set();
        const stack = [startVertex];

        while(stack.length > 0 ){
            const vertex = stack.pop();
            console.log(vertex);

            const neighbors = this.adjacencyList[vertex];
            for(let i=neighbors.length-1;i>=0;i--){
                const neighbor = neighbors[i];
                if(!visited.has(neighbor)){
                    visited.add(neighbor);
                    stack.push(neighbor)
                }
            }
        }
    }
}