import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'reversed'})
// un pipe será una clase que ejecutará un método específico y llamaremos desde otras clases o archivos.
export class ReverseStr implements PipeTransform {
    // recibirá y devolverá un string.
    transform(value: string): string {
        let newStr: string = '';
        for(let i = value.length - 1; i >= 0; i--) {
            newStr += value.charAt(i);
        }
        return newStr;
    }
}