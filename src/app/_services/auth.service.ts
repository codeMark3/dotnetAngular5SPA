import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  baseUrl: string = "http://localhost:5000/api/auth/";
  userToken: any;

  constructor(private http: Http) {}

  login(model: any) {
    return this.http.post(this.baseUrl + 'login', model, this.requestOption())
        .map((response: Response) => {
            const user = response.json();
            if(user) {
                localStorage.setItem('token', user.tokenString);
                this.userToken = user.tokenString;
            }
        });
  }

  register(model: any) {
      return this.http.post(this.baseUrl + 'register', model, this.requestOption());
  }

  private requestOption() {
      const headers = new Headers({ "Content-type": "application/json" });
      return new RequestOptions({ headers: headers });
  }
}