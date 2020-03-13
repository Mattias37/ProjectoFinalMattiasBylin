import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument  } from '@angular/fire/firestore';
  import 'firebase/firestore';
  import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  items: Observable<any[]>;
  shoppingCartArray:any = []
  shoppingCartTotal:number = 0;
  constructor(public afs: AngularFirestore, public router:Router) {
    this.items = afs.collection('productos').valueChanges();

  }
  getProducto(index:string){
    return this.afs.collection(`productos/${ index }.json`);
    console.log(`productos/${ index }.json`)
  }
  addProductToShoppingCart( product:any ){
    this.shoppingCartTotal = this.shoppingCartTotal + product.subtotal;
    this.shoppingCartArray.push(product);
    console.log(this.shoppingCartArray);
  }
  getShoppingCart(){
    return this.shoppingCartArray;
  }
  updateProductsStock(shoppingCartJSON){
    for(let i=0; i<shoppingCartJSON.length; i++){
      let id = shoppingCartJSON[i].product.Nombre;
      let stock = shoppingCartJSON[i].product.Disponibilidad - shoppingCartJSON[i].quantity;

      console.log(id);
      console.log(stock);
      this.afs.collection(`productos`).doc(id).update({Disponibilidad: stock}).then(()=>console.log("Exito"));
          this.shoppingCartArray = [];
          this.shoppingCartTotal = 0;
          document.getElementById("badge").innerHTML  = '';
          this.router.navigate(['/home/catalogP']);

    }
  }
}
