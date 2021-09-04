import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { EventDriverService } from 'src/app/state/event.driver.service';
import { ActionEvent, ProductActionsTypes } from 'src/app/state/product.state';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product | null= null;
  //@Output() ItemEventEmitter : EventEmitter<ActionEvent> = new EventEmitter();


  constructor(private eventDriverService: EventDriverService) { }

  ngOnInit(): void {
  }

  OnSelect(p : Product){
    //this.ItemEventEmitter.emit({type: ProductActionsTypes.Select_Product,payload:p})
    this.eventDriverService.publishEvent({type: ProductActionsTypes.Select_Product,payload:p})
  }

  OnDelete(p : Product){
    //this.ItemEventEmitter.emit({type: ProductActionsTypes.Delete_Product,payload:p})
    this.eventDriverService.publishEvent({type: ProductActionsTypes.Delete_Product,payload:p})
  }

  OnEdit(p : Product){
    //this.ItemEventEmitter.emit({type: ProductActionsTypes.Edit_Product,payload:p})
    this.eventDriverService.publishEvent({type: ProductActionsTypes.Edit_Product,payload:p})
  }

  OnView(p : Product){
    //this.ItemEventEmitter.emit({type: ProductActionsTypes.View_Product,payload:p})
    this.eventDriverService.publishEvent({type: ProductActionsTypes.View_Product,payload:p})
  }


}
