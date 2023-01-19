module.exports = {
  testEnvironment: 'jsdom',
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '.(css|sass|scss|less)$': 'identity-obj-proxy',
    '@/(.*)': '<rootDir>/src/$1',
  },
};
