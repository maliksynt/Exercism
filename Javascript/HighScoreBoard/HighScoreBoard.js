function createScoreBoard() {
  const obj = {
    "The Best Ever": 1000000,
  };
  return obj;
}

function addPlayer(scoreBoard, player, score) {
  scoreBoard[player] = score;
  return scoreBoard;
}

function removePlayer(scoreBoard, player) {
  delete scoreBoard[player];
  return scoreBoard;
}

function updateScore(scoreBoard, player, points) {
  scoreBoard[player] += points;
  return scoreBoard;
}

function applyMondayBonus(scoreBoard) {
  for (let keys in scoreBoard) {
    scoreBoard[keys] += 100;
  }
  return scoreBoard;
}

function normalizeScore(params) {
  let value = params.score;
  value = params.normalizeFunction(value);
  return value;
}
