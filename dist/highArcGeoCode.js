"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.algorOneCalc = void 0;
const polygon_1 = require("./polygon");
const algorOne_1 = require("./algorOne");
const algorTwo_1 = require("./algorTwo");
/*
1. Order of vertices is not always guarranteed.
    - created a function that will sort by angle of each vertex
    - CON: coordinates need to be positive.

2. Graph Traversal with Components
    - create an adjaceny list ( array of lists)
    - somehow traverse through this list ( DFS, BFS, etc) to determine
    a chordless cycle is establish, and if so, then that is a face
    affix a UID to this face and store
    - ...
    - ...
    - final result is a JSON

2. Find Neighboring faces of any face.
---
*
/*
initially i was hung up on how to resolve the vertex noted as coordinates
- how do I know its connected based on geometric position? I dont think its possible
- I need to create a key to associate it to the edge list provided, and assume
a clockwise sorting method.
- 0: [0,0], 1: [0,2], 2: [2,2], 3: [2,0]
*/
// let V = ['A', 'B', 'C', 'D', 'E']
// let E = [['A', 'B'], ['A', 'C'], ['B', 'C'], ['B', 'D'], ['B', 'E'], ['C','D'], ['D', 'E']]
const hiArcNodes = [[0, 0], [2, 0], [0, 2], [2, 2]];
const hiArcEdges = [[0, 1], [1, 2], [0, 2], [0, 3], [2, 3]];
const nodes1 = [[10, 15], [3, 3], [23, 21], [3, 17], [16, 9], [9, 10], [13, 4], [21, 2]];
const edges1 = [[0, 1], [0, 2], [0, 6], [0, 7], [1, 2], [2, 3], [2, 4], [3, 4], [4, 5], [4, 6], [5, 6], [6, 7]];
const nodes2 = [[7, 12], [25, 10], [9, 5], [19, 3], [17, 26]];
const edges2 = [[0, 1], [0, 3], [0, 4], [1, 2], [1, 3], [2, 3], [3, 4]];
let polygon1 = new polygon_1.Polygon(nodes1, edges1);
let polygon2 = new polygon_1.Polygon(nodes2, edges2);
let hiArc = new polygon_1.Polygon(hiArcNodes, hiArcEdges);
let res = new algorOne_1.AlgorOne(hiArc.data);
function algorOneCalc() {
    res.getAdjList();
    // res.printAdj()
    res.dfs_color(0, 0);
    res.getCycles();
    res.parseCanvasData();
    return res.json();
}
exports.algorOneCalc = algorOneCalc;
// console.log(algorOneCalc())
let res2 = new algorTwo_1.AlgorTwo(algorOneCalc());
res2.facialNeighbors(1);
res2.json();
