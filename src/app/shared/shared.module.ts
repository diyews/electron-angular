import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebviewDirective } from './directives/webview.directive';

const directives = [
  WebviewDirective,
];

@NgModule({
  declarations: [
    ...directives,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ...directives,
  ],
})
export class SharedModule { }
