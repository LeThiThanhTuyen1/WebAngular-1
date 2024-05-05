import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Stock } from '../../model/stock';
import { StockListComponent } from '../stock-list/stock-list.component';
import { Observable } from 'rxjs';
import { StockService } from '../../services/stock.service';
import { HttpServerService } from '../../services/http-server.service';
import { error } from 'console';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrl: './stock-item.component.css'
})
export class StockItemComponent {

  @Input() public stock!: Stock;
  @Output() delete = new EventEmitter<number>();
  @Output() update = new EventEmitter<any>();
  @Output() toggleFavorite: EventEmitter<any> = new EventEmitter<any>(); // Output để thông báo sự kiện

  public isUpdateFormVisible: boolean = false;

  constructor(
    private stockService: StockService, 
    private httpServerService: HttpServerService) { }

  deleteStock(stock: Stock) {
    this.httpServerService.deleteStock(stock.id)
      .subscribe((result) => {location.reload()});
  }

  toggleUpdateForm() {
    this.isUpdateFormVisible = !this.isUpdateFormVisible;
  }

  updateStock(event: any) {
    this.httpServerService.updateStock(this.stock.id, this.stock)
      .subscribe(() => {
        location.reload();
      }, (err) => {
        console.error('Error');
      });
  }

  onToggleFavorite(event: MouseEvent): void {
    event.stopPropagation();
    
    // Lưu trạng thái yêu thích hiện tại của cổ phiếu
    const currentFavoriteState = this.stock.favorite;
  
    // Đảo ngược trạng thái favorite ngay lập tức để cập nhật giao diện
    this.stock.favorite = !this.stock.favorite;
  
    // Gửi yêu cầu cập nhật đến máy chủ chỉ với trạng thái favorite mới của cổ phiếu
    this.httpServerService.toggleFavorite(this.stock)
      .subscribe(
        (response) => {
          console.log('Stock updated successfully!', response);
          // Trạng thái đã được cập nhật thành công trên máy chủ, không cần phải làm gì cả
        },
        (error) => {
          console.error('Failed to update stock:', error);
          // Nếu gặp lỗi, phục hồi trạng thái yêu thích trước đó trên giao diện
          this.stock.favorite = currentFavoriteState;
        }
      );
  }
}
