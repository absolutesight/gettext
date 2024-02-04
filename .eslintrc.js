const fs = require("fs");
const path = require("path");

// TODO: Enable the Material UI and fix the errors
// TODO: Enable other plugins from package.json and fix the errors
const restrictedPaths = [
    // {
    //   name: "react-bootstrap"
    // }
    // {
    //   name: "@mui/material"
    // }
].map(pkg =>
    fs
        .readdirSync(path.dirname(require.resolve(`${pkg.name}/package.json`)))
        .map(component => ({
            name: `${pkg.name}/${component}`,
            message: `This loads CommonJS version of the package. To fix replace with: import { ${component} } from "${pkg.name}";`
        }))
);

// TODO: Wait for https://github.com/facebook/create-react-app/pull/7036 to enable rules in react-scripts.

/**
 *
 * @param value
 */
function isTruthy(value) {
    if (!value) return false;
    return ["1", "true"].indexOf(value.toLowerCase()) >= 0;
}

// Warnings are errors in CI
// const OFF = "off";
const ERROR = "error";
const WARNING = isTruthy(process.env.CI) ? ERROR : "warn";

module.exports = {
    extends: [
        "eslint-config-react-app"
        // "plugin:jsdoc/recommended"
    ],
    "overrides": [
        {
            "files": [
                "**/*.stories.*"
            ],
            "rules": {
                "import/no-anonymous-default-export": "off"
            }
        }
    ],
    rules: {
        "no-script-url": "warn",
        "jsx-a11y/anchor-is-valid": "warn",
        "no-restricted-imports": [
            "error",
            {
                paths: [].concat(...restrictedPaths)
            }
        ],
        eqeqeq: [WARNING, "always"],
        "no-duplicate-imports": [
            "error",
            {
                includeExports: true
            }
        ],
        // "sort-imports": [
        //   "error",
        //   {
        //     ignoreCase: false,
        //     ignoreDeclarationSort: false,
        //     ignoreMemberSort: false,
        //     memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
        //     allowSeparatedGroups: false
        //   }
        // ]
        // "object-curly-newline": [
        //   "error",
        //   {
        //     ObjectExpression: "always",
        //     ObjectPattern: {
        //       multiline: true
        //     },
        //     ImportDeclaration: "never",
        //     ExportDeclaration: {
        //       multiline: true,
        //       minProperties: 3
        //     }
        //   }
        // ],
        // indent: [WARNING, 2, {
        //   SwitchCase: 1
        // }],
        // "max-len": [WARNING, 100, 2],
        "no-console": [
            WARNING,
            {
                allow: ["warn", "error"]
            }
        ],
        "no-debugger": WARNING,
        "no-fallthrough": WARNING,
        "no-unreachable": WARNING,
        "no-unused-vars": [
            WARNING,
            {
                vars: "all",
                args: "none"
            }
        ],
        "no-var": ERROR,
        // "prefer-const": WARNING,
        // "react/prop-types": [WARNING, {
        //   ignore: ["className"]
        // }],
        semi: [WARNING, "always"]
    }
};
