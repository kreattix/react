/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  collectCoverage: true,
  resetMocks: true,
  clearMocks: true,
  moduleNameMapper: {
    '^@app/(.+)$': '<rootDir>/src/$1',
    '^@components/(.+)$': '<rootDir>/src/components/$1',
    '^@theme/(.+)$': '<rootDir>/src/theme/$1',
    '^@utils/(.+)$': '<rootDir>/src/utils/$1',
  },
  moduleDirectories: ['node_modules', 'src'],
  modulePaths: ['<rootDir>', '@app', '@components', '@themes', '@utils'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  coveragePathIgnorePatterns: [
    'node_modules',
    'test-config',
    'interfaces',
    'example',
    'jestGlobalMocks.ts',
    '.module.ts',
    'GlobalStyle.tsx',
    '.mock.ts',
    'src/index.ts',
    'components/index.ts',
  ],
}
