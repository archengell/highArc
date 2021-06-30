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
        this.customDFS();
        this.getFourPlusNodeCycles();
        this.addCycleProps();
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
        // console.log('adjList', this.adjacencyList)
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
    customDFS() {
        /**
        * @desc ??
        * @params none
        * @return void
        */
        let adjList = this.adjacencyList;
        let tempArr = new Array;
        let tempObj = {};
        let firstNode;
        let secondNode;
        let thirdNode;
        let temp;
        for (let i = 0; i < this.edgeArrLen; i++) {
            firstNode = i;
            secondNode = i + 1;
            /**
             * - could be refactored to helperFunction...
             * - implement try-catch in lieu of current conditional ?
            */
            if (adjList[secondNode] &&
                adjList[secondNode].filter((val) => adjList[firstNode].includes(val))) {
                thirdNode = adjList[secondNode].filter((val) => adjList[firstNode].includes(val));
                tempObj[i] = [firstNode, secondNode, thirdNode[0]];
                tempArr.push(tempObj[i].sort((a, b) => a - b));
            }
        }
        this.cycles = tempArr.filter((temp = {}, (item) => !(temp[item] = item in temp)));
    }
    getFourPlusNodeCycles() {
        /**
        * @desc ??
        * @params none
        * @return void
        */
        let firstCycle;
        let nextCycle;
        let intersectNode;
        let temp = new Array;
        let tempIntersectNodeArr = new Array;
        if (this.cycles.length > 3) {
            for (let i = 0; i < this.cycles.length; i++) {
                firstCycle = i;
                nextCycle = (i + 1) % this.cycles.length; // 1, 2, 3, then 0 
                if (this.cycles[nextCycle] &&
                    this.cycles[nextCycle].filter((val) => this.cycles[firstCycle].includes(val))) {
                    intersectNode = this.cycles[nextCycle].filter((val) => this.cycles[firstCycle].includes(val));
                    tempIntersectNodeArr.push(intersectNode[0]);
                }
            }
            tempIntersectNodeArr.sort((a, b) => a - b);
            this.cycles.push(tempIntersectNodeArr);
        }
    }
    addCycleProps() {
        /**
        * @desc ??
        * @params none
        * @return void
        */
        console.log('customDfs():', this.cycles);
        this.data['intPolygons'] = this.cycles;
        this.data['numOfIntFaces'] = this.cycles.length;
    }
    parseCanvasData() {
        /**
        * @desc ??
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
