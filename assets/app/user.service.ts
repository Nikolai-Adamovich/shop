import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

    constructor() {}

    username: string;
    email: string;
    createdAt: string;
    updatedAt: string;
    id: number;
}