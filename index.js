const { defaults } = require("jest-config");

module.exports = {
  testEnvironment: "node",
  moduleFileExtensions: [...defaults.moduleFileExtensions, "ts"],
  preset: "ts-jest",
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10,
    },
  },
};
