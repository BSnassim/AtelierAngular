import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoiceRoutingModule } from './invoice-routing.module';
import { InvoiceComponent } from './invoice/invoice.component';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { MainInvoiceComponent } from './main-invoice/main-invoice.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [InvoiceComponent, InvoiceListComponent, MainInvoiceComponent],
  imports: [
    CommonModule,
    InvoiceRoutingModule,
    FormsModule
  ]
})
export class InvoiceModule { }
