import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailNewsComponent } from './detailnews.component';

@NgModule({
    declarations: [DetailNewsComponent],
    imports: [ CommonModule ],
    exports: [DetailNewsComponent],
    providers: [],
})
export class DetailNewsModule {}