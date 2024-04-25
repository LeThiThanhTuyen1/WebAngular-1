import { Component } from '@angular/core';
import {Stock} from '../../model/stock';
import { StockService } from '../../services/stock.service';
import { MessageService } from '../../services/message.service';
import { HttpServerService } from '../../services/http-server.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-stock',
  templateUrl: './create-stock.component.html',
  styleUrl: './create-stock.component.css'
})
export class CreateStockComponent {

  public stock!: Stock;

  public confirmed = false;
  public message: string = '';
  public exchanges  = ['NYSE', 'NASDAQ', 'OTHER'];

  //constructor(private stockService: StockService) {
    constructor(private httpServerService: HttpServerService, private router: Router) {
    this.initializeStock();
  }

  initializeStock() {
    this.stock = {
      id: 0,
      name: '',
      code: '',
      price: 0,
      previousPrice: 0,
      exchange: 'NASDAQ',
      favorite: false
    };
  }
          
 setStockPrice(price: any){
  this.stock.price = price;
  this.stock.previousPrice = price;
 }
 createStock(stockForm: any): void {
  if(stockForm.valid) {
    this.httpServerService.postStock(this.stock)
    .subscribe(() => {
      // Reset form after successful creation
      this.initializeStock();
    });
     // Navigate to stock list page to update data
  }
 else {
    console.error('Stock form is in an invalid state');
 }
}
}
