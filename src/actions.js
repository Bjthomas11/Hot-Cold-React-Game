export const RESTART_NEWGAME = "RESTART_NEWGAME";
export const restartNewGame = correctAnswer => ({
  type: RESTART_NEWGAME,
  correctAnswer
});

export const AURALUPDATE = "ARUALUPDATE";
export const auralUpdate = () => ({
  type: AURALUPDATE
});

export const USER_MAKES_GUESS = "USER_MAKES_GUESS";
export const userMakesGuess = guess => ({
  type: USER_MAKES_GUESS,
  guess
});
