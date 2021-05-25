"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlgorTwo = void 0;
class AlgorTwo {
    /**
    * @desc updates inputs object values accoring to types
    * @param object input:object, flat?: boolean
    * @return object - inputs with serialize values
    */
    constructor(data) {
        this.data = data;
        this.data = data;
    }
    intersect(set1, set2) {
        return [...set1].filter(x => set2.has(x));
    }
    diff(set1, set2) {
        return [...set1].filter(x => !set2.has(x));
    }
    facialNeighbors(faceId) {
        let myFace = this.data.intPolygons[faceId];
        let faces = this.data.intPolygons;
        let temp = [];
        for (let [idx, face] of faces.entries()) {
            if (idx != faceId &&
                this.intersect(myFace[faceId], face[idx]).length > 1) {
                temp.push(Object.keys(faces)[idx]);
            }
        }
        this.data['facialNeighborsById'] = temp;
    }
    json() {
        console.log(this.data);
        return this.data;
    }
}
exports.AlgorTwo = AlgorTwo;
