import { NgModule } from '@angular/core';

import { AppHeaderComponent } from './header/app-header.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
    imports: [
        ComponentsModule
    ],
    exports: [AppHeaderComponent],
    declarations: [AppHeaderComponent],
    providers: [],
})
export class LayoutModule {
}
