"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var ProductSelectionComponent = (function () {
    function ProductSelectionComponent(http, router) {
        this.http = http;
        this.router = router;
    }
    ProductSelectionComponent.prototype.ngOnInit = function () {
        var _this = this;
        var urlArray = this.router.url.split('/');
        var subcategory = urlArray[urlArray.length - 1];
        this.http.get('/subcategory/' + subcategory).subscribe(function (res) {
            var data = res.json();
            if (data.error) {
                console.log("Error: " + data.error);
            }
            else {
                _this.products = data.products;
            }
        }, function (err) {
            console.log(err.json());
        });
    };
    return ProductSelectionComponent;
}());
ProductSelectionComponent = __decorate([
    core_1.Component({
        selector: 'product-selection',
        templateUrl: './app/product-selection/product-selection.component.html'
    }),
    __metadata("design:paramtypes", [http_1.Http, router_1.Router])
], ProductSelectionComponent);
exports.ProductSelectionComponent = ProductSelectionComponent;
