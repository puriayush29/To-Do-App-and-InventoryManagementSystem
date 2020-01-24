import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TotalExpenseService {
  totalExpense:number;
  price1;
  price2;
  prices=[];
  constructor() {

   }
   TotalExpense()
   {
     this.totalExpense = parseInt(this.price1) + parseInt(this.price2);
     this.prices.push(this.totalExpense);
     return this.prices;
     
   }
}

