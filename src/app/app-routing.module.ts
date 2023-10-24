import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { UserModule } from './features/user/user.module';
import { ProductModule } from './features/product/product.module';
import { InvoiceModule } from './features/invoice/invoice.module';
import { FournisseurModule } from './features/fournisseur/fournisseur.module';

const routes: Routes = [
  { path: 'home', component: HeaderComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'user', loadChildren: () => UserModule},
  { path: 'product', loadChildren: () => ProductModule},
  { path: 'invoice', loadChildren: () => InvoiceModule},
  { path: 'fournisseur', loadChildren: () => FournisseurModule},
  { path: '**', component: NotfoundComponent }
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
