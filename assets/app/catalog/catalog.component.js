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
var CatalogComponent = (function () {
    function CatalogComponent(http) {
        this.http = http;
    }
    CatalogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('/category').subscribe(function (res) {
            var data = res.json();
            if (data.error) {
                _this.categories = [];
                _this.subcategories = [];
                console.log("Error: " + data.error);
            }
            else {
                _this.categories = data;
                _this.subcategories = _this.categories[0].subcategories;
            }
        }, function (err) {
            console.log(err.json());
        });
    };
    CatalogComponent.prototype.showSubcategories = function (index) {
        this.subcategories = this.categories[index].subcategories;
    };
    CatalogComponent.prototype.changeActiveClass = function (event) {
        var li = $(event.target);
        li.addClass('active');
        li.siblings('li').removeClass('active');
    };
    return CatalogComponent;
}());
CatalogComponent = __decorate([
    core_1.Component({
        selector: 'catalog',
        templateUrl: './app/catalog/catalog.component.html'
    }),
    __metadata("design:paramtypes", [http_1.Http])
], CatalogComponent);
exports.CatalogComponent = CatalogComponent;
