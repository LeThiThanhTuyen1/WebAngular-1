import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpServerService {

  private REST_API_SERVICE='http://localhost:3000';
  private httpOptions={
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) { }
  public getstocks(): Observable<any>{
    const url=`${this.REST_API_SERVICE}/stocks`;
    return this.httpClient.get<any>(url, this.httpOptions);
  }

  public postStock(body: any): Observable<any>{
    const url=`${this.REST_API_SERVICE}/stocks`;
    console.log('postStock=', url);
    console.log('postStock: body', body);
    return this.httpClient.post<any>(url, body, this.httpOptions);
  }
}
