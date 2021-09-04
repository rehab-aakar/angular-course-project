import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http'
import { ProductComponent } from './component/product/product.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { HomeComponent } from './component/home/home.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewProductComponent } from './component/new-product/new-product.component';
import { EditProductComponent } from './component/edit-product/edit-product.component';
import { ViewProductComponent } from './component/view-product/view-product.component';
import { ProductNavBarComponent } from './component/product/product-nav-bar/product-nav-bar.component';
import { ProductListComponent } from './component/product/product-list/product-list.component';
import { ProductItemComponent } from './component/product/product-list/product-item/product-item.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    NavBarComponent,
    HomeComponent,
    NewProductComponent,
    EditProductComponent,
    ViewProductComponent,
    ProductNavBarComponent,
    ProductListComponent,
    ProductItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
