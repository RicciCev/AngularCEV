import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarModule } from 'src/app/components/navbar/navbar.module';

@NgModule({
    declarations: [HomeComponent],
    // para poder utilizar el navbar importamos el NavbarModule
    imports: [ CommonModule, FormsModule, NavbarModule ],
    exports: [HomeComponent],
    providers: [],
})
export class HomeModule {}
