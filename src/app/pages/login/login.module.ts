import { CardModule } from './../../components/card/card.module';
import { LoginComponent } from './login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [ 
        CommonModule,
        CardModule  // importamos el CardModule para acceder al componente Card desde el módulo login.
     ],
    exports: [
        LoginComponent
    ],
    providers: [],
})
export class LoginModule {}