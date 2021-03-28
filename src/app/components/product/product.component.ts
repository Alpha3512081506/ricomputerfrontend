import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {Product} from "../../modele/Product.modele";
import {Observable, of} from "rxjs";
import {catchError, map, startWith} from "rxjs/operators";
import {AppDataState, DataStateEnum} from "../../state/product.state";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
products$:Observable<AppDataState<Product[]>>|null=null;
readonly DataStateEnum=DataStateEnum;
  seached?: string;
  constructor(private productsService:ProductsService,private router:Router) { }

  ngOnInit(): void {

  }

  onGetAllProduct() {
    this.products$=this.productsService.getAllProducts()
      .pipe(
        map(data=>({DataState:DataStateEnum.LOADED,data:data})
  ),
        startWith({DataState:DataStateEnum.LOADING}),
        catchError(err => of({DataState:DataStateEnum.ERROR,errorMessage:err.message})));
  }

  onGetSelectedProducts() {
    this.products$=this.productsService.getSelectedProducts()
      .pipe(
        map(data=>({DataState:DataStateEnum.LOADED,data:data})
        ),
        startWith({DataState:DataStateEnum.LOADING}),
        catchError(err => of({DataState:DataStateEnum.ERROR,errorMessage:err.message})));

  }

  onGetAvallableProducts() {
    this.products$=this.productsService.getAvallableProducts()
      .pipe(
        map(data=>({DataState:DataStateEnum.LOADED,data:data})
        ),
        startWith({DataState:DataStateEnum.LOADING}),
        catchError(err => of({DataState:DataStateEnum.ERROR,errorMessage:err.message})));

  }

  onSearch(dataForm: any) {
    console.log(this.productsService.searchProducts(dataForm));
    this.products$=this.productsService.searchProducts(dataForm.keyword)
      .pipe(
        map(data=>({DataState:DataStateEnum.LOADED,data:data})
        ),
        startWith({DataState:DataStateEnum.LOADING}),
        catchError(err => of({DataState:DataStateEnum.ERROR,errorMessage:err.message})));



  }

  onGetTest() {
    this.products$=this.productsService.getTestProduct("Mon")
      .pipe(
        map(data=>({DataState:DataStateEnum.LOADED,data:data})
        ),
        startWith({DataState:DataStateEnum.LOADING}),
        catchError(err => of({DataState:DataStateEnum.ERROR,errorMessage:err.message})));



  }


  onDelete(product: Product) {
    let v=confirm("Etes vous sur de bien vouloir supprimer ce produit?")
    if (v==true){
      this.productsService.deleteProduct(product)
        .subscribe(data=>{this.onGetAllProduct()})
    }

  }

  clickfield() {
    console.log("cliqued field")
  }

  onSelected(product: Product) {
    this.productsService.selecteProduct(product)

  }

  onNewProduct() {
  this.router.navigateByUrl("/productadd");
  }
}

