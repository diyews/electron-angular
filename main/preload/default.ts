import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld(`ipcRenderer`, {
  on: (channel: string, listener) => {
    ipcRenderer.on(channel, listener);
    return () => ipcRenderer.removeListener(channel, listener);
  },
  removeAllListeners: (channel: string) => {
    ipcRenderer.removeAllListeners(channel);
  },
  send: (channel: string, ...args: any[]) => {
    ipcRenderer.send(channel, ...args);
  },
  once: (channel: string, listener) => {
    ipcRenderer.once(channel, listener);
  },
  invoke: (channel: string, ...args: any[]) => {
    return ipcRenderer.invoke(channel, ...args);
  },
});
