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
        this.cycles = new Array(this.N).fill([]);
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
        this.dfs_color(0, 0);
        this.getCycles();
        this.parseCanvasData();
        return this.json();
    }
    // insert edges into an adjacency list
    getAdjList() {
        /**
        * @desc
        * @param object
        * @return
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
    /*
    - use DFS, w/ graph coloring method, mark all the vertex of the diff.
    cycles w/ unique numbers.
    - once graph is completed, push all sim. marked numbers to an adj list.
    - print adj list accordingly.
    */
    //https://www.geeksforgeeks.org/print-all-the-cycles-in-an-undirected-graph/
    dfs_color(u, p) {
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
            this.visited.push({
                'u': u,
                'p': p,
                'v': item,
                'parent[u]': this.parent[u],
                'cycleNum': this.cycleNum
            });
            // console.log(`u: ${u}, p: ${p}, v: ${item}, parent[u]:${this.parent[u]}, cycleNum: ${this.cycleNum}, color[u]: ${this.color[u]}`);
            if (item == this.parent[u]) {
                continue;
            }
            this.dfs_color(item, u);
        }
        this.color[u] = 2;
    }
    getCycles() {
        for (let i = 0; i < this.cycleNum; i++) {
            let temp = new Set();
            let obj = {};
            this.visited.map((item) => {
                if (item.cycleNum == i) {
                    if (item['parent[u]'] == 0 || item.v == 0) {
                        temp.add(0);
                    }
                    ;
                    temp.add(item.u);
                }
                ;
            });
            obj[i] = temp;
            this.cycles[i].push(obj);
        }
        ;
        // for(let i = 0; i < this.edgeArrLen; i++){
        //     if( this.mark[i] != 0 ){
        //         this.cycles[this.mark[i]].push(i);
        //     }
        // }
        // for(let i = 0; i <= this.cycleNum; i++){
        //     console.log(`Cycle number ${i}: ${this.cycles[i]} `)
        // }
        this.data['intPolygons'] = this.cycles[0];
        this.data['numOfIntFaces'] = this.cycleNum;
    }
    parseCanvasData() {
        let res = new Array;
        for (let [idx, face] of this.cycles[0].entries()) {
            let temp = new Array;
            let faceArr = Array.from(face[idx]);
            faceArr.map((item) => {
                temp.push({ 'x': this.data['nodes'][item]['x'], 'y': this.data['nodes'][item]['y'] });
            });
            res.push(temp);
        }
        this.data['canvasData'] = res;
    }
    json() {
        // console.log(this.data);
        return this.data;
    }
}
exports.AlgorOne = AlgorOne;
