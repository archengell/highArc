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
        this.center = this.nodesXY.reduce((acc, { x, y }, _, arr) => {
            acc.x += x / arr.length;
            acc.y += y / arr.length;
            return acc;
        }, { x: 0, y: 0 });
        this.angles = this.nodesXY.map(({ x, y }) => {
            return { x, y, angle: Math.atan2(y - this.center.y, x - this.center.x) * 180 / Math.PI };
        });
        this.nodesSorted = this.angles.sort((a, b) => a.angle - b.angle);
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
