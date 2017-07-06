import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

interface ICategory {
    name: string;
    subcategories: ISubcategory[]
}

interface ISubcategory {
    name: string;
    url: string;
    parentCategory: ICategory;
    products: IProduct[];
}

interface IProduct {
    name: string;
    url: string;
    price: number;
    parentSubcategory: ISubcategory;
}

@Component({
    selector: 'product',
    templateUrl: './app/product/product.component.html'
})

export class ProductComponent implements OnInit {

    constructor(private http: Http, private router: Router) {}

    product: IProduct;

    ngOnInit() {
        let urlArray = this.router.url.split('/');
        let productURL = urlArray[urlArray.length - 1];

        this.http.get('/product/' + productURL).subscribe(
            res => {
                let data = res.json();
                if (data.error) {
                    console.log(`Error: ${data.error}`);
                } else {
                    this.product = data;
                }
            },
            err => {
                console.log(err.json());
            }
        );
    }

}