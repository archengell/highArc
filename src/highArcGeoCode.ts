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

/** Welcome to my sandbox for the Higharc code challenge.
 * There are three Algorithm sets,  * and within those sets, 
 * (3) tests: 0, 1, + 2; these represent the  * provided data 
 * structure for hiArc, polygon1, and polygon2 geometries,
 * respectively. 
 * 
 * For each Algorithm, it is best to comment out each algorithm 
 * group,  * then uncomment the particular test within that group 
 * you wish to view.
 * 
 * For example, algor #2 w/ Test #1 is set to view results.
 * 
 */

/** Test Algorithm #1 *****************************/

// let algor1Test0 = new AlgorOne( hiArc.data );
// algor1Test0.calc()
// algor1Test0.jsonOutput()

// let algor1Test1 = new AlgorOne( polygon1.data );
// algor1Test1.calc()
// algor1Test1.jsonOutput()

// let algor1Test2 = new AlgorOne( polygon2.data );
// algor1Test2.calc()
// algor1Test2.jsonOutput()


/** Test Algorithm #2 ****************************/

let algor1Test0 = new AlgorOne( hiArc.data ); 
let algor2Test0 = new AlgorTwo(algor1Test0.calc());
algor2Test0.intPolygonNeighbors(1);
algor2Test0.jsonOutput();

// let algor1Test1 = new AlgorOne( polygon1.data );
// let algor2Test1 = new AlgorTwo(algor1Test1.calc());
// algor2Test1.intPolygonNeighbors(4);
// algor2Test1.jsonOutput();

// let algor1Test2 = new AlgorOne( polygon2.data );
// let algor2Test2 = new AlgorTwo( algor1Test2.calc() );
// algor2Test2.intPolygonNeighbors(0);
// algor2Test2.jsonOutput();


/** Test Algorithm #3  ********************/

// let algor1Test0 = new AlgorOne( hiArc.data )
// let algor1Test0Res = algor1Test0.calc()
// let algor1Test0Faces = algor1Test0Res['canvasData']
// let algor3Test0 = new AlgorThree(algor1Test0Faces);
// algor3Test0.isPtInsideAFace({x:0.5,y:1});

// let algor1Test1 = new AlgorOne( polygon1.data )
// let algor1Test1Res = algor1Test1.calc()
// let algor1Test1Faces = algor1Test1Res['canvasData']
// let algor3Test1 = new AlgorThree(algor1Test1Faces);
// algor3Test1.isPtInsideAFace({x:17,y:5});

// let algor1Test2 = new AlgorOne( polygon2.data );
// let algor1Test2Res = algor1Test2.calc()
// let algor1Test2Faces = algor1Test2Res['canvasData']
// let algor3Test2 = new AlgorThree(algor1Test2Faces);
// algor3Test2.isPtInsideAFace({x:15,y:15}); //unstable w/ various pts.. still debugging...



