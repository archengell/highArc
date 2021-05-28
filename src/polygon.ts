export class Polygon {
    /**
    * @desc creates a sequential order of numbered vertices based on 
    * location from the calculated centroid by calculating the mean of 
    * all the points in x, y.  
    * @params Nodes -> number[][], edges -> number[][]
    * @return object {} 
    */
    public nodesXY: any;
    public center: any = {};
    public angles: any;
    public nodesSorted: any;
    public data: any = {};

    constructor(public nodes: any, public edges: any){
        this.nodes = nodes;

        this.nodesXY =  this.nodes.map((item: any) => 
            ({ x: item[0], y: item[1]})       
        )
        //get geometric center (mean value)
        this.center = this.nodesXY.reduce((acc: any, { x, y }: any, _: any, arr:any) => {
            acc.x += x / arr.length;
            acc.y += y / arr.length;
            return acc;
        }, { x: 0, y: 0});
        //get angle property ( need to convert radians to degrees )
        this.angles = this.nodesXY.map(({x, y}: any) => {
            return { x, y, angle: Math.atan2(y - this.center.y, 
                x - this.center.x) * 180 / Math.PI };
        });
        //sort by angle relative to x-axis
        this.nodesSorted = this.angles.sort((a: any, b: any) => a.angle - b.angle);
        //map index - or node id - and coordinates in array form to object
        this.nodesSorted.map((item:any, index:any) => {
            item['index'] = index,
            item['arr'] = [item.x, item.y]            
        })

        this.data = {
            'centroid': this.center,
            'nodes': this.nodesSorted,
            'edges': this.edges
        }
    }
}

