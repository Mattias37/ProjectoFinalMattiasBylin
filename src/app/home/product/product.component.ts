import { Component, OnInit } from '@angular/core';
import { DataService } from "../../data.service";
import 'firebase/firestore';
import { ActivatedRoute } from "@angular/router";
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Observable<any[]>;
  searchf = String;
  constructor(private dataService: DataService,
              private route: ActivatedRoute) {
      this.products = this.dataService.items;
      this.route.params.subscribe( params => this.searchf = params.index);
   }

  ngOnInit() {
  }

}
