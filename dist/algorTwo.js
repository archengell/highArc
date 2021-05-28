"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlgorTwo = void 0;
class AlgorTwo {
    /**
    * @desc processes the output of AlgorOne and returns neighboring
    * faces of any face.
    * @params data -> {} from algorOne
    * @return object {}
    */
    constructor(data) {
        this.data = data;
        this.data = data;
    }
    intersect(set1, set2) {
        return [...set1].filter(x => set2.includes(x));
    }
    diff(set1, set2) {
        return [...set1].filter(x => !set2.includes(x));
    }
    intPolygonNeighbors(faceId) {
        /** this method provides the major functionality of algorithm #2
         * 1. searches the vertex indices for each face for intersection
         * bwtn the given face by Id.
         * 2. if there is an intersection of 2+ vertices then it is a
         * neighboring face and recorded.
        */
        let myFace = this.data.intPolygons[faceId];
        let faces = this.data.intPolygons;
        let temp = [];
        for (let [idx, face] of faces.entries()) {
            if (idx != faceId &&
                this.intersect(myFace[faceId], face[idx]).length > 1) {
                temp.push(Object.keys(faces)[idx]);
            }
        }
        this.data['intPolygonsNeighborsById'] = temp;
    }
    res() {
        return this.data;
    }
    jsonOutput() {
        return console.log(JSON.stringify(this.data));
    }
}
exports.AlgorTwo = AlgorTwo;
