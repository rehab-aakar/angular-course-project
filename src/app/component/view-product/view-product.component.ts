import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product.model';
import { ProductService } from 'src/app/service/product.service';
import { AppDataState } from 'src/app/state/product.state';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  productId: number;
  product$: Observable<Product>| null=null;
  constructor(private actvatedRoute:ActivatedRoute,private ProductService: ProductService) { 
    this.productId = this.actvatedRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.product$=this.ProductService.getProduct(this.productId)
  }

}
