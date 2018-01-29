export const MAKE_GUESS = 'MAKE_GUESS';
export const makeGuess = guess => ({
    type: MAKE_GUESS,
    feedback,
    guess
});

export const START_A_NEW_GAME = 'START_A_NEW_GAME';
export const startANewGame = () => ({
    type: START_A_NEW_GAME,
    guesses,
    auralStatus,
    correctAnswer
});

export const GENERATE_AURAL_UPDATE = 'GENERATE_AURAL_UPDATE';
export const generateAuralUpdate = () => ({
    type: GENERATE_AURAL_UPDATE
});