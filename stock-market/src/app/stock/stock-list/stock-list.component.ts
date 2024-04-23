import { Component, OnInit, Input } from '@angular/core';
import { StockService } from '../../services/stock.service';
import { Stock } from '../../model/stock';
import { StockItemComponent } from '../stock-item/stock-item.component';
import { Observable, of, throwError } from 'rxjs';
<<<<<<< Updated upstream
=======
import { HttpServerService } from '../../services/http-server.service';

>>>>>>> Stashed changes
@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrl: './stock-list.component.css'
})
export class StockListComponent implements OnInit{

  public stocks$: Observable<Stock[]> = of([]);
  constructor(private stockService: StockService) {}
<<<<<<< Updated upstream
  public selectedStock!: Stock;
  public selectedStockForUpdate: Stock | null = null;

  ngOnInit(): void {
      this.stocks$ = this.stockService.getStocks();
      // this.stockService.getStocks()
      //     .subscribe(stocks => {
      //         this.stocks = this.stocks;
      //     });
  }
  deleteStock(stock: Stock): void {
    this.stockService.deleteStock(stock).subscribe(() => {
      // Xóa cổ phiếu khỏi danh sách sau khi xóa thành công
      // Cập nhật lại danh sách cổ phiếu
      this.stocks$ = this.stockService.getStocks();
    });
  }
  update(): void {
    if (this.selectedStockForUpdate) {
      this.stockService.updateStock(this.selectedStockForUpdate).subscribe(() => {
        // Không cần làm gì cả vì đã cập nhật thông tin trực tiếp trong danh sách
        this.selectedStockForUpdate = null;
      });
    }
  }
  updateStock(stock: Stock): void {
    this.selectedStockForUpdate = stock;
  }
  
  viewDetails(stock: Stock): void {
    this.stockService.getStockDetails(stock.code).subscribe(
      (details: Stock) => {
        this.selectedStock = details;
      },
      (error) => {
        console.error(error.message);
        // Xử lý lỗi (nếu cần)
      }
    );
  }
  onToggleFavorite(stock: Stock) {
    console.log('Favorite for stock', stock, 'was triggred');
    // stock.favorite = !stock.favorite;
    this.stockService.toggleFavorite(stock);
  }
=======

  ngOnInit(): void {
      //this.stocks$ = this.stockService.getStocks();
      this.stocks$ = this.stockService.getStocks();
  }
  // public stocks$: Observable<Stock[]> = of([]);
  // constructor(private stockService: StockService) {}
  // public selectedStock!: Stock;
  // public selectedStockForUpdate: Stock | null = null;

  // ngOnInit(): void {
  //     this.stocks$ = this.stockService.getStocks();
  //     // this.stockService.getStocks()
  //     //     .subscribe(stocks => {
  //     //         this.stocks = this.stocks;
  //     //     });
  // }
  // deleteStock(stock: Stock): void {
  //   this.stockService.deleteStock(stock).subscribe(() => {
  //     // Xóa cổ phiếu khỏi danh sách sau khi xóa thành công
  //     // Cập nhật lại danh sách cổ phiếu
  //     this.stocks$ = this.stockService.getStocks();
  //   });
  // }
  // update(): void {
  //   if (this.selectedStockForUpdate) {
  //     this.stockService.updateStock(this.selectedStockForUpdate).subscribe(() => {
  //       // Không cần làm gì cả vì đã cập nhật thông tin trực tiếp trong danh sách
  //       this.selectedStockForUpdate = null;
  //     });
  //   }
  // }
  // updateStock(stock: Stock): void {
  //   this.selectedStockForUpdate = stock;
  // }
  
  // viewDetails(stock: Stock): void {
  //   this.stockService.getStockDetails(stock.code).subscribe(
  //     (details: Stock) => {
  //       this.selectedStock = details;
  //     },
  //     (error) => {
  //       console.error(error.message);
  //       // Xử lý lỗi (nếu cần)
  //     }
  //   );
  // }
  // onToggleFavorite(stock: Stock) {
  //   console.log('Favorite for stock', stock, 'was triggred');
  //   // stock.favorite = !stock.favorite;
  //   this.stockService.toggleFavorite(stock);
  // }
>>>>>>> Stashed changes
}
