import { Component, OnInit } from '@angular/core';
import { DataService } from "../../data.service";
import { Observable } from 'rxjs';
import 'firebase/firestore';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  products: Observable<any[]>;
  private productsQuantity:any = '';
  constructor( private dataService: DataService) {
    this.products = this.dataService.items;
  }

  ngOnInit() {
  }
  addProductToShoppingCart(product, quantity){

    // Se muestra la cantidad de productos anhadidos sobre el icon del carrito
    this.productsQuantity = document.getElementById('badge').textContent;
    document.getElementById("badge").innerHTML  = String(Number(this.productsQuantity) + 1);



  }

}
