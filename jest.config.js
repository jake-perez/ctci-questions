module.exports = {
  "roots": [
    "<rootDir>/src",
  ],
  "transform": {
    "^.+\\.ts?$": "ts-jest"
  },
  "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.(js?|ts?)$",
  "collectCoverageFrom": [
    "**/*.ts",
  ],
  "coverageThreshold": {
    "global": {
      "branches": 100,
      "functions": 100,
      "lines": 100,
      "statements": 100,
    },
  }
}
