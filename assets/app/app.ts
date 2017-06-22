import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { UserService } from './user.service';

@Component({
    selector: 'app-root',
    templateUrl: './app/app.html'
})

export class App implements OnInit {

    constructor(private http: Http, public userService: UserService) {}

    ngOnInit() {
        this.http.get('/user/isAuthenticated').subscribe(
            res => {
                let data = res.json();
                if (data.error) {
                    this.userService.username = '';
                    console.log(`Error: ${data.error}`);
                } else {
                    this.userService.username = data.username;
                    this.userService.email = data.email;
                    this.userService.createdAt = data.createdAt;
                    this.userService.updatedAt = data.updatedAt;
                    this.userService.id = data.id;
                }
            },
            err => {
                console.log(err.json());
            }
        );
    }

}
