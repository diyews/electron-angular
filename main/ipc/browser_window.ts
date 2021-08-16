import { BrowserWindow, ipcMain, webContents } from 'electron';

ipcMain.handle(`minimize`, async event => {
  BrowserWindow.fromWebContents(event.sender)
    .minimize();
});

ipcMain.handle(`toggle_maximize`, async event => {
  const win = BrowserWindow.fromWebContents(event.sender);
  if (win.isMaximized()) {
    win.unmaximize();
  } else {
    win.maximize();
  }
});

ipcMain.handle(`close`, async event => {
  BrowserWindow.fromWebContents(event.sender)
    .close();
});
