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
  public isUpdateFormVisible: boolean = false;

  constructor(private stockService: StockService, private httpServerService: HttpServerService) { }
  
  onToggleFavorite(event: any){
    this.stockService.toggleFavorite(this.stock)
      .subscribe((stock) => this.stock.favorite = !this.stock.favorite);
  }

  deleteStock(stock: Stock) {
    this.httpServerService.deleteStock(stock.id)
      .subscribe((result) => {location.reload()});
    //window.location.reload();
  }

  toggleUpdateForm() {
    this.isUpdateFormVisible = !this.isUpdateFormVisible;
  }

  updateStock() {
    this.httpServerService.updateStock(this.stock.id, this.stock)
      .subscribe(() => {

      }, (err) => {
        console.error('Error');
      });
  }

  onDetails(stock: Stock): void {
    this.httpServerService.getStockDetails(stock.id)
    .subscribe((response) => {
        console.log('Stock details:', response);
        const stockDetail = `Stock Details: \nStock Name: ${this.stock.name}\nStock Code: ${this.stock.code}\nStock Price: $${this.stock.price}\nExchange: ${this.stock.exchange}`;
        alert(stockDetail);
      },
      (error) => {
        console.error(error);
      }
    )
  }
}
