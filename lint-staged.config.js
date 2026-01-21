/** @type {import('lint-staged').Configuration} */

export default {
  '**/*.{js,json}': () => ['pnpm lint'],
};
