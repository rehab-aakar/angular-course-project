import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProductComponent } from './component/edit-product/edit-product.component';
import { HomeComponent } from './component/home/home.component';
import { NewProductComponent } from './component/new-product/new-product.component';
import { ProductComponent } from './component/product/product.component';
import { ViewProductComponent } from './component/view-product/view-product.component';

const routes: Routes = [
  {path:"products" , component:ProductComponent},
  {path:"add" , component:NewProductComponent},
  {path:"edit/:id" , component:EditProductComponent},
  {path:"view/:id" , component:ViewProductComponent},
  {path:"" , component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
