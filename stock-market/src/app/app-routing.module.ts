import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateStockComponent } from './stock/create-stock/create-stock.component';
import { StockListComponent } from './stock/stock-list/stock-list.component';

const routes: Routes = [
  {path: '', redirectTo: '/stock-list', pathMatch: 'full'},
  {path: 'stock-list', component: StockListComponent},
  {path: 'create-stock', component: CreateStockComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
