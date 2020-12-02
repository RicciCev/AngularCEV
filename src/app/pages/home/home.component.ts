import { HomeService } from './../../services/home.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactForm } from './../../models/contactForm';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    providers: [HomeService]    // en los providers indicamos los servicios que usamos en esta clase.
})
export class HomeComponent implements OnInit {

    ContactModel = new ContactForm();

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

    constructor(private homeService: HomeService) { }

    ngOnInit(): void {
        // en caso de que exista error mostrará por consola el error, y sino el resultado.
        this.asincroniaCallback([1, 2, 3, 4, 5], (error, result) => (error) ? console.log(error) : console.log(result));
    }

    onSubmit(f: NgForm) {
        this.homeService.sendFormContact(f);
    }
}
