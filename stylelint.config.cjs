module.exports = {
  extends: ['stylelint-config-standard'],
  defaultSeverity: 'error',
  plugins: [],
  ignoreFiles: ["**/dist/**", "**/node_modules/**", "**/_site/**"],
  rules: {
    'max-line-length': 180,
    'declaration-block-no-redundant-longhand-properties': null,
    'declaration-colon-space-after': null,
    'block-closing-brace-newline-before': null,
    'block-opening-brace-newline-after': null,
    'media-feature-name-no-unknown': null,
    'declaration-empty-line-before': null,
    'no-eol-whitespace': null,
    'function-calc-no-unspaced-operator': null,
    'no-descending-specificity': null,
    'no-duplicate-selectors': null,
    'no-invalid-position-at-import-rule': null,
    'string-quotes': 'single',
    'rule-empty-line-before': [
      'always-multi-line',
      {
        except: ['first-nested'],
        ignore: ['after-comment'],
      },
    ],
  },
};
