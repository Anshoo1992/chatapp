import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl: string = 'http://localhost:3000/api/';
  constructor(public http: Http) { }

  httpPostRequest(url, body): Observable<any> {
    return this.http.post(this.baseUrl + url, body).pipe(
      map(res => res.json()),
      catchError((error: any) =>
        this.onError(error))
    );

  }
  httpGetRequest(url, params): Observable<any> {
    return this.http.get(this.baseUrl + url, { params: params }).pipe(
      map(res => res.json()),
      catchError((error: any) =>
        this.onError(error))
    );
  }

  onError(error) {
    return throwError(error);
  }
}
