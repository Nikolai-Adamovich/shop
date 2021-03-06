import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
//import * as $ from 'jquery';

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
    selector: 'catalog',
    templateUrl: './app/catalog/catalog.component.html'
})

export class CatalogComponent implements OnInit {

    constructor(private http: Http) {}

    categories: ICategory[];
    subcategories: ISubcategory[];
    activeItemIndex: number = 0;

    ngOnInit() {
        this.http.get('/category').subscribe(
            res => {
                let data = res.json();
                if (data.error) {
                    this.categories = [];
                    this.subcategories = [];
                    console.log(`Error: ${data.error}`);
                } else {
                    this.categories = data;
                    this.subcategories = this.categories[0].subcategories;
                }
            },
            err => {
                console.log(err.json());
            }
        );
    }

    private showSubcategories(index) {
        this.subcategories = this.categories[index].subcategories;
    }

    private changeActiveClass(index) {
        this.activeItemIndex = index;
    }

}