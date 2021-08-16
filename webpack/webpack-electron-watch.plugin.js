const childProcess = require('child_process');
const electron = require('electron');
const path = require('path');

let lastChildProcess;
class WebpackElectronWatchPlugin {
  apply(compiler) {
    compiler.hooks.done.tap(
      'WebpackElectronWatchPlugin',
      (...args) => {
        lastChildProcess?.kill();
        lastChildProcess = childProcess.spawn(electron, [path.resolve(__dirname, '../')])
      }
    );
  }
}

module.exports = WebpackElectronWatchPlugin;
