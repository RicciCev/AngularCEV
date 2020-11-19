import { LoginModule } from './login/login.module';
import { NgModule } from '@angular/core';

// ESTRUCTURA GENERAL DE MÓDULOS (ARRAY DE IMPORTS).
// AQUÍ METEREMOS TODOS LOS MODULOS QUE CREEMOS EN LA CARPETA PAGES. ESTE ES EL MÓDULO PRINCIPAL DE PAGES.
@NgModule({
    declarations: [],
    // aquí declararemos todos los componentes de la carpeta 'pages'.
    imports: [],
    // aquí exportamos esos componentes coleccionados en el import y así poder reutilizarlos en otras carpetas del proyecto.
    exports: [
        LoginModule
    ],
    providers: []
})

// mantener el mismo nombre de este fichero.
export class PagesModule {}