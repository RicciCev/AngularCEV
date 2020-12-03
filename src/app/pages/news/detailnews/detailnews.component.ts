import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
    selector: 'detalle-news',
    templateUrl: './detailnews.component.html',
    styleUrls: ['./detailnews.component.css']
})
export class DetailNewsComponent implements OnInit {

    public sub: any;

    // la clase ActivatedRoute nos facilitará recoger datos que nos vienen por urls como parámetro.
    constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {
        // recibimos los parametros que son de tipo ParamMap.
        this.sub = this.activatedRoute.paramMap.subscribe((parms: ParamMap) => {
            // en la petición get pasamos el nombre tal cual hemos establecido en las rutas.
            console.log('El id de la notícia es ' + parms.get('id'));
        });
     }

     ngOnDestroy(): void {
         // si se destruye el componente parará de escuchar a ese Observable.
         this.sub.unsubscribe();
     }
}
