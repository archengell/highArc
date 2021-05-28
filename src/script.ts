import { Polygon } from "./polygon"
import { AlgorOne } from "./algorOne"
import { AlgorTwo } from "./algorTwo"
import { AlgorThree } from "./algorThree"

const hiArcNodes = [[0, 0], [2, 0], [0, 2], [2, 2]]
const hiArcEdges = [[0, 1], [1, 2], [0, 2], [0, 3], [2, 3]]
const nodes1 = [[12,15], [3,3], [23,21], [3,17], [16,9], [9,10], [13,4], [21,2]]
const edges1 = [[0,1], [0,2], [0,6], [0,7], [1,2], [2,3], [2,4], [3,4], [4,5], [4,6], [5,6], [6,7]]
const nodes2 = [[7,12], [25,10], [9,5], [19,3], [17,26]];
const edges2 = [[0,1], [0,3], [0,4], [1,2], [1,3], [2,3], [3,4]]

let polygon1 = new Polygon( nodes1, edges1 );
let polygon2 = new Polygon( nodes2, edges2 );
let hiArc = new Polygon ( hiArcNodes, hiArcEdges );

let algorOneHiArc = new AlgorOne( hiArc.data ); 
let algorOneHiArcRes = algorOneHiArc.calc()
let hiArcfaces = algorOneHiArcRes['canvasData']

let algorOnePoly1 = new AlgorOne( polygon1.data );
let algorOnePoly1Res = algorOnePoly1.calc()
let poly1faces = algorOnePoly1Res['canvasData']

let algorOnePoly2 = new AlgorOne( polygon2.data );
let algorOnePoly2Res = algorOnePoly2.calc()
let poly2faces = algorOnePoly2Res['canvasData']


// console.log(hiArcfaces)

if ( typeof(window) == 'object' ) {

    let canvas = <HTMLCanvasElement> document.getElementById('canvas');
    let context: any = canvas.getContext('2d');
    
    function fillPolygon(faces: any, testCase: any) {

        let scale: any = {
            'hiArc': 200,
            'polygon1': 50,
            'polygon2': 33
        }

        for(let points of faces){
            if (points.length > 0) {
                context.fillStyle = randomColor(); 
                let point = points[0];
                context.beginPath();            
                context.moveTo(point.x*scale[testCase], point.y*scale[testCase]);           
                for (var i = 1; i < points.length; ++i) {
                    point = points[i];              
                    context.lineTo(point.x*scale[testCase], point.y*scale[testCase]);
    
                };            
                context.closePath();   
                context.fill();
            }
        }
    }
    
    function randomColor(){
        let temp = new Array;
        for(let i=0; i<3; i++){
            temp.push(Math.floor(Math.random()*255)) ;
        }
        return `rgba(${temp[0]},${temp[1]},${temp[2]})`
    }
    
    let btn = document.getElementById('test0'); 
    btn?.addEventListener("click", (e:Event) => {fillPolygon(hiArcfaces, 'hiArc')});
    
    let btn1 = document.getElementById('test1'); 
    btn1?.addEventListener("click", (e:Event) => {fillPolygon(poly1faces, 'polygon1')});

    let btn2 = document.getElementById('test2'); 
    btn2?.addEventListener("click", (e:Event) => {fillPolygon(poly2faces, 'polygon2')});
}

