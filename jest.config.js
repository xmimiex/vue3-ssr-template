const swcConfigs = {
  jsc: {
    parser: {
      syntax: 'typescript',
    },
  },
  module: {
    type: 'commonjs',
  },
}


module.exports = {
  coverageDirectory: '<rootDir>/coverage/',
  coverageReporters: ['lcov', 'html', 'text-summary'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/app/$1',
  },
  transform: {
    '^.+\\.vue$': '@vue/vue3-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.(ts|js|tsx)?$': 'ts-jest',
    //'\\.(gql|graphql)$': 'jest-transform-graphql'
  },
  testEnvironment: 'jsdom',
  snapshotSerializers: ['jest-serializer-vue'],
  collectCoverageFrom: [
    'src/**/*.ts',
    'src/**/*.vue',
    '!src/**/*.stories.ts',
    '!**/controllers/**',
    '!**/providers/**',
    '!**/middlewares/*',
    '!src/app/*',
    '!src/server/*',
    '!src/app/stores/*',
  ],
  testMatch: [
    '**/*.(test|spec).(js|jsx|ts|tsx)',
  ],
  setupFiles: ['./test/loadConfig.ts'],
}
