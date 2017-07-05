import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Component({
    selector: 'product-selection',
    templateUrl: './app/product-selection/product-selection.component.html'
})

export class ProductSelectionComponent implements OnInit {

    constructor(private http: Http, private router: Router) {}

    products;

    ngOnInit() {
        let urlArray = this.router.url.split('/');
        let subcategory = urlArray[urlArray.length - 1];

        this.http.get('/subcategory/' + subcategory).subscribe(
            res => {
                let data = res.json();
                if (data.error) {
                    console.log(`Error: ${data.error}`);
                } else {
                    this.products = data.products;
                }
            },
            err => {
                console.log(err.json());
            }
        );
    }

}