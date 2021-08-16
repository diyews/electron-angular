// Modules to control application life and create native browser window
import { app, BrowserWindow, session } from 'electron';
import { join } from 'path';
import './ipc/browser_window';

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.

global.__isDev = process.argv0.includes('node_modules') ;

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: join(__dirname, `preload/default.js`),
      webviewTag: true,
    },
    frame: false,
  });

  // and load the index.html of the app.
  if (global.__isDev) {
    mainWindow.loadFile('src/index.html');
    /* if some assets request file:// uncomment below */
    // const pathReg = /\/src\/(?!index\.html)/;
    // session.defaultSession.webRequest.onBeforeRequest({ urls: ['file:///*'] }, (detail, cb) => {
    //   const res: any = {};
    //   const matched = detail.url.match(pathReg);
    //   if (matched) {
    //     res.redirectURL = `http://localhost:4200/` + detail.url.split('/src/')[1];
    //   }
    //   cb(res);
    // });
  } else {
    mainWindow.loadFile('render-release/index.html');
  }

  // Open the DevTools.
  mainWindow.webContents.openDevTools();
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) { createWindow(); }
  });
});

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') { app.quit(); }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
