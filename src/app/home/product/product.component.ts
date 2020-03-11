import { Component, OnInit } from '@angular/core';
import { DataService } from "../../data.service";
import { Observable } from 'rxjs';
import 'firebase/firestore';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product:any = undefined;
  index:any = undefined;
  constructor(private dataService: DataService,
              private route: ActivatedRoute) {
    route.params.subscribe( parametros => {
      dataService.items( parametros['index'])
      .subscribe( res => {
        this.product = res.json();
      })
    })
   }

  ngOnInit() {
  }

}
