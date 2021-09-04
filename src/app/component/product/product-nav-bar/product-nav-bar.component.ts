import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivationStart } from '@angular/router';
import { EventDriverService } from 'src/app/state/event.driver.service';
import { ActionEvent, ProductActionsTypes } from 'src/app/state/product.state';

@Component({
  selector: 'app-product-nav-bar',
  templateUrl: './product-nav-bar.component.html',
  styleUrls: ['./product-nav-bar.component.css']
})
export class ProductNavBarComponent implements OnInit {

  //@Output() productEventEmitter : EventEmitter<ActionEvent> = new EventEmitter();
  constructor( private eventDriverService : EventDriverService) { }

  GetAllProducts(){ 
    //this.productEventEmitter.emit({type:ProductActionsTypes.Get_All_Products});
    this.eventDriverService.publishEvent({type:ProductActionsTypes.Get_All_Products});
  }
  GetSelectedProducts(){ 
    //this.productEventEmitter.emit({type:ProductActionsTypes.Get_Selected_Products});
    this.eventDriverService.publishEvent({type:ProductActionsTypes.Get_Selected_Products});
  }

  GetAvailableProducts(){ 
    //this.productEventEmitter.emit({type:ProductActionsTypes.Get_Available_Products});
    this.eventDriverService.publishEvent({type:ProductActionsTypes.Get_Available_Products});
  }

  AddProduct(){
    //this.productEventEmitter.emit({type:ProductActionsTypes.Add_Product});
    this.eventDriverService.publishEvent({type:ProductActionsTypes.Add_Product});
  }

  GetProductsByName(dataForm : any){
    //this.productEventEmitter.emit({type:ProductActionsTypes.Search_Products,payload: dataForm});
    this.eventDriverService.publishEvent({type:ProductActionsTypes.Search_Products,payload: dataForm});
  }

  ngOnInit(): void {
  }

}
