# Electron-angular
[![CircleCI](https://circleci.com/gh/diyews/electron-angular.svg?style=svg)](https://circleci.com/gh/diyews/electron-angular)

Electron(v5) with Angular(v8) quick starter.

## Feature
- Angular v8 Ivy enabled
- Main process auto restart
- Render hot reload
- `file:///` instead `http://` in development mode

## Quick start
Two parts in this repo:
 - `./` for main process
 - `./render` for render
 
You need to run `npm i` for each part, it's recommended to open editor window for each part then install their deps.

Render part:
```
# ./render
$ npm i
$ npm run start (or `npm run hmr` for hot reload)
```

Main part:
```
# ./
$ npm i
$ npm run serve
```

## Packaging
```
./render$ npm run prod  # First pack render

./$ npm run dist        # Then pack app
```
 
## License
[MIT](https://choosealicense.com/licenses/mit/)
