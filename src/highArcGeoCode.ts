import { Polygon } from "./polygon"
import { AlgorOne } from "./algorOne"
import { AlgorTwo } from "./algorTwo"
import { AlgorThree } from "./algorThree"

const hiArcNodes = [[0, 0], [2, 0], [0, 2], [2, 2]]
const hiArcEdges = [[0, 1], [1, 2], [0, 2], [0, 3], [2, 3]]
const nodes1 = [[10,15], [3,3], [23,21], [3,17], [16,9], [9,10], [13,4], [21,2]]
const edges1 = [[0,1], [0,2], [0,6], [0,7], [1,2], [2,3], [2,4], [3,4], [4,5], [4,6], [5,6], [6,7]]
const nodes2 = [[7,12], [25,10], [9,5], [19,3], [17,26]];
const edges2 = [[0,1], [0,3], [0,4], [1,2], [1,3], [2,3], [3,4]]

let polygon1 = new Polygon( nodes1, edges1 );
let polygon2 = new Polygon( nodes2, edges2 );
let hiArc = new Polygon ( hiArcNodes, hiArcEdges );

/** Test Algorithm #1 *****************************/

let algor1Test0 = new AlgorOne( hiArc.data );
algor1Test0.calc()
algor1Test0.jsonOutput()

let algor1Test1 = new AlgorOne( polygon1.data );
// algor1Test1.calc()
// algor1Test1.jsonOutput()

let algor1Test2 = new AlgorOne( polygon2.data );
// algor1Test2.calc()
// algor1Test2.jsonOutput()


/** Test Algorithm #2 ****************************/

// let algor2Test0 = new AlgorTwo(algor1Test0.calc());
// let algor2Test1 = new AlgorTwo(algor1Test1.calc());
// let algor2Test2 = new AlgorTwo(algor1Test2.calc());

// algor2Test0.facialNeighbors(1);
// algor2Test1.facialNeighbors(0);
// algor2Test2.facialNeighbors(3);

// console.log(algor2Test0.res());
// console.log(algor2Test1.res());
// console.log(algor2Test2.res());


/** Test Algorithm #3  ********************/
// let algorOneRes = algor1Test0.calc()
// let faces = algorOneRes['canvasData']
// let algor3Test0 = new AlgorThree(faces);
// algor3Test0.isPtInsideAFace({x:0.5,y:1});



