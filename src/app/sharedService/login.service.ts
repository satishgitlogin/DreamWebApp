import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  configUrl = "http://localhost:3000/users";
  doLogin(cred:any):Observable<any>{

    //const cred={}
    return this.http.post(this.configUrl,cred)

  }

  isLoggedIn(): boolean {
    console.log(sessionStorage.getItem('authToken') !== null);
    return sessionStorage.getItem('authToken') !== null;
  }

  logout() {
    sessionStorage.removeItem('authToken');
  }

  doSignUp(registeredData:any):Observable<any>{
return this.http.post(this.configUrl,registeredData)
  }
}
