// MODULO DEL COMPONENTE CARD

import { CardComponent } from './card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        CardComponent
    ],
    imports: [ CommonModule ],
    exports: [
        CardComponent   // exportamos para poder importarlo en el módulo de componentes en general.
    ],
    providers: [],
})
export class CardModule {}