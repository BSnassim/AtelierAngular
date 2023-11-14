import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { AddProductTDComponent } from './add-product-td/add-product-td.component';

const routes: Routes = [
  { path: 'product', component: ProductComponent},
  { path: 'add', component:AddProductTDComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
