export class AlgorTwo {
    /**
    * @desc processes the output of AlgorOne and returns neighboring
    * faces of any face.  
    * @params data -> {} from algorOne
    * @return object {}
    */

    constructor(public data: any){
        this.data = data;
    }
    
    intersect(set1: any, set2: any){
        return [...set1].filter( x => set2.has(x));
    }

    diff(set1: any, set2: any){
        return [...set1].filter( x => !set2.has(x));
    }

    facialNeighbors(faceId: number | string){
        /** this method provides the major functionality of algorithm #2 
         * 1. searches the vertex indices for each face for intersection 
         * bwtn the given face by Id.  
         * 2. if there is an intersection of 2+ vertices then it is a 
         * neighboring face and recorded.
        */
        let myFace = this.data.intPolygons[faceId];
        let faces = this.data.intPolygons;
        let temp: any = [];

        for( let [idx,face] of faces.entries() ) {
            
            if( idx != faceId && 
                this.intersect(myFace[faceId], face[idx]).length > 1 ) {
                    temp.push(Object.keys(faces)[idx]);
            }
        }
        this.data['facialNeighborsById'] = temp;
    }

    res(){
        // console.log(this.data);
        return this.data;
    }

}

