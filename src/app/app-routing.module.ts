import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { RegisterComponent } from './pages/register/register.component';
import { NewsComponent } from './pages/news/news.component';
import { DetailNewsComponent } from './pages/news/detailnews/detailnews.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home', // el redirectTo es la página que carga directamente al principio.
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    // contact y news son rutas hijas que solo son accesibles a través del home.
    children: [
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'news',
        component: NewsComponent
      },
      {
        // especificamos que al acceder esta ruta tendrá una subruta (parámetro) que será un id para identificar la noticia concreta.
        path: 'detailnews/:id',
        component: DetailNewsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
