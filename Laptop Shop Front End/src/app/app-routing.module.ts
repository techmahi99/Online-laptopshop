import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HeaderComponent } from './header/header.component';
import { PaymentComponent } from './payment/payment.component';
import { ProductComponent } from './product/product.component';
import { RegisterUserComponent } from './register-user/register-user.component';

const routes: Routes = [
  {path:'register-user',component:RegisterUserComponent},
  {path:'',redirectTo:'header',pathMatch:'full'},

  {path:'product',component:ProductComponent},
  {path:'cart',component:CartComponent},
  {path: 'checkout',component:CheckoutComponent},
  {path:'payment',component:PaymentComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
