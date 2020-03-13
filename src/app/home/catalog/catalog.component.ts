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
  private productJSON:any;
  private subtotal:number;
  private stock:number;
  constructor( private dataService: DataService) {
    this.products = this.dataService.items;
  }

  ngOnInit() {
  }
  addProductToShoppingCart(product, quantity){

    // Se muestra la cantidad de productos anhadidos sobre el icon del carrito
    this.productsQuantity = document.getElementById('badge').textContent;
    document.getElementById("badge").innerHTML  = String(Number(this.productsQuantity) + 1);

    // se envia al servicio los productos anhadidos, se calcula subtotal
    this.subtotal = product.Precio * quantity;
    this.stock = product.Disponibilidad - quantity;
    document.getElementById("unidadDisponible-"+product.index).innerHTML = String(Number(this.stock));

    this.productJSON = {
      product : product,
      quantity : quantity,
      subtotal : this.subtotal
    }
    console.log(this.productJSON);
    this.dataService.addProductToShoppingCart(this.productJSON);

  }

}
