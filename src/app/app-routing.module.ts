import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { HomeComponent } from "./components/home/home.component";
import { CategoryComponent } from './components/category/category.component';
import { LocalisationComponent } from './components/localisation/localisation.component';
import { IncomeComponent } from './components/income/income.component';
import { AddProductComponent } from "./components/product/add-product/add-product.component";
import { AddLocationComponent } from './components/localisation/add-location/add-location.component';
import { AddCategoryComponent } from './components/category/add-category/add-category.component';

const routes: Routes = [
  //ROUTES LIST
  { path: 'productlist', component: ProductComponent },
  { path: '', component: HomeComponent },
  { path: 'categorieslist', component: CategoryComponent },
  { path: 'locationslist', component: LocalisationComponent },
  { path: 'speselist', component: IncomeComponent },
  { path: 'productadd', component: AddProductComponent },
  { path: 'locationadd', component: AddLocationComponent },
  { path: 'categoryadd', component: AddCategoryComponent }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
