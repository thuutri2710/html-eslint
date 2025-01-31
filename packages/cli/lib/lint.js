const Linter = require("eslint").Linter;
const htmlParser = require("@thuutri2710/parser");
const htmlPlugin = require("@thuutri2710/eslint-plugin");
const SCOPE = "@thuutri2710";

function createESLintConfig(config) {
  return {
    parser: "@thuutri2710/parser",
    rules: config.rules,
  };
}

function getAllRules(plugin) {
  return Object.entries(plugin.rules).reduce((rules, [name, rule]) => {
    rules[`${SCOPE}/${name}`] = rule;
    return rules;
  }, {});
}

/**
 * @param {string} code
 * @param {object} rcConfig
 * @param {boolean} checkStyle
 */
module.exports = function lint(code, config, checkStyle = false) {
  const linter = new Linter();
  const allRules = getAllRules(htmlPlugin);
  const eslintConfig = createESLintConfig(config, checkStyle);

  if (!checkStyle) {
    Object.entries(eslintConfig.rules).forEach(([key]) => {
      if (
        allRules[key].meta.docs &&
        allRules[key].meta.docs.category === "Style"
      ) {
        console.log(key, "disabled");
        eslintConfig.rules[key] = "off";
      }
    });
  }

  linter.defineParser(`${SCOPE}/parser`, htmlParser);
  linter.defineRules(allRules);

  return linter.verify(code, eslintConfig);
};
