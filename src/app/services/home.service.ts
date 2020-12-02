import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HomeService {
        public arrayDatos: Array<any>;
    // siempre que veamos un array con '$' se tratará de un subject.
    private listadoDatos$ = new Subject<Array<any>>();

    constructor() {
        this.arrayDatos = [];
    }

    public sendFormContact(formulario: any) {
        console.log('El formulario ha sido enviado');
        console.log(formulario);
    }

    agregarAListado(elemento: string) {
        // agrega un elemento de tipo string a la lista arrayDatos.
        this.arrayDatos.push(elemento);
        // con esta línea el subject sabe que algo en el arrayDatos ha cambiado.
        this.listadoDatos$.next(this.arrayDatos);
    }

    getDatos(): Observable<any> {
        // este es el observable que estará observando si surgen cambios o no.
        return this.listadoDatos$.asObservable();
    }

    /* devuelve un Observable ya que al hacer la petición get gracias al HttpClient,
    estaremos escuchando hasta que la petición se complete y nos llegue los datos. */
    /*
    public getDataPhotos(): Observable<any> {
        let url = AppEndPoints.ENDPOINTEJEMPLO;
        return this.http.get(url);
    }
    */
}