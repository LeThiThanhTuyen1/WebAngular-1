import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Stock } from '../model/stock';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServerService {

  private REST_API_SERVER='http://localhost:3000';
  private httpOptions={
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) { }
  
  toggleFavorite(stock: Stock): Observable<Stock> {
    const url = `${this.REST_API_SERVER}/stocks/${stock.id}`;
    const updatedStock = { ...stock, favorite: !stock.favorite };
    return this.httpClient.patch<Stock>(url, updatedStock, this.httpOptions);
  }
  
  public getStocks(): Observable<any>{
    const url=`${this.REST_API_SERVER}/stocks`;
    return this.httpClient.get<any>(url, this.httpOptions);
  }
  
  public postStock(body: any): Observable<any>{
    const url=`${this.REST_API_SERVER}/stocks`;
    console.log('postStock=', url);
    console.log('postStock: body', body);
    return this.httpClient.post<any>(url, body, this.httpOptions);
  }

  public updateStock(stockId: number, body: any): Observable<any>{
    const url=`${this.REST_API_SERVER}/stocks/${stockId}`;
    return this.httpClient.put<any>(url, body, this.httpOptions);
  }

  public deleteStock(stockId: number): Observable<any> {
    const url=`${this.REST_API_SERVER}/stocks/${stockId}`;
    return this.httpClient.delete<any>(url, this.httpOptions);
  }
  
  public getStockDetails(stockId: number): Observable<any> {
    const url=`${this.REST_API_SERVER}/stocks/${stockId}`;
    return this.httpClient.get<any>(url, this.httpOptions);
  }
}
