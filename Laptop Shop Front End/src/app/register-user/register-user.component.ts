
import { RegisterService } from '../register.service';
import { User } from '../user';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit{
  user:User=new User();

  constructor(private registerService:RegisterService){ }

  ngOnInit():void{
  }

  userRegister(){
    console.log(this.user);
    this.registerService.registerUser(this.user).subscribe(data=>
      {
        alert("user registration is successful")
      },
      error=>alert("sorry user is not registered"));
      
  }

}



