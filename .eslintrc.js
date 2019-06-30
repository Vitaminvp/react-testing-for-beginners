module.exports = {
  "parser": "babel-eslint",
  "env": {
      "browser": true,
      "es6": true
  },
  "settings": {
        "ecmascript": 6,
        "jsx": true
  },
  "parserOptions": {
      "ecmaVersion": 2017,
      "ecmaFeatures": {
          "experimentalObjectRestSpread": true,
          "experimentalDecorators": true,
          "jsx": true
      },
      "sourceType": "module"
  },
  "plugins": [
      "react",
  ],
  "extends": "airbnb",
  "rules": {
    "react/jsx-filename-extension": 0,
    "function-paren-newline": 0
  },
    "globals": {
      "test": true,
      expect: true,
      "getByTestId": true,
      "toBe": true,
      "getByText": true,
      "afterEach": true,
      "toBeTruthy": true,
      "toHaveBeenCalledTimes": true,
      "toBeCalled": true,
    }
};