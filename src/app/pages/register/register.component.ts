import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ContactForm } from 'src/app/models/contactForm';
import { HomeService } from 'src/app/services/home.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css'],
    providers: [HomeService]
})
export class RegisterComponent implements OnInit {
    ContactModel = new ContactForm();

    listadoDeDatos: Observable<Array<any>>;
    listadoDatosArray: Array<any>;

    // EJEMPLO CALLBACK
    asincroniaCallback = (list, callback) => {
        // comprueba si list es de tipo array con el método instanceof, y la lista no debe estar vacía.
        if (list instanceof Array && list.length > 0) {
            /* con el método map manipulamos la lista, 'valor' será cada elemento de la lista,
             y cada elemento será elevado a 2 con el método pow de la clase Math. */
            const suma = list.map(valor => Math.pow(valor, 2));
            // los callback siempre devuelven dos valores (error y respuesta), en este caso solo devolvemos la respuesta, que es la suma.
            return callback(null, suma);
        } else {
            const error = new Error('Error de ejecución . . .');
            // en este caso devuelve error y no una respuesta.
            return callback(error, null);
        }
    }

    // EJEMPLO PROMESA (devuelven un resolve para resultado o un reject para error)
    asincroniaPromesa = (list) => {
        const promise = new Promise((resolve, reject) => {
            if (list instanceof Array && list.length > 0) {
                const suma = list.map(valor => Math.pow(valor, 2));
                resolve(suma);
            } else {
                const error = new Error('Error de ejecución . . .');
                reject(error);
            }
        });
        return promise;
    }

    constructor(private homeService: HomeService, private router: Router) { }

    ngOnInit(): void { 
        // en caso de que exista error mostrará por consola el error, y sino el resultado.
        // this.asincroniaCallback([1, 2, 3, 4, 5], (error, result) => (error) ? console.log(error) : console.log(result));

        /*
        this.asincroniaPromesa([1, 2, 3, 4, 5])
            .then(respuesta => console.log(respuesta))
            .catch(error => console.log(error));
        */

        // con esta línea escuchamos el observable que tenemos creado en el homeService.
        this.listadoDeDatos = this.homeService.getDatos();

        /* nos subscribimos a ese observable, y lo que reciba (datos que reciba el arrayDatos de homeService),
        lo guarda en el listadoDatosArray y podrá actualizar los arrays, que cuando pase algo guarda los datos nuevos. */
        this.listadoDeDatos.subscribe(datos => this.listadoDatosArray = datos)
    }

    onSubmit(f: NgForm) {
        this.homeService.sendFormContact(f);
    }

    public goToLogin(): void {
        this.router.navigate(['login']);
    }
}
