import Game from "./Game.js";
import GameView from "./GameView.js"


let game = new Game();
let gameView = new GameView();

//Start new game
document.querySelector(".restart").addEventListener("click", () => {
   //console.log("button clicked");
   onRestartClick();
})

//To tell which tile was clicked to add X or O to the gameboard tile
let tiles = document.querySelectorAll(".board-tile");
//console.log(tiles);
tiles.forEach((tile) => {
   tile.addEventListener("click", () => {
      //console.log('Tile has been Clicked!');
      //console.log(tile.dataset.index);
      onTileClick(tile.dataset.index);
   })
})


function onTileClick(i){
   // do something
   // make a move
   game.makeMove(i);
   //update board
   gameView.updateBoard(game);
   //change turn

}

//New/Restart game function
function onRestartClick() {
   game = new Game();
   gameView.updateBoard(game);
}

gameView.updateBoard(game);




/*gameView.updateBoard(game);

console.log(game.board);
console.log("My turn is", game.turn);
game.nextTurn();
console.log("My turn is", game.turn);
game.makeMove(4);
console.log(game.board);
game.nextTurn();
game.makeMove(1);
console.log(game.board);
gameView.updateBoard(game);*/