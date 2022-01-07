module.exports = {
  coverageDirectory: '<rootDir>/coverage/',
  coverageReporters: ['lcov', 'html', 'text-summary'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  transform: {
    '^.+\\.vue$': '@vue/vue3-jest',
    //'.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.(ts|js|tsx)?$': 'ts-jest',
    //'\\.(gql|graphql)$': 'jest-transform-graphql'
  },
  testEnvironment: 'jsdom',
  snapshotSerializers: ['jest-serializer-vue'],
  testMatch: [
    '**/*.spec.(js|jsx|ts|tsx)',
  ],
}
