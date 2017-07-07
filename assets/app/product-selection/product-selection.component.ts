import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

interface ICategory {
    name: string;
    subcategories: ISubcategory[];
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
    selector: 'product-selection',
    templateUrl: './app/product-selection/product-selection.component.html'
})

export class ProductSelectionComponent implements OnInit {

    constructor(private http: Http, private router: Router) {}

    products: IProduct[];

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

    pageNumber: number = 1;

    private getProducts() {
        this.http.post('/product/getProducts', {'pageNumber': this.pageNumber, 'count': 2}).subscribe(
            res => {
                let data = res.json();
                if (data.error) {
                    console.log(`Error: ${data.error}`);
                } else {
                    console.log(data);
                    this.pageNumber++;
                }
            },
            err => {
                console.log(err.json());
            }
        );
    }

}