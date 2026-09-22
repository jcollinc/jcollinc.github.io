import nextConfig from 'eslint-config-next';

const config = [
  {
    ignores: ['.next/**', 'out/**', 'node_modules/**', '.claude/worktrees/**'],
  },
  ...nextConfig,
];

export default config;
