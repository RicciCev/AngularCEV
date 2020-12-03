import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [ NavbarComponent ],
    // para poder acceder a las rutas hijas hay que importar el RouterModule en el module de navbar.
    imports: [ CommonModule, RouterModule ],
    exports: [ NavbarComponent ],
    providers: [],
})
export class NavbarModule {}
