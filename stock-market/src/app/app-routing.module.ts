import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateStockComponent } from './stock/create-stock/create-stock.component';
import { StockListComponent } from './stock/stock-list/stock-list.component';
import { LoginComponent } from './stock/login/login.component';
import { RegisterComponent } from './stock/register/register.component';
import { register } from 'module';
import { StockDetailsComponent } from './stock/stock-details/stock-details.component';
import { PostDataComponent } from './stock/post-data/post-data.component';
import { GetDataComponent } from './stock/get-data/get-data.component';

const routes: Routes = [
  {path: '', redirectTo: 'register', pathMatch: 'full'},
  {path: 'stocks/list', component: StockListComponent},
  {path: 'stocks/create', component: CreateStockComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  //{path: '**', redirectTo: '/register'},
  {path: 'stocks/:id', component: StockDetailsComponent},
  {path: 'post', component: PostDataComponent},
  {path: 'get', component: GetDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
