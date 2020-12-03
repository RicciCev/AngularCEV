import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';

@Component({
    selector: 'app-news',
    templateUrl: './news.component.html',
    styleUrls: ['./news.component.scss'],
    providers: [HomeService]
})
export class NewsComponent implements OnInit {

    public arrayDatosPhotos: Array<any>;

    constructor(private homeService: HomeService) { }

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
}
