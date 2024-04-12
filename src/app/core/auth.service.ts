import { Injectable } from "@angular/core";
import { SESSION_ATTRIBUTE_AUTHENTICATED, SESSION_ATTRIBUTE_ROLE, URL_LOGIN } from '../constants/api';
import { HttpClient } from "@angular/common/http";
import { jwtDecode } from "jwt-decode";
import { CookieService } from 'ngx-cookie-service';
import { Token } from "@angular/compiler";
import { JwtDto } from "../interfaces/JwtDto";

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {

  SESSION_ATTRIBUTE = 'authenticatedUser';

  public username: any;
  public senha: any;

  constructor(private http: HttpClient,private cookieService: CookieService ) { }

  setToken(token: string) {
    this.cookieService.set( 'token', token );
  }
  getRole(){
    const token = this.cookieService.get('token');
    const decoded = jwtDecode(token);
    const jwt = decoded as JwtDto;
    console.log(jwt.role[0].name);
    return jwt.role[0].name;
  }
  getToken(){
    const token = this.cookieService.get('token');
    return token;

  }

  login(username: String, senha: String){
    return this.http
      .post(URL_LOGIN, {
        username: username,
        senha: senha
      }, { responseType: "text" });
  }

  isUserLoggedIn() {
    let isLoggedIn = this.getToken();
    if (isLoggedIn === null) return false;
    return true;
  }
  logout() {
    this.cookieService.delete('token');
  }

}
