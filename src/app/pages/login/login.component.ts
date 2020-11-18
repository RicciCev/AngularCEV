import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
    // selector es el nombre de este componente.
    selector: 'app-login',
    // templateUrl es el documento html que muestra el aspecto de la página.
    templateUrl: './login.component.html',
    // ficheros de estilo CSS.
    styleUrls: ['./login.component.css'],
    providers: []
})

export class LoginComponent implements OnInit, OnDestroy {
    constructor() {

    }

    // se ejecuta cuando se inicia esta página.
    ngOnInit() {
        console.log('El componente se ha iniciado.');
    }

    // se ejecuta cuando se termina esta página.
    ngOnDestroy() {
        console.log('El componente se ha terminado.')
    }
}