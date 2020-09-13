import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Auth } from '../models/auth.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {
  }

  public authUser(auth:Auth):Observable<Auth>{
    //METHOD=GET
       return this.http.post<Auth>("https://localhost:8443/v3/user/auth",auth);
  }

}
