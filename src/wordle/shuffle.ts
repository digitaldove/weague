// Shamelessly taken from
// https://bost.ocks.org/mike/shuffle/
export const shuffle = <T = any>(array: T[], seed: number = 0): T[] => {
  let m = array.length,
    t,
    i;

  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(random(seed) * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
};

// Allowing shuffle function to be randomly seeded
export const random = (seed: number): number => {
  const x = Math.sin(seed++) * 10000;
  return x - Math.floor(x);
}

// Generate random seed to be used
export const generateSeed = (): number => {
  return Math.floor(Math.random() * 100000);
}
