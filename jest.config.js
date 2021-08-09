const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig.json');
const paths = compilerOptions.paths ? compilerOptions.paths : {};

module.exports = {
  setupFilesAfterEnv: ['./jest.setup.js'],
  moduleNameMapper: {
    ...pathsToModuleNameMapper(paths, { prefix: '<rootDir>/' }),
    '\\.(css|less|scss|sss|styl)$': '<rootDir>/node_modules/jest-css-modules',
    // explicitly set css module compiler (override from tsconfig)
    '^@styles/(.*)$': '<rootDir>/node_modules/jest-css-modules',
  },
};
