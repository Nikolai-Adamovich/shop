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
var user_service_1 = require("./user.service");
var App = (function () {
    function App(http, userService) {
        this.http = http;
        this.userService = userService;
    }
    App.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('/user/isAuthenticated').subscribe(function (res) {
            var data = res.json();
            if (data.error) {
                _this.userService.username = '';
                console.log("Error: " + data.error);
            }
            else {
                _this.userService.username = data.username;
                _this.userService.email = data.email;
                _this.userService.createdAt = data.createdAt;
                _this.userService.updatedAt = data.updatedAt;
                _this.userService.id = data.id;
            }
        }, function (err) {
            console.log(err.json());
        });
    };
    return App;
}());
App = __decorate([
    core_1.Component({
        selector: 'app-root',
        templateUrl: './app/app.html'
    }),
    __metadata("design:paramtypes", [http_1.Http, user_service_1.UserService])
], App);
exports.App = App;
