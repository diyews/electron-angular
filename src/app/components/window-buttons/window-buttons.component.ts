import { Component, OnInit } from '@angular/core';
import { BrowserWindow } from 'electron';

@Component({
    selector: 'app-window-buttons',
    templateUrl: './window-buttons.component.html',
    styleUrls:  ['./window-buttons.component.scss']
})

export class WindowButtonsComponent implements OnInit {
    currentWindow: BrowserWindow;

    constructor() {
    }

    ngOnInit() {
        const { getCurrentWindow } = window.require('@electron/remote');
        this.currentWindow = getCurrentWindow();
    }

    minimize() {
        this.currentWindow.minimize();
    }

    switchMaximize() {
        if (this.currentWindow.isMaximized()) {
            this.currentWindow.unmaximize();
        } else {
            this.currentWindow.maximize();
        }
    }

    close() {
        this.currentWindow.close();
    }
}
