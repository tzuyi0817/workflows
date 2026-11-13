import componentHookPlugin from '@component-hook/eslint-plugin';

export default [
  ...componentHookPlugin.configs.basic,
  componentHookPlugin.configs.oxfmt,
  ...componentHookPlugin.configs.markdown,
];
