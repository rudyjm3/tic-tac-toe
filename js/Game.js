export default class Game {

  constructor(){
    console.log("init game");
    this.turn = "X";
    this.board = new Array(9).fill(null)
    //console.log(this.board);
  }

  // Function to tell which turn it is  
  nextTurn(){
    if(this.turn == "X") {
      this.turn = "O";
    } else {
      this.turn = "X";
    }
  }

  makeMove(i){
     //check if winning combo has happen
     if(this,this.endOfGame()){
        return;
     }
     //check to see if something is already there
     if(this.board[i]){
        return;
     }
    this.board[i] = this.turn; // X or O 
    let winningCombination = this.findWinningCombinations();
    console.log("This is the winner!", winningCombination);
    if(!winningCombination){
       this.nextTurn();
    }
  }

  findWinningCombinations(){
     const winningCombinations = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
     ]

     for(const combination of winningCombinations){
        console.log(combination);
        const [a,b,c] = combination;
        
        if (this.board[a] &&
         (this.board[a] === this.board[b] && this.board[a] === this.board[c])) {
            return combination;
        } 
        console.log(a);//0
        console.log(b);//2
        console.log(c);//3
     }
     return null;
  }

  endOfGame(){
     let winningCombination = this.findWinningCombinations();
     if(winningCombination){
        return true;
     } else {
        return false;
     }
  }

}

