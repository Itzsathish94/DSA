class WeightedGraph {
    constructor() {
      this.adjacencyList = {};
    }
  
    addVertex(vertex) {
      if (!this.adjacencyList[vertex]) {
        this.adjacencyList[vertex] = [];
      }
    }
  
    addEdge(vertex1, vertex2, weight) {
      if (!this.adjacencyList[vertex1]) {
        this.addVertex(vertex1);
      }
      if (!this.adjacencyList[vertex2]) {
        this.addVertex(vertex2);
      }
      // Since it's an undirected graph, add the edge in both directions
      this.adjacencyList[vertex1].push({ vertex: vertex2, weight: weight });
      this.adjacencyList[vertex2].push({ vertex: vertex1, weight: weight });
    }
  
    display() {
      for (const vertex in this.adjacencyList) {
        const edges = this.adjacencyList[vertex].map(edge => `${edge.vertex} (${edge.weight})`);
        console.log(`${vertex} -> ${edges.join(', ')}`);
      }
    }
  }
  
  // Example Usage
  const graph = new WeightedGraph();
  graph.addVertex("A");
  graph.addVertex("B");
  graph.addVertex("C");
  graph.addEdge("A", "B", 5);
  graph.addEdge("A", "C", 2);
  graph.addEdge("B", "C", 1);
  
  graph.display();
  