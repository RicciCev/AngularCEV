// MÓDULO PARA AGRUPAR TODOS LOS COMPONENTES QUE VAYAMOS A CREAR.

import { CardModule } from './card/card.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarModule } from './navbar/navbar.module';

@NgModule({
    declarations: [],
    imports: [ 
        CommonModule,
        CardModule,  // importamos el modulo del componente Card.
        NavbarModule
    ],
    exports: [
        CardModule,  // exportamos el modulo del componente Card para poder utilizarlo en otros ficheros del proyecto.
        NavbarModule
    ],
    providers: [],
})
export class ComponentsModule {}