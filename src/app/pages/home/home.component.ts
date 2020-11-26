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

    constructor(private homeService: HomeService) { }

    ngOnInit(): void { }

    onSubmit(f: NgForm) {
        this.homeService.sendFormContact(f);
    }
}
