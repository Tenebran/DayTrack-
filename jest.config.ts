import { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/test/setupTests.ts"],
  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": ["ts-jest", { tsconfig: "tsconfig.json" }],
  },
  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy",
    "^axios$": require.resolve("axios"),
    "^api/(.*)$": "<rootDir>/src/api/$1",
    "^src/(.*)$": "<rootDir>/src/$1",
  },
  transformIgnorePatterns: ["node_modules/(?!axios)"],
  testPathIgnorePatterns: ["<rootDir>/integration"],
};

export default config;
