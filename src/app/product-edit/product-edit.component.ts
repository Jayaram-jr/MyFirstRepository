import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Product} from '../Models/Product';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  
  currentproduct: any = {
    id:1,productname:"Crackjack",price:20,quantity:20,mfd:new Date(1,2,2022)
  };

  constructor(private _service:ProductService,private route:Router,private activeroute:ActivatedRoute) { }

  ngOnInit(): void {
    let id=this.activeroute.snapshot.params["id"];
    this._service.GetProductById(id);
    console.log(this._service.GetProductById(id));
    this.currentproduct=this._service.GetProductById(id);
  }

  onSubmit(myform:any){
    this.currentproduct=myform.value;
    this._service.UpdateProduct(this.currentproduct);
    console.log(this.currentproduct);
    this.route.navigateByUrl("list");
  }

}
