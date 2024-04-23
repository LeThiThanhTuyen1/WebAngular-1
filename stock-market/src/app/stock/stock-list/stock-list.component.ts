import { Component, OnInit, Input } from '@angular/core';
import { StockService } from '../../services/stock.service';
import { Stock } from '../../model/stock';
import { StockItemComponent } from '../stock-item/stock-item.component';
import { Observable, of, throwError } from 'rxjs';
import { HttpServerService } from '../../services/http-server.service';
import { response } from 'express';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrl: './stock-list.component.css'
})
export class StockListComponent implements OnInit{

  public stocks$: Observable<Stock[]> = of([]);

  constructor(private stockService: StockService) {}

  ngOnInit(): void {
    this.stocks$ = this.stockService.getStocks();
    this.stockService.getStocksAsResponse()
      .subscribe((response) => {
          console.log('OBSERVE "response" RESPONSE is', response);
      });
    
    this.stockService.getStocksEvents()
      .subscribe((response) => {
          console.log('OBSERVE "events" RESPONSE is', response);
      }); 
      
    this.stockService.getStocksAsString()
      .subscribe((response) => {
        console.log('Response Type "text" RESPONSE is', response);
      });
    
    this.stockService.getStocksAsBlob()
      .subscribe((response) => {
          console.log('Response Type "blob" RESPONSE is', response);
      });
  }
}
