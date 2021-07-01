// Created to display whats happening from Game.js
export default class GameView {


   constructor(){
      console.log("init game view");
   }

   updateBoard(game){
      console.log("This is a board within GameView");
      console.log(game.board);
      for(let i = 0; i < game.board.length; i++){
         //console.log(game.board[i]);
         const tile = document.querySelector(`.board-tile[data-index='${i}']`);
         //console.log(tile);
         tile.textContent = game.board[i];
      }
   }



}