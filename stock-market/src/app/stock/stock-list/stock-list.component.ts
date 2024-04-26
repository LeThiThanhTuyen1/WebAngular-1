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

  stocks: Stock[] = [];

  constructor(private httpServerService: HttpServerService) {}

  ngOnInit(): void {
      this.getStocks();
  }

  getStocks(): void {
    this.httpServerService.getStocks()
      .subscribe(stocks => this.stocks = stocks);
  }
}
