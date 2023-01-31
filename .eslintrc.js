module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        node: true
    },
    "extends": [
        "plugin:nuxt/recommended",
        "eslint:recommended",
        "plugin:vue/vue3-essential"
    ],
    "overrides": [
        {
            files: ["*"],
            rules:  {
                "vue/multi-word-component-names": 0,
            }
        }
    ],
    "parserOptions": {
        parser: "@babel/eslint-parser",
        requireConfigFile: false
    },
    "plugins": [
        "vue"
    ],
    "rules": {
        "indent": [
            "error",
            4
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};
