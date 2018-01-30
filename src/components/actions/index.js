export const MAKE_GUESS = 'MAKE_GUESS';
export const makeGuess = guess => ({
    type: MAKE_GUESS,
    guess
});

export const START_A_NEW_GAME = 'START_A_NEW_GAME';
export const startANewGame = () => ({
    type: START_A_NEW_GAME,
    correctAnswer: Math.floor(Math.random() * 100) + 1
});

export const GENERATE_AURAL_UPDATE = 'GENERATE_AURAL_UPDATE';
export const generateAuralUpdate = () => ({
    type: GENERATE_AURAL_UPDATE
});