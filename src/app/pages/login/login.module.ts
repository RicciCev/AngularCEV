import { CardModule } from './../../components/card/card.module';
import { LoginComponent } from './login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [ 
        CommonModule,
        CardModule,  // importamos el CardModule para acceder al componente Card desde el módulo login.
        FormsModule  // importamos el FormsModule para hacer uso del ngModel y el Two way databinding.
     ],
    exports: [
        LoginComponent
    ],
    providers: [],
})
export class LoginModule {}