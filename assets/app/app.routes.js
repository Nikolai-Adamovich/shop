"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var home_component_1 = require("./home/home.component");
var login_component_1 = require("./login/login.component");
var catalog_component_1 = require("./catalog/catalog.component");
var product_selection_component_1 = require("./product-selection/product-selection.component");
exports.routes = [
    {
        path: '',
        component: home_component_1.HomeComponent
    },
    {
        path: 'home',
        component: home_component_1.HomeComponent
    },
    {
        path: 'catalog',
        component: catalog_component_1.CatalogComponent
    },
    {
        path: 'catalog',
        component: product_selection_component_1.ProductSelectionComponent,
        children: [
            {
                path: '',
                redirectTo: 'catalog',
                pathMatch: 'full'
            },
            {
                path: '**',
                component: product_selection_component_1.ProductSelectionComponent,
                pathMatch: 'full'
            }
        ]
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent
    },
    {
        path: '**',
        component: home_component_1.HomeComponent
    },
];
