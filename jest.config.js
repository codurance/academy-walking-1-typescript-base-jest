module.exports = {
    roots: ['<rootDir>/src/test'],
    preset: 'ts-jest',
    collectCoverage: true,
    collectCoverageFrom: ['./src/**/*.{js,jsx,ts}', '!**/node_modules/**', '!**/vendor/**'],
  }