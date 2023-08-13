import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Observable } from 'rxjs/internal/Observable';
import { Product } from '../models/Product.model';
import { Router } from '@angular/router';
import { filter } from 'rxjs';
import { AppStateService } from '../services/app-state.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  title="List of products";
  products$! :Observable<Array<Product>>;
  constructor(private productSerice:ProductService,private router:Router, public appState:AppStateService){}
  ngOnInit() {
    this.getProducts();
  }

  getProducts(){
      this.products$=this.productSerice.getProducts();
  }

  handleCheckProduct(product:Product){
      this.productSerice.checkProduct(product).subscribe({
        next : updateProduct =>{
          product.checked=!product.checked
        }
      })
  }

  handleDelete(product:Product){
    if(confirm("Do you sure to delete ?"))
      this.productSerice.deleteProduct(product).subscribe({
        next:value =>{
          this.getProducts();
          //this.products$.pipe(filter(p=>p.id==product.id))
        }
      });
  }

  handleEdit(product:Product){
    this.router.navigateByUrl('/admin/editproduct/'+product.id);
  }
}
