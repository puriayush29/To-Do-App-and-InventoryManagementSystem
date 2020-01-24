import { Component, OnInit,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-inventory-product',
  templateUrl: './inventory-product.component.html',
  styleUrls: ['./inventory-product.component.css']
})
export class InventoryProductComponent implements OnInit {
  productName:string;
  productName1:string;
  @Output() products = new EventEmitter();
  contentDisplay:boolean=false;
  constructor() { }
  onSaveProduct()
  {
const product = {product1:this.productName,product2:this.productName1};
this.products.emit(product);
this.contentDisplay=true;
  }
  ngOnInit() {
  }

}
