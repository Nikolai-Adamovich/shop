import { Component, Input } from '@angular/core';
import { Http } from '@angular/http';
import { UserService } from '../user.service';

@Component({
    selector: 'app-header',
    templateUrl: './app/header/header.component.html'
})

export class HeaderComponent {

    constructor(private http: Http) {}

    @Input() userService;

    logout() {
        this.http.get('/user/logout').subscribe(
            res => {
                let data = res.json();
                if (data.error) {
                } else {
                    this.userService.username = '';
                }
            },
            err => {
                console.log(err.json());
            }
        );
    }

}
