# Electron-angular

Electron(v5) with Angular(v8) quick starter.

## Feature
- Angular v8 Ivy enabled
- Main process auto restart
- Render hot reload
- `file:///` instead `http://` in development mode

## Quick start
Two parts in this repo, it's need to install in their own directory, prefer to open editor window for each part.

 1. `./render` -> `render process`
    - `npm i`
    - `npm run [target]`
      - start
      - hmr (hor reload)

 2. `./` -> `main process`
    - `npm i`
    - `npm run serve`
 
## Packaging
1. `./render$ npm run prod`
2. `./$ npm run dist`
 
## License
[MIT](https://choosealicense.com/licenses/mit/)
