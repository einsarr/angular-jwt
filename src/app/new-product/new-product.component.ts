import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup,Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
import { Product } from '../models/Product.model';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent {
    title = "New Product";

    formulaire!:FormGroup;

    constructor(private fb: FormBuilder,private productService:ProductService,private router:Router){
      this.form();
    }

    ngOnInit(){
      
    }

    form(){
        this.formulaire =  this.fb.group({
          name: ['',Validators.required],
          price:[0,Validators.required],
          checked:[false,Validators.required],
        });
    }

    saveProduct(){
      let product:Product=this.formulaire.value;
      this.productService.saveProduct(product).subscribe({
        next : data =>{
          //alert(JSON.stringify(data));
          this.router.navigateByUrl('/products');
        }, error : err =>{
          console.log(err);
        }
      });
    }
}
