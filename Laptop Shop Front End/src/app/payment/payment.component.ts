import { HttpClient } from '@angular/common/http';
import { Component, HostListener } from '@angular/core';
import { OrderServiceService } from '../service/orderservice.service';

declare var Razorpay: any;
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  title = 'laptopshop';

  form: any = {}; 
  constructor(private http: HttpClient,
    private orderService:OrderServiceService) {

  }

  ngOnInit() {
    

  }

  sayHello() {
    alert("Hello DK");
  }

  paymentId: string='';
  error: string='';
  
  options = {
    "key": "",
    "amount": "", 
    "name": "Dipali Bharate",
    "description": "",
    "image": "https://www.javachinna.com/wp-content/uploads/2020/02/android-chrome-512x512-1.png",
    "order_id":"",
    "handler": function (response:any){
      var event = new CustomEvent("payment.success", 
        {
          detail: response,
          bubbles: true,
          cancelable: true
        }
      );	  
      window.dispatchEvent(event);
    }
    ,
    "prefill": {
    "name": "",
    "email": "",
    "contact": ""
    },
    "notes": {
    "address": ""
    },
    "theme": {
    "color": "#3399cc"
    }
    };
  
    onSubmit(): void {
      this.paymentId = ''; 
      this.error = ''; 
      this.orderService.createOrder(this.form).subscribe(
      data => {
        this.options.key = data.secretId;
        this.options.order_id = data.razorpayOrderId;
        this.options.amount = data.applicationFee; //paise
        this.options.prefill.name = "Dipali Bharate";
        this.options.prefill.email = "dipabharate2000@gmail.com";
        this.options.prefill.contact ="9970286459";
        
        if(data.pgName ==='razor2') {
          this.options.image="";
          var rzp1 = new Razorpay(this.options);
          rzp1.open();
        } else {
          var rzp2 = new Razorpay(this.options);
          rzp2.open();
        }
       
                
        rzp1.on('payment.failed', function (response:any){    
          // Todo - store this information in the server
          console.log(response);
          console.log(response.error.code);    
          console.log(response.error.description);    
          console.log(response.error.source);    
          console.log(response.error.step);    
          console.log(response.error.reason);    
          console.log(response.error.metadata.order_id);    
          console.log(response.error.metadata.payment_id);
          //this.error = response.error.reason;
        }
        );
      }
      ,
      err => {
        this.error = err.error.message;
      }
      );
    }

    @HostListener('window:payment.success', ['$event']) 
    onPaymentSuccess(event:any): void {
       console.log(event.detail);
    }
}



