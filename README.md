# weague

Wordle + League

## Implementation

Backend hold the data of current word we're trying to guess,  
when client (web) makes an API call to guess the word, the backend return  
an array of number `[a,b,c,d,e]` where the value ranges between `0` and `2`.

- `0` not in the word
- `1` in the word but incorrect position
- `2` correct position

### Edge case(s)

e.g. the word "apple", if a user guesses "raple", how does the backend system return ?
do we casually return `[0,1,1,2,2]` (since `p` can be moved to index 1) or `[0,1,2,2,2]` (since `p` is correct, eventhough it can be moved).

## Deployment

`pnpm build` Builds the app for production to the `dist` folder.  
It correctly bundles Solid in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.  
Your app is ready to be deployed!

You can deploy the `dist` folder to any static host provider (netlify, surge, now, etc.)
