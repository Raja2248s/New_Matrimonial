import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../services/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css'
})
export class ResetPasswordComponent  implements OnInit {

  email : string = '';
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


 constructor( private registerService : RegisterService , private router : Router){}

public user = {

  email:'',
};

forgotPassword() {
    
  this.registerService.log(this.user.email).subscribe(
    (data)=>{
      alert("Reset password link has beeen send successfully");
      console.log(data);

      this.router.navigate([''])
    }
  )
}
}