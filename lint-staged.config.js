/** @type {import('lint-staged').Configuration} */

export default {
  '**/*.{js,json,yml}': () => ['pnpm lint'],
};
