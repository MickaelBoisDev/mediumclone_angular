import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterRequestInterface } from '../models/registerRequest.interface';
import { CurrentUserInterface } from 'src/app/shared/models/currentUser.interface';
import { Observable, map } from 'rxjs';
import { AuthResponseInterface } from '../models/authResponse.interface';
import { environment } from 'src/environments/environment.development';
import { LoginRequestInterface } from '../models/loginRequest.interface';
import { CurrentUserRequestInterface } from 'src/app/shared/models/currentRequest.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  getUser(response: AuthResponseInterface): CurrentUserInterface {
    return response.user;
  }
  getCurrentUser(): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + '/user';
    return this.http.get<AuthResponseInterface>(url).pipe(map(this.getUser));
  }
  register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + '/users';
    return this.http
      .post<AuthResponseInterface>(url, data)
      .pipe(map(this.getUser));
  }
  login(data: LoginRequestInterface): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + '/users/login';
    return this.http
      .post<AuthResponseInterface>(url, data)
      .pipe(map(this.getUser));
  }

  updateCurrentUser(
    currentUserRequest: CurrentUserRequestInterface
  ): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + '/user';
    return this.http
      .put<AuthResponseInterface>(url, currentUserRequest)
      .pipe(map(this.getUser));
  }
}
