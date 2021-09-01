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
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    NavBarComponent,
    HomeComponent,
    NewProductComponent,
    EditProductComponent,
    ViewProductComponent
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
