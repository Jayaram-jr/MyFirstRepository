import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  constructor(private _service:ProductService,private route:Router) { }

  ngOnInit(): void {
  }
  onSubmit(myform:any){
    this._service.AddProduct(myform.value);
    console.log(myform.value);
    this.route.navigateByUrl('list');
  }
}
