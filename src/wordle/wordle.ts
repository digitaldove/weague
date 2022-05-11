export const guessWordle = (guess: string, answer: string) => {
  // "mango"
  // "mommy" = 21000
  // "monad" = 21200
  // "apple" = 10000

  // 2 = correct char, correct place
  // 1 = correct char, wrong place
  // 0 = wrong char

  const result = ["0", "0", "0", "0", "0"];

  const guessArray = guess.split("");
  const answerArray = answer.split("");

  // check if the guess is the same length as the answer
  for (let i = 0; i < answerArray.length; i++) {
    if (guessArray[i] === answerArray[i]) {
      result[i] = "2";
    }
  }

  console.log(result);
  return;
};
