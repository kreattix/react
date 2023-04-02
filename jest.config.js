/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  collectCoverage: true,
  resetMocks: true,
  clearMocks: true,
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  coveragePathIgnorePatterns: ['node_modules', 'index.ts', 'GlobalStyle.ts'],
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
}
