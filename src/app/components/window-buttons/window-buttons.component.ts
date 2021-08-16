import { Component, OnInit } from '@angular/core';
import { ElectronService } from '../../services/electron.service';

@Component({
    selector: 'app-window-buttons',
    templateUrl: './window-buttons.component.html',
    styleUrls:  ['./window-buttons.component.scss']
})

export class WindowButtonsComponent implements OnInit {
    constructor(private electronService: ElectronService,
                ) {
    }

    ngOnInit() {
    }

    minimize() {
      this.electronService.ipcRenderer
        .invoke(`minimize`);
    }

    switchMaximize() {
      this.electronService.ipcRenderer
        .invoke(`toggle_maximize`);
    }

    close() {
      this.electronService.ipcRenderer
        .invoke(`close`);
    }
}
