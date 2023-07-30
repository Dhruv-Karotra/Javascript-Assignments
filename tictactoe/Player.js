class Player{
    constructor(symbol,name){
        this.symbol=symbol;
        this.name=name;
    }
    markCell(cellObj){
        cellObj.markCell(this.symbol)
    }
}
module.exports = Player