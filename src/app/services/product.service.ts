import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Product } from '../models/Product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl:string = "http://localhost:8089";

  constructor(private http:HttpClient) { }

  public getProducts():Observable<Array<Product>>{
      return this.http.get<Array<Product>>(this.baseUrl+"/products");
  }

  public checkProduct(product:Product):Observable<Product>{
    return this.http.patch<Product>(this.baseUrl+"/products/"+product.id,{checked:!product.checked});
  }

  public deleteProduct(product:Product){
    return this.http.delete<Product>(this.baseUrl+"/products/"+product.id);
  }

  saveProduct(product:Product){
    return this.http.post<Product>(this.baseUrl+"/products",product);
  }

  getProductById(productId: number){
    return this.http.get<Product>(this.baseUrl+"/products/"+productId);
  }

  updateProduct(product:Product){
    return this.http.put<Product>(this.baseUrl+"/products/"+product.id,product);
  }
}
