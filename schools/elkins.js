import {WeightedGraph} from "/Users/sunda/.vscode/SchoolMapApp/modules/Dijkstra's-algorithm";
var elkins = new WeightedGraph();
elkins.addVertex("100");
elkins.addVertex("200");
elkins.addVertex("300");
elkins.addVertex("400");
elkins.addVertex("500");
elkins.addVertex("600");
elkins.addVertex("700");

elkins.addEdge("100", "200", 4);
elkins.addEdge("100", "300", 2);
elkins.addEdge("200", "500", 3);
elkins.addEdge("300", "400", 2);
elkins.addEdge("300", "600", 4);
elkins.addEdge("400", "500", 3);
elkins.addEdge("400", "600", 1);
elkins.addEdge("500", "600", 1);
elkins.addEdge("500","700", 5);

export { elkins }