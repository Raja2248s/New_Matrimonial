import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../services/register.service';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-edu-info',
  templateUrl: './edu-info.component.html',
  styleUrl: './edu-info.component.css'
})
export class EduInfoComponent implements OnInit {
  
  educationLevel: string ='';
  educationFiled: string ='';
  constructor(private http: HttpClient , private router:Router , private registerService : RegisterService , private userDataService : UserDataService){}
  
  public user ={
    educationLevel: '',
    educationFiled: '',
   
  }
   
  formsubmit(){
    const userData = this.userDataService.getUserData();
  userData.education = this.user
  console.log(userData);
   this.registerService.addUser(userData).subscribe(
        (data)=>{
              console.log(data);
              
             
              alert('Registration Sucessfull');
              this.router.navigate(['login'])

        }
        ,
        (error)=>{
          console.log(error);
          alert('Something went wrong');
        }
      )
  

  }

  register(){
    if(this.user.educationFiled ==''){
     alert('Please write educationFiled');
     return ;
    }
    if(this.user.educationLevel==''){
     alert('Please write educationFiled');
     return;
    }
    this.formsubmit();
 }

  ngOnInit(): void {}
}
