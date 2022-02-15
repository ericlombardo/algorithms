/*
 * @param {number[][]} moves
 * @return {string}
 */
 var tictactoe = function(moves) {
  if (moves.length < 5) return 'Pending'
  let board = {
      '0,0': null,
      '0,1': null,
      '0,2': null,
      '1,0': null,
      '1,1': null,
      '1,2': null,
      '2,0': null,
      '2,1': null,
      '2,2': null
  }
  
  let winCombos = [
      // row wins
      [[0,0], [0,1], [0,2]],
      [[1,0], [1,1], [1,2]],
      [[2,0], [2,1], [2,2]],
      // column wins
      [[0,0], [1,0], [2,0]],
      [[0,1], [1,1], [2,1]],
      [[0,2], [1,2], [2,2]],
      // diagonal wins
      [[0,0], [1,1], [2,2]],
      [[0,2], [1,1], [2,0]]
     
  ]
  for (let i = 0; i < moves.length; i++) {
       i % 2 === 0 ? board[moves[i]] = 'A' : board[moves[i]] = 'B'  
  }
  
  function gameOver() {
     return Object.values(board).indexOf(null) === -1 ? true : false
  }
  
  function winnerFound() {
      for (let i = 0; i < winCombos.length; i++) {
          if (winCombos[i].every(input => board[input] === 'A')) return 'A'
          if (winCombos[i].every(input => board[input] === 'B')) return 'B'
      }
      return false
  }
  
  if (winnerFound()) return winnerFound()
  if (gameOver()) return "Draw"
  return "Pending"
  
};

/*

Tic-tac-toe is played by two players A and B on a 3 x 3 grid. The rules of Tic-Tac-Toe are:

Players take turns placing characters into empty squares ' '.
The first player A always places 'X' characters, while the second player B always places 'O' characters.
'X' and 'O' characters are always placed into empty squares, never on filled ones.
The game ends when there are three of the same (non-empty) character filling any row, column, or diagonal.
The game also ends if all squares are non-empty.
No more moves can be played if the game is over.
Given a 2D integer array moves where moves[i] = [rowi, coli] indicates that the ith move will be played on grid[rowi][coli]. return the winner of the game if it exists (A or B). In case the game ends in a draw return "Draw". If there are still movements to play return "Pending".

You can assume that moves is valid (i.e., it follows the rules of Tic-Tac-Toe), the grid is initially empty, and A will play first.

Example 1:
Input: moves = [[0,0],[2,0],[1,1],[2,1],[2,2]]
Output: "A"
Explanation: A wins, they always play first.


*/