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
import { RegisterComponent } from './stock/register/register.component';
import { StockDetailsComponent } from './stock/stock-details/stock-details.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

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
    AppRoutesModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatListModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch()),
    StockService,
    MessageService,
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

