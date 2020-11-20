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

    public title: string;
    public titleLogin: boolean;
    public msgUser: string;

    public user: string;
    public passw: string;

    constructor() {
        this.title = 'Este es nuestro login';
        this.titleLogin = true;
    }

    // se ejecuta cuando se inicia esta página.
    ngOnInit() {
        console.log('El componente se ha iniciado.');
    }

    // se ejecuta cuando se termina esta página.
    ngOnDestroy() {
        console.log('El componente se ha terminado.');
    }

    // método que gracias al databinding será llamado y ejecutado en la vista, ejemplo de databinding de vista a componente.
    public sendLogin(): void {
        console.log('El usuario es ' + this.user + ', la password es ' + this.passw);
    }

    public validateEmail(evento): void {
        const inputValue: string = evento.target.value;
        this.msgUser = inputValue;
    }
}