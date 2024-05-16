import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { RegisterService } from '../services/register.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email : string = '';
  password : string = '';

  constructor(private auth : AuthService, private registerService : RegisterService , private router : Router) { }
  public user = {
   
    email:'',
    password:'',
  };
  ngOnInit(): void {
  }

  formsubmit(){
    this.registerService.log(this.user.email).subscribe(
      ()=>{
    
            
           
            alert('login Sucessfull');
            this.router.navigate(['dashboard'])

      }
      ,
      (error)=>{
        console.log(error);
        alert('Something went wrong');
      }
    )

  }

  login() {

    if(this.email == '') {
      alert('Please enter email');
      return;
    }

    if(this.password == '') {
      alert('Please enter password');
      return;
    }

    
    
    this.email = '';
    this.password = '';

  }

  
 
}
