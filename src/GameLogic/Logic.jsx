export function winnerLogic(gameState) {
  //For Row
  if (
    gameState[0] !== 0 &&
    gameState[0] === gameState[1] &&
    gameState[1] === gameState[2]
  )
    return gameState[0];
  if (
    gameState[3] !== 0 &&
    gameState[3] === gameState[4] &&
    gameState[4] === gameState[5]
  )
    return gameState[3];
  if (
    gameState[6] !== 0 &&
    gameState[6] === gameState[7] &&
    gameState[7] === gameState[8]
  )
    return gameState[6];

  // For column

  if (
    gameState[0] !== 0 &&
    gameState[0] === gameState[3] &&
    gameState[3] === gameState[6]
  )
    return gameState[0];
  if (
    gameState[1] !== 0 &&
    gameState[1] === gameState[4] &&
    gameState[4] === gameState[7]
  )
    return gameState[1];
  if (
    gameState[2] !== 0 &&
    gameState[2] === gameState[5] &&
    gameState[5] === gameState[8]
  )
    return gameState[2];

  // for Diagonal
  if (
    gameState[0] !== 0 &&
    gameState[0] === gameState[4] &&
    gameState[4] === gameState[8]
  )
    return gameState[0];
  if (
    gameState[2] !== 0 &&
    gameState[2] === gameState[4] &&
    gameState[4] === gameState[6]
  )
    return gameState[2];

  return false;
}
