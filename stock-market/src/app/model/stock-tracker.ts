export class StockTracker {
    favorite = false;
    
    constructor(public code: string,
                public price: number,
                public ratioChange: number,
                public ratio: number) {}

}
