# Electron-angular
[![CircleCI](https://circleci.com/gh/diyews/electron-angular.svg?style=svg)](https://circleci.com/gh/diyews/electron-angular)

Electron(v13) with Angular(v12) quick starter.

## Feature
- Main process auto restart
- Render hot reload (partial tested)
- `file:///` instead `http://` in development mode

## Quick start

Run `npm i`.

Render:
```
$ npm i
$ npm run start:render (or `npm run hmr` for hot reload)
```

Main:
```
# ./
$ npm run start (`serve` for auto reload)
```

## Packaging
```
$ npm run prod  # First pack render

$ npm run dist  # Then pack app
```

## FAQs
- **How does the electron work with `file:///` in dev mode?**

  Add script tag in `index.html` manually.
 
## License
[MIT](https://choosealicense.com/licenses/mit/)
