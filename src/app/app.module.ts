import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './home/nav/nav.component';
import { ProductComponent } from './home/product/product.component';
import { CatalogComponent } from './home/catalog/catalog.component';
import { CartComponent } from './home/cart/cart.component';
import { FilterPipe } from './filter.pipe';

//Firebase
import { AngularFireModule } from "@angular/fire";
import { environment } from "../environments/environment";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuth } from "@angular/fire/auth";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavComponent,
    ProductComponent,
    CatalogComponent,
    CartComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
