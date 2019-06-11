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

## FAQs
- **Why two parts in this repo?**

  Angular is a powerful project so it's better to be isolated. For example you may use ng-cli to handle it, if you mix with main process, it's wores. Wores for host two repos. Two parts is ok and simplifier.
  
- **How does the electron work with `file:///` in dev mode?**

  A request interceptor is set, catch resource(exclude `index.html`) then redirct to WDS.  [See more.](https://electronjs.org/docs/api/web-request#class-webrequest)
 
## License
[MIT](https://choosealicense.com/licenses/mit/)
