import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Product} from "../modele/Product.modele";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
 //private let host = environment.host;
  constructor(private http:HttpClient) { }

getAllProducts():Observable<Product[]> {
    return this.http.get<Product[]>(environment.host+"product");
  }
  getSelectedProducts():Observable<Product[]>
  {
    return this.http.get<Product[]>(environment.host+"product?selected=true");
  }
  getAvallableProducts():Observable<Product[]>
{
  return this.http.get<Product[]>(environment.host+"product?avallable=true")
}
  searchProducts(keyword:string):Observable<Product[]>
  {
    return this.http.get<Product[]>(environment.host+"product?name_like=keyword")
  }

  getTestProduct(word:string) {
    return this.http.get<Product[]>(environment.host+"product?name_like=word")
  }

  deleteProduct(product:Product):Observable<void> {
    //product.selected =!product.selected
    return this.http.delete<void>(environment.host+"product/"+product.id);
  }

  selecteProduct(product: Product):Observable<void> {
    product.selected=!product.selected
    return  this.http.get<void>(environment.host+"product?selected=product")

  }
}



