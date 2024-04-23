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
<<<<<<< Updated upstream
  public stock: Stock;
=======
  public stock!: Stock;
>>>>>>> Stashed changes
  public confirmed = false;
  public message: string = '';
  public exchanges  = ['NYSE', 'NASDAQ', 'OTHER'];
  public stocks: Stock[] = [];

<<<<<<< Updated upstream
  constructor(private stockService: StockService,
              public messageService: MessageService) {
    this.stock = new Stock('test','', 0, 0, 'NASDAQ');
              }
=======
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
  // constructor(private stockService: StockService,
  //             public messageService: MessageService) {
  //   this.stock = new Stock('test','', 0, 0, 'NASDAQ');
  //             }
>>>>>>> Stashed changes
 setStockPrice(price: any){
  this.stock.price = price;
  this.stock.previousPrice = price;
 }
 createStock(stockForm: any) {
  if(stockForm.valid) {
<<<<<<< Updated upstream
=======
    this.stockService.createStock(this.stock)
      .subscribe((result: any) => {
        this.message = result.msg;
        this.initializeStock();
      }, (err) => {
        this.message = err.error.msg;
      });
>>>>>>> Stashed changes
    // let created = this.stockService.createStock(this.stock);
    // if(created) {
    //   this.message = 'Successfully created stock with stock code: '
    //       + this.stock.code;
    //   this.stock = new Stock('', '', 0, 0, 'NASDAQ');
    // }
    // else {
    //   this.message = 'Stock with stock code: ' + this.stock.code
    //       + 'already exitst';
    // }
    //-----------------------------------
    // let created = this.stockService.createStock(this.stock);
    // if(created) {
    //   this.messageService.message = 'Successfully created stock with stock code: ' 
    //   + this.stock.code;
    //   this.stock = new Stock('', '', 0, 0, 'NASDAQ');
    // } else {
    //   this.messageService.message = 'Stock with stock code: '
    //   + this.stock.code + 'already exists';
    // }
    //----------------------
<<<<<<< Updated upstream
    this.stockService.createStock(this.stock).subscribe({
      next: (response) => {
        // Xử lý khi không có lỗi
        this.messageService.message = 'Successfully created stock with stock code: ' 
       + this.stock.code;
       this.stock = new Stock('', '', 0, 0, 'NASDAQ');
     },
      error: (error) => {
        // Xử lý khi có lỗi
        this.messageService.message = 'Stock with stock code: '
       + this.stock.code + ' already exists';
      }
    });
  } else {
    console.error('Stock form is in an invalid state');
  }
 }
 
=======
  //   this.stockService.createStock(this.stock).subscribe({
  //     next: (response) => {
  //       // Xử lý khi không có lỗi
  //       this.messageService.message = 'Successfully created stock with stock code: ' 
  //      + this.stock.code;
  //      this.stock = new Stock('', '', 0, 0, 'NASDAQ');
  //    },
  //     error: (error) => {
  //       // Xử lý khi có lỗi
  //       this.messageService.message = 'Stock with stock code: '
  //      + this.stock.code + ' already exists';
  //     }
  //   });
  } else {
     console.error('Stock form is in an invalid state');
  }
 }
>>>>>>> Stashed changes
}
