import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ProductSelectionComponent } from './product-selection/product-selection.component';
import { ProductComponent }   from './product/product.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'catalog',
        component: CatalogComponent
    },
    {
        path: 'catalog/:subcategory',
        component: ProductSelectionComponent
    },
    {
        path: 'catalog/:subcategory/:product',
        component: ProductComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '**',
        component: HomeComponent
    },
];