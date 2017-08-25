import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { BayersComponent } from './components/bayers/bayers.component';
import { ProductsComponent } from './components/products/products.component';
import { LayoutComponent } from './components/layout/layout.component';
import { BuyersService } from './shared/services/buyers.service';


@NgModule({
  declarations: [
    AppComponent,
    BayersComponent,
    ProductsComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [BuyersService],
  bootstrap: [AppComponent]
})
export class AppModule { }



