import { Injectable } from '@angular/core';
import { HttpService } from '../common/http.service';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService: HttpService) { }

  createUser(body): Observable<any> {
    let url = 'user/createUser';
    return this.httpService.httpPostRequest(url, body).pipe(
      map(res => res.json()),
      catchError((error: any) =>
        this.onError(error)));
  }

  loginUser(body): Observable<any> {
    let url = 'user/loginUser';
    return this.httpService.httpPostRequest(url, body).pipe(
      map(res => res),
      catchError((error: any) =>
        this.onError(error)));
  }

  getUser(paramData): Observable<any> {
    let url = 'user/getUserDetails';
    let params = new HttpParams().set(paramData.param, paramData.value)
    return this.httpService.httpGetRequest(url, params).pipe(
      map(res => res),
      catchError((error) =>
        this.onError(error)));
  }

  updateUser(data):Observable<any>{
    let url='user/updateUser';
    return this.httpService.httpPostRequest(url,data).pipe(
      map(res => res),
      catchError((error) =>
        this.onError(error)));
  }

  deleteUser(data):Observable<any>{
    let url='user/deleteUser';
    return this.httpService.httpPostRequest(url,data).pipe(
      map(res => res),
      catchError((error) =>
        this.onError(error)));
  }

  sendEmailVerification(data){
    let url='user/sendEmailVerification';
    return this.httpService.httpPostRequest(url,data).pipe(
      map(res => res),
      catchError((error) =>
        this.onError(error)));
  }

  onError(error) {
    return throwError(error);
  }
}
