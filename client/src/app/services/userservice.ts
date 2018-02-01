
import { Injectable, Inject } from '@angular/core';
import { AppConsts } from '../app.constant';
import { Http, Response} from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router'
import {Observable} from 'rxjs/Observable';
import { user } from '../model/usermodel';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

@Injectable()
export class userservice {
    userdata : user;
    constructor(public http : Http, Router : Router, act: ActivatedRoute){ }

    login(user){
        let url = AppConsts.LOCAL_URL+ AppConsts.LOGIN;
        let headers = new Headers({ 'Content-Type': 'application/json' });

        return this.http.post(url, user).
        map((res: Response) => {
            this.userdata = res.json();
            return res.json();
        }) 
        .catch((error:any) => {     
            return Observable.of(error)
        });
    }

    register(user){
        let url = AppConsts.LOCAL_URL+ AppConsts.REGISTER;
        let headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post(url, user).
        map((res: Response) => {
            return res.json();
        }) 
        .catch((error:any) => {     
            return Observable.throw(error.json().error || 'Server error')
        });
    }
}