import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StockItemComponent } from './stock/stock-item/stock-item.component';
import { LoginComponent } from './stock/login/login.component';
import { CreateStockComponent } from './stock/create-stock/create-stock.component';
import { StockTrackerComponent } from './stock/stock-tracker/stock-tracker.component';
import { CreatStockNativeComponent } from './stock/creat-stock-native/creat-stock-native.component';
import { StockListComponent } from './stock/stock-list/stock-list.component';
import { StockService } from './services/stock.service';
<<<<<<< Updated upstream

=======
import { HttpClientModule } from '@angular/common/http';
import { GetDataComponent } from './stock/get-data/get-data.component';
import { PostDataComponent } from './stock/post-data/post-data.component';
>>>>>>> Stashed changes

@NgModule({
  declarations: [
    AppComponent,
    StockItemComponent,
    LoginComponent,
    CreateStockComponent,
    StockTrackerComponent,
    CreatStockNativeComponent,
<<<<<<< Updated upstream
    StockListComponent
=======
    StockListComponent,
    GetDataComponent,
    PostDataComponent
>>>>>>> Stashed changes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
<<<<<<< Updated upstream
    ReactiveFormsModule
=======
    ReactiveFormsModule,
    HttpClientModule
>>>>>>> Stashed changes
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }