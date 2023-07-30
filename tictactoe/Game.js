const Board = require("./Board") 
const Player = require("./Player") 
 
class Game{ 
    constructor(board, players){ 
        this.players = players 
        this.board = board 
        this.turn = 0 
        this.isGameEnded = false 
    } 
    static newGame(player0Name, player1Name){ 
        let boardForGame = new Board() 
        let player0 = new Player("X", player0Name) 
        let player1 = new Player("O", player1Name) 
        return new Game(boardForGame, [player0, player1]) 
    } 
    play(cellNumber){ 
        if(this.isGameEnded){ 
            return "Game has Ended" 
        } 
        if(cellNumber>8){
            return "Invalid Cell Number"
        }
        if(!this.board.isCellMarked(cellNumber)){ 
            return "Cell Not Empty" 
        } 
        let currentPlayer 
        if(this.turn % 2 == 0){ 
            currentPlayer = this.players[0] 
        } 
        else{ 
            currentPlayer = this.players[1] 
        } 
        let cellObj = this.board.getCellObj(cellNumber) 
        currentPlayer.markCell(cellObj) 
        this.turn++ 
        this.board.printBoard();
        let[symbolOfWinner, gameStatus] = this.board.analyseResult() 
        if(gameStatus == ""){ 
            return "Continue Playing" 
        } 
         if(gameStatus == "draw"){ 
            this.isGameEnded = true 
            return "Game Ended as Draw" 
        } 
        if(symbolOfWinner == this.players[0].symbol){ 
            this.isGameEnded = true 
           return this.players[0].name + " Is Winner" 
        } 
        this.isGameEnded = true 
        return this.players[1].name + " Is Winner" 
    } 
} 
 
module.exports = Game
