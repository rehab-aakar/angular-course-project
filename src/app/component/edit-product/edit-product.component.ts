import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/product.model';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  productId: number;
  productFormGroup?:FormGroup;
  submitted: boolean = false;

  constructor(private actvatedRoute : ActivatedRoute, 
              private productService: ProductService,
              private fb : FormBuilder) {
    this.productId = this.actvatedRoute.snapshot.params.id;
   }

  ngOnInit(): void {
    this.productService.getProduct(this.productId).subscribe(
        product => {
          this.productFormGroup=this.fb.group({
            id:[product.id,Validators.required],
            name :[product.name,Validators.required],
            price:[product.price,Validators.required],
            quantity:[product.quantity,Validators.required],
            selected:[product.selected,Validators.required],
            available :[product.available,Validators.required]
        })

      });
  }

  OnUpdateProduct(){
    this.productService.onUpdate(this.productFormGroup?.value).subscribe(
      data=> {alert("success updating product");}

    );
    console.log(this.productFormGroup?.value)
  }

}
