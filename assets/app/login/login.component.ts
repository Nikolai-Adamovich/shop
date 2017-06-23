import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
    selector: 'login',
    templateUrl: './app/login/login.component.html'
})

export class LoginComponent implements OnInit{

    constructor(private http: Http, private userService: UserService, private router: Router) {}

    ngOnInit() {
        /*this.http.get('/user/isAuthenticated').subscribe(
            res => {
                let data = res.json();
                if (!data.error) {
                    this.router.navigate(['/']);
                }
            }
        );*/
    }

    login(username, password) {
        if (username && password) {
            this.http.post('/user/login', {username: username, password: password}).subscribe(
                res => {
                    let data = res.json();
                    if (data.error) {
                        this.userService.username = '';
                        console.log(`Error: ${data.error}`)
                    } else {
                        this.userService.username = data.username;
                        this.userService.email = data.email;
                        this.userService.createdAt = data.createdAt;
                        this.userService.updatedAt = data.updatedAt;
                        this.userService.id = data.id;

                        this.router.navigate(['/']);
                    }
                },
                err => {
                    console.log(err.json());
                }
            );
        }
    }

    loginGoogle() {
        this.http.get('/user/loginGoogle').subscribe(
            res => {
                let data = res.json();
                if (data.error) {
                    this.userService.username = '';
                    console.log(`Error: ${data.error}`)
                } else {
                    this.userService.username = data.username;
                    this.userService.email = data.email;
                    this.userService.createdAt = data.createdAt;
                    this.userService.updatedAt = data.updatedAt;
                    this.userService.id = data.id;

                    this.router.navigate(['/']);
                }
            },
            err => {
                console.log(err.json());
            }
        );
    }

    register(username, email, password) {
        if (username && email && password) {
            this.http.post('/user/createUser', {username: username, email: email, password: password}).subscribe(
                res => {
                    let data = res.json();
                    if (data.error) {
                        console.log(`Error: ${data.message}`)
                    } else {
                        console.log(`Success! Name: ${data.username}`)
                    }
                },
                err => {
                    console.log(err.json());
                }
            );
        }
    }

}
