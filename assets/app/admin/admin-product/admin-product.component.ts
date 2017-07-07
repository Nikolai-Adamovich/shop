import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import * as slugg from 'slugg';

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
    selector: 'admin-product',
    templateUrl: './app/admin/admin-product/admin-product.component.html'
})

export class AdminProductComponent implements OnInit {

    constructor(private http: Http) {}

    products: IProduct[];
    url: string;

    ngOnInit() {
    }

    makeSlug(name) {
        this.url = slugg(name);
    }

    createProduct(subcategory, name, url, price) {
        if (subcategory && name && url && price) {
            this.http.post('/subcategory/addProduct', {subcategory: subcategory, name: name, url: url, price: price}).subscribe(
                res => {
                    let data = res.json();
                    if (data.error) {
                        console.log(`Error: ${data.error}`)
                    } else {
                        console.log(data);
                    }
                },
                err => {
                    console.log(err.json());
                }
            );
        }
    }

}