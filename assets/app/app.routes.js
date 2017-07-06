"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var home_component_1 = require("./home/home.component");
var login_component_1 = require("./login/login.component");
var catalog_component_1 = require("./catalog/catalog.component");
var product_selection_component_1 = require("./product-selection/product-selection.component");
var product_component_1 = require("./product/product.component");
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
        path: 'catalog/:subcategory',
        component: product_selection_component_1.ProductSelectionComponent
    },
    {
        path: 'catalog/:subcategory/:product',
        component: product_component_1.ProductComponent
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
