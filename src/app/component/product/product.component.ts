import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from 'src/app/model/product.model';
import { ProductService } from 'src/app/service/product.service';
import {catchError ,map , startWith} from 'rxjs/operators';
import { AppDataState, DataStateEnum } from 'src/app/state/product.state';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
  
  //public products?: Product[] ;
  products$: Observable<AppDataState<Product[]>>| null=null;
  readonly DataStateEnum=DataStateEnum;

  constructor(private ProductService: ProductService,private router:Router) { }


  GetAllProducts(){ 
    this.products$=this.ProductService.getAllProducts()
    .pipe(
      map((data)=> ({dataState : DataStateEnum.LOADED , data: data})),
      startWith({dataState : DataStateEnum.LOADING}),
      catchError(err=> of({dataState : DataStateEnum.ERROR, errorMessage: err.message}))   
    )

  }

  GetSelectedProducts(){ 
    this.products$=this.ProductService.getSelectedProducts()
    .pipe(
      map((data)=> ({dataState : DataStateEnum.LOADED , data: data})),
      startWith({dataState : DataStateEnum.LOADING}),
      catchError(err=> of({dataState : DataStateEnum.ERROR, errorMessage: err.message}))   
    )

  }

  GetAvailableProducts(){ 
    this.products$=this.ProductService.getAvailableProducts()
    .pipe(
      map((data)=> ({dataState : DataStateEnum.LOADED , data: data})),
      startWith({dataState : DataStateEnum.LOADING}),
      catchError(err=> of({dataState : DataStateEnum.ERROR, errorMessage: err.message}))   
    )

  }

  GetProductsByName(dataForm : any){
    this.products$=this.ProductService.getProductsByName(dataForm.keyword)
    .pipe(
      map((data)=> ({dataState : DataStateEnum.LOADED , data: data})),
      startWith({dataState : DataStateEnum.LOADING}),
      catchError(err=> of({dataState : DataStateEnum.ERROR, errorMessage: err.message}))   
    )
  }

  OnSelect(p : Product){
    this.ProductService.onSelect(p)
    .subscribe(
      data=> {
        p.selected=data.selected;
      })
  }

  OnDelete(p : Product){
    let c=confirm("Are you sure you want to do that?");
    if(c==true)
    this.ProductService.onDelete(p)
    .subscribe(
      data=> {
        this.GetAllProducts();
      })
  }

  AddProduct(){
    this.router.navigateByUrl("/add");
  }

  OnEdit(p : Product){
    this.router.navigateByUrl("/edit/"+p.id);
  }

  OnView(p : Product){
    this.router.navigateByUrl("/view/"+p.id);
  }

  


  ngOnInit(): void {
  }

}
