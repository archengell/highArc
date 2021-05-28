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
