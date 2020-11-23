import { Component, OnDestroy, OnInit, ɵisDefaultChangeDetectionStrategy } from '@angular/core';

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
    public validatePassw: boolean;

    public arrayOfCars: Array<string>;

    public dataCurrency: number = 456;
    public dataDate = new Date(1996, 8, 20);
    public dataDecimal: any = 500.678;
    public dataJson = {foo: 'foo', goo: { too: 'new'}};
    public dataString: string = 'Prueba';
    public dataPercent: number = 580;
    public dataSlice: Array<number> = [1, 2, 3, 4, 5, 6];

    constructor() {
        this.title = 'Este es nuestro login';
        this.titleLogin = true;
        this.validatePassw = false;
        this.arrayOfCars = ['ferrari', 'lambo', 'koeniggsegg', 'McLaren'];
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
        // la passw debe contener almenos 6 caracteres.
        if(this.passw.length < 6) {
            this.validatePassw = false;
        } else {
            this.validatePassw = true;
        }
    }

    public validateEmail(evento): void {
        const inputValue: string = evento.target.value;
        this.msgUser = inputValue;
    }
}