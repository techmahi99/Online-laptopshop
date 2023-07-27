import { Component, OnInit } from '@angular/core';
import { CheckoutService } from '../checkout.service';
import { CartService } from '../service/cart.service';
import { Check } from '../check';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
 check:Check = new Check();
  constructor(private checkoutService:CheckoutService){ }
  
  ngOnInit(): void {
   
    }

    
  buyNow(){
    console.log(this.check);
    this.checkoutService.Checkout(this.check).subscribe(data=>
      {
        alert("order product successful")
      },
      error=>alert("sorry order is not placed"));
  }
  

}