import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/services/home.service';

@Component({
    selector: 'app-news',
    templateUrl: './news.component.html',
    styleUrls: ['./news.component.scss'],
    providers: [HomeService]
})
export class NewsComponent implements OnInit {

    public arrayDatosPhotos: Array<any>;

    constructor(private homeService: HomeService, private router: Router) { }

    ngOnInit(): void {
        this.homeService.getDataPhotos().subscribe(
            response => {
                this.arrayDatosPhotos = response;
            },
            error => {
                console.log('Error ' + JSON.stringify(error));
            }
        );
    }

    public goToViewDetail(id): void {
        // de esta manera pasamos el parámetro id a la ruta (parámetro de la ruta).
        this.router.navigate(['home/detailnews', id]);
    }
}
