import { Component, OnInit } from '@angular/core';
import { StockTracker } from '../../model/stock-tracker';

@Component({
  selector: 'app-stock-tracker',
  templateUrl: './stock-tracker.component.html',
  styleUrl: './stock-tracker.component.css'
})
export class StockTrackerComponent implements OnInit{

  stocks: StockTracker[] = [];
  favoriteStocks: StockTracker[] = [];
  
  constructor() { }

  ngOnInit() {
    this.stocks = [
      {favorite: false, code: 'AAPL', price: 109.68, ratioChange: 0.19, ratio: 0.17},
      {favorite: false, code: 'GOOG', price: 747.32, ratioChange: -0.60, ratio: -0.08},
      {favorite: false, code: 'FB', price: 115.31, ratioChange: 0.21, ratio: 0.18},
      {favorite: false, code: 'AMZN', price: 739.00, ratioChange: -4.65, ratio: -0.63},
      {favorite: false, code: 'TWTR', price: 17.98, ratioChange: -0.05, ratio: -0.28},
    ]
  }

  // toggleFavorite(event: any){
  //   console.log('We are toggling the favorite state for this stock', event);
  //   this.stocks.favorite = !this.stock.favorite;
  // }

  addToFavorite(stock: StockTracker) {
    stock.favorite = true;
    this.favoriteStocks.push(stock);
    
  }

  removeFromFavorite(stock: StockTracker) {
    stock.favorite = false;
    const selector = `button[data-stock-symbol="${stock.code}"]`;
    const buttonElement = document.querySelector(selector) as HTMLButtonElement;
    if (buttonElement) {
      buttonElement.disabled = true;
    }
    this.favoriteStocks = this.favoriteStocks.filter(s => s != stock);
  }

}
