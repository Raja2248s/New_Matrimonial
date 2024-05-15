import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { RegisterService } from 'src/app/services/register.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email : string = '';
  password : string = '';
  emailVerified: boolean = false; 

  constructor(private auth : AuthService,private registerService:RegisterService , private http: HttpClient , private router : Router) { }
  public user = {
    userName:'',
    email:'',
    password:'',
    phoneno:'',
  };
  ngOnInit(): void {
  }
  formSubmit() {
    
    this.registerService.addUser(this.user).subscribe(
      (data)=>{
        console.log(data);
        localStorage.setItem('email', this.user.email);
    
    this.email = '';
    this.password = '';

    // this.emailVerified = true;
        alert('Registration Successful');
        this.router.navigate(['personal_info'])
      },
      (error)=>{
        console.log(error);
        // alert('Something went wrong');
      }
    );
  }
  register() {

    if(this.email == '') {
      alert('Please enter email');
      return;
    }

    if(this.password == '') {
      alert('Please enter password');
      return;
    }
    if (this.user.phoneno == '') {
      alert('Please enter phone number');
      return;
    }
  //   this.http.get<any>(`http://localhost:8080/check-email-verification/${this.email}`).subscribe(
  //   (response) => {
  //     // Response received, check if email is verified
  //     if (response && response.emailVerified) {
  //       console.log("Rsponse: " ,response);
  //       this.emailVerified = true;
  //       this.formSubmit(); // Proceed with registration
  //     } else {
  //       // Email is not verified or response format is incorrect
  //       console.error('Email is not verified or invalid response format.');
  //       alert('Email is not verified. Please verify your email.');
  //     }
  //   },
  //   (error) => {
  //     // Error occurred during HTTP request
  //     console.error(error);
  //     alert('Error occurred while checking email verification status.');
  //   }
  // );
    

  }

  redirectToVerification() {
    window.location.href = 'http://localhost:8080/register';
    // Redirect to the specified URL
  }

}
