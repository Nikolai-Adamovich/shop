import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ProductSelectionComponent } from './product-selection/product-selection.component';

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
        path: 'catalog',
        component: ProductSelectionComponent,
        children: [
            {
                path: '',
                redirectTo: 'catalog',
                pathMatch: 'full'
            },
            {
                path: '**',
                component: ProductSelectionComponent,
                pathMatch: 'full'
            }
        ]
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