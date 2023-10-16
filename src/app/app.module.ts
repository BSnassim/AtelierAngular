import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import { ListFournisseurComponent } from './list-fournisseur/list-fournisseur.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { MyDirectiveDirective } from './directives/my-directive.directive';
import { UserslistComponent } from './userslist/userslist.component';
import { UsersComponent } from './users/users.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductComponent } from './product/product.component';
import { FormsModule } from '@angular/forms';
import { MainInvoiceComponent } from './main-invoice/main-invoice.component';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { InvoiceComponent } from './invoice/invoice.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    FournisseurComponent,
    ListFournisseurComponent,
    NavbarComponent,
    HeaderComponent,
    UsersComponent,
    UserslistComponent,
    MyDirectiveDirective,
    NotfoundComponent,
    MainInvoiceComponent,
    InvoiceListComponent,
    InvoiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
