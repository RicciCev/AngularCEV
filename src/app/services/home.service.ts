import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class HomeService {
    public sendFormContact(formulario: any) {
        console.log('El formulario ha sido enviado');
        console.log(formulario);
    }
}