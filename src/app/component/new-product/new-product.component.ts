import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  productFormGroup = new FormGroup({});
  submitted : boolean = false;
  
  constructor( private fb : FormBuilder , private ProductService: ProductService) { }

  ngOnInit(): void {
    this.productFormGroup= this.fb.group({
      name :["",Validators.required],
      price :[0,Validators.required],
      quantity :[0,Validators.required],
      selected :[true,Validators.required],
      available :[true,Validators.required]

    });
  }

  SaveProduct(){
    this.submitted=true;
    if(this.productFormGroup.invalid) return ;
    this.ProductService.onSave(this.productFormGroup?.value).subscribe(
      data=> alert("success saving product")
    ); 
    
  }

}
