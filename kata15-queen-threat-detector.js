function generateBoard(whiteQeen, blackQueen) {
  [row, board] = [[0, 0, 0, 0, 0, 0, 0, 0], []];
  for (let i = 1; i <= 8; ++i) {
    board.push([...row]);
  }
  board[whiteQeen[0]][whiteQeen[1]] = 1;
  board[blackQueen[0]][blackQueen[1]] = 1;
  return board;
}

function queenThreat(generatedBoard) {
  if (whiteQueen[0] === blackQueen[0] || whiteQueen[1] === blackQueen[1]) {
    return true;
  }
  let topQ, bottomQ;
  whiteQueen[0] > blackQueen[0] ? [topQ, bottomQ = blackQueen, whiteQueen] : [topQ, bottomQ] = [whiteQueen, blackQueen];
  let diff = bottomQ[0] - topQ[0];
  topQ[0] += diff;
  if (bottomQ[1] > topQ[1]) {
    topQ[1] += diff;
  } else {
    topQ[1] -= diff;
  }
  if (JSON.stringify(topQ) === JSON.stringify(bottomQ)) {
    return true;
  } else {
    return false;
  }
}

let whiteQueen = [0, 0];
let blackQueen = [5, 7];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));

