import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'product-selection',
    templateUrl: './app/product-selection/product-selection.component.html'
})

export class ProductSelectionComponent implements OnInit {

    constructor(private http: Http) {}

    ngOnInit() {

    }

}