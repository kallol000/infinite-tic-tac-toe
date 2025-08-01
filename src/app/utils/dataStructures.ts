
export class Queue {

    arr1: number[] = []
    arr2: number[] = []
    length: number = 0
 
    constructor() {       
        this.arr1 = []
        this.arr2 = []
        this.length = 0
    }

    enque( item: number ): void {

        this.arr1.push( item )
        this.length = this.length + 1
    
    }

    deque(): number | null{
        if(this.arr1.length === 0 && this.arr2.length === 0){
            console.log("Queue is empty")
            return null
        }
        if ( this.arr2.length > 0 ) {
            this.length--
            const ans = this.arr2.pop()
            return ans!
        }
        while(this.arr1.length > 0){
            const item = this.arr1.pop()!
            this.arr2.push(item)
        }
        this.length--
        return this.arr2.pop()!
    }

    getLength():number {
        return this.length
    }
}
    
    // isEmpty(): boolean{
        
    //     if(this.arr1.length === 0 && this.arr2.length === 0) {
    //         return true
    //     }
        
    //     return false
    // }


    
    // getFront() {

    //     if(this.arr1.length == 0 && this.arr2.length === 0) {
    //         console.log("queue is empty")
    //         return null
    //     }
        
    //     if(this.arr2.length > 0){
    //         return this.arr2[this.arr2.length - 1]
    //     }

    //     while(this.arr1.length > 0){
    //         let item = this.arr1.pop()
    //         this.arr2.push(item)
    //     }

    //     return this.arr2[this.arr2.length - 1]
    // }


// let a = [[2,1,1],[1,1,0],[0,1,1]]

// const q = new Queue()


// for(let i = 0; i < a.length)

