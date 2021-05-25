
export interface XYPointObj {
    x: number,
    y: number
}

export interface XYPoint {
    [index: number]: number
}
    
export interface Faces { 
    [index: number]: {
        x: number,
        y: number
    }
}