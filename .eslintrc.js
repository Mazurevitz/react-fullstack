module.exports = {
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parser": "babel-eslint",
    "rules": {
        'no-console': 'off',
        "react/prop-types": 0
    },
    "env": {
        "es6": true,
        "browser": true,
        "amd":true
    },
};