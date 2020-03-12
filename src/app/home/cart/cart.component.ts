import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  shoppingCartJSON:any;
  constructor( private dataService: DataService) {
    //Se obtienen los productos que fueron agregados al carrito
    this.shoppingCartJSON = this.dataService.getShoppingCart();
  }

  ngOnInit() {
  }
  //Se invoca al servicio para la actualizacion stock de los productos
  updateProductsStock(){
    this.dataService.updateProductsStock(this.shoppingCartJSON);
    
  }

}
