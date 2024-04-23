import { Component, OnInit, Input } from '@angular/core';
import { Stock } from '../../model/stock';
import { StockListComponent } from '../stock-list/stock-list.component';
import { Observable } from 'rxjs';
<<<<<<< Updated upstream
=======
import { StockService } from '../../services/stock.service';
>>>>>>> Stashed changes

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrl: './stock-item.component.css'
})
export class StockItemComponent implements OnInit{

  @Input() public stock!: Stock;

<<<<<<< Updated upstream
  constructor() { }
=======
  constructor(private stockSerVice: StockService) { }
>>>>>>> Stashed changes
  ngOnInit() {
   // this.stock = new Stock('Test Stock Company', 'TSC', 85, 80, "");
  }

  onToggleFavorite(event: any){
<<<<<<< Updated upstream
    console.log('We are toggling the favorite state for this stock', event);
    this.stock.favorite = !this.stock.favorite;
=======
    // console.log('We are toggling the favorite state for this stock', event);
    // this.stock.favorite = !this.stock.favorite;
    this.stockSerVice.toggleFavorite(this.stock)
      .subscribe((stock) => this.stock.favorite = !this.stock.favorite);
>>>>>>> Stashed changes
  }

}
