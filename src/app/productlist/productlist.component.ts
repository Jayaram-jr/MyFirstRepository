import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../Models/Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  plist:Product[]=[];
  constructor(private _service:ProductService,private route:Router) { }

  ngOnInit(): void {
    this.plist=this._service.GetProducts();
  }

  deleteProduct(id:any){
    if(confirm("Are you sure?")){
      this._service.RemoveProduct(id);
      alert('Product Deleted');
      this._service.GetProducts();
    }
  }



}
