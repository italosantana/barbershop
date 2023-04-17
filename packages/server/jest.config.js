const pack = require('./package');

module.exports = {
  displayName: pack.name,
  name: pack.name,
  globalSetup: '<rootDir>/packages/testutils/src/config/setup.js',
  globalTeardown: '<rootDir>/packages/testutils/src/config/teardown.js',
  maxConcurrency: 2,
  testEnvironment: '<rootDir>/test/environment/mongodb',
  testPathIgnorePatterns: ['/node_modules/', './dist'],
  coverageReporters: ['lcov', 'html'],
  setupFilesAfterEnv: ['<rootDir>/test/setupTestFramework.js'],
  resetModules: false,
  reporters: ['default'],
  transformIgnorePatterns: ['node_modules/(?!d3-random)'],
  transform: {
    '^.+\\.(js|ts|tsx)?$': '<rootDir>/test/babel-transformer',
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(js|ts|tsx)?$',
  moduleFileExtensions: ['ts', 'js', 'tsx', 'json'],
  testTimeout: 20000,
};
