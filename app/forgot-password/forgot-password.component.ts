import { RegisterService } from './../services/register.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  email : string = '';

  constructor(private auth : AuthService , private registerService : RegisterService , private router : Router) {  }

  ngOnInit(): void {
  }

  public user = {

    email:'',
  }

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
