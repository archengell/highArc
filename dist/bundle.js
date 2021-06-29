(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlgorOne = void 0;
class AlgorOne {
    constructor(data, adjacencyList = {}) {
        this.data = data;
        this.adjacencyList = adjacencyList;
        /**
        * @desc
        * @param
        * @return
        */
        this.N = 30;
        this.mark = new Array(this.N).fill(0);
        this.color = new Array(this.N).fill(0);
        this.cycles = new Array;
        this.parent = new Array();
        this.cycleNum = 0;
        this.visited = new Array(this.N).fill([]);
        this.data = data;
        this.edgeArrLen = this.data.nodes.length;
        this.mark;
        this.cycles;
        this.color;
        this.data.nodes.map((item) => {
            this.adjacencyList[item.index] = [];
        });
    }
    ;
    calc() {
        this.getAdjList();
        // res.printAdj()
        this.dfsColor(0, 0);
        this.customDFS();
        // this.getCycles()
        this.parseCanvasData();
        return this.data;
    }
    getAdjList() {
        /**
        * @desc processes the array of array edges into an adjacency list
        * @params number[][]
        * @return object
        */
        this.data.edges.map((e_item) => {
            this.addEdges(e_item[0], e_item[1]);
        });
        this.data['adjList'] = this.adjacencyList;
        console.log('adjList', this.adjacencyList);
    }
    ;
    addEdges(v, e) {
        this.adjacencyList[v].push(e);
        this.adjacencyList[e].push(v);
    }
    ;
    printAdj() {
        this.data.nodes.map((item) => {
            // console.log(`${item.index} : ${this.adjacencyList[item.index]}`)
        });
    }
    ;
    // starts dfsColor(0,0)
    dfsColor(u, p) {
        /**
        * @desc
        * - using DFS, w/ graph coloring method, to mark vertices of diff
        * cycles w/ unique numbers
        * - once graph is completed, push all sim. marked numbers to an adj list.
        * - Each edge contains a pair of nodes (u , v).
        * - Nomenclature:
        * -- u -> presentNode
        * -- v -> futureNode
        * -- p -> pastNode
        * @param u : number(int)
        * @param p : number (int)
        * @return void
        */
        if (this.color[u] == 2) {
            return;
        }
        ;
        if (this.color[u] == 1) {
            this.cycleNum += 1;
            let current = p;
            this.mark[current] = this.cycleNum;
            while (current != u) {
                current = this.parent[current];
                this.mark[current] = this.cycleNum;
            }
            return;
        }
        ;
        this.parent[u] = p;
        this.color[u] = 1;
        for (let item of this.adjacencyList[u]) {
            // this.visited.push({
            //     'u': u,
            //     'p': p,
            //     'v': item,
            //     'parent[u]': this.parent[u],
            //     'cycleNum': this.cycleNum
            // })          
            // console.log(`nodeU: ${u}, parent: ${p}, v: ${item}, parent[u]:${this.parent[u]}, cycleNum: ${this.cycleNum}, color[u]: ${this.color[u]}`);
            // if(item == this.parent[u]){
            //     console.log('gets here');
            //    continue;
            // }            
            this.dfsColor(item, u);
        }
        this.color[u] = 2;
    }
    ;
    customDFS() {
        let adjList = this.adjacencyList;
        let tempArr = new Array;
        let tempObj = {};
        let firstNode;
        let secondNode;
        let thirdNode;
        let temp;
        let res;
        for (let i = 0; i < this.edgeArrLen; i++) {
            firstNode = i;
            secondNode = i + 1;
            if (adjList[secondNode] &&
                adjList[secondNode].filter((val) => adjList[firstNode].includes(val))) {
                thirdNode = adjList[i + 1].filter((val) => adjList[i].includes(val));
                tempObj[i] = [firstNode, secondNode, thirdNode[0]];
                tempArr.push(tempObj[i].sort((a, b) => a - b));
            }
        }
        this.cycles = tempArr.filter((temp = {}, (item) => !(temp[item] = item in temp)));
        console.log('customDFS_cycles:', this.cycles);
        this.data['intPolygons'] = this.cycles;
        this.data['numOfIntFaces'] = this.cycles.length;
    }
    // getCycles(){ 
    // /**
    // * @desc 
    // * - Parses through the data processed by dfsColorbased on 
    // * their respective cycle, or closed path. Admittedly, this portion
    // * and the dfs_color is a bit unstable and requires more attention.    
    // * @params none
    // * @return void
    // */
    //     for(let i = 0; i < this.cycleNum; i++){  
    //         let temp = new Set();
    //         let obj: any = {}  
    //         this.visited.map((item: any) =>{
    //             if(item.cycleNum == i){
    //                 if( item['parent[u]'] == 0 || item.v == 0) { temp.add(0) };
    //                 temp.add(item.u);
    //             };                
    //         });
    //         obj[i] = Array.from(temp);
    //         this.cycles[i].push(obj);            
    //     };
    //     this.data['intPolygons'] = this.cycles[0];
    //     this.data['numOfIntFaces'] = this.cycleNum 
    // }
    parseCanvasData() {
        /**
        * @desc
        * @param none
        * @return void
        */
        let res = new Array;
        for (let cycle of this.cycles) {
            let temp = new Array;
            cycle.map((item) => {
                temp.push({ 'x': this.data['nodes'][item]['x'], 'y': this.data['nodes'][item]['y'] });
            });
            res.push(temp);
        }
        this.data['canvasData'] = res;
    }
    ;
    jsonOutput() {
        console.log(JSON.stringify(this.data));
        // return this.data;
    }
    ;
}
exports.AlgorOne = AlgorOne;

},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Polygon = void 0;
class Polygon {
    constructor(nodes, edges) {
        this.nodes = nodes;
        this.edges = edges;
        this.center = {};
        this.data = {};
        this.nodes = nodes;
        this.nodesXY = this.nodes.map((item) => ({ x: item[0], y: item[1] }));
        //get geometric center (mean value)
        this.center = this.nodesXY.reduce((acc, { x, y }, _, arr) => {
            acc.x += x / arr.length;
            acc.y += y / arr.length;
            return acc;
        }, { x: 0, y: 0 });
        //get angle property ( need to convert radians to degrees )
        this.angles = this.nodesXY.map(({ x, y }) => {
            return { x, y, angle: Math.atan2(y - this.center.y, x - this.center.x) * 180 / Math.PI };
        });
        //sort by angle relative to x-axis
        this.nodesSorted = this.angles.sort((a, b) => a.angle - b.angle);
        //map index - or node id - and coordinates in array form to object
        this.nodesSorted.map((item, index) => {
            item['index'] = index,
                item['arr'] = [item.x, item.y];
        });
        this.data = {
            'centroid': this.center,
            'nodes': this.nodesSorted,
            'edges': this.edges
        };
    }
}
exports.Polygon = Polygon;

},{}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const polygon_1 = require("./polygon");
const algorOne_1 = require("./algorOne");
const hiArcNodes = [[0, 0], [2, 0], [0, 2], [2, 2]];
const hiArcEdges = [[0, 1], [1, 2], [0, 2], [0, 3], [2, 3]];
const nodes1 = [[12, 15], [3, 3], [23, 21], [3, 17], [16, 9], [9, 10], [13, 4], [21, 2]];
const edges1 = [[0, 1], [0, 2], [0, 6], [0, 7], [1, 2], [2, 3], [2, 4], [3, 4], [4, 5], [4, 6], [5, 6], [6, 7]];
const nodes2 = [[7, 12], [25, 10], [9, 5], [19, 3], [17, 26]];
const edges2 = [[0, 1], [0, 3], [0, 4], [1, 2], [1, 3], [2, 3], [3, 4]];
let polygon1 = new polygon_1.Polygon(nodes1, edges1);
let polygon2 = new polygon_1.Polygon(nodes2, edges2);
let hiArc = new polygon_1.Polygon(hiArcNodes, hiArcEdges);
let algorOneHiArc = new algorOne_1.AlgorOne(hiArc.data);
let algorOneHiArcRes = algorOneHiArc.calc();
let hiArcfaces = algorOneHiArcRes['canvasData'];
let algorOnePoly1 = new algorOne_1.AlgorOne(polygon1.data);
let algorOnePoly1Res = algorOnePoly1.calc();
let poly1faces = algorOnePoly1Res['canvasData'];
let algorOnePoly2 = new algorOne_1.AlgorOne(polygon2.data);
let algorOnePoly2Res = algorOnePoly2.calc();
let poly2faces = algorOnePoly2Res['canvasData'];
console.log('hiArcfaces', hiArcfaces);
console.log('poly1faces', poly1faces);
console.log('poly2faces', poly2faces);
if (typeof (window) == 'object') {
    let canvas = document.getElementById('canvas');
    let context = canvas.getContext('2d');
    function fillPolygon(faces, testCase) {
        let scale = {
            'hiArc': 200,
            'polygon1': 50,
            'polygon2': 33
        };
        for (let points of faces) {
            if (points.length > 0) {
                context.fillStyle = randomColor();
                let point = points[0];
                context.beginPath();
                context.moveTo(point.x * scale[testCase], point.y * scale[testCase]);
                for (var i = 1; i < points.length; ++i) {
                    point = points[i];
                    context.lineTo(point.x * scale[testCase], point.y * scale[testCase]);
                }
                ;
                context.closePath();
                context.fill();
            }
        }
    }
    function randomColor() {
        let temp = new Array;
        for (let i = 0; i < 3; i++) {
            temp.push(Math.floor(Math.random() * 255));
        }
        return `rgba(${temp[0]},${temp[1]},${temp[2]})`;
    }
    let btn = document.getElementById('test0');
    btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", (e) => { fillPolygon(hiArcfaces, 'hiArc'); });
    let btn1 = document.getElementById('test1');
    btn1 === null || btn1 === void 0 ? void 0 : btn1.addEventListener("click", (e) => { fillPolygon(poly1faces, 'polygon1'); });
    let btn2 = document.getElementById('test2');
    btn2 === null || btn2 === void 0 ? void 0 : btn2.addEventListener("click", (e) => { fillPolygon(poly2faces, 'polygon2'); });
}

},{"./algorOne":1,"./polygon":2}]},{},[3]);
