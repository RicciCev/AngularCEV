import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { NgModule } from '@angular/core';
import { RegisterModule } from './register/register.module';
import { ContactModule } from './contact/contact.module';
import { NewsModule } from './news/news.module';

// ESTRUCTURA GENERAL DE MÓDULOS (ARRAY DE IMPORTS).
// AQUÍ METEREMOS TODOS LOS MODULOS QUE CREEMOS EN LA CARPETA PAGES. ESTE ES EL MÓDULO PRINCIPAL DE PAGES.
@NgModule({
    declarations: [],
    // aquí declararemos todos los componentes de la carpeta 'pages'.
    imports: [
        LoginModule,
        HomeModule,
        RegisterModule,
        ContactModule,
        NewsModule
    ],
    // aquí exportamos esos componentes coleccionados en el import y así poder reutilizarlos en otras carpetas del proyecto.
    exports: [
        LoginModule,
        HomeModule,
        RegisterModule,
        ContactModule,
        NewsModule
    ],
    providers: []
})

// mantener el mismo nombre de este fichero.
export class PagesModule {}