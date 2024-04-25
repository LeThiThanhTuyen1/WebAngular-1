import { Component, OnInit, Input } from '@angular/core';
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

  constructor(private httpServerService: HttpServerService) { }
  
  onToggleFavorite(event : any): void {
    this.stock.favorite = !this.stock.favorite;
    this.httpServerService.toggleFavorite(this.stock.code)
      .subscribe(() => console.log(`Cập nhật trạng thái yêu thích cho ${this.stock.name}`));
  }

}
