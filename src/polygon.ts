export class Polygon {
    /**
    * @desc creates a sequential order of numbered vertices based on 
    * location from the calculated centroid. 
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

        this.center = this.nodesXY.reduce((acc: any, { x, y }: any, _: any, arr:any) => {
            acc.x += x / arr.length;
            acc.y += y / arr.length;
            return acc;
        }, { x: 0, y: 0});
        
        this.angles = this.nodesXY.map(({x, y}: any) => {
            return { x, y, angle: Math.atan2(y - this.center.y, 
                x - this.center.x) * 180 / Math.PI };
        });

        this.nodesSorted = this.angles.sort((a: any, b: any) => a.angle - b.angle);
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

