# Electron-angular
[![CircleCI](https://circleci.com/gh/diyews/electron-angular.svg?style=svg)](https://circleci.com/gh/diyews/electron-angular)

Electron(v5) with Angular(v8) quick starter.

## Feature
- Angular v8 Ivy enabled
- Main process auto restart
- Render hot reload
- `file:///` instead `http://` in development mode

## Quick start
Two parts in this repo, it's need to install in their own directory, prefer to open editor window for each part.

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
1. `./render$ npm run prod`
2. `./$ npm run dist`
```
 
## License
[MIT](https://choosealicense.com/licenses/mit/)
