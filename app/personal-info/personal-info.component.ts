import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../services/register.service';
import { Registration } from '../interfaces/auth';
import { error } from 'console';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrl: './personal-info.component.css'
})
export class PersonalInfoComponent implements OnInit {

  age: number=0;
  bloodGroup: string='';
  photo: string = '';
  
  public user ={
    bloodGroup:'',
    age:0,
    photo:null,
    registration:{
      userName:'',
      email:'',
      password:'',
      phoneno:'',
    }
  }
   
  constructor(private http: HttpClient , private router:Router , private registerService : RegisterService){}
ngOnInit(): void {
  const storedmail= localStorage.getItem('email');
  if (storedmail !== null) {
  this.registerService.findregister(storedmail).subscribe(
    (data:any) => {
      this.user.registration=data;

      console.log()
    }
    // (error) => {
    //   console.log(error);
    //   alert('Error occurred while finding registration');
    // }
  );
}


}
formSubmit() {
      this.registerService.addPersonal(this.user).subscribe(
        (data)=>{
              console.log(data);
              alert('Registration sucessfull');
        }
        ,
        (error)=>{
          console.log(error);
          alert('Something went wrong');
        }
      )
  }

  register(){
     if(this.bloodGroup ==''){
      alert('Please enter blood group');
      return ;
     }
     if(this.age<=18){
      alert('You are not eligible');
      return;
     }
  }
  onFileSelected(event: any) {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      this.photo =URL.createObjectURL(file) ;
    }
  }
  

}
