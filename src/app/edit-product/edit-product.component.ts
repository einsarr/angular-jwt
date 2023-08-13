import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Product } from '../models/Product.model';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit{
  title="Edit product";
  productId!:number;
  productFormGroup!: FormGroup;

  constructor(private activeRoute : ActivatedRoute,private productService:ProductService,private fb:FormBuilder,private router:Router){}

  ngOnInit(): void {
    this.productId = this.activeRoute.snapshot.params['id'];
    this.productService.getProductById(this.productId).subscribe({
      next : (product)=>{
        this.productFormGroup = this.fb.group({
          id : this.fb.control(product.id),
          name : this.fb.control(product.name),
          price : this.fb.control(product.price),
          checked : this.fb.control(product.checked),
        });
      },error : error=>{
        console.log(error);
      }
    });
  }

  updateProduct(){
    let product: Product = this.productFormGroup.value;

    this.productService.updateProduct(product).subscribe({
      next : data=>{
        this.router.navigateByUrl('/admin/products');
      }
    });
  }
}
