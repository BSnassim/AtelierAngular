import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product/product.component';
import { FormsModule } from '@angular/forms';
import { AddProductTDComponent } from './add-product-td/add-product-td.component';


@NgModule({
  declarations: [ProductComponent, AddProductTDComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule
  ]
})
export class ProductModule { }
