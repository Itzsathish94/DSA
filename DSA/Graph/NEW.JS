// Implement BFS to find the shortest path between two nodes.
//      - Write a function to check if an undirected graph is fully connected.

  // dfs(startVertex) {
    //     const visited = new Set();

    //     const dfsRecursive = (vertex) => {
    //         visited.add(vertex);
    //         console.log(vertex);

    //         this.adjacencyList[vertex].forEach(neighbor => {
    //             if (!visited.has(neighbor)) {
    //                 dfsRecursive(neighbor);
    //             }
    //         });
    //     };

    //     dfsRecursive(startVertex);
    // }

    // dfsCycleDetection(startVertex) {
    //     const visited = new Set();
    //     const inRecursionStack = new Set();
    
    //     const dfsRecursive = (vertex) => {
    //         if (inRecursionStack.has(vertex)) {
    //             console.log('Cycle detected');
    //             return true;
    //         }
    
    //         if (visited.has(vertex)) {
    //             return false;
    //         }
    
    //         visited.add(vertex);
    //         inRecursionStack.add(vertex);
    
    //         for (const neighbor of this.adjacencyList[vertex]) {
    //             if (dfsRecursive(neighbor)) {
    //                 return true;
    //             }
    //         }
    
    //         inRecursionStack.delete(vertex);
    //         return false;
    //     };
    
    //     if (dfsRecursive(startVertex)) {
    //         return;
    //     }
    
    //     console.log('No cycle detected');
    // }

    isConnected(){
      const vertices = Object.keys(this.adjacencyList);

      if(vertices.length===0) return true;

      const visited = this.bfs(vertices[0]);

      for(let vertex of vertices){
          if(!visited.has(vertex)){
              return false;
          }
      }
      return true;
  }

  bfsShortestPath(start, end) {
      const visited = new Set([start]);
      const queue = [[start]];

      while (queue.length) {
          const path = queue.shift();
          const vertex = path[path.length - 1];

          if (vertex === end) return path;

          for (const neighbor of this.adjacencyList[vertex]) {
              if (!visited.has(neighbor)) {
                  visited.add(neighbor);
                  queue.push([...path, neighbor]);
              }
          }
      }

      return null;
  }

  detectCycle(startVertex){
    const visited = new Set();
    const recursionStack = new Set();
    return this.dfsCycleDetection(startVertex,visited,recursionStack); 
}

dfsCycleDetection(vertex,visited,recursionStack){
    visited.add(vertex);
    recursionStack.add(vertex);

    for (const neighbor of this.adjacencyList[vertex]){
        if(!visited.has(neighbor)){
            if(this.dfsCycleDetection(neighbor,visited,recursionStack)){
                return true;
            }
        }
        else if(recursionStack.has(neighbor)){
            return true;
        }
    }

    recursionStack.delete(vertex);
    return false;
}