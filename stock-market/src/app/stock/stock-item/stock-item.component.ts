import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Stock } from '../../model/stock';
import { StockListComponent } from '../stock-list/stock-list.component';
import { Observable } from 'rxjs';
import { StockService } from '../../services/stock.service';
import { HttpServerService } from '../../services/http-server.service';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrl: './stock-item.component.css'
})
export class StockItemComponent {

  @Input() public stock!: Stock;
  @Output() delete = new EventEmitter<number>();
  @Output() update = new EventEmitter<any>();

  constructor(private stockService: StockService, private httpServerService: HttpServerService) { }
  
  onToggleFavorite(event: any){
    this.stockService.toggleFavorite(this.stock)
      .subscribe((stock) => this.stock.favorite = !this.stock.favorite);
  }

  deleteStock() {
    this.delete.emit(this.stock.id);
    // this.httpServerService.deleteStock(this.stock.id)
    //   .subscribe((data) => {
    //     // Xóa cổ phiếu thành công, thực hiện các thao tác cập nhật giao diện (nếu cần)
    //   }, (error) => {
    //     console.error('Unable to delete the stock:', error);
    //     // Xử lý lỗi nếu có
    //   });
  }

  updateStock() {
    this.update.emit(this.stock);
    // this.httpServerService.updateStock(this.stock.id, this.stock)
    //   .subscribe(() => {
    //     // Cập nhật thông tin cổ phiếu thành công, thực hiện các thao tác cập nhật giao diện (nếu cần)
    //   }, (error) => {
    //     console.error('Lỗi khi cập nhật cổ phiếu:', error);
    //     // Xử lý lỗi nếu có
    //   });
  }
}
