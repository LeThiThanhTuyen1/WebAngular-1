import { Injectable } from '@angular/core';
<<<<<<< Updated upstream
import { Stock } from '../model/stock';
import { Observable, of, throwError } from 'rxjs';
=======
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Stock } from '../model/stock';
import { Observable, of, throwError } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import test from 'node:test';
>>>>>>> Stashed changes

@Injectable({
  providedIn: 'root'
})
export class StockService {
<<<<<<< Updated upstream
  private stocks: Stock[] = [];
  constructor() { 
    this.stocks = [
      new Stock('Test Stock Company', 'TSC', 85, 80, 'NASDAQ'),
      new Stock('Second Stock Company', 'SSC', 10, 20, 'NSE'),
      new Stock('Last Stock Company', 'LSC', 876, 765, 'NYSE'),
    ];
  }
  getStocks(): Observable<Stock[]> {
    return of(this.stocks);
  }
  
  createStock(stock: Stock): Observable<any> {
    let foundStock = this.stocks.find(each => each.code === stock.code);
    if(foundStock) {
      return throwError({msg: 'Stock with code ' + stock.code + ' already exists'});
    }
    this.stocks.push(stock);
    return of({msg: 'Stock with code ' + stock.code + ' successfully created'});
  }
  deleteStock(stock: Stock): Observable<any> {
    const index = this.stocks.findIndex(each => each.code === stock.code);
    if (index !== -1) {
      this.stocks.splice(index, 1);
      return of({msg: 'Stock with code ' + stock.code + ' successfully deleted'});
    } else {
      return throwError({ message: 'Stock with code ' + stock.code + ' not found' });
    }
  }
  updateStock(updatedStock: Stock): Observable<any> {
    const foundIndex = this.stocks.findIndex(stock => stock.code === updatedStock.code);
    if (foundIndex !== -1) {
      this.stocks[foundIndex] = updatedStock;
      return of({ msg: 'Stock with code ' + updatedStock.code + ' successfully updated' });
    } else {
      return throwError({ message: 'Stock with code ' + updatedStock.code + ' not found' });
    }
  }
  getStockDetails(code: string): Observable<Stock> {
    const stock = this.stocks.find(each => each.code === code);
    if (stock) {
      return of(stock);
    } else {
      return throwError({ message: 'Stock with code ' + code + ' not found' });
    }
  }
  toggleFavorite(stock: Stock): Observable<Stock> {
    let foundStock = this.stocks.find(each => each.code === stock.code);
    if(foundStock) {
      foundStock.favorite = !foundStock.favorite
      return of(foundStock);
    }
    else {
      return throwError({ message: 'Stock with code ' + stock.code + ' not found' });
    }
  }
=======

  constructor(private http: HttpClient) {}

  getStocks() : Observable<Stock[]> {
    return this.http.get<Stock[]>('/api/stock', {
      headers: new HttpHeaders()
        .set('Authorization', 'MyAuthorizationHeaderValue')
        .set('X-example-header', 'TestValue'),
        params: {
          q: 'test',
          test: 'value'
        }
    });
  }

  createStock(stock: Stock) : Observable<any> {
    return this.http.post('/api/stock', stock);
  }

  toggleFavorite(stock: Stock): Observable<Stock> {
    return this.http.patch<Stock>('/api/stock' + stock,
      {
        favorite: !stock.favorite
      });
  }
  // private stocks: Stock[] = [];
  // constructor() { 
  //   this.stocks = [
  //     new Stock('Test Stock Company', 'TSC', 85, 80, 'NASDAQ'),
  //     new Stock('Second Stock Company', 'SSC', 10, 20, 'NSE'),
  //     new Stock('Last Stock Company', 'LSC', 876, 765, 'NYSE'),
  //   ];
  // }
  // getStocks(): Observable<Stock[]> {
  //   return of(this.stocks);
  // }
  
  // createStock(stock: Stock): Observable<any> {
  //   let foundStock = this.stocks.find(each => each.code === stock.code);
  //   if(foundStock) {
  //     return throwError({msg: 'Stock with code ' + stock.code + ' already exists'});
  //   }
  //   this.stocks.push(stock);
  //   return of({msg: 'Stock with code ' + stock.code + ' successfully created'});
  // }
  // deleteStock(stock: Stock): Observable<any> {
  //   const index = this.stocks.findIndex(each => each.code === stock.code);
  //   if (index !== -1) {
  //     this.stocks.splice(index, 1);
  //     return of({msg: 'Stock with code ' + stock.code + ' successfully deleted'});
  //   } else {
  //     return throwError({ message: 'Stock with code ' + stock.code + ' not found' });
  //   }
  // }
  // updateStock(updatedStock: Stock): Observable<any> {
  //   const foundIndex = this.stocks.findIndex(stock => stock.code === updatedStock.code);
  //   if (foundIndex !== -1) {
  //     this.stocks[foundIndex] = updatedStock;
  //     return of({ msg: 'Stock with code ' + updatedStock.code + ' successfully updated' });
  //   } else {
  //     return throwError({ message: 'Stock with code ' + updatedStock.code + ' not found' });
  //   }
  // }
  // getStockDetails(code: string): Observable<Stock> {
  //   const stock = this.stocks.find(each => each.code === code);
  //   if (stock) {
  //     return of(stock);
  //   } else {
  //     return throwError({ message: 'Stock with code ' + code + ' not found' });
  //   }
  // }
  // toggleFavorite(stock: Stock): Observable<Stock> {
  //   let foundStock = this.stocks.find(each => each.code === stock.code);
  //   if(foundStock) {
  //     foundStock.favorite = !foundStock.favorite
  //     return of(foundStock);
  //   }
  //   else {
  //     return throwError({ message: 'Stock with code ' + stock.code + ' not found' });
  //   }
  //}
>>>>>>> Stashed changes
}
