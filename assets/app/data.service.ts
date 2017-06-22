import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class DataService {

    constructor(public http: Http) {}

    getUserInfo(name) {
        return this.http.get('/user/' + name);
    }

    getUsersList() {
        return this.http.get('/user');
    }


}
