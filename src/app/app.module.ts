import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './home/nav/nav.component';
import { ProductComponent } from './home/product/product.component';
import { CatalogComponent } from './home/catalog/catalog.component';
import { CartComponent } from './home/cart/cart.component';
import { FilterPipe } from './filter.pipe';
import { HomeComponent } from './home/home.component';

//Servicios
import { DataService } from "./data.service";

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
    FilterPipe,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [AngularFireAuth, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
