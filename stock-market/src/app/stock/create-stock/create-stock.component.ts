import { Component } from '@angular/core';
import {Stock} from '../../model/stock';
import { StockService } from '../../services/stock.service';
import { MessageService } from '../../services/message.service';

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

  constructor(private stockService: StockService) {
    this.initializeStock();
  }

  initializeStock() {
    this.stock = {
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
 
  createStock(stockForm: any) {
    if(stockForm.valid) {
      this.stockService.createStock(this.stock)
        .subscribe((result: any) => {
          // Xử lý khi không có lỗi
          this.message = result.msg;
          this.initializeStock();
      }, (err) => {
          // Xử lý khi có lỗi
          this.message = err.error.msg;
      });
    } else {
      console.error('Stock form is in an invalid state');
    }
  }
}
