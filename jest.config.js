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
    '^@app/(.*)$': '<rootDir>/src/app/$1',
    '^@server/(.*)$': '<rootDir>/src/server/$1',
  },
  transform: {
    '^.+\\.vue$': '@vue/vue3-jest',
    //'.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.(t|j)sx?$': ['@swc/jest', swcConfigs],
    //'\\.(gql|graphql)$': 'jest-transform-graphql'
  },
  testEnvironment: 'jsdom',
  snapshotSerializers: ['jest-serializer-vue'],
  testMatch: [
    '**/*.(test|spec).(js|jsx|ts|tsx)',
  ],
}
