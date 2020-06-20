# @bobringer/eslint-config

This package contains a very opinionated default set of rules (based on eslint-config-airbnb).

In addition, it includes rules for react and prettier which can be included on top of the default
rules.

## Usage
Include the following in your `package.json`
```json
{
    "devDependencies": {
        "@bob-obringer/eslint-config": "0.1.0",
        "babel-eslint": "10.0.2",
        "eslint": "5.16.0"
    }
}
```

Next, create an `.eslintrc.json` file with the following contents (only include react if required):
```json
{
  "extends": [
    "@bobringer/eslint-config",
    "@bobringer/eslint-config/react"
  ]
}
``` 

## Using with Prettier
To use with prettier and our own custom prettier configurations, also add the following
to `package.json`:
```json
{
    "prettier": "@bobringer/prettier-config",
    "devDependencies": {
        "@bobringer/prettier-config": "1.0.2",
        "prettier": "1.18.2"
    }
}
```


And in your `.eslintrc.json`, also add this to your extends array:
```json
{
  "extends": [
    "@bobringer/eslint-config/prettier"
  ]
}
```
