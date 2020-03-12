import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument  } from '@angular/fire/firestore';
  import 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  items: Observable<any[]>;
  constructor(public afs: AngularFirestore) {
    this.items = afs.collection('productos').valueChanges();

  }
  getProducto(index:string){
    return this.afs.collection(`productos/${ index }.json`);
    console.log(`productos/${ index }.json`)
  }
}
