import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_URL} from '../constants/general';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpClient: HttpClient,
    private jwtHelper: JwtHelperService,
  ) {
  }

  login(formData) {
    return this.httpClient.post(`${API_URL}dashboard/login`, formData);
  }

  loggedIn() {
    return !this.jwtHelper.isTokenExpired();
  }
}
