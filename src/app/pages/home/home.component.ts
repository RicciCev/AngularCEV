import { HomeService } from 'src/app/services/home.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    providers: [HomeService]    
})
export class HomeComponent implements OnInit {

    public arrayDatosPhotos: Array<any>;

    constructor(private homeService: HomeService) { }

    ngOnInit() {
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
