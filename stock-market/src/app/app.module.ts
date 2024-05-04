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
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { GetDataComponent } from './stock/get-data/get-data.component';
import { PostDataComponent } from './stock/post-data/post-data.component';
import { MessageService } from './services/message.service';
import { withFetch } from '@angular/common/http';
import { AppRoutesModule } from './app-routes.module';
import { register } from 'module';
import { RegisterComponent } from './stock/register/register.component';
import { StockDetailsComponent } from './stock/stock-details/stock-details.component';
@NgModule({
  declarations: [
    AppComponent,
    StockItemComponent,
    LoginComponent,
    CreateStockComponent,
    StockTrackerComponent,
    CreatStockNativeComponent,
    StockListComponent,
    GetDataComponent,
    PostDataComponent,
    RegisterComponent,
    StockDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutesModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch()),
    StockService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
