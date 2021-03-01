# How to use this repo during the training

1. Navigate to the repo here [https://github.com/codurance/academy-walking-1-typescript-base-jest](https://github.com/codurance/academy-walking-1-typescript-base-jest)
2. Click the Fork button from the top right corner of the page
3. Chose to fork the code to your personal github account
4. You can rename the github repo to the kata name from the Settings tab. e.g. fizzbuzz-kata
5. Clone the code from the forked repository:
```bash
git clone git@github.com:<youGithubHandle>/fizzbuzz.git
cd fizzbuzz
npm install
```
6. You can rename the github repo to the kata name from the Settings tab
7. Copy and paste the bash instructions to the team so they can use your forked repo


# Typescript + Jest Kata Seed

## Install & Run All tests
`npm i`

`npm test`

## Only run specific Kata unit test
`npm test <name of test>` (per describe block)


ie: `npm test example`

## Watch a specific Kata unit test

`npm run test:watch <name of test>`


ie: `npm run test:watch example`


## Watch All tests

`npm run test:watch-all`
