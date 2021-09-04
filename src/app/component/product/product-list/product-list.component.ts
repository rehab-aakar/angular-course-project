import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product.model';
import { ActionEvent, AppDataState, DataStateEnum, ProductActionsTypes } from 'src/app/state/product.state';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input() productsInput$: Observable<AppDataState<Product[]>>| null=null;
  //@Output() productEventEmitter : EventEmitter<ActionEvent> = new EventEmitter();

  readonly DataStateEnum=DataStateEnum;

  constructor() { }

  ngOnInit(): void {
  }
/*
  OnSelect(p : Product){
    this.productEventEmitter.emit({type: ProductActionsTypes.Select_Product,payload:p})
  }

  OnDelete(p : Product){
    this.productEventEmitter.emit({type: ProductActionsTypes.Delete_Product,payload:p})
  }

  OnEdit(p : Product){
    this.productEventEmitter.emit({type: ProductActionsTypes.Edit_Product,payload:p})
  }

  OnView(p : Product){
    this.productEventEmitter.emit({type: ProductActionsTypes.View_Product,payload:p})
  }

  onActionEvent($event : ActionEvent){
    this.productEventEmitter.emit($event);
  }
  */

}
