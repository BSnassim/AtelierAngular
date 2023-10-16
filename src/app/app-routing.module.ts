import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { UsersComponent } from './users/users.component';
import { UserslistComponent } from './userslist/userslist.component';
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { MainInvoiceComponent } from './main-invoice/main-invoice.component';
import { InvoiceComponent } from './invoice/invoice.component';

const routes: Routes = [
  { path: 'home', component: HeaderComponent },
  { path: 'users', component: UsersComponent },
  { path: 'listUsers', component: UserslistComponent },
  { path: 'mainInvoice', component: MainInvoiceComponent},
  { path: 'invoice', component: InvoiceComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'fournisseur/:id',component:FournisseurComponent},
  { path: '**', component: NotfoundComponent }
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
