# CLI Typescript Commander Starter

CLI for extracting a value from a JSON file based on a JSONPath input

    npx json-extract-path --file ./example.json --jsonpath "$.store.book[*].author"

## How to use

Install globally via

    npm install -g json-extract-path

or directly use via

    npx json-extract-path

You can also download native binaries under the [Releases Tab](https://github.com/lukasbach/json-extract-path/releases) and use them if you don't want to install NodeJS.

Usage:

    Usage: npx json-extract-path [options]

    Options:
    -V, --version          output the version number
    -f, --file             path to the JSON file
    -j, --jsonpath <path>  JsonPath value
    -d, --delemitter <del>  delemitter character, in case more than one result is returned (default: ";")
    -h, --help             display help for command

## How to develop

- `yarn` to install dependencies
- `yarn start` to run the CLI script for debugging
- `yarn test` to run tests
- `yarn publish` to publish a new version to NPM. Make sure to bump the version!
- `yarn prettier:check` to verify that your code is pretty
- `yarn prettier:write` to make your code pretty
