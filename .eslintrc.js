module.exports = {
  // 'import/prefer-default-export': 2,
  extends: [
    "eslint:recommended",
    require.resolve('@umijs/fabric/dist/eslint')
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'], // Your TypeScript files extension
      parserOptions: {
        project: ['./tsconfig.json'], // Specify it only for TypeScript files
      },
    },
  ],
  parser: '@typescript-eslint/parser',
};
