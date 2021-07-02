// Created to display whats happening from Game.js
export default class GameView {


   constructor(){
      //console.log("init game view");


   }

   updateBoard(game){
      //console.log("This is a board within GameView");
      //console.log(game.board);
      //called to update player turn as well
      this.updateTurn(game);
      const winningCombination = game.findWinningCombinations();
      for(let i = 0; i < game.board.length; i++){
         //console.log(game.board[i]);
         const tile = document.querySelector(`.board-tile[data-index='${i}']`);
         //console.log(tile);
         tile.classList.remove("tile-winner");
         //update icon color(X and O) on the board. 
         let tileType = game.board[i] == 'X' ? "tile-x" : "tile-o";
         //console.log(tileType, 'what is the tileType');
         tile.innerHTML = `<span class="${tileType}">${game.board[i] ? game.board[i] : ""}</span>`

         if(winningCombination && winningCombination.includes(i)){
            tile.classList.add("tile-winner");
         }
      }
   }

   updateTurn(game){
      let playerX = document.querySelector(".player-x");
      let playerO = document.querySelector(".player-o");
      //Remove any active classes 
      playerX.classList.remove('active');
      playerO.classList.remove('active');
      console.log(playerX);
      console.log(playerO);

      if (game.turn == 'X') {
         playerX.classList.add('active');
      } else {
         playerO.classList.add('active');
      }
      

   }   


}