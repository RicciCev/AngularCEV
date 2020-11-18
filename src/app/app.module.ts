import { PagesModule } from './pages/pages.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule // De esta manera importamos nuestro módulo PagesModule creado en la carpeta pages.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
