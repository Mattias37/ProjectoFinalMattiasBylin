import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './home/nav/nav.component';
import { ProductComponent } from './home/product/product.component';
import { CatalogComponent } from './home/catalog/catalog.component';
import { CartComponent } from './home/cart/cart.component';



const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'home', component: HomeComponent, children: [
    {path: '', redirectTo: 'catalogP', pathMatch: 'full'},
    {path: 'catalogP', component: CatalogComponent},
    {path: 'shopping-cart', component: CartComponent},
    {path: 'product/:index', component: ProductComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
