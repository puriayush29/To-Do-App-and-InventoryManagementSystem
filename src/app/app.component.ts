import { Component,Input } from '@angular/core';
import {TotalExpenseService} from './total-expense.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My-App3';
  storedPost = [];
  product:string[];
  productbool:boolean=false;
  productNames=[];
  status:boolean = false;
onPostAdded(post:any)
{
this.storedPost.push(post);
}

totalExpense=[];
constructor(public obj:TotalExpenseService)
{
  setTimeout(() => {
    this.status = true;
  },3000)
}
onProductsAdded(product:any)
{
this.productNames.push(product);


}
onDisplay()
{
  this.productbool=true;
  this.totalExpense=this.obj.TotalExpense();
}
}



