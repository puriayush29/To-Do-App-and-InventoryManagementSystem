import { Component, OnInit, Input } from '@angular/core';
import { TotalExpenseService } from 'src/app/total-expense.service';

@Component({
  selector: 'app-inventory-price',
  templateUrl: './inventory-price.component.html',
  styleUrls: ['./inventory-price.component.css']
})
export class InventoryPriceComponent implements OnInit {
   price1:number;
   price2:number;
  @Input() prices=[];
  contentDisplay1:boolean=false;
  constructor(public obj:TotalExpenseService) {
    
   }
  onSavePrice()
  {
    const price = {priceRate1:this.price1,priceRate2:this.price2} 
    this.prices.push(price);
    this.obj.price1 = this.price1;
    // console.log(this.obj.price1);
    this.obj.price2 = this.price2;
    // console.log(this.obj.price2);
    // console.log(this.prices);
    this.contentDisplay1=true;
  }

  ngOnInit() {
  }

}
