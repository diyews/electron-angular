import { Injectable } from '@angular/core';
import { IpcRenderer } from 'electron';

@Injectable({
  providedIn: 'root'
})
export class ElectronService {
  ipcRenderer: IpcRenderer;

  constructor() {
    this.ipcRenderer = window.ipcRenderer;
  }
}
