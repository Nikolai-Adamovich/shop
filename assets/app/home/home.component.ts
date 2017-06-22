import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'home',
    template: '<div class="inner"><h2>Home</h2></div>'
})

export class HomeComponent {

    constructor(private http: Http) {}

}