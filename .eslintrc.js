module.exports = {
  extends: ['@voiceflow/eslint-config/frontend', '@voiceflow/eslint-config', 'plugin:cypress/recommended'],
  parser: '@typescript-eslint/parser',
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: ['@voiceflow/eslint-config/typescript'],
    },
  ],
  plugins: ['cypress'],
  env: {
    'cypress/globals': true,
  },
};
